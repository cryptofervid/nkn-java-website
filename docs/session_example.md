---
sidebar_position: 1
---

# Session Establishment and Data Exchange

This example walks through the following scenarios:

* Create Client(s)
* Wait for Session request
* Dial Session
* Send/ Recieve data after session establishment
* Teardown the clients

## Setup Client(s)

Create clients and configure them.

```java
final Identity identityA = new Identity("Client A", Wallet.createNew());
final Identity identityB = new Identity("Client B", Wallet.createNew());

final NKNClient clientA = new NKNClient(identityA);
try {
    clientA.start();
} catch (NKNClientException e) {
    LOG.error("Client failed to start:", e);
    return;
}

final NKNClient clientB = new NKNClient(identityB);
clientB.sessionProtocol().setIncomingPreferredMulticlients(2);
try {
        clientB.start();
} catch (NKNClientException e) {
    LOG.error("Client failed to start", e);
    return;
}

System.out.println("Started!");
Thread.sleep(500);
```

## Wait for Session Establishment and Post Process

Wait for session request and once session is established post process the incoming data in a separate daemon thread.

```java
try {
    clientB.sessionProtocol().onSessionRequest(sB -> {
        sB.onSessionEstablished(() -> {
            Thread t = new Thread(() -> {
                InputStream bIs = sB.getInputStream();
                try {

                    byte[] buffer = new byte[1024 * 1024];
                    int redtotal = 0;
                    int red = bIs.read(buffer);
                    int lastMb = 0;
                    long thisTime, lastTime = System.currentTimeMillis();
                    while (red != -1) {
                        if (red > 0) {
                            redtotal += red;
                            if (redtotal / 1024 / 1024 > lastMb) {
                                lastMb = redtotal / 1024 / 1024;
                                thisTime = System.currentTimeMillis();
                                // +1 to avoid division by zero, in case there is more than buffer.length data to be read
                                System.out.println("Streamed to me: " + lastMb + " MB (" + (1024 * 1000 / (thisTime - lastTime + 1)) + "kB/s)");
                                lastTime = thisTime;
                            }
                        } else {
                            Thread.sleep(500);
                        }
                        red = bIs.read(buffer);
                    }

                    LOG.info("All data has been received, session closed");

                } catch (IOException | InterruptedException e) {
                    LOG.error("IOException thrown when sending data");
                }
            }, "SessionExample-InputStreamThread");
            t.setDaemon(true);
            t.start();
        });
        sB.onSessionBrokenTunnel(() -> {
            LOG.warn("Session tunnel broke");
        });
        return true;
    });
```

### Dial Session and Send Data

Dial a session to the other client and start sending data once the session has been established.

```java
Session sA = clientA.sessionProtocol().dialSession(identityB.getFullIdentifier());
LOG.info("Session dialed");

sA.onSessionEstablished(() -> {
    Thread t = new Thread(() -> {
        SessionOutputStream aOs = sA.getOutputStream();
        try {
            int sendData = 1024 * 1024 * 10; // 10M
            byte[] buffer = new byte[1024 * 1024];
            while (sendData > 0) {
                aOs.write(buffer);
                sendData -= buffer.length;
                System.out.println("Remaining to send " + sendData + " B");
            }

            aOs.flush();
            LOG.debug("Flushing some data, session A -> session B");

            // Wait until the other side acknowledges receiving everything TODO or timeout
            while (aOs.getUnconfirmedSentBytesCount() > 0) {
                try {
                    Thread.sleep(300);
                } catch (InterruptedException ignored) {}
            }

            LOG.info("Everything was sent and read, closing");

            sA.close();

        } catch (IOException e) {
            LOG.error("IOException thrown when sending data");
        }

    }, "SessionExample-OutputStreamThread");
    t.setDaemon(true);
    t.start();
});
sA.onSessionBrokenTunnel(() -> {
    LOG.warn("Session tunnel broke");
});

} catch (NKNClientException e) {
LOG.error("Session dial failed");
}

```

### Close the clients

Close the clients once the data has been transferred.

```java
Thread.sleep(150_000);

System.out.println("150s passed, closing clients!");
clientA.close();
clientB.close();
```
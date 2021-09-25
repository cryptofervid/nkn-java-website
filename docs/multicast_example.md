---
sidebar_position: 1
---

# Multicast Message Exchange

This example walks through the following scenarios:

* Create Client(s)
* Send multicast message
* Wait for and process Ack(s)
* Teardown the clients

## Create client(s)

Create one message producing client and 3 message consuming clients.

```java
final Identity identitySender = new Identity("Sender", Wallet.createNew());
final Identity identityA = new Identity("A", Wallet.createNew());
final Identity identityB = new Identity("B", Wallet.createNew());
final Identity identityC = new Identity("C", Wallet.createNew());

LOG.info("Initializing clients");

final NKNClient clientSender = new NKNClient(identitySender);
clientSender.simpleMessagesProtocol()
        .onNewMessage(receivedMessage -> {
            if (receivedMessage.isText) {
                System.out.println("Sender: New text from " + receivedMessage.from + "\n  ==> " + receivedMessage.textData);
            } else if (receivedMessage.isBinary) {
                System.out.println("Sender: New binary from " + receivedMessage.from + "\n  ==> 0x" + Hex.toHexString(receivedMessage.binaryData.toByteArray()).toUpperCase());
            }
        });
clientSender.start();

// These will just reply with ACK
final NKNClient clientA = new NKNClient(identityA).start();
final NKNClient clientB = new NKNClient(identityB).start();
final NKNClient clientC = new NKNClient(identityC).start();

LOG.info("All clients ready, broadcasting");

```

### Send multicast message

Send a multicast message to all the client addresses.

```java
final List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = clientSender.simpleMessagesProtocol().sendTextMulticastAsync(new String[] {
        identityA.getFullIdentifier(),
        identityB.getFullIdentifier(),
        identityC.getFullIdentifier()
}, "Hello!");
```

### Process Responses

Process the incoming Acks from the clients.

```java
promises.forEach(p -> p.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("Response from " + response.from);
        System.out.println("  ==> " + (response.isAck ? "[ACK]" : response.isText ? response.textData : ("0x" + Hex.toHexString(response.binaryData.toByteArray()).toUpperCase())));
    } else {
        System.out.println("Error: " + error.toString());
    }
}));
```

### Close client(s)

Close the clients once the communication is complete

```java
Thread.sleep(7_000);

LOG.info("Closing all clients");

clientSender.close();
clientA.close();
clientB.close();
clientC.close();
```
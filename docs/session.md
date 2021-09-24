---
sidebar_position: 1
---

# Session

Session sets up a tunnel between two NKN clients and transmits data between them. Sessions provide features to handle congesion, dropped packets, packet ordering, retry, buffering etc. The following methods are available on the Session API

:::note

The code examples in this document assume that we have a session object. In a duplex communication channel one entity behaves as a server and waits for session entablishment while the other take up the role of a client and sends session establishment request to the server. 

* To get the session object on the entity playing the role of server:

```java
NKNClient nknClient = new NKNClient(new Identity("server", Wallet.createNew()));
nknClient.start();

SessionProtocol sessionProtocol = nknClient.sessionProtocol();
sessionProtocol.onSessionRequest( session -> {

    //We have the server side session object here.

    return true;
});
```

* To get the session object on the entity playing the role of client:

```java
NKNClient nknClient = new NKNClient(new Identity("server", Wallet.createNew()));
nknClient.start();

Session session = client.sessionProtocol().dialSession(targetFullIdentifier);
```

:::

### On Session Established Callback

This callback provides the user with a mechanism to handle the incoming session requests and perform some operation e.g. send or receive data. This method accepts a runnable that would be called once the session is established.

```java
class SessionEstablishedCallback implements Runnable {

    @Override
    public void run() {
        // Do the processing post session establishment    
    }
}

session.onSessionEstablished(new SessionEstablishedCallback() );
```

### On Session Broken Tunnel Callback

This callback is called if the session tunnecl break sdue to some unexpected reasons.

```java
class SessionBrokenTunnelCallback implements Runnable {

    @Override
    public void run() {
        // Do the processing post session establishment    
    }
}

session.onSessionBrokenTunnel(new SessionBrokenTunnelCallback() );
```

### Get Input Stream

Get the input stream corresponding to the session object.

```java
final SessionInputStream sessionInputStream = session.getInputStream();
```

### Get Output Stream

Get the output stream corresponding to the session object.

```java
final SessionOutputStream sessionOutputStream = session.getOutputStream();
```

:::info
Session input and output streams provide standard java stream functionality. Additionally they provide a method `getUnconfirmedSentBytesCount()` to find the number of bytes written to the send queue but not acknowledged as recieved. This can be due to multiple reasons
* Slow Network Connection
* Overloaded Buffers
* Missed / Dropped ACK packets
:::

### Close

Close the session.

```java
session.close();
```

## Session Configuration 

Session API provides methods to configure session parameters. The following parameters can be configured

### Number of multiclients used

Set the number of multiclients to be used

```java
client.sessionProtocol().setIncomingPreferredMulticlients(8);
```

:::note
Default number of multiclients is 4.
:::

### Preferred MTU

Set the preferred MTU for the session

```java
client.sessionProtocol().setIncomingPreferredMtu(512);
```

:::note
Default value of MTU is 1024.
:::

### Preferred Window Size

Set the preferred window size for the session

```java
client.sessionProtocol().setIncomingPreferredWinSize(8 * 1024 * 1024);
```

:::note
Default value of window size is 4 KB
:::

:::info

The above examples show how to set these session paramters on the server side of the session. For the client side use the overriden method while creating the session. The overriden method accepts these prameters as arguments.

```java
client.sessionProtocol().dialSession(String destinationFullIdentifier, int multiclients, String[] targetPrefixes, int maxMtu, int maxWindowSize)
```

targetPrefixes is a String array such as `__0__`, `__1__` which are the prefixes of multiclient on which the server side is listening. Default are `__${i}__` for i in range 0 to multiclient count. To use default values pass this parameter as null. Listening side listens for a connection on empty prefix as well, but that prefix will not be used for actual communication.

:::
---
sidebar_position: 1
---

# Messages

Message functionality is wrapped in the `SimpleMessagesProtocol` object. It provides methods to send and receive messages of different types. It also provides overrides for their `Multicast` couterparts. Last but not the least, there are methods available to `Publish` messages on topics and send them to all subscribers.

The following types of messages are supported:

* Text
* Binary
    * Byte Array
    * ByteString (protobuf)
* Object
* Ack

## Receiving Messages

The following options are available for receiving messages

### Message Listener

Set a message listener which accepts a consumer which is called when a new message is received.

```java
client.simpleMessagesProtocol().onNewMessage(receivedMessage -> {
    if (receivedMessage.isText) {
        System.out.println("New text message from " + receivedMessage.from);
        System.out.println(receivedMessage.textData);
    } else if (receivedMessage.isBinary) {
        System.out.println("New binary message from " + receivedMessage.from);
        System.out.println(Hex.toHexString(receivedMessage.binaryData.toByteArray()).toUpperCase());
    }
});
```

### Message Listener With Reply

In order to send a reply corresponding to an incoming message, use the `onNewMessageWithReply` method. This method expects a function with input as a `ReceivedMessage` and output as an `Object`

```java
client.simpleMessagesProtocol().onNewMessageWithReply(receivedMessage -> {
    if (receivedMessage.isText) {
        System.out.println("New text message from " + receivedMessage.from);
        System.out.println(receivedMessage.textData);
    } else if (receivedMessage.isBinary) {
        System.out.println("New binary message from " + receivedMessage.from);
        System.out.println(Hex.toHexString(receivedMessage.binaryData.toByteArray()).toUpperCase());
    }
    return "Reply message";
});
```

## Sending Messages

There are many overloaded methods available for sending messages. Each option has a text and binary counterpart available.

### Send Text

The `sendTextAsync` method and its overloaded counterparts can be used to send text messages asynchronously across the network.

```java
Identity identity = new Identity("server", Wallet.createNew());

NKNClient nknClient = new NKNClient(identity);
nknClient.start();

CompletableFuture<SimpleMessagesProtocol.ReceivedMessage> promise = nknClient.simpleMessagesProtocol().sendTextAsync(identity.getFullIdentifier(), "Hello there!");

promise.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("Response ==> " + response.textData);
    } else {
        error.printStackTrace();
    }
});
```

### Send Binary

Similar to its send text cousin, the `sendBinaryAsync` method and its overloaded counterparts can be used to send binary messages across the network.

```java
Identity identity = new Identity("server", Wallet.createNew());

NKNClient nknClient = new NKNClient(identity);
nknClient.start();

CompletableFuture<SimpleMessagesProtocol.ReceivedMessage> promise = nknClient.simpleMessagesProtocol().sendBinaryAsync(identity.getFullIdentifier(), "Hello there!".getBytes(StandardCharsets.UTF_8));

promise.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("Response ==> " + response.textData);
    } else {
        error.printStackTrace();
    }
});
```

:::info
The `sendBinaryAsync` method also accepts `ByteString` as an argument instead of the `byte[]`.
:::

### Send Object

Send any java object across the wire using the `sendAsync` method

```java
Identity identity = new Identity("server", Wallet.createNew());

NKNClient nknClient = new NKNClient(identity);
nknClient.start();

CompletableFuture<SimpleMessagesProtocol.ReceivedMessage> promise = nknClient.simpleMessagesProtocol().sendAsync(identity.getFullIdentifier(), null, new Object());

promise.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("Response ==> " + response.textData);
    } else {
        error.printStackTrace();
    }
});
```

### Send Multicast Text 

The `sendTextMulticastAsync` can be used to send a multicast text message across the network. This method is similar to `sendTextAsync` but accepts an array of destination identifiers instead.

```java
List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().sendTextMulticastAsync(new String[] {identity.getFullIdentifier()}, "Hello to everyone!!");

promises.forEach(p -> p.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("Response from " + response.from);
    } else {
        System.out.println("Error: " + error.toString());
    }
}));
```

### Send Multicast Binary

The `sendMulticastBinaryAsync` method can be used to send a multicast binary message across the network.

```java
List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().sendBinaryMulticastAsync(new String[] {identity.getFullIdentifier()}, "Hello to everyone!!".getBytes());

promises.forEach(p -> p.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("Response from " + response.from);
    } else {
        System.out.println("Error: " + error.toString());
    }
}));
```

### Send Multicast Object

The `sendMulticastAsync` method can be used to send a multicast object message across the network.

```java
List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().sendBinaryMulticastAsync(new String[] {identity.getFullIdentifier()}, new Object());

promises.forEach(p -> p.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("Response from " + response.from);
    } else {
        System.out.println("Error: " + error.toString());
    }
}));
```

### Publish Text

Publish a text message to all subscribers of a topic using the `publishTextAsync` method.

```java
List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().publishTextAsync("topicNAme", false, "Hello Subscribers!!");
```

:::note
The `publishBinaryAsync` method is the binary counterpart for publishing `binary` and `byteString` message types to a topic. 
:::

## Miscellaneous 

### Toggle Auto Ack

Stop sending automatic ack messages. An Ack message does not have any data. It is only used to inform a sender of the message that the receiving party has received the message successfully.

```java
client.simpleMessagesProtocol().setNoAutomaticACKs(true);
```

### Set Encryption Level

The encryption level is not set at the message protocol level, but it is set at the client level. The following options are supported:

*   DO_NOT_ENCRYPT
*   ENCRYPT_ONLY_UNICAST
*   CONVERT_MULTICAST_TO_UNICAST_AND_ENCRYPT
*   ENCRYPT_UNICAST_AND_MULTICAST

```java
client.setEncryptionLevel(NKNClient.EncryptionLevel.DO_NOT_ENCRYPT);
```

:::caution
Multicast encryption is not implemented yet. If you set encryption to ENCRYPT_UNICAST_AND_MULTICAST and attempt to send a multicast message, an exception will be thrown
:::

### Set Peer Encryption Requirement

While receiving the messages, appropriate behaviour can be set at the client level to determine what needs to be done to unencrypted messages received. This option is set on the client instance. The following options are supported:

* ON_NON_ENCRYPTED_MESSAGE___ALLOW_NONE_DROP_ALL
* ON_NON_ENCRYPTED_MESSAGE___ALLOW_ACK_DROP_OTHER
* ON_NON_ENCRYPTED_MESSAGE___ALLOW_ALL_DROP_NONE

```java
client.setPeerEncryptionRequirement(NKNClient.PeerEncryptionRequirement.ON_NON_ENCRYPTED_MESSAGE___ALLOW_NONE_DROP_ALL)
```

---
sidebar_position: 1
---

# Simple Message Exchange

This example walks through the following scenarios:

* Create client(s)
* Listen for incoming messages
* Sending Text Messages
* Sending Binary Messages

## Setup Client(s) for listening to incoming messages

Create clients and configure them to listen to incoming messages. configure other connection parameters as required:

```java
final Identity identityA = new Identity("Client A", Wallet.createNew());
final Identity identityB = new Identity("Client B", Wallet.createNew());

final NKNClient clientA = new NKNClient(identityA);
try {
    clientA.simpleMessagesProtocol()
            .onNewMessage(receivedMessage -> {
                if (receivedMessage.isText) {
                    System.out.println("Client A: New " + (receivedMessage.wasEncrypted ? "encrypted" : "UNENCRYPTED") + " text from " + receivedMessage.from + "\n  ==> " + receivedMessage.textData);
                } else if (receivedMessage.isBinary) {
                    System.out.println("Client A: New " + (receivedMessage.wasEncrypted ? "encrypted" : "UNENCRYPTED") + " binary from " + receivedMessage.from + "\n  ==> 0x" + Hex.toHexString(receivedMessage.binaryData.toByteArray()).toUpperCase());
                }
            });
    clientA.start();
} catch (NKNClientException e) {
    LOG.error("Client failed to start:", e);
    return;
}

final NKNClient clientB = new NKNClient(identityB);
try {
    clientB.simpleMessagesProtocol()
            .onNewMessageWithReply(receivedMessage -> {
                if (receivedMessage.isText) {
                    System.out.println("Client B: New " + (receivedMessage.wasEncrypted ? "encrypted" : "UNENCRYPTED") + " text from " + receivedMessage.from + "\n  ==> " + receivedMessage.textData);
                } else if (receivedMessage.isBinary) {
                    System.out.println("Client B: New " + (receivedMessage.wasEncrypted ? "encrypted" : "UNENCRYPTED") + " binary from " + receivedMessage.from + "\n  ==> 0x" + Hex.toHexString(receivedMessage.binaryData.toByteArray()).toUpperCase());
                }
                return "Text message reply!";
            });
    clientB
            .setEncryptionLevel(NKNClient.EncryptionLevel.DO_NOT_ENCRYPT)
            .start();
} catch (NKNClientException e) {
    LOG.error("Client failed to start", e);
    return;
}

System.out.println("Started!");
```

## Send and Receive Messages

Send and Receive messages from Client A to Client B and vice versa. The messages are sent in a loop to demonstrate continuous interaction.

```java
final CompletableFuture<SimpleMessagesProtocol.ReceivedMessage> promise = clientA.simpleMessagesProtocol().sendTextAsync(identityB.getFullIdentifier(), "Hello!");
promise.whenComplete((response, error) -> {
    if (error == null) {
        System.out.println("A: " + (response.wasEncrypted ? "Encrypted" : "UNENCRYPTED") + " response ==> " + response.textData);
        clientA.simpleMessagesProtocol().sendBinaryAsync(identityB.getFullIdentifier(), null, new byte[]{(byte) 0xCA, (byte) 0xFE, (byte) 0xBA, (byte) 0xBE}); // Casts because java (byte) is signed and these numbers would overwrite the msb
    } else {
        error.printStackTrace();
    }
});

for (int number = 0; number < 10; number ++) {
    Thread.sleep(5_000);
    clientA.simpleMessagesProtocol().sendTextAsync(identityB.getFullIdentifier(), "Message #" + number);
}

Thread.sleep(7_000);

System.out.println("Closing!");
clientA.close();
clientB.close();
```

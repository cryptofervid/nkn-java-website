---
sidebar_position: 1
---

# Publish Subscribe Message Exchange

This example walks through the following scenarios:

* Unsubscribe from a topic
* Subscribe to a topic and process incoming messages
* Get subscription details
* Publish Message

## Unsubscribe from a topic

Unsubscribe an identifier from a Topic.

```java
final String identifier = "clientA";

//Unsubscribe to make sure there are no existing subscriptions
System.out.println("UN Subscribing from '" + topic + "' using " + identifier + (identifier == null || identifier.isEmpty() ? "" : ".") + Hex.toHexString(pubsubWallet.getPublicKey()));
String txID = pubsubWallet.tx().unsubscribe(topic, identifier);

if (txID == null) {
    System.out.println("  Transaction failed");
} else {
    System.out.println("  Transaction successful: " + txID);
        }

```

### Subscribe to a topic

Subscribe to a topic.

```java
System.out.println("Subscribing to '" + topic + "' using " + identifier + (identifier == null || identifier.isEmpty() ? "" : ".") + Hex.toHexString(pubsubWallet.getPublicKey()));
txID = pubsubWallet.tx().subscribe(topic, 15, identifier, (String) null);

if (txID == null) {
    System.out.println("  Transaction failed");
} else {
    System.out.println("  Transaction successful: " + txID);
}
```

### Create subscription client and process messages

Use the subscribed identifier to create a client and process any incoming messages.

```java
subscriberClient = new NKNClient(new Identity(identifier, pubsubWallet));
subscriberClient.simpleMessagesProtocol().onNewMessage(msg -> {
    if (msg.isText) {
        System.out.println("New text from " + msg.from + "\n  ==> " + msg.textData);
    } else if (msg.isBinary) {
        System.out.println("New binary from " + msg.from + "\n  ==> 0x" + Hex.toHexString(msg.binaryData.toByteArray()).toUpperCase());
    }
});
subscriberClient.start();
Thread.sleep(1000);
```

### Fetch subscription details

Fetch the subscription details from the topic including details of subscriber and the number of subscribers.

```java
final NKNExplorer.Subscription.Subscriber[] subscribers = NKNExplorer.Subscription.getSubscribers(topic);
System.out.println("Subscribers of '" + topic + "':");
for (NKNExplorer.Subscription.Subscriber s : subscribers) {
    System.out.println("  " + s.fullClientIdentifier + (s.meta != null && s.meta.isEmpty() ? "" : (": " + s.meta)));
}
System.out.println("Total: " + NKNExplorer.Subscription.getSubscriberCount(topic) + " subs");

if (subscribers.length > 0) {
    final NKNExplorer.Subscription.SubscriptionDetail detail = NKNExplorer.Subscription.getSubscriptionDetail(topic, subscribers[0].fullClientIdentifier);
    if (detail == null) {
        System.out.println("Seems like there is no record of requested subscription");
    } else {
        System.out.println("Meta of the " + detail.fullClientIdentifier + ": '" + detail.meta + "', expires At: " + detail.expiresAt);
    }
}
```

### Publish the message

Publish a message using a new client. The message is received by the subscribing client and processed accordingly.

```java
final NKNClient publisherClient = new NKNClient(new Identity(null, Wallet.createNew()));
publisherClient.start().simpleMessagesProtocol().publishTextAsync(topic, true, "Hello all my subscribers!");
Thread.sleep(7000);
```

## Close the client(s)

Close both the publisher and the subscriber

```java
publisherClient.close();
if (subscriberClient != null) subscriberClient.close();
```
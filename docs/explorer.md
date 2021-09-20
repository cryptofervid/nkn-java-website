---
sidebar_position: 1
---

# Explorer

The explorer API provides convinience methods to interact with the underlying blockchain via a bootstrap node. It also provides a mechanism to validate the NKN Address for correctness.

### Valid Address

Check if the provided address is structurally valid or not

```java
String address = "<nknAddress>";
boolean isValid = NKNExplorer.isAddressValid(address);
if ( isValid ){
    System.out.println("Address is valid");
} else {
    System.out.println("Address is not valid");
}
```

## Wallet

### Resolve Name

Resolve a friendly name and get the corresponding NKN Address from the naming service.

```java
String nknAddress = NKNExplorer.Wallet.resolveNamedAddress("friendlyname");
```

### Query Balance

Query the balance of an NKN Address

```java
BigDecimal balance = NKNExplorer.Wallet.queryBalance("<nknAddress>");
```

### Get Nonce

Get the nonce

```java
long nonce = NKNExplorer.Wallet.getNonce("<nknAddress>");
```

## Blockchain

### Get Block Count

Get the block count

```java
int blockCount = NKNExplorer.BlockChain.getBlockCount();
```

### Get Latest Block Hash

Get the hash corresponding to the latest block

```java
NKNExplorer.BlockChain.LatestBlockHash latestBlockHash = NKNExplorer.BlockChain.getLatestBlockHash();
System.out.println(latestBlockHash.hash);
System.out.println(latestBlockHash.height);
```

## Subscription

### Get Subscribers

Get a list of subscribers for a given topic.

```java
String topic = "topicName";
final NKNExplorer.Subscription.Subscriber[] subscribers = NKNExplorer.Subscription.getSubscribers(topic);
System.out.println("Subscribers of '" + topic + "':");
for (NKNExplorer.Subscription.Subscriber subscriber : subscribers) {
    System.out.println("Subscriber Identifier: " + subscriber.fullClientIdentifier);
    System.out.println("Meta: " + subscriber.meta);

}
System.out.println("Total: " + subscribers.length + " subscribers");
```

:::tip
There is an overloaded method available to get subscribers which gives the option to filter subscribers basis `offset`, `limit`, `metadata`, `transaction pool` along with `topic`.
:::

### Get Subscriber Count

Get the number of subscribers subscribed to a topic

```java
String topic = "topicName";
int subscriberCount = NKNExplorer.Subscription.getSubscriberCount(topic);   
```

### Get Subscription Details

Get details of the subscription for a subscriber

```java
String topic = "topicName";
String subscriberIdentifier = "identifier";
NKNExplorer.Subscription.SubscriptionDetail subscriptionDetail = NKNExplorer.Subscription.getSubscriptionDetail(topic, subscriberIdentifier);

System.out.println("Subscriber Identifier: " + subscriptionDetail.fullClientIdentifier);
System.out.println("Topic: " + subscriptionDetail.topic);
System.out.println("Meta: " + subscriptionDetail.meta);
System.out.println("Expires At: " + subscriptionDetail.expiresAt);
```
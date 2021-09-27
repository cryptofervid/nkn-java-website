---
sidebar_position: 1
---

# Client

NKNCilent provides the entry point to the rich set of features provided by the API. It is also used to set parameters that can be used for communication between two clients.

### Instantiation

The client can be instantiated using the constructor `NKNClient` which accepts an identity.

```java
final Identity identityA = new Identity("Client A", Wallet.createNew());
final NKNClient clientA = new NKNClient(identityA);
```

### Start / Stop

The client start initiates a connection with the bootstrap node and close tearsdown that connection.

```java
clientA.start();

clientA.close()
```

### Set Encryption Level

The following encryption levels are supported:

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

While receiving the messages, appropriate behaviour can be set at the client level to determine what needs to be done to unencrypted messages received. The following options are supported:

* ON_NON_ENCRYPTED_MESSAGE___ALLOW_NONE_DROP_ALL
* ON_NON_ENCRYPTED_MESSAGE___ALLOW_ACK_DROP_OTHER
* ON_NON_ENCRYPTED_MESSAGE___ALLOW_ALL_DROP_NONE

```java
client.setPeerEncryptionRequirement(NKNClient.PeerEncryptionRequirement.ON_NON_ENCRYPTED_MESSAGE___ALLOW_NONE_DROP_ALL)
```

### Get Simple Messages Protocol

Get the handle to the underlying messages api.

```java
SimpleMessagesProtocol messageProtocol = client.simpleMessagesProtocol();
```


### Get Session Protocol

Get a handle to the undelying session api.


```java
SessionProtocol sessionProtocol = client.sessionProtocol();
```
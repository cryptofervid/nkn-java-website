---
sidebar_position: 1
---

# Connection Provider

The connection api helps with configuring the nodes to connect to.

There are two types of actions performed by nodes. 

* Communicating with the blockchain (RPC Actions):
    The client directly ask the node to perform these actions.

* Sending and Receiving messages:
    The client asks the node to negotiate a connection with another node.

The node that the client connects to is called the `bootstrap node`. There a list of preconfigured bootstrap nodes that are used to connect to the network. There are cases where it is required to choose a bootstrap node othar than the pre defined ones e.g. 

* Running your own node
* Load balancing across nodes
* Performance tuning

The connection provider API can be used to select the boostrap node(s) and update other connection parameters like timeout, reply etc in a **`thread-safe`** way.


## Configure Bootstrap Node(s)

To configure bootstrap nodes, use the ```setBootstrapNodes``` method. This method accepts an array of strings with each element of the array sepcifying the node in ```ip:port``` format.

```java
ConnectionProvider.setBootstrapNodes(new String[] { new String("localhost:30003") });
```

## Connection Parameter Modifiers

The following methods are provided by the connection provider API to change the network parameeters of a connection:

### Max Retries

Configures the maximum number of times a request is tried.

```java
ConnectionProvider.maxRetries(3);
int configuredMaxRetryCount = ConnectionProvider.maxRetries();
```

:::note
Default value of max retry count is ```3```
:::

### RPC Call Timeout

Configures the maximum time taken by the node to complete an action in milliseconds.

```java
ConnectionProvider.rpcCallTimeoutMS(1000);
int configuredRpcCallTimeoutMS = ConnectionProvider.rpcCallTimeoutMS();
```

:::note
Default value of rpc call timeout is 5000 ms
:::

### Message Ack Timeout

Configures the max time allowed between message sent and ack/reply received in milliseconds.

```java
ConnectionProvider.messageAckTimeoutMS(1000);
int configuredMessageAckTimeoutMS = ConnectionProvider.messageAckTimeoutMS();
```

:::note
Default value of message ack timeout is 5000 ms
:::

### Session Timeout

Configures the max time allowed, in milliseconds,  since last message/ack received from any client.

```java
ConnectionProvider.sessionTimeoutMS(15000);
int configuredSessionTimeoutMS = ConnectionProvider.sessionTimeoutMS();
```

:::note
Default value of session timeout is 10000 ms
:::
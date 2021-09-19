---
sidebar_position: 1
---

# Wallet

This API provides convinience mathods to interact with the NKN Wallet, which is a combination of private and public keys. It provides functionality to create, store, load ans transact with the wallet.

## Create Wallet

The wallet can be created in multiple ways.

### Create a new wallet

Create a new wallet from a new seed. This method will create a new seed and create a new private/public key pair.

```java
Wallet wallet = Wallet.createNew();
```

### Create from existing seed

Create a wallet object from an existing seed. The seed can be provided either in hex format for string format.

```java
Wallet wallet = Wallet.createFromSeed("697f3a8d50dbcede9c39730ed90e5a8109a56153b6b7fdc18d475aedc048ef44");
```

:::caution
Never share the seed with anyone and keep it safe. This secret seed can be used to retrieve your wallet.
:::

## Save Wallet

The wallet information can be stored on a file either local or on network. 

### Local File

The save method creates a password protected local file and stores the keys.

```java
Wallet wallet = Wallet.createNew();
try {
    wallet.save(new File("wallet.json"), "secretPassword");
} catch (WalletException exp){
    System.out.println("Exception while saving wallet information: " + exp.getMessage());
}
```


### Output Stream

The save method also accepts and OutputStream object to send the wallet informtion across the network. 

```java
Wallet wallet = Wallet.createNew();
try {
    FileOutputStream outputStream = new FileOutputStream(new File("wallet.json"));
    wallet.save(outputStream, "secretPassword");
} catch (Exception exp){
    System.out.println("Exception while saving wallet information: " + exp.getMessage());
}
```

:::tip
Replace the FileOutputStream with any other output stream to write the information across network.
:::

## Load Wallet

Converse to saving, the wallet can be loaded from the local file system or any other input stream.

### Local File

Load the existing wallet from a local file by providing the file object corresponding to local file and the password used while saving it.

```java
try {
    Wallet wallet = Wallet.load(new File("wallet.json"), "secretPassword");
    System.out.println(wallet.getAddress());
} catch (WalletException e) {
    System.out.println("Exception while restoring wallet from the wallet file");
}
```

### Input Stream

Similar to its save counterpart, the load method also accepts an input stream to load the wallet from anywhere as long as the stream is valid.

```java
try {
    FileInputStream fileInputStream = new FileInputStream(new File("wallet.json"));
    Wallet wallet = Wallet.load(fileInputStream, "secretPassword");
    System.out.println(wallet.getAddress());
} catch (Exception e) {
    System.out.println("Exception while restoring wallet from the wallet file");
}
```

## Transactions

### Create Transaction

Wallet API provides an instance of NKNTransaction wrapped around the wallet address. This NKNTransaction instance can be used to execute business transactions.

```java
Wallet wallet = Wallet.createNew();
NKNTransaction nknTransaction = wallet.tx();
```

:::info
The following predefined transactions are possible using the NKNTransaction object:
* deleteName
* registerName
* subscribe
* transferTo
* unsubscribe

In case the requirement does not fit into these predefined transactions, the user can also use ```customTransaction``` method to submit a transaction customized for his own needs.
:::

### Get Balancce

Users can query the wallet for its balance.

```java
Wallet wallet = Wallet.createNew();
try {
    System.out.println(wallet.queryBalance());
} catch (NKNExplorerException e) {
    e.printStackTrace();
}
```

:::note
The wallet is dependent on the NKN Explorer to get it's balance. More about this in the Explorer section.
:::

## Metadata

Wallet also provides methods to access the its metadata

### Address

Get the NKN address associated with the wallet

```java
Wallet wallet = Wallet.createNew();
System.out.println(wallet.getAddress());
```

### Public Key

Get the public key associted with the wallet.

```java
import org.bouncycastle.util.encoders.Hex;

Wallet wallet = Wallet.createNew();
System.out.println(Hex.toHexString(wallet.getPublicKey()));
```

### Program Hash

Get the program hash from the public key of the wallet.

```java
import org.bouncycastle.util.encoders.Hex;

Wallet wallet = Wallet.createNew();
System.out.println(Hex.toHexString(wallet.getProgramHash().toByteArray()));
```

### Contract Data

Get stringified contract data

```java
Wallet wallet = Wallet.createNew();
System.out.println(wallet.getContractDataAsString());
```


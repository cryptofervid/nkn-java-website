---
sidebar_position: 1
---

# Wallet Setup and Transaction

This example walks through the following scenarios:

* Setup wallet(s)
* Store wallet(s)
* Load wallet(s)
* Execute transfer transaction

## Create and Store Wallets

Create NKN wallets and store them in the local file system.

```java
final File fromFile = new File("devnet-from.json");
final File toFile = new File("devnet-to.json");

if (!fromFile.exists()) Wallet.createNew().save(fromFile, "pwd");
if (!toFile.exists()) Wallet.createNew().save(toFile, "pwd");

final Wallet from = Wallet.load(fromFile, "pwd");
final Wallet to = Wallet.load(toFile, "pwd");
```

## Perform a transaction

Transfer funds from one account to another

```java
final String amount = "1";
System.out.println("Transferring " + amount + " tNKN from " + from.getAddress() + " (" + from.queryBalance() + " tNKN) to " + to.getAddress() + " (" + to.queryBalance() + " tNKN)");


final String txID = from.tx().transferTo(to.getAddress(), new BigDecimal(amount));

if (txID == null) {
    System.out.println("  Transaction failed");
} else {
    System.out.println("  Transaction successful: " + txID);
}
```

:::caution
The accounts used in this example have a balance of 0, so the transfer transaction is going to fail but it provides a working code in case the accounts have a non 0 balance.
:::
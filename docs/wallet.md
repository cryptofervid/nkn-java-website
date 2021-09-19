---
sidebar_position: 1
---

# Wallet

This API provides convinience mathods to interact with the NKN Wallet. It provides functionality to create, store, load ans trasact with the wallet.

## Create Wallet

The wallet can be created in multiple ways.

### Create a new wallet

Create a new wallet from a new seed. This method will create a new seed and create a new private/public key pair.

### Create from existing seed

Create a wallet object from an existing seed. The seed can be provided either in hex format for string format.

## Save Wallet

The wallet information can be stored on a file either local or on network. 

### Local File

The save method creates a password protected local file and stores the keys.

### Remote File

The save method also accepts and OutputStream object to send the wallet informtion across the network. 
---
sidebar_position: 2
---

# Maven - Local

Follow the steps below to create and install NKN java sdk jar in the local maven environment.

## Clone the repository

Get started by cloning the **[NKN Java SDK](https://github.com/nknorg/nkn-java-sdk)** repository.

```shell
git clone https://github.com/nknorg/nkn-java-sdk.git
```

## Run wemi

Run the wemi command in the NKN Java SDK directory to enter wemi shell


```shell
cd nkn-java-sdk

./wemi
```

This will lead you to the wemi prompt.

:::info
To learn more about wemi build system, visit their [github page](https://github.com/Darkyenus/wemi)
:::

## Test 

Run the test cases to ensure the sanity of the code.

```shell
> test
```

Once the test cases run successfully, wemi will output the summary report:

```shell
Done test: 
═ JUnit Jupiter ✔ 8 ms

           - Summary -           
[      1 container found        ]
[      0 containers skipped     ]
[      0 containers aborted     ]
[      1 container successful   ]
[      0 containers failed      ]
[      0 tests found            ]
[      0 tests skipped          ]
[      0 tests aborted          ]
[      0 tests successful       ]
[      0 tests failed           ]
        in 4 seconds 606 ms
```

## Publish

Publish the artifacts to the local maven repository

```shell
> publish
```

This will publish the artifacts to the local maven repository under ```/home/<user>/.m2/repository/cz/jsmith/nkn/NknSdk/<release>/```


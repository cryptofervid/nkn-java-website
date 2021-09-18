---
sidebar_position: 3
---

# Maven

Follow the steps below to include the NKN Java SDK libraries in your Maven project (pom.xml)

## Add repository

NKN Java SDK uses jitpack resolver. Include the jitpack repository to the list of repositories in the pom.xml file.

```xml
<repositories>
        <repository>
                <id>jitpack.io</id>
                <url>https://jitpack.io</url>
        </repository>
</repositories>
```

## Add dependency

Add the NKN Java SDK dependecy to pom.xml.

```xml
<dependency>
        <groupId>com.github.nknorg</groupId>
        <artifactId>nkn-java-sdk</artifactId>
        <version>Tag</version>
</dependency>
```

:::info
When requested for the first time, jitpack will checlout the target repository, build and serve the artifacts on the fly. More information about jitpack can be found on their [documentation site](https://jitpack.io/docs/).
:::


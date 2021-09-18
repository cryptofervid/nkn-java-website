---
sidebar_position: 4
---

# Gradle

Follow the steps below to include the NKN Java SDK libraries in your Gradle project (build.gradle)

## Add repository

NKN Java SDK uses jitpack resolver. Include the jitpack repository at the end of the list of repositories in the build.gradle file.

```groovy
allprojects {
        repositories {
                ...
                maven { url 'https://jitpack.io' }
        }
}
```

## Add dependency

Add the NKN Java SDK dependecy to build.gradle file.

```groovy
dependencies {
        implementation 'com.github.nknorg:nkn-java-sdk:Tag'
}
```

:::info
When requested for the first time, jitpack will checlout the target repository, build and serve the artifacts on the fly. More information about jitpack can be found on their [documentation site](https://jitpack.io/docs/).
:::


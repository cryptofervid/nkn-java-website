"use strict";(self.webpackChunknkn_java_website=self.webpackChunknkn_java_website||[]).push([[284],{4863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],d={sidebar_position:3},s="Maven",l={unversionedId:"maven_build",id:"maven_build",isDocsHomePage:!1,title:"Maven",description:"Follow the steps below to include the NKN Java SDK libraries in your Maven project (pom.xml)",source:"@site/docs/maven_build.md",sourceDirName:".",slug:"/maven_build",permalink:"/nkn-java-website/docs/maven_build",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/maven_build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"environment_sidebar",previous:{title:"Maven - Local",permalink:"/nkn-java-website/docs/maven_local"},next:{title:"Gradle",permalink:"/nkn-java-website/docs/gradle_build"}},p=[{value:"Add repository",id:"add-repository",children:[]},{value:"Add dependency",id:"add-dependency",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"maven"},"Maven"),(0,o.kt)("p",null,"Follow the steps below to include the NKN Java SDK libraries in your Maven project (pom.xml)"),(0,o.kt)("h2",{id:"add-repository"},"Add repository"),(0,o.kt)("p",null,"NKN Java SDK uses jitpack resolver. Include the jitpack repository to the list of repositories in the pom.xml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n        <repository>\n                <id>jitpack.io</id>\n                <url>https://jitpack.io</url>\n        </repository>\n</repositories>\n")),(0,o.kt)("h2",{id:"add-dependency"},"Add dependency"),(0,o.kt)("p",null,"Add the NKN Java SDK dependecy to pom.xml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n        <groupId>com.github.nknorg</groupId>\n        <artifactId>nkn-java-sdk</artifactId>\n        <version>Tag</version>\n</dependency>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When requested for the first time, jitpack will checlout the target repository, build and serve the artifacts on the fly. More information about jitpack can be found on their ",(0,o.kt)("a",{parentName:"p",href:"https://jitpack.io/docs/"},"documentation site"),"."))))}u.isMDXComponent=!0}}]);
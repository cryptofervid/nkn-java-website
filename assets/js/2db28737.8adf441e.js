"use strict";(self.webpackChunknkn_java_website=self.webpackChunknkn_java_website||[]).push([[638],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?s.createElement(g,r(r({ref:t},c),{},{components:n})):s.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},898:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var s=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],o={sidebar_position:1},l="Messages",p={unversionedId:"messages",id:"messages",isDocsHomePage:!1,title:"Messages",description:"Message functionality is wrapped in the SimpleMessagesProtocol object. It provides methods to send and receive messages of different types. It also provides overrides for their Multicast couterparts. Last but not the least, there are methods available to Publish messages on topics and send them to all subscribers.",source:"@site/docs/messages.md",sourceDirName:".",slug:"/messages",permalink:"/nkn-java-website/docs/messages",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/messages.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"environment_sidebar",previous:{title:"Session",permalink:"/nkn-java-website/docs/session"},next:{title:"Wallet",permalink:"/nkn-java-website/docs/wallet"}},c=[{value:"Receiving Messages",id:"receiving-messages",children:[{value:"Message Listener",id:"message-listener",children:[]},{value:"Message Listener With Reply",id:"message-listener-with-reply",children:[]}]},{value:"Sending Messages",id:"sending-messages",children:[{value:"Send Text",id:"send-text",children:[]},{value:"Send Binary",id:"send-binary",children:[]},{value:"Send Object",id:"send-object",children:[]},{value:"Send Multicast Text",id:"send-multicast-text",children:[]},{value:"Send Multicast Binary",id:"send-multicast-binary",children:[]},{value:"Send Multicast Object",id:"send-multicast-object",children:[]},{value:"Publish Text",id:"publish-text",children:[]}]},{value:"Miscellaneous",id:"miscellaneous",children:[{value:"Toggle Auto Ack",id:"toggle-auto-ack",children:[]},{value:"Set Encryption Level",id:"set-encryption-level",children:[]},{value:"Set Peer Encryption Requirement",id:"set-peer-encryption-requirement",children:[]}]}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messages"},"Messages"),(0,i.kt)("p",null,"Message functionality is wrapped in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleMessagesProtocol")," object. It provides methods to send and receive messages of different types. It also provides overrides for their ",(0,i.kt)("inlineCode",{parentName:"p"},"Multicast")," couterparts. Last but not the least, there are methods available to ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish")," messages on topics and send them to all subscribers."),(0,i.kt)("p",null,"The following types of messages are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Text"),(0,i.kt)("li",{parentName:"ul"},"Binary",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Byte Array"),(0,i.kt)("li",{parentName:"ul"},"ByteString (protobuf)"))),(0,i.kt)("li",{parentName:"ul"},"Object"),(0,i.kt)("li",{parentName:"ul"},"Ack")),(0,i.kt)("h2",{id:"receiving-messages"},"Receiving Messages"),(0,i.kt)("p",null,"The following options are available for receiving messages"),(0,i.kt)("h3",{id:"message-listener"},"Message Listener"),(0,i.kt)("p",null,"Set a message listener which accepts a consumer which is called when a new message is received."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'client.simpleMessagesProtocol().onNewMessage(receivedMessage -> {\n    if (receivedMessage.isText) {\n        System.out.println("New text message from " + receivedMessage.from);\n        System.out.println(receivedMessage.textData);\n    } else if (receivedMessage.isBinary) {\n        System.out.println("New binary message from " + receivedMessage.from);\n        System.out.println(Hex.toHexString(receivedMessage.binaryData.toByteArray()).toUpperCase());\n    }\n});\n')),(0,i.kt)("h3",{id:"message-listener-with-reply"},"Message Listener With Reply"),(0,i.kt)("p",null,"In order to send a reply corresponding to an incoming message, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"onNewMessageWithReply")," method. This method expects a function with input as a ",(0,i.kt)("inlineCode",{parentName:"p"},"ReceivedMessage")," and output as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'client.simpleMessagesProtocol().onNewMessageWithReply(receivedMessage -> {\n    if (receivedMessage.isText) {\n        System.out.println("New text message from " + receivedMessage.from);\n        System.out.println(receivedMessage.textData);\n    } else if (receivedMessage.isBinary) {\n        System.out.println("New binary message from " + receivedMessage.from);\n        System.out.println(Hex.toHexString(receivedMessage.binaryData.toByteArray()).toUpperCase());\n    }\n    return "Reply message";\n});\n')),(0,i.kt)("h2",{id:"sending-messages"},"Sending Messages"),(0,i.kt)("p",null,"There are many overloaded methods available for sending messages. Each option has a text and binary counterpart available."),(0,i.kt)("h3",{id:"send-text"},"Send Text"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTextAsync")," method and its overloaded counterparts can be used to send text messages asynchronously across the network."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Identity identity = new Identity("server", Wallet.createNew());\n\nNKNClient nknClient = new NKNClient(identity);\nnknClient.start();\n\nCompletableFuture<SimpleMessagesProtocol.ReceivedMessage> promise = nknClient.simpleMessagesProtocol().sendTextAsync(identity.getFullIdentifier(), "Hello there!");\n\npromise.whenComplete((response, error) -> {\n    if (error == null) {\n        System.out.println("Response ==> " + response.textData);\n    } else {\n        error.printStackTrace();\n    }\n});\n')),(0,i.kt)("h3",{id:"send-binary"},"Send Binary"),(0,i.kt)("p",null,"Similar to its send text cousin, the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendBinaryAsync")," method and its overloaded counterparts can be used to send binary messages across the network."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Identity identity = new Identity("server", Wallet.createNew());\n\nNKNClient nknClient = new NKNClient(identity);\nnknClient.start();\n\nCompletableFuture<SimpleMessagesProtocol.ReceivedMessage> promise = nknClient.simpleMessagesProtocol().sendBinaryAsync(identity.getFullIdentifier(), "Hello there!".getBytes(StandardCharsets.UTF_8));\n\npromise.whenComplete((response, error) -> {\n    if (error == null) {\n        System.out.println("Response ==> " + response.textData);\n    } else {\n        error.printStackTrace();\n    }\n});\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sendBinaryAsync")," method also accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteString")," as an argument instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"byte[]"),"."))),(0,i.kt)("h3",{id:"send-object"},"Send Object"),(0,i.kt)("p",null,"Send any java object across the wire using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendAsync")," method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Identity identity = new Identity("server", Wallet.createNew());\n\nNKNClient nknClient = new NKNClient(identity);\nnknClient.start();\n\nCompletableFuture<SimpleMessagesProtocol.ReceivedMessage> promise = nknClient.simpleMessagesProtocol().sendAsync(identity.getFullIdentifier(), null, new Object());\n\npromise.whenComplete((response, error) -> {\n    if (error == null) {\n        System.out.println("Response ==> " + response.textData);\n    } else {\n        error.printStackTrace();\n    }\n});\n')),(0,i.kt)("h3",{id:"send-multicast-text"},"Send Multicast Text"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTextMulticastAsync")," can be used to send a multicast text message across the network. This method is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTextAsync")," but accepts an array of destination identifiers instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().sendTextMulticastAsync(new String[] {identity.getFullIdentifier()}, "Hello to everyone!!");\n\npromises.forEach(p -> p.whenComplete((response, error) -> {\n    if (error == null) {\n        System.out.println("Response from " + response.from);\n    } else {\n        System.out.println("Error: " + error.toString());\n    }\n}));\n')),(0,i.kt)("h3",{id:"send-multicast-binary"},"Send Multicast Binary"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sendMulticastBinaryAsync")," method can be used to send a multicast binary message across the network."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().sendBinaryMulticastAsync(new String[] {identity.getFullIdentifier()}, "Hello to everyone!!".getBytes());\n\npromises.forEach(p -> p.whenComplete((response, error) -> {\n    if (error == null) {\n        System.out.println("Response from " + response.from);\n    } else {\n        System.out.println("Error: " + error.toString());\n    }\n}));\n')),(0,i.kt)("h3",{id:"send-multicast-object"},"Send Multicast Object"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sendMulticastAsync")," method can be used to send a multicast object message across the network."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().sendBinaryMulticastAsync(new String[] {identity.getFullIdentifier()}, new Object());\n\npromises.forEach(p -> p.whenComplete((response, error) -> {\n    if (error == null) {\n        System.out.println("Response from " + response.from);\n    } else {\n        System.out.println("Error: " + error.toString());\n    }\n}));\n')),(0,i.kt)("h3",{id:"publish-text"},"Publish Text"),(0,i.kt)("p",null,"Publish a text message to all subscribers of a topic using the ",(0,i.kt)("inlineCode",{parentName:"p"},"publishTextAsync")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<CompletableFuture<SimpleMessagesProtocol.ReceivedMessage>> promises = nknClient.simpleMessagesProtocol().publishTextAsync("topicNAme", false, "Hello Subscribers!!");\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"publishBinaryAsync")," method is the binary counterpart for publishing ",(0,i.kt)("inlineCode",{parentName:"p"},"binary")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"byteString")," message types to a topic. "))),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("h3",{id:"toggle-auto-ack"},"Toggle Auto Ack"),(0,i.kt)("p",null,"Stop sending automatic ack messages. An Ack message does not have any data. It is only used to inform a sender of the message that the receiving party has received the message successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"client.simpleMessagesProtocol().setNoAutomaticACKs(true);\n")),(0,i.kt)("h3",{id:"set-encryption-level"},"Set Encryption Level"),(0,i.kt)("p",null,"The encryption level is not set at the message protocol level, but it is set at the client level. The following options are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DO_NOT_ENCRYPT"),(0,i.kt)("li",{parentName:"ul"},"ENCRYPT_ONLY_UNICAST"),(0,i.kt)("li",{parentName:"ul"},"CONVERT_MULTICAST_TO_UNICAST_AND_ENCRYPT"),(0,i.kt)("li",{parentName:"ul"},"ENCRYPT_UNICAST_AND_MULTICAST")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"client.setEncryptionLevel(NKNClient.EncryptionLevel.DO_NOT_ENCRYPT);\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Multicast encryption is not implemented yet. If you set encryption to ENCRYPT_UNICAST_AND_MULTICAST and attempt to send a multicast message, an exception will be thrown"))),(0,i.kt)("h3",{id:"set-peer-encryption-requirement"},"Set Peer Encryption Requirement"),(0,i.kt)("p",null,"While receiving the messages, appropriate behaviour can be set at the client level to determine what needs to be done to unencrypted messages received. This option is set on the client instance. The following options are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ON_NON_ENCRYPTED_MESSAGE___ALLOW_NONE_DROP_ALL"),(0,i.kt)("li",{parentName:"ul"},"ON_NON_ENCRYPTED_MESSAGE___ALLOW_ACK_DROP_OTHER"),(0,i.kt)("li",{parentName:"ul"},"ON_NON_ENCRYPTED_MESSAGE___ALLOW_ALL_DROP_NONE")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"client.setPeerEncryptionRequirement(NKNClient.PeerEncryptionRequirement.ON_NON_ENCRYPTED_MESSAGE___ALLOW_NONE_DROP_ALL)\n")))}m.isMDXComponent=!0}}]);
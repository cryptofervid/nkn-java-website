"use strict";(self.webpackChunknkn_java_website=self.webpackChunknkn_java_website||[]).push([[737],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?s.createElement(h,r(r({ref:n},d),{},{components:t})):s.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9714:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var s=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],o={sidebar_position:1},l="Session Establishment and Data Exchange",c={unversionedId:"session_example",id:"session_example",isDocsHomePage:!1,title:"Session Establishment and Data Exchange",description:"This example walks through the following scenarios:",source:"@site/docs/session_example.md",sourceDirName:".",slug:"/session_example",permalink:"/nkn-java-website/docs/session_example",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/session_example.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"environment_sidebar",previous:{title:"Simple Message Exchange",permalink:"/nkn-java-website/docs/simpleexchange_example"},next:{title:"Multicast Message Exchange",permalink:"/nkn-java-website/docs/multicast_example"}},d=[{value:"Setup Client(s)",id:"setup-clients",children:[]},{value:"Wait for Session Establishment and Post Process",id:"wait-for-session-establishment-and-post-process",children:[{value:"Dial Session and Send Data",id:"dial-session-and-send-data",children:[]},{value:"Close the clients",id:"close-the-clients",children:[]}]}],u={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"session-establishment-and-data-exchange"},"Session Establishment and Data Exchange"),(0,i.kt)("p",null,"This example walks through the following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create Client(s)"),(0,i.kt)("li",{parentName:"ul"},"Wait for Session request"),(0,i.kt)("li",{parentName:"ul"},"Dial Session"),(0,i.kt)("li",{parentName:"ul"},"Send/ Recieve data after session establishment"),(0,i.kt)("li",{parentName:"ul"},"Teardown the clients")),(0,i.kt)("h2",{id:"setup-clients"},"Setup Client(s)"),(0,i.kt)("p",null,"Create clients and configure them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final Identity identityA = new Identity("Client A", Wallet.createNew());\nfinal Identity identityB = new Identity("Client B", Wallet.createNew());\n\nfinal NKNClient clientA = new NKNClient(identityA);\ntry {\n    clientA.start();\n} catch (NKNClientException e) {\n    LOG.error("Client failed to start:", e);\n    return;\n}\n\nfinal NKNClient clientB = new NKNClient(identityB);\nclientB.sessionProtocol().setIncomingPreferredMulticlients(2);\ntry {\n        clientB.start();\n} catch (NKNClientException e) {\n    LOG.error("Client failed to start", e);\n    return;\n}\n\nSystem.out.println("Started!");\nThread.sleep(500);\n')),(0,i.kt)("h2",{id:"wait-for-session-establishment-and-post-process"},"Wait for Session Establishment and Post Process"),(0,i.kt)("p",null,"Wait for session request and once session is established post process the incoming data in a separate daemon thread."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'try {\n    clientB.sessionProtocol().onSessionRequest(sB -> {\n        sB.onSessionEstablished(() -> {\n            Thread t = new Thread(() -> {\n                InputStream bIs = sB.getInputStream();\n                try {\n\n                    byte[] buffer = new byte[1024 * 1024];\n                    int redtotal = 0;\n                    int red = bIs.read(buffer);\n                    int lastMb = 0;\n                    long thisTime, lastTime = System.currentTimeMillis();\n                    while (red != -1) {\n                        if (red > 0) {\n                            redtotal += red;\n                            if (redtotal / 1024 / 1024 > lastMb) {\n                                lastMb = redtotal / 1024 / 1024;\n                                thisTime = System.currentTimeMillis();\n                                // +1 to avoid division by zero, in case there is more than buffer.length data to be read\n                                System.out.println("Streamed to me: " + lastMb + " MB (" + (1024 * 1000 / (thisTime - lastTime + 1)) + "kB/s)");\n                                lastTime = thisTime;\n                            }\n                        } else {\n                            Thread.sleep(500);\n                        }\n                        red = bIs.read(buffer);\n                    }\n\n                    LOG.info("All data has been received, session closed");\n\n                } catch (IOException | InterruptedException e) {\n                    LOG.error("IOException thrown when sending data");\n                }\n            }, "SessionExample-InputStreamThread");\n            t.setDaemon(true);\n            t.start();\n        });\n        sB.onSessionBrokenTunnel(() -> {\n            LOG.warn("Session tunnel broke");\n        });\n        return true;\n    });\n')),(0,i.kt)("h3",{id:"dial-session-and-send-data"},"Dial Session and Send Data"),(0,i.kt)("p",null,"Dial a session to the other client and start sending data once the session has been established."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Session sA = clientA.sessionProtocol().dialSession(identityB.getFullIdentifier());\nLOG.info("Session dialed");\n\nsA.onSessionEstablished(() -> {\n    Thread t = new Thread(() -> {\n        SessionOutputStream aOs = sA.getOutputStream();\n        try {\n            int sendData = 1024 * 1024 * 10; // 10M\n            byte[] buffer = new byte[1024 * 1024];\n            while (sendData > 0) {\n                aOs.write(buffer);\n                sendData -= buffer.length;\n                System.out.println("Remaining to send " + sendData + " B");\n            }\n\n            aOs.flush();\n            LOG.debug("Flushing some data, session A -> session B");\n\n            // Wait until the other side acknowledges receiving everything TODO or timeout\n            while (aOs.getUnconfirmedSentBytesCount() > 0) {\n                try {\n                    Thread.sleep(300);\n                } catch (InterruptedException ignored) {}\n            }\n\n            LOG.info("Everything was sent and read, closing");\n\n            sA.close();\n\n        } catch (IOException e) {\n            LOG.error("IOException thrown when sending data");\n        }\n\n    }, "SessionExample-OutputStreamThread");\n    t.setDaemon(true);\n    t.start();\n});\nsA.onSessionBrokenTunnel(() -> {\n    LOG.warn("Session tunnel broke");\n});\n\n} catch (NKNClientException e) {\nLOG.error("Session dial failed");\n}\n\n')),(0,i.kt)("h3",{id:"close-the-clients"},"Close the clients"),(0,i.kt)("p",null,"Close the clients once the data has been transferred."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Thread.sleep(150_000);\n\nSystem.out.println("150s passed, closing clients!");\nclientA.close();\nclientB.close();\n')))}p.isMDXComponent=!0}}]);
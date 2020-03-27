(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{338:function(e,t,s){"use strict";s.r(t);var a=s(8),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"api-references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-references"}},[e._v("#")]),e._v(" API References")]),e._v(" "),s("p",[e._v("Welcome to the beta version of the MeiliSearch API documentation.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The documentation is written for the latest stable release: "),s("a",{attrs:{href:"https://github.com/meilisearch/MeiliSearch/releases/tag/v0.9.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.9.0"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("You might find the answers to some of your questions "),s("RouterLink",{attrs:{to:"/resources/faq.html"}},[e._v("in the FAQ")]),e._v(" 💡")],1)]),e._v(" "),s("h2",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" Headers")]),e._v(" "),s("h3",{attrs:{id:"recommended-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommended-headers"}},[e._v("#")]),e._v(" Recommended Headers")]),e._v(" "),s("h4",{attrs:{id:"content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[e._v("#")]),e._v(" Content Type")]),e._v(" "),s("p",[e._v("All request and response body are in "),s("code",[e._v("JSON")]),e._v(". Always specify it in your header.")]),e._v(" "),s("p",[s("code",[e._v("Content-Type: application/json")])]),e._v(" "),s("h4",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),s("p",[e._v("For almost all routes, you need to be recognized by the server to check your permissions. Add your API key to your headers.\nPlease read the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/authentication.html"}},[e._v("advanced part about keys")]),e._v(" and "),s("RouterLink",{attrs:{to:"/references/keys.html"}},[e._v("how to manage them")]),e._v(" for more information.")],1),e._v(" "),s("p",[s("code",[e._v("X-Meili-API-Key: $API_KEY")])]),e._v(" "),s("h2",{attrs:{id:"errors-status-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors-status-code"}},[e._v("#")]),e._v(" Errors & Status Code")]),e._v(" "),s("h4",{attrs:{id:"success"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success"}},[e._v("#")]),e._v(" Success")]),e._v(" "),s("p",[s("strong",[e._v("200 - Ok")]),e._v(": Everything worked as expected.")]),e._v(" "),s("p",[s("strong",[e._v("201 - Created")]),e._v(": The resource has been created (synchronous)")]),e._v(" "),s("p",[s("strong",[e._v("202 - Accepted")]),e._v(": The update has been pushed in the update queue (asynchronous)")]),e._v(" "),s("p",[s("strong",[e._v("204 - No Content")]),e._v(": The resource has been deleted or no content has been returned")]),e._v(" "),s("p",[s("strong",[e._v("205 - Reset Content")]),e._v(": All the resources have been deleted")]),e._v(" "),s("h4",{attrs:{id:"error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[e._v("#")]),e._v(" Error")]),e._v(" "),s("p",[s("strong",[e._v("400 - Bad Request")]),e._v(": The request was unacceptable, often due to missing a required parameter.")]),e._v(" "),s("p",[s("strong",[e._v("401 - Unauthorized")]),e._v(": No valid API key provided.")]),e._v(" "),s("p",[s("strong",[e._v("403 - Forbidden")]),e._v(": The API key doesn't have the permissions to perform the request.")]),e._v(" "),s("p",[s("strong",[e._v("404 - Not Found")]),e._v(": The requested resource doesn't exist.")]),e._v(" "),s("p",[e._v("All errors contain a "),s("code",[e._v("JSON")]),e._v(" body that explains the error.")]),e._v(" "),s("p",[e._v("Response body:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"The error message"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"asynchronous-updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-updates"}},[e._v("#")]),e._v(" Asynchronous Updates")]),e._v(" "),s("p",[e._v("MeiliSearch is an "),s("strong",[e._v("asynchronous API")]),e._v(". It means that, in a lot of cases, you will receive as server response a simple JSON with only an "),s("code",[e._v("updateId")]),e._v(" attribute:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("This kind of successful response indicates that the operation has been taken into account, but it may not have been executed yet."),s("br"),e._v("\nYou can check the status of the operation via the "),s("code",[e._v("updateId")]),e._v(" and the "),s("RouterLink",{attrs:{to:"/references/updates.html"}},[e._v("get update status route")]),e._v(".")],1),e._v(" "),s("p",[e._v("See more information about "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/asynchronous_updates.html"}},[e._v("asynchronous updates")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);
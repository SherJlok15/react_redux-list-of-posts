(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=(n(21),n(22),n(5)),i=n(3),l=n(13),u=n(1),m=n(15),d=n(14),p="load",f="display",h="remove_post",v="remove_comment",b="search_post";function E(){return function(e){e({type:p}),Promise.all([fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}),fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.json()})]).then(function(t){var n=Object(d.a)(t,3),a=n[0],r=n[1],o=n[2],c=a.map(function(e){var t=r.find(function(t){return t.id===e.userId}),n=o.filter(function(t){return t.postId===e.id});return Object(u.a)({},e,{user:t,comments:n})});e({type:f,data:c})})}}var y={requested:!1,data:null,search:!1,filtredPosts:null};var j=function(e){return r.a.createElement("div",{className:"user-info"},r.a.createElement("a",{href:"mailto:"+e.user.email,title:"click to mail"},r.a.createElement("strong",null,e.user.name)),r.a.createElement("p",null,"Website: ",r.a.createElement("a",{href:"https://"+e.user.website,title:"click to visit"},e.user.website)),r.a.createElement("p",null,"Address: ",e.user.address.city,", ",e.user.address.street,", ",e.user.address.suite))};var k=function(e){return r.a.createElement("div",{className:"comment"},r.a.createElement("span",{className:e.search?"post-cross-none":"comment-cross",onClick:function(){return e.removeComment(e.index,e.posts,e.postIndex)}},"\xd7"),r.a.createElement("h4",{className:"comment-title"},e.comment.name),r.a.createElement("a",{href:"mailto:"+e.comment.email,title:"click to mail"},e.comment.email),r.a.createElement("p",null,e.comment.body))};var O=Object(i.b)(function(e,t){return{comment:t.comment,index:t.index,posts:e.data,postIndex:t.postIndex,search:e.search}},function(e){return{removeComment:function(t,n,a){return e(function(e,t,n){return{type:v,data:t.map(function(t){return t.id!==n?t:Object(u.a)({},t,{comments:t.comments.filter(function(t){return t.id!==e})})})}}(t,n,a))}}})(k);var w=function(e){return r.a.createElement("div",{className:"comments"},r.a.createElement("p",null,r.a.createElement("em",null,"Comments:")),e.comments.map(function(t){return r.a.createElement(O,{comment:t,index:t.id,postIndex:e.postIndex,key:t.id})}))};var x=function(e){return r.a.createElement("div",{className:"post"},r.a.createElement("span",{className:e.search?"post-cross-none":"post-cross",title:"click to remove post",onClick:function(){return e.removePost(e.index,e.posts)}},"\xd7"),r.a.createElement("h2",{className:"post-title"},e.title),r.a.createElement(j,{user:e.user}),r.a.createElement("p",{className:"post-body"},e.body),r.a.createElement(w,{comments:e.comments,postIndex:e.index}))};var N=Object(i.b)(function(e,t){return{filtredPosts:e.filtredPosts,posts:e.search?e.filtredPosts:e.data,body:t.post.body,title:t.post.title,user:t.post.user,comments:t.post.comments,index:t.post.id,search:e.search}},function(e){return{removePost:function(t,n){return e(function(e,t){var n=Object(m.a)(t);return{type:h,data:n.filter(function(t){return t.id!==e})}}(t,n))}}})(x);var P=function(e){return e.requested?null===e.data?r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"preloader-title"},"Loading..."),r.a.createElement("div",{className:"lds-dual-ring"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){return e.search(t.target.value)}}),r.a.createElement("div",{className:"posts"},e.search&&null!==e.filtredPosts?e.filtredPosts.map(function(e){return r.a.createElement(N,{post:e,key:e.id})}):e.data.map(function(e){return r.a.createElement(N,{post:e,key:e.id})}))):r.a.createElement("div",{className:"initial-button-container"},r.a.createElement("button",{title:"click to load posts",className:"initial-button",type:"button",onClick:e.buttonClick},"Load"))};var g=Object(i.b)(function(e){return{requested:e.requested,data:e.data,filtredPosts:e.filtredPosts,search:e.search}},function(e){return{buttonClick:function(){return e(E())},search:function(t){return e(function(e){return{type:b,value:e}}(t))}}})(P),C=Object(s.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)({},e,{requested:!0});case f:return Object(u.a)({},e,{data:t.data});case h:return e.search?Object(u.a)({},e,{filtredPosts:t.data}):Object(u.a)({},e,{data:t.data});case v:return Object(u.a)({},e,{data:t.data});case b:var n=t.value.trim(),a=""!==n,r=e.data.filter(function(e){return e.title.includes(n)||e.body.includes(n)});return a?Object(u.a)({},e,{filtredPosts:r,search:a}):Object(u.a)({},e,{search:a,filtredPosts:null});default:return e}},Object(s.a)(l.a));var I=function(){return r.a.createElement(i.a,{store:C},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.f55d7a40.chunk.js.map
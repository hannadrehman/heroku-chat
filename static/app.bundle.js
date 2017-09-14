webpackJsonp([0],{258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(295);var o=n(8),a=r(o),u=n(162),c=r(u),i=n(30),l=n(50),s=n(285),f=r(s),p=n(286),d=r(p),h=n(627),m=a.default.createElement(h.AppContainer,null,a.default.createElement(i.HashRouter,null,a.default.createElement(l.Provider,{store:f.default},a.default.createElement(d.default,null))));c.default.render(m,document.getElementById("app"))},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.hannad="hannad",t.connected=function(e){return{type:"CONNECTED",payload:{status:e}}},t.newUserJoined=function(e){return{type:"NEW_USER_JOINED",payload:e.data}},t.userLeft=function(e){return{type:"USER_LEFT",payload:e.data}},t.messageSent=function(e){return{type:"MESSAGE_SENT",payload:e}}},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=null;t.default=r=function(){return r};t.loginSuccess=function(e){return{type:"FB_LOGIN_SUCCESS",payload:e}},t.userLoggedIn=function(e){return{type:"USER_LOGGED_IN",payload:{userName:e,timestamp:(new Date).getTime()}}}},280:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"CONNECTED":return o({},e,{connected:t.payload.status});case"NEW_USER_JOINED":return o({},e,{chatParticipants:[].concat(r(e.chatParticipants),[t.payload.user]),participantActions:[].concat(r(e.participantActions),[{action:"joined",user:t.payload.user}])});case"USER_LEFT":return o({},e,{chatParticipants:e.chatParticipants.filter(function(e){return e.userName!==t.payload.userName}),participantActions:[].concat(r(e.participantActions),[{action:"left",user:t.payload}])});case"MESSAGE_SENT":return o({},e,{chatsHistory:[].concat(r(e.chatsHistory),[t.payload])})}return e};var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a={chatParticipants:[],chatsHistory:[],participantActions:[],message:{},charParticipantLeft:[],connected:!1}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=Object.assign(e);switch(t.type){case"NEW_USER_LOGGEDIN":n.app=t.payload}return n}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{posts:[]},t=arguments[1];switch(t.type){case"LOAD_NEW_DISCUSSIONS_SUCCESS":return Object.assign({},e,{posts:t.payload});default:return e}}},283:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(51),a=n(284),u=r(a),c=n(281),i=r(c),l=n(282),s=r(l),f=n(280),p=r(f);t.default=(0,o.combineReducers)({app:i.default,user:u.default,home:s.default,chat:p.default})},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"USER_LOGGED_IN":return r({},e,{userName:t.payload.userName,timestamp:t.payload.timestamp})}return e};var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={userName:null,timestamp:(new Date).getTime()}},285:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(51),a=n(163),u=n(673),c=r(u),i=n(164),l=r(i),s=n(283),f=r(s),p=(0,o.applyMiddleware)((0,l.default)(),c.default,(0,a.createLogger)()),d=(0,o.createStore)(f.default,p);t.default=d},286:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{user:e.user}}function i(e){return(0,d.bindActionCreators)({},e)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(8),f=r(s),p=n(50),d=n(51),h=n(11),m=r(h),y=n(30),b=n(288),v=r(b),_=n(287),w=r(_);n(541),n(515),n(514);var E=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"hannad",user:null},n}return u(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({user:e.user.user})}},{key:"render",value:function(){return f.default.createElement("div",{className:"container-fluid me"},f.default.createElement(v.default,{user:this.state.user}),f.default.createElement(w.default,null))}}]),t}(f.default.Component);E.propTypes={user:m.default.object},t.default=(0,y.withRouter)((0,p.connect)(c,i)(E))},287:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),l=r(i),s=n(30),f=n(293),p=r(f),d=n(294),h=r(d),m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return l.default.createElement("section",{className:"site-body"},l.default.createElement(s.Switch,null,l.default.createElement(s.Route,{exact:!0,path:"/",component:p.default}),l.default.createElement(s.Route,{path:"/home",component:p.default}),l.default.createElement(s.Route,{path:"/login",component:h.default})))}}]),t}(l.default.Component);t.default=m},288:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),l=r(i),s=n(30),f=n(11),p=r(f);n(516);var d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=["Home"];return l.default.createElement("nav",{className:"navbar navbar-inverse"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"navbar-header"},l.default.createElement("a",{className:"navbar-brand",href:"#"},"ReactJs")),l.default.createElement(h,{links:e}),l.default.createElement("label",{className:"name"},this.props.user?this.props.user.name:"")))}}]),t}(l.default.Component),h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderNavList=n.renderNavList.bind(n),n}return u(t,e),c(t,[{key:"renderNavList",value:function(e){return e.map(function(e,t){return l.default.createElement("li",{key:t},l.default.createElement(s.Link,{to:"/"+e.toLowerCase()},e))})}},{key:"render",value:function(){return l.default.createElement("ul",{className:"nav navbar-nav"},this.renderNavList(this.props.links))}}]),t}(l.default.Component);h.propTypes={links:p.default.array},d.propTypes={user:p.default.object},t.default=d},289:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),l=r(i),s=n(30),f=n(11),p=r(f);n(517);var d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatText",text:null},n.handelChange=n.handelChange.bind(n),n.handleClick=n.handleClick.bind(n),n}return u(t,e),c(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handelChange",value:function(e){try{var t=e.target.value;this.setState({text:t})}catch(e){throw e}}},{key:"handleClick",value:function(){var e=this;try{this.state.text&&this.props.sendChat(this.state.text,function(t){t&&e.setState({text:""})})}catch(e){throw e}}},{key:"render",value:function(){return l.default.createElement("article",{className:"chattext-wrapper"},l.default.createElement("section",{className:"chattext-box"},l.default.createElement("textarea",{id:"myChatId",value:this.state.text,onChange:this.handelChange})),l.default.createElement("section",{className:"chattext-send"},l.default.createElement("button",{className:"chattext-submit",onClick:this.handleClick},"Submit")))}}]),t}(l.default.Component);d.propTypes={sendChat:p.default.func},t.default=(0,s.withRouter)(d)},290:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),l=r(i),s=n(30),f=n(11),p=r(f);n(518);var d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatTile",chat:n.props.chat},n}return u(t,e),c(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({chat:e.chat})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.chat.timestamp?new Date(this.state.chat.timestamp).toISOString().split("T").join("<>"):"";return l.default.createElement("article",{className:"chat-tile-wrapper"},l.default.createElement("section",{className:"chattile-user"},this.state.chat.user),l.default.createElement("section",{className:"chattile-time"},e),l.default.createElement("section",{className:"chattile-text"},this.state.chat.text))}}]),t}(l.default.Component);d.propTypes={chat:p.default.object},t.default=(0,s.withRouter)(d)},291:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{participantActions:e.chat.participantActions}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(50),f=n(30);n(519);var p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatUserLog",actions:n.props.participantActions},n.renderActions=n.renderActions.bind(n),n}return a(t,e),c(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.participantActions.sort(function(e,t){return t.user.timestamp-e.user.timestamp});this.setState({actions:t})}},{key:"componentWillUnmount",value:function(){}},{key:"renderActions",value:function(e){return 0===e.length?"":e.map(function(e,t){var n="joined"===e.action?"add":"remove",r=""+new Date(e.user.timestamp).toISOString().split("T").join("<>"),o="joined"===e.action?"Joined @  "+r:"Left @ "+r;return l.default.createElement("p",{key:t,className:"userlog "+n,"data-val":JSON.stringify(e)},e.user.userName+" "+o)})}},{key:"render",value:function(){return l.default.createElement("article",{className:"chatuserlog-wrapper"},l.default.createElement("section",{className:"chat-title"},l.default.createElement("label",null,"Chat Logs")),l.default.createElement("section",{className:"chat-user-actions"},this.renderActions(this.state.actions)))}}]),t}(l.default.Component);t.default=(0,f.withRouter)((0,s.connect)(u)(p))},292:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{chatsHistory:e.chat.chatsHistory}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),s=r(l),f=n(50),p=n(30),d=n(11),h=r(d),m=n(290),y=r(m);n(520);var b=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatWindow",chats:n.props.chatsHistory},n}return u(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.chatsHistory.sort(function(e,t){return e.timestamp-t.timestamp});this.setState({chats:t})}},{key:"componentWillUnmount",value:function(){}},{key:"generateChatTiles",value:function(e){try{return e.map(function(e,t){return s.default.createElement("section",{key:t},s.default.createElement(y.default,{chat:e}))})}catch(e){throw e}}},{key:"render",value:function(){return s.default.createElement("article",{className:"chatwindow-wrapper"},s.default.createElement("section",{className:"chatwindow-chats"},this.generateChatTiles(this.state.chats)))}}]),t}(s.default.Component);b.propTypes={chatsHistory:h.default.object},t.default=(0,p.withRouter)((0,f.connect)(c)(b))},293:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{user:e.user,chat:e.chat}}function i(e){return(0,d.bindActionCreators)({connected:k.connected,newUserJoined:k.newUserJoined,userLeft:k.userLeft,messageSent:k.messageSent},e)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(8),f=r(s),p=n(50),d=n(51),h=n(30),m=n(11),y=r(m),b=n(679),v=r(b),_=n(292),w=r(_),E=n(291),O=r(E),g=n(289),j=r(g),k=n(278);n(521);var C=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"home",user:n.props.user,chat:n.props.chat},n.socket=null,n.unloadWindow=n.unloadWindow.bind(n),n.sendChat=n.sendChat.bind(n),n}return u(t,e),l(t,[{key:"componentWillMount",value:function(){this.state.user.userName?this.socket=v.default.connect("https://hannad.herokuapp.com/",{reconnect:!0}):this.props.history.push("/login")}},{key:"componentWillReceiveProps",value:function(e){this.setState({chat:e.chat,user:e.user})}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.socket.on("acknowledgement",function(t){t&&(e.props.connected(t),e.socket.emit("user:enter",{user:e.state.user})),e.socket.on("user:joins",function(t){e.props.newUserJoined(t)}),e.socket.on("user:left",function(t){e.props.userLeft(t)}),e.socket.on("newChatMessage",function(t){e.props.messageSent(t)}),window.addEventListener("beforeunload",e.unloadWindow)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.unloadWindow)}},{key:"unloadWindow",value:function(){this.socket.emit("user:quits",this.state.user)}},{key:"sendChat",value:function(e,t){var n={user:this.state.user.userName,timestamp:(new Date).getTime(),text:e};this.props.messageSent(n),this.socket.emit("user:message",n),t&&"function"==typeof t&&t(!0)}},{key:"render",value:function(){return f.default.createElement("article",{className:"home-container"},f.default.createElement("section",{className:"row"},f.default.createElement("p",{className:"title"},"Welcome ",this.state.user.userName,f.default.createElement("i",{className:"connection-status "+this.state.chat.connected},this.state.chat.connected?"Connected":"disconnected"))),this.state.user&&this.state.chat.connected?f.default.createElement("article",null,f.default.createElement("section",{className:"row"},f.default.createElement("section",{className:"col-md-8"},f.default.createElement(w.default,null),f.default.createElement(j.default,{sendChat:this.sendChat})),f.default.createElement("section",{className:"col-md-4"},f.default.createElement(O.default,null)))):null)}}]),t}(f.default.Component);C.propTypes={user:y.default.object},t.default=(0,h.withRouter)((0,p.connect)(c,i)(C))},294:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return(0,f.bindActionCreators)({userLoggedIn:d.userLoggedIn},e)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(50),f=n(51),p=n(30),d=n(279);n(522);var h=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={userName:""},n.handeClick=n.handeClick.bind(n),n.handleChange=n.handleChange.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n}return a(t,e),c(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handeClick",value:function(){try{var e=this.state.userName;this.props.userLoggedIn(e),e&&this.props.history.push("/home")}catch(e){throw e}}},{key:"handleChange",value:function(e){this.setState({userName:e.target.value})}},{key:"handleKeyDown",value:function(e){if(13===e.keyCode){var t=this.state.userName;this.props.userLoggedIn(t),t&&this.props.history.push("/home")}}},{key:"render",value:function(){return l.default.createElement("article",{className:"login-container"},l.default.createElement("section",{className:"row"},l.default.createElement("section",{className:"col-md-12 m12"},l.default.createElement("input",{type:"text",onChange:this.handleChange,className:"form-control",placeholder:"Enter your chat name",onKeyDown:this.handleKeyDown}))),l.default.createElement("section",{className:"row"},l.default.createElement("section",{className:"col-md-12 m12"},l.default.createElement("section",null,l.default.createElement("button",{className:"login-btn",onClick:this.handeClick},"Connect to Group Chat")))))}}]),t}(l.default.Component);t.default=(0,p.withRouter)((0,s.connect)(null,u)(h))},514:function(e,t){},515:function(e,t){},516:function(e,t){},517:function(e,t){},518:function(e,t){},519:function(e,t){},520:function(e,t){},521:function(e,t){},522:function(e,t){},691:function(e,t){},692:function(e,t,n){e.exports=n(258)}},[692]);
//# sourceMappingURL=app.bundle.js.map

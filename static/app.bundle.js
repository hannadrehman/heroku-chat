webpackJsonp([0],{258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(298);var a=n(5),o=r(a),u=n(162),i=r(u),c=n(26),s=n(50),l=n(285),f=r(l),p=n(286),d=r(p),h=n(633),m=o.default.createElement(h.AppContainer,null,o.default.createElement(c.HashRouter,null,o.default.createElement(s.Provider,{store:f.default},o.default.createElement(d.default,null))));i.default.render(m,document.getElementById("app"))},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.hannad="hannad",t.connected=function(e){return{type:"CONNECTED",payload:{status:e}}},t.newUserJoined=function(e){return{type:"NEW_USER_JOINED",payload:e.data}},t.userLeft=function(e){return{type:"USER_LEFT",payload:e.data}},t.messageSent=function(e){return{type:"MESSAGE_SENT",payload:e}}},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=null;t.default=r=function(){return r};t.loginSuccess=function(e){return{type:"FB_LOGIN_SUCCESS",payload:e}},t.userLoggedIn=function(e){return{type:"USER_LOGGED_IN",payload:{userName:e,timestamp:(new Date).getTime()}}}},280:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"CONNECTED":return a({},e,{connected:t.payload.status});case"NEW_USER_JOINED":return a({},e,{chatParticipants:[].concat(r(e.chatParticipants),[t.payload.user]),participantActions:[].concat(r(e.participantActions),[{action:"joined",user:t.payload.user}])});case"USER_LEFT":return a({},e,{chatParticipants:e.chatParticipants.filter(function(e){return e.userName!==t.payload.userName}),participantActions:[].concat(r(e.participantActions),[{action:"left",user:t.payload}])});case"MESSAGE_SENT":return a({},e,{chatsHistory:[].concat(r(e.chatsHistory),[t.payload])})}return e};var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={chatParticipants:[],chatsHistory:[],participantActions:[],message:{},charParticipantLeft:[],connected:!1}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=Object.assign(e);switch(t.type){case"NEW_USER_LOGGEDIN":n.app=t.payload}return n}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{posts:[]},t=arguments[1];switch(t.type){case"LOAD_NEW_DISCUSSIONS_SUCCESS":return Object.assign({},e,{posts:t.payload});default:return e}}},283:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(51),o=n(284),u=r(o),i=n(281),c=r(i),s=n(282),l=r(s),f=n(280),p=r(f);t.default=(0,a.combineReducers)({app:c.default,user:u.default,home:l.default,chat:p.default})},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"USER_LOGGED_IN":return r({},e,{userName:t.payload.userName,timestamp:t.payload.timestamp})}return e};var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a={userName:null,timestamp:(new Date).getTime()}},285:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(51),o=n(163),u=n(679),i=r(u),c=n(164),s=r(c),l=n(283),f=r(l),p=(0,a.applyMiddleware)((0,s.default)(),i.default,(0,o.createLogger)()),d=(0,a.createStore)(f.default,p);t.default=d},286:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{user:e.user}}function c(e){return(0,d.bindActionCreators)({},e)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=r(l),p=n(50),d=n(51),h=n(10),m=r(h),y=n(26),v=n(288),b=r(v),_=n(287),w=r(_);n(547),n(518),n(517);var g=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"hannad",user:null},n}return u(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({user:e.user.user})}},{key:"render",value:function(){return f.default.createElement("div",{className:"container-fluid me"},f.default.createElement(b.default,{user:this.state.user}),f.default.createElement(w.default,null))}}]),t}(f.default.Component);g.propTypes={user:m.default.object},t.default=(0,y.withRouter)((0,p.connect)(i,c)(g))},287:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=r(c),l=n(26),f=n(296),p=r(f),d=n(297),h=r(d),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("section",{className:"site-body"},s.default.createElement(l.Switch,null,s.default.createElement(l.Route,{exact:!0,path:"/",component:p.default}),s.default.createElement(l.Route,{path:"/home",component:p.default}),s.default.createElement(l.Route,{path:"/login",component:h.default})))}}]),t}(s.default.Component);t.default=m},288:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=r(c),l=n(26),f=n(10),p=r(f);n(519);var d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=["Home"];return s.default.createElement("nav",{className:"navbar navbar-inverse"},s.default.createElement("div",{className:"container-fluid"},s.default.createElement("div",{className:"navbar-header"},s.default.createElement("a",{className:"navbar-brand",href:"#"},"ReactJs")),s.default.createElement(h,{links:e}),s.default.createElement("label",{className:"name"},this.props.user?this.props.user.name:"")))}}]),t}(s.default.Component),h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderNavList=n.renderNavList.bind(n),n}return u(t,e),i(t,[{key:"renderNavList",value:function(e){return e.map(function(e,t){return s.default.createElement("li",{key:t},s.default.createElement(l.Link,{to:"/"+e.toLowerCase()},e))})}},{key:"render",value:function(){return s.default.createElement("ul",{className:"nav navbar-nav"},this.renderNavList(this.props.links))}}]),t}(s.default.Component);h.propTypes={links:p.default.array},d.propTypes={user:p.default.object},t.default=d},289:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=r(c),l=n(26),f=n(10),p=r(f);n(520);var d=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatText",text:null},n.handelChange=n.handelChange.bind(n),n.handleClick=n.handleClick.bind(n),n}return u(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handelChange",value:function(e){try{var t=e.target.value;this.setState({text:t})}catch(e){throw e}}},{key:"handleClick",value:function(){var e=this;try{this.state.text&&this.props.sendChat(this.state.text,function(t){t&&e.setState({text:""})})}catch(e){throw e}}},{key:"render",value:function(){return s.default.createElement("article",{className:"chattext-wrapper"},s.default.createElement("section",{className:"chattext-box"},s.default.createElement("textarea",{id:"myChatId",value:this.state.text,onChange:this.handelChange})),s.default.createElement("section",{className:"chattext-send"},s.default.createElement("button",{className:"chattext-submit",onClick:this.handleClick},"Submit")))}}]),t}(s.default.Component);d.propTypes={sendChat:p.default.func},t.default=(0,l.withRouter)(d)},290:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=r(c),l=n(26),f=n(10),p=r(f);n(521);var d=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatTile",chat:n.props.chat},n}return u(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({chat:e.chat})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.chat.timestamp?new Date(this.state.chat.timestamp).toISOString().split("T").join("<>"):"";return s.default.createElement("article",{className:"chat-tile-wrapper"},s.default.createElement("section",{className:"chattile-user"},this.state.chat.user),s.default.createElement("section",{className:"chattile-time"},e),s.default.createElement("section",{className:"chattile-text"},this.state.chat.text))}}]),t}(s.default.Component);d.propTypes={chat:p.default.object},t.default=(0,l.withRouter)(d)},291:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{participantActions:e.chat.participantActions}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=function(e){return e&&e.__esModule?e:{default:e}}(c),l=n(50),f=n(26);n(522);var p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatUserLog",actions:n.props.participantActions},n.renderActions=n.renderActions.bind(n),n}return o(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.participantActions.sort(function(e,t){return t.user.timestamp-e.user.timestamp});this.setState({actions:t})}},{key:"componentWillUnmount",value:function(){}},{key:"renderActions",value:function(e){return 0===e.length?"":e.map(function(e,t){var n="joined"===e.action?"add":"remove",r=""+new Date(e.user.timestamp).toISOString().split("T").join("<>"),a="joined"===e.action?"Joined @  "+r:"Left @ "+r;return s.default.createElement("p",{key:t,className:"userlog "+n,"data-val":JSON.stringify(e)},e.user.userName+" "+a)})}},{key:"render",value:function(){return s.default.createElement("article",{className:"chatuserlog-wrapper"},s.default.createElement("section",{className:"chat-title"},s.default.createElement("label",null,"Chat Logs")),s.default.createElement("section",{className:"chat-user-actions"},this.renderActions(this.state.actions)))}}]),t}(s.default.Component);t.default=(0,f.withRouter)((0,l.connect)(u)(p))},292:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{chatsHistory:e.chat.chatsHistory}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),l=r(s),f=n(50),p=n(26),d=n(10),h=r(d),m=n(290),y=r(m);n(523);var v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"ChatWindow",chats:n.props.chatsHistory},n}return u(t,e),c(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.chatsHistory.sort(function(e,t){return e.timestamp-t.timestamp});this.setState({chats:t})}},{key:"componentWillUnmount",value:function(){}},{key:"generateChatTiles",value:function(e){try{return e.map(function(e,t){return l.default.createElement("section",{key:t},l.default.createElement(y.default,{chat:e}))})}catch(e){throw e}}},{key:"render",value:function(){return l.default.createElement("article",{className:"chatwindow-wrapper"},l.default.createElement("section",{id:"chatWrap",className:"chatwindow-chats"},this.generateChatTiles(this.state.chats)))}}]),t}(l.default.Component);v.propTypes={chatsHistory:h.default.object},t.default=(0,p.withRouter)((0,f.connect)(i)(v))},293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n(524);var o=function(e){return a.default.createElement("article",{className:"DisplayVideo-wrapper"},a.default.createElement("video",{id:e.videoId}))};t.default=o},294:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),l=r(s),f=n(10),p=r(f);n(525);var d=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"UserFeed",loggedInUser:{userName:null},videoStream:{},videoParticipants:[]},n.renderUsers=n.renderUsers.bind(n),n}return i(t,e),c(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;if(this.state.loggedInUser.userName!==e.loggedInUser.userName&&this.setState({loggedInUser:e.loggedInUser}),[].concat(a(this.state.videoParticipants)).length!==e.videoParticipants.length){var n=e.videoParticipants.filter(function(e){return t.state.loggedInUser.userName!==e.userName});this.setState({videoParticipants:n})}if(this.state.videoParticipants.length>0){var r=e.videoStreams;if(null!==r){var o=this.state.videoStream;o[r.user.userName]=r.stream,this.setState({videoStream:o})}}}},{key:"renderUsers",value:function(){var e=this;return this.state.videoParticipants.map(function(t,n){return l.default.createElement("article",{className:"video-box",key:n},l.default.createElement("img",{src:e.state.videoStream[t.userName]}))})}},{key:"render",value:function(){return l.default.createElement("article",{className:"UserFeed-wrapper"},this.renderUsers())}}]),t}(l.default.Component);d.propTypes={videoParticipants:p.default.array,videoStreams:p.default.object,loggedInUser:p.default.object},t.default=d},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=r(c),l=n(26),f=n(10),p=r(f),d=n(293),h=r(d);n(526);var m=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"webcab",constraints:{audio:!1,video:{width:n.props.width,height:n.props.height,id:"myVideo"}}},n.interval=null,n.getUserMedia=n.getUserMedia.bind(n),n.takePicture=n.takePicture.bind(n),n}return u(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentDidMount",value:function(){var e=this,t=this.state.constraints;this.getUserMedia(t).then(function(t){var n=document.getElementById(e.state.constraints.video.id),r=window.URL||window.webkitURL;n.src=r.createObjectURL(t),n.play(),e.interval=setInterval(function(){var t=e.takePicture();e.props.streamer(t)},10)}).catch(function(e){console.log(e)})}},{key:"componentWillUnmount",value:function(){}},{key:"getUserMedia",value:function(e){return new Promise(function(t,n){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia.call(navigator,e,t,n)})}},{key:"takePicture",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d"),n=document.getElementById(this.state.constraints.video.id);return t.drawImage(n,0,0,250,250),e.toDataURL("image/png")}},{key:"render",value:function(){return s.default.createElement("article",{className:"webcam-container"},s.default.createElement(h.default,{videoId:this.state.constraints.video.id}))}}]),t}(s.default.Component);m.propTypes={constraints:p.default.object,height:p.default.number,width:p.default.number,streamer:p.default.func},t.default=(0,l.withRouter)(m)},296:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{user:e.user,chat:e.chat}}function c(e){return(0,d.bindActionCreators)({connected:S.connected,newUserJoined:S.newUserJoined,userLeft:S.userLeft,messageSent:S.messageSent},e)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=r(l),p=n(50),d=n(51),h=n(26),m=n(10),y=r(m),v=n(685),b=r(v),_=n(292),w=r(_),g=n(291),E=r(g),O=n(289),j=r(O),k=n(295),P=r(k),N=n(294),C=r(N),S=n(278);n(527);var M=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"home",user:n.props.user,chat:n.props.chat,streamData:null},n.socket=null,n.unloadWindow=n.unloadWindow.bind(n),n.sendChat=n.sendChat.bind(n),n.sendStream=n.sendStream.bind(n),n}return u(t,e),s(t,[{key:"componentWillMount",value:function(){this.state.user.userName?this.socket=b.default.connect("https://hannad.herokuapp.com/",{reconnect:!0}):this.props.history.push("/login")}},{key:"componentWillReceiveProps",value:function(e){this.setState({chat:e.chat,user:e.user})}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.socket.on("acknowledgement",function(t){t&&(e.props.connected(t),e.socket.emit("user:enter",{user:e.state.user})),e.socket.on("user:joins",function(t){e.props.newUserJoined(t)}),e.socket.on("user:left",function(t){e.props.userLeft(t)}),e.socket.on("newChatMessage",function(t){e.props.messageSent(t);var n=setTimeout(function(){var e=document.getElementById("chatWrap"),t=e.scrollHeight;e.scrollTop=t+100,clearTimeout(n)},100)}),e.socket.on("videoStream",function(t){e.setState({streamData:t})}),window.addEventListener("beforeunload",e.unloadWindow)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.unloadWindow)}},{key:"unloadWindow",value:function(){this.socket.emit("user:quits",this.state.user)}},{key:"sendChat",value:function(e,t){var n={user:this.state.user.userName,timestamp:(new Date).getTime(),text:e};this.props.messageSent(n),this.socket.emit("user:message",n),t&&"function"==typeof t&&t(!0);var r=setTimeout(function(){var e=document.getElementById("chatWrap"),t=e.scrollHeight;e.scrollTop=t+100,clearTimeout(r)},100)}},{key:"sendStream",value:function(e){this.state.user.userName&&this.socket.emit("user:video",{user:this.state.user,stream:e})}},{key:"render",value:function(){return f.default.createElement("article",{className:"home-container"},f.default.createElement("section",{className:"row"},f.default.createElement("p",{className:"title"},"Welcome ",this.state.user.userName,f.default.createElement("i",{className:"connection-status "+this.state.chat.connected},this.state.chat.connected?"Connected":"disconnected"))),this.state.user&&this.state.chat.connected?f.default.createElement("article",null,f.default.createElement("article",{className:"row"},f.default.createElement("section",{className:"col-md-2"},f.default.createElement(P.default,{height:"230",width:"230",streamer:this.sendStream})),f.default.createElement("section",{className:"col-md-5"},f.default.createElement(w.default,null),f.default.createElement(j.default,{sendChat:this.sendChat})),f.default.createElement("section",{className:"col-md-5"},f.default.createElement(C.default,{loggedInUser:this.state.user,videoParticipants:this.props.chat.chatParticipants,videoStreams:this.state.streamData}))),f.default.createElement("article",{className:"row"},f.default.createElement("section",{className:"col-md-12"},f.default.createElement(E.default,null)))):null)}}]),t}(f.default.Component);M.propTypes={user:y.default.object},t.default=(0,h.withRouter)((0,p.connect)(i,c)(M))},297:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return(0,f.bindActionCreators)({userLoggedIn:d.userLoggedIn},e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),s=function(e){return e&&e.__esModule?e:{default:e}}(c),l=n(50),f=n(51),p=n(26),d=n(279);n(528);var h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={userName:""},n.handeClick=n.handeClick.bind(n),n.handleChange=n.handleChange.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n}return o(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handeClick",value:function(){try{var e=this.state.userName;this.props.userLoggedIn(e),e&&this.props.history.push("/home")}catch(e){throw e}}},{key:"handleChange",value:function(e){this.setState({userName:e.target.value})}},{key:"handleKeyDown",value:function(e){if(13===e.keyCode){var t=this.state.userName;this.props.userLoggedIn(t),t&&this.props.history.push("/home")}}},{key:"render",value:function(){return s.default.createElement("article",{className:"login-container"},s.default.createElement("section",{className:"row"},s.default.createElement("section",{className:"col-md-12 m12"},s.default.createElement("input",{type:"text",onChange:this.handleChange,className:"form-control",placeholder:"Enter your chat name",onKeyDown:this.handleKeyDown}))),s.default.createElement("section",{className:"row"},s.default.createElement("section",{className:"col-md-12 m12"},s.default.createElement("section",null,s.default.createElement("button",{className:"login-btn",onClick:this.handeClick},"Connect to Group Chat")))))}}]),t}(s.default.Component);t.default=(0,p.withRouter)((0,l.connect)(null,u)(h))},517:function(e,t){},518:function(e,t){},519:function(e,t){},520:function(e,t){},521:function(e,t){},522:function(e,t){},523:function(e,t){},524:function(e,t){},525:function(e,t){},526:function(e,t){},527:function(e,t){},528:function(e,t){},697:function(e,t){},698:function(e,t,n){e.exports=n(258)}},[698]);
//# sourceMappingURL=app.bundle.js.map

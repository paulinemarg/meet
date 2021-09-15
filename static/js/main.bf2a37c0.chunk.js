(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),s=n.n(o),c=(n(30),n(2)),i=n(6),u=n(4),l=n(3),d=(n(31),n(9)),h=n(0),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={expanded:!1},a.toggleExpanded=a.toggleExpanded.bind(Object(d.a)(a)),a}return Object(i.a)(n,[{key:"toggleExpanded",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var e=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("h2",{className:"event__Overview--name",children:e.summary}),Object(h.jsxs)("div",{className:"basic-info",children:[Object(h.jsx)("h2",{className:"event-location",children:e.location}),Object(h.jsxs)("h3",{className:"event__Overview--localDate",children:["start: ",e.start.dateTime," - Time Zone: ",e.start.timeZone]}),!0===this.state.expanded&&Object(h.jsx)("p",{className:"event-details",children:e.description})]}),Object(h.jsx)("button",{className:"details-btn",onClick:this.toggleExpanded,children:this.state.expanded?"Close":"Read More"})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,backgroundColor:a.backgroundColor,height:a.height,marginTop:a.marginTop,fontSize:a.fontsize}},a.color=null,a.backgroundColor=null,a.height=null,a.marginTop=null,a.border=null,a.fontSize="16px",a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a.backgroundColor="white",a.height="30px",a.marginTop="20px",a}return n}(m),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a.backgroundColor="white",a.height="30px",a.marginTop="900px",a.fontsize="16px",a}return n}(m),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,0)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",placeholder:"Search a city...",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]}),Object(h.jsx)(v,{text:this.state.infoText})]})}}]),n}(a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),n<1||n>32?e.setState({numberOfEvents:"",errorText:"Please insert a valid number between 1 and 32"}):e.setState({numberOfEvents:n,errorText:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(h.jsxs)("div",{className:"numberOfEvents",children:[Object(h.jsx)("input",{className:"event-number-input",type:"number",placeholder:"0",id:"numberOfEvents__input",value:e,onChange:this.handleInputChanged}),Object(h.jsx)(b,{text:this.state.errorText})]})}}]),n}(a.Component),w=n(25),O=n(7),x=n.n(O),y=n(8),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];k=JSON.parse(JSON.stringify(k));var T=n(13),S=n.n(T),C=n(10),E=n.n(C),Z=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,a,r,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,S.a.get("https://4v4gfj7cpj.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&W(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",k);case 4:return e.next=6,Z();case 6:if(!(t=e.sent)){e.next=16;break}return M(),n="https://4v4gfj7cpj.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,S.a.get(n);case 12:return(a=e.sent).data&&(r=q(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),E.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},W=function(){var e=Object(y.a)(x.a.mark((function e(t){var n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://4v4gfj7cpj.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=e.map((function(e){return e.location}));return Object(w.a)(new Set(t))},J=(n(52),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32},e.updateEvents=function(t,n){e.mounted=!0,I().then((function(a){var r="all"===t&&0===n?a:"all"!==t&&0===n?a.filter((function(e){return e.location===t})):a.slice(0,n);e.mounted&&e.setState({events:r,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,I().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:q(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"scrollTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("img",{src:"https://img.icons8.com/wired/64/000000/worldwide-location.png",alt:"World logo"}),Object(h.jsx)("h1",{children:"Let's Meet-App"}),Object(h.jsx)(g,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(f,{className:"eventlist",events:this.state.events}),Object(h.jsx)("button",{className:"scrollup-btn",onClick:this.scrollTop,children:"\u2191"}),Object(h.jsx)(j,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents})]})})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(24).config("64da1564b1d14c79bcc89d4231c50688").install(),s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),A()}},[[54,1,2]]]);
//# sourceMappingURL=main.bf2a37c0.chunk.js.map
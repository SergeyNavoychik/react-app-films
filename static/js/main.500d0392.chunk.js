(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(46)},44:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);t(18);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=t(2),o=t(3),s=t(5),m=t(4),d=t(6);function u(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand",href:"#"},"Films App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"})))))}function v(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"text-center"},"\xa9 2018 Copyright"))}var p=function(e){var a=e.title,t=e.description,n=e.poster;return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"item-field-card"},r.a.createElement("img",{className:"item-field-card__image",src:n,alt:"Card"}),r.a.createElement("div",{className:"item-field-card__body"},r.a.createElement("h5",{className:"body__title"},a),r.a.createElement("p",null,t))))},b=t(16),f=t.n(b),g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={filmData:null,isLoading:!0,error:null},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getFilmData()}},{key:"getFilmData",value:function(){var e=this;f.a.get("http://www.omdbapi.com/?apikey=".concat("e4a1404c","&t=kingdom")).then(function(a){var t=a.data,n={title:t.Title,description:t.Plot,poster:t.Poster};e.setState({filmData:n,isLoading:!1})}).catch(function(a){var t=a.response.data.Error;e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.filmData,n=e.error;return r.a.createElement("div",{className:"row"},n&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},n),!a&&!n&&r.a.createElement(p,t),a&&r.a.createElement("div",{className:"fa-1x col-12 text-center"},r.a.createElement("i",{className:"fas fa-spinner fa-spin"})))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(g,null))),r.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(44);c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.500d0392.chunk.js.map
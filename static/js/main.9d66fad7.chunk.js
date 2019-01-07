(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,t){e.exports=t(70)},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);t(36);var n=t(0),r=t.n(n),l=t(30),i=t.n(l),c=t(6),m=t(7),s=t(9),o=t(8),d=t(10),u=t(16),p=t(73),f=t(74),v=t(71),E=t(12),b=t(32),h=t(11),F="FETCH_FILMS_REQUEST",g="FETCH_FILMS_SUCCESS",y="FETCH_FILMS_FAILED",N="UPDATE_FILM",j={films:[],isFilmsLoading:!1,errorLoadFilms:null};var O=Object(E.c)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case F:return Object(h.a)({},e,{isFilmsLoading:!0});case y:return Object(h.a)({},e,{isFilmsLoading:!1,errorLoadFilms:a.payload});case g:return Object(h.a)({},e,{isFilmsLoading:!1,errorLoadFilms:null,films:a.payload});case N:var t=e.films.map(function(e){return a.payload.imdbID===e.imdbID?a.payload:e});return Object(h.a)({},e,{films:t});default:return e}}}),D=Object(E.d)(O,Object(E.a)(b.a)),k=t(72);function C(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand",href:"#"},"Films App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(k.a,{to:"/",exact:!0,className:"nav-item nav-link"},"Home"),r.a.createElement(k.a,{to:"/dashboard/",className:"nav-item nav-link"},"Dashboard"),r.a.createElement(k.a,{to:"/list/",className:"nav-item nav-link"},"List")))))}function w(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"text-center"},"\xa9 2018 Copyright"))}var _=t(34),L=t.n(_);function T(e){return{type:N,payload:e}}function S(){return function(e){return e({type:F}),L.a.get("https://www.omdbapi.com/?apikey=".concat("e4a1404c","&s=game")).then(function(a){var t;e((t=a.data.Search,{type:g,payload:t}))}).catch(function(a){var t;e((t=a.response.data.Error,{type:y,payload:t}))})}}function I(e){return function(a){var t=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.films.length<=0&&this.props.fetchFilms()}},{key:"render",value:function(){var e=this.props,t=e.films,n=e.isFilmsLoading,l=e.errorLoadFilms,i=e.updateFilm;return r.a.createElement("div",{className:"row"},n&&r.a.createElement("div",{className:"fa-2x spinner-absolute-center"},r.a.createElement("i",{className:"fas fa-spinner fa-spin"})),l&&r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},l)),!n&&r.a.createElement(a,Object.assign({},this.props,{films:t,updateFilm:i})))}}]),t}(n.Component),l={fetchFilms:S,updateFilm:T};return Object(u.b)(function(a){var t=a.films.films;return e&&(t=t.slice(0,e+1)),{films:t,isFilmsLoading:a.films.isFilmsLoading,errorLoadFilms:a.films.errorLoadFilms}},l)(t)}}var x=t(48);var Y=function(e){var a=e.filmData,t=e.index;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,a.Title),r.a.createElement("td",null,a.Year),r.a.createElement("td",null,r.a.createElement(x.a,{to:"/edit/".concat(a.imdbID)},r.a.createElement("i",{className:"fas fa-pen"}))))},A=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).mapFilmsData=function(e,a){return r.a.createElement(Y,{key:e.imdbID,index:a+1,filmData:e})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.films;return r.a.createElement("div",{className:"col-12"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Year"),r.a.createElement("th",{scope:"col"},"Actions"))),r.a.createElement("tbody",null,e.map(this.mapFilmsData))))}}]),a}(n.Component),M=I(10)(A);var H=function(e){var a=e.filmData;return r.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3 item-film-card"},r.a.createElement("div",{className:"item-film-card__content"},r.a.createElement("img",{className:"item-field-card__image",src:a.Poster,alt:"Card"}),r.a.createElement("div",{className:"item-field-card__body"},r.a.createElement("div",null,r.a.createElement("h5",{className:"body__title"},a.Title),r.a.createElement("p",null,a.Year)),r.a.createElement("div",{className:"item-field-card__buttons"},r.a.createElement(x.a,{to:"/edit/".concat(a.imdbID),className:"item-field-card__btn"},r.a.createElement("i",{className:"fas fa-pen"}))))))},B=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).mapFilmsData=function(e){return r.a.createElement(H,{key:e.imdbID,filmData:e})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.films;return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},e.map(this.mapFilmsData)))}}]),a}(n.Component),U=I(5)(B),J=t(14),P=t(22),R=t.n(P);var W=function(e){var a=e.films;return r.a.createElement("div",{className:"col-md-4 sidebar-films"},r.a.createElement("h4",{className:"sidebar-films__title"},"All films"),r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:e.imdbID},r.a.createElement(k.a,{to:"/edit/".concat(e.imdbID)},e.Title))})))},q=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).findFilm=function(e){var a=t.props.films.find(function(a){return a.imdbID===e});t.setState({filmData:a,isFilmNotFound:!a})},t.handleChangeForm=function(e){var a=e.target,n=a.name,r=a.value,l=Object(h.a)({},t.state.formErrors);l[n]=r?null:"Field is required.",t.setState({formErrors:l,filmData:Object(h.a)({},t.state.filmData,Object(J.a)({},n,r))})},t.handleSubmitForm=function(e){e.preventDefault();var a=t.state,n=a.filmData,r=a.formErrors;r.Title||r.Year||(t.props.updateFilm(n),t.props.history.push("/dashboard"))},t.handleCloseForm=function(){t.props.history.goBack()},t.state={filmData:null,isFilmNotFound:!1,formErrors:{Title:null,Year:null}},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.findFilm(e)}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.findFilm(this.props.match.params.id)}},{key:"render",value:function(){var e=this.state,a=e.filmData,t=e.isFilmNotFound,n=e.formErrors,l=this.props.films;return r.a.createElement("div",{className:"col-12"},t&&r.a.createElement("div",{className:""},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Film not found.")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},a&&r.a.createElement("form",{onSubmit:this.handleSubmitForm},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",onChange:this.handleChangeForm,value:a.Title,className:R()("form-control",{"is-invalid":n.Title}),name:"Title",id:"title"}),n.Title&&r.a.createElement("div",{className:"invalid-feedback"},n.Title)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"year"},"Year"),r.a.createElement("input",{type:"text",onChange:this.handleChangeForm,value:a.Year,className:R()("form-control",{"is-invalid":n.Year}),name:"Year",id:"year"}),n.Year&&r.a.createElement("div",{className:"invalid-feedback"},n.Year)),r.a.createElement("button",{type:"submit",className:"btn btn-primary",style:{marginRight:"10px"}},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleCloseForm},"Back"))),r.a.createElement(W,{films:l})))}}]),a}(n.Component),Q=I()(q);function $(){return r.a.createElement("div",null,"Home page")}var z=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{store:D},r.a.createElement(p.a,null,r.a.createElement("div",{className:"app-container"},r.a.createElement(C,null),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(f.a,null,r.a.createElement(v.a,{path:"/",exact:!0,component:$}),r.a.createElement(v.a,{path:"/dashboard",component:U}),r.a.createElement(v.a,{path:"/list",component:M}),r.a.createElement(v.a,{path:"/edit/:id",component:Q})))),r.a.createElement(w,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(68);i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.9d66fad7.chunk.js.map
(this["webpackJsonpreact-animation-challenge"]=this["webpackJsonpreact-animation-challenge"]||[]).push([[0],[,,function(e,t,a){e.exports={"series-list":"SeriesList_series-list__2WWko","series-list__top-bar":"SeriesList_series-list__top-bar__knknj","series-list__header":"SeriesList_series-list__header__2LQ8D","series-list__see-all":"SeriesList_series-list__see-all__36sLN","series-list__thumbnails":"SeriesList_series-list__thumbnails__2c_9T"}},function(e,t,a){e.exports={"series-thumbnail":"SeriesThumbnail_series-thumbnail__J97jg","series-thumbnail__image":"SeriesThumbnail_series-thumbnail__image__fn8V2","series-thumbnail__title":"SeriesThumbnail_series-thumbnail__title__3WZIu","series-thumbnail__main-text":"SeriesThumbnail_series-thumbnail__main-text__3nUoF","series-thumbnail__sub-text":"SeriesThumbnail_series-thumbnail__sub-text__2H_Hj"}},,,function(e,t,a){e.exports={"series-details":"SeriesDetails_series-details__GyUme","series-details__title":"SeriesDetails_series-details__title__2hubX"}},,,,function(e,t,a){e.exports={app:"App_app__2ziFi"}},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(9),r=a.n(n),l=(a(16),a(10)),c=a.n(l),_=a(7),o=a(2),m=a.n(o),u=a(3),h=a.n(u),d=function(e){var t=e.onClick,a=Object(i.useRef)(null);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:h.a["series-thumbnail"],onClick:function(e){t(a.current.getBoundingClientRect())}},s.a.createElement("div",{className:h.a["series-thumbnail__image"],ref:a},s.a.createElement("div",{className:h.a["series-thumbnail__title"]},"The Handmaid's Tale")),s.a.createElement("div",{className:h.a["series-thumbnail__main-text"]},"Rated by a friend"),s.a.createElement("div",{className:h.a["series-thumbnail__sub-text"]},"3 Seasons")))},b=a(4),f=a(6),p=a.n(f),E=function(e){var t=e.isOpen,a=e.initialCoordinates,n=e.onRequestClose,r=a||{x:0,y:0,width:0,height:0},l=r.x,c={top:r.y,left:l,width:r.width,height:r.height,delay:500},_={top:0,left:0,width:window.innerWidth,height:window.innerHeight,delay:500},o=Object(i.useRef)(),m=Object(i.useRef)(),u=Object(b.c)(t,null,{ref:m,from:c,enter:_,leave:c,config:{mass:1,tension:300,friction:35}}),h=Object(b.c)(t,null,{ref:o,from:{transform:"translateY(100%)",opacity:0},enter:{transform:"translateY(0)",opacity:1},leave:{transform:"translateY(100%)",opacity:0}});return Object(b.b)(t?[m,o]:[o,m],[0,t?.1:.3]),s.a.createElement(s.a.Fragment,null,u.map((function(e){var t=e.item,a=e.key,i=e.props;return t&&s.a.createElement(b.a.div,{key:a,className:p.a["series-details"],style:i,onClick:n},s.a.createElement("div",{className:p.a["series-details__image"]}),h.map((function(e){var t=e.item,a=e.key,i=e.props;return t&&s.a.createElement(b.a.div,{key:a,className:p.a["series-details__title"],style:i},"The Handmaid's Tale")})))})))},v=function(e){var t=Object(i.useState)(!1),a=Object(_.a)(t,2),n=a[0],r=a[1],l=Object(i.useState)(),c=Object(_.a)(l,2),o=c[0],u=c[1],h=function(e){r(!0),u(e)};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:m.a["series-list"]},s.a.createElement("div",{className:m.a["series-list__top-bar"]},s.a.createElement("h2",{className:m.a["series-list__header"]},"Series for you"),s.a.createElement("div",{className:m.a["series-list__see-all"]},"See all 10")),s.a.createElement("div",{className:m.a["series-list__thumbnails"]},s.a.createElement(d,{onClick:h}),s.a.createElement(d,{onClick:h}),s.a.createElement(d,{onClick:h}),s.a.createElement(d,{onClick:h}),s.a.createElement(d,{onClick:h}))),s.a.createElement(E,{isOpen:n,initialCoordinates:o,onRequestClose:function(){return r(!1)}}))};var g=function(){return s.a.createElement("div",{className:c.a.app},s.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.45c0b193.chunk.js.map
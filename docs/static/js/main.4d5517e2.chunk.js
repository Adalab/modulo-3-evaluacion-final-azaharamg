(this.webpackJsonpeval=this.webpackJsonpeval||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},24:function(e,a,t){e.exports=t(40)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),l=t.n(c),i=t(6),s=(t(29),t(16)),m=t(17),o=t(22),u=t(18),h=t(9),f=t(23),d=t(5),p=function(){return fetch("https://rickandmortyapi.com/api/character/?page=19").then((function(e){return e.json()}))},E=t(19),_=t.n(E);t(30),t(31);var v=function(e){return n.a.createElement("form",{className:"form"},n.a.createElement("input",{className:"form__searchBar",type:"text",name:"searchText",id:"searchText",placeholder:"Search your favourite...",value:e.value,onChange:function(a){var t=a.target.value.toLowerCase();e.handleSearch(t)}}))},N=(t(32),t(33),function(e){return"Humanoid"===e?"fas fa-robot":"Alien"===e?"fab fa-reddit-alien":"Animal"===e?"fas fa-paw":"Human"===e?"fas fa-male":void 0});var g=function(e){var a=e.characterItem,t=a.id,r=a.image,c=a.name,l=a.species;return n.a.createElement(i.b,{className:"list__item--link",to:"/character/".concat(t)},n.a.createElement("img",{className:"list__item--img",src:r,alt:"character ".concat(c)}),n.a.createElement("h3",{className:"list__item--title"},c),n.a.createElement("p",null,n.a.createElement("i",{className:"list__item--paragraph ".concat(N(l)),title:"species"}),"Vampire"===l?"It is a ".concat(l," !!!"):l))};var b=function(e){return n.a.createElement("ul",{className:"list"},e.filteredBySearch.map((function(e){return n.a.createElement("li",{key:e.id,className:"list__item"},n.a.createElement(g,{characterItem:e}))})))},S=(t(39),function(e){return"Dead"===e?"fas fa-skull-crossbones":"Alive"===e?"fas fa-heartbeat":"far fa-question-circle"});var k=function(e){var a=e.selectedCharacter,t=a.image,r=a.name,c=a.species,l=a.location,s=a.episode,m=a.status;return n.a.createElement("section",{className:"section"},n.a.createElement(i.b,{className:"section__link",to:"/"},n.a.createElement("i",{className:"fas fa-chevron-left",title:"go back"},"Go Back")),n.a.createElement("article",{className:"article"},n.a.createElement("img",{className:"article__img",src:t,alt:"Character ".concat(r)}),n.a.createElement("div",{className:"article__container"},n.a.createElement("h2",{className:"article__title"},r),n.a.createElement("ul",{className:"article__list"},n.a.createElement("li",{className:"article__list--item"},n.a.createElement("strong",null,"Status: "),n.a.createElement("i",{className:S(m),title:"status"})),n.a.createElement("li",{className:"article__list--item"},n.a.createElement("strong",null,"Species: ")," ",c),n.a.createElement("li",{className:"article__list--item"},n.a.createElement("strong",null,"Origin: "),l.name),n.a.createElement("li",{className:"article__list--item"},n.a.createElement("strong",null,"Episodes: "),s.length)))))},y=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(u.a)(a).call(this))).state={results:[],searchText:""},e.handleSearch=e.handleSearch.bind(Object(h.a)(e)),e.renderCharacterDetail=e.renderCharacterDetail.bind(Object(h.a)(e)),e}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(a){return e.setState({results:a.results})}))}},{key:"handleSearch",value:function(e){this.setState({searchText:e})}},{key:"filteredBySearch",value:function(){var e=this;return this.state.results.filter((function(a){return a.name.toLowerCase().includes(e.state.searchText)}))}},{key:"renderCharacterDetail",value:function(e){var a=parseInt(e.match.params.id),t=this.state.results.find((function(e){return e.id===a}));if(void 0!==t)return n.a.createElement(k,{selectedCharacter:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("header",{className:"app__header"},n.a.createElement("img",{className:"app__logo",src:_.a,alt:"logo"})),n.a.createElement("main",{className:"app__main"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/"},n.a.createElement(v,{handleSearch:this.handleSearch,value:this.state.searchText}),n.a.createElement(b,{filteredBySearch:this.filteredBySearch()})),n.a.createElement(d.a,{path:"/character/:id",render:this.renderCharacterDetail}))))}}]),a}(n.a.Component);l.a.render(n.a.createElement(i.a,null,n.a.createElement(y,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4d5517e2.chunk.js.map
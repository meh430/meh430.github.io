(this.webpackJsonpreactweb=this.webpackJsonpreactweb||[]).push([[0],{223:function(e,t,a){e.exports=a(383)},228:function(e,t,a){},383:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(46),o=a.n(l),c=(a(228),a(20)),i=a(16),s=a(21),u=a(22),m=(a(65),a(17)),h=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={date:"date",time:"time",greeting:"greeting"},n.getDate=n.getDate.bind(Object(m.a)(n)),n.getTime=n.getTime.bind(Object(m.a)(n)),n.getDate(),setInterval(n.getTime,2e3),setTimeout(n.getDate,1e3),setInterval(n.getDate,18e3),n}return Object(i.a)(a,[{key:"getDate",value:function(){var e,t=new Date,a=t.getFullYear(),n=h[t.getMonth()],r=t.getDate(),l=g[t.getDay()],o="".concat(l,", ").concat(n," ").concat((e=r,e+(e>0?["th","st","nd","rd"][e>3&&e<21||e%10>3?0:e%10]:"")),", ").concat(a);this.setState({date:o})}},{key:"getTime",value:function(){var e=new Date,t=e.getHours(),a=e.getMinutes();0===a?a="00":a<10&&(a="0".concat(a));var n="hmm";n=t>=0&&t<12?"Good Morning":t>=12&&t<17?"Good Afternoon":t>=17&&t<20?"Good Evening":"Good Night";var r="hm";t>12?(r="P.M",t-=12):12===t?r="P.M":(0===t&&(t=12),r="A.M");var l="".concat(t,":").concat(a," ").concat(r);this.setState({time:l,greeting:n})}}]),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"dateStuff",align:"bottom"},r.a.createElement("h1",{id:"date",align:"center",className:"mainPage"},this.state.date),r.a.createElement("h2",{id:"time",align:"center",className:"mainPage"},this.state.time),r.a.createElement("h3",{id:"state",align:"center",className:"mainPage"},this.state.greeting))}}]),a}(r.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={quote:"Quote",author:"Author"},n.getQuote=n.getQuote.bind(Object(m.a)(n)),n.displayQuote=n.displayQuote.bind(Object(m.a)(n)),setTimeout(n.getQuote,10),n}return Object(i.a)(a,[{key:"getQuote",value:function(){var e=this;fetch("https://quotes.rest/qod").then((function(e){if(e.ok)return e.json();throw new Error("Failed to get quote")}),(function(e){return console.log(e.message)})).then((function(t){console.log(t),e.displayQuote(t)}))}},{key:"displayQuote",value:function(e){var t=e,a=(t=t.contents).quotes;a.length?this.setState({quote:a[0].quote,author:a[0].author}):this.setState({quote:"Not Found",author:"Not Found"})}}]),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"quoteStuff",align:"center"},r.a.createElement("h3",{id:"quote",align:"center",className:"mainPage"},'"',this.state.quote,'"'),r.a.createElement("hr",{className:"quoteRule"}),r.a.createElement("h4",{id:"author",align:"center",className:"mainPage"},r.a.createElement("strong",null,this.state.author)))}}]),a}(r.a.Component),f=a(45),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={imgurl:""},n.getImages=n.getImages.bind(Object(m.a)(n)),n.setImage=n.setImage.bind(Object(m.a)(n)),setTimeout(n.getImages,10),n}return Object(i.a)(a,[{key:"performSearch",value:function(e){if(13===e.keyCode||13===e.which){var t=document.getElementById("searchBar").value,a="https://google.com/search?q=";t.split(" ").forEach((function(e,t,n){n.length-1===t?a+=e:a+="".concat(e,"%20")})),window.open(a,"_self")}}},{key:"getImages",value:function(){var e=this;fetch("https://reddtwalls-8176.restdb.io/rest/images",{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",apikey:"5e7f67a8f96f9f072a0b0a98"}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to get image")}),(function(e){return console.log(e.message)})).then((function(t){return setTimeout((function(){return e.setImage(t)}),1)}))}},{key:"setImage",value:function(e){var t="";if(console.log(e),e.length){for(var a=0;a<e.length;a++){t+=e[a].image+" "}var n=t.trim().split(" ");console.log(n);var r=Math.floor(Math.random()*n.length),l=n[r].includes("https")?n[r]:n[r].replace("http","https");console.log(l),this.setState({imgurl:l})}else console.log("No response for images")}}]),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(this.state.imgurl,")")}},r.a.createElement("br",null),r.a.createElement(b,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"searchDiv"},r.a.createElement("input",{type:"search",id:"searchBar",align:"center",placeholder:"Search...",onKeyPress:this.performSearch})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(f.b,{to:"/about",className:"myButton",align:"center",style:{textDecoration:"none"}},"about")))}}]),a}(r.a.Component),E=(a(94),a(392)),j=a(390),v=a(393),y=a(212),O=a(394),k=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={index:0},n.nextImage=n.nextImage.bind(Object(m.a)(n)),n.getAsList=n.getAsList.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"getAsList",value:function(){for(var e=this.props.info.features,t=[],a=0;a<e.length-1;a++)t.push(r.a.createElement("li",{key:"feature_".concat(a)},'"',e[a],'"'));return t}},{key:"nextImage",value:function(){if(1!==this.props.info.images.length){var e=this.state.index;e+1===this.props.info.images.length?e=0:e++,this.setState({index:e})}}}]),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(v.a,null,"Info"),className:"modal"},r.a.createElement(j.a.Header,null,this.props.info.title),r.a.createElement(j.a.Content,{image:!0},r.a.createElement(y.a,{rounded:!0,wrapped:!0,size:"big",src:this.props.info.images[this.state.index]}),r.a.createElement(j.a.Description,null,r.a.createElement(O.a,null,"Project Overview"),r.a.createElement("p",null,this.props.info.info),r.a.createElement("h2",null,"Features"),r.a.createElement("ul",null,this.getAsList()),r.a.createElement("button",{className:"backButton",id:"nextButton",onClick:this.nextImage},"Next Image"))))}}]),a}(r.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{style:{borderRadius:"10px",borderColor:"#bfbdbf",width:"18em"}},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,this.props.title),r.a.createElement(E.a.Subtitle,{className:"mb-2 text-muted"},this.props.subtitle),r.a.createElement(E.a.Text,null,this.props.description),r.a.createElement("center",null,r.a.createElement("a",{align:"center",id:"repoLink",className:"backButton",href:this.props.features[this.props.features.length-1],target:"_blank"})),r.a.createElement(k,{info:this.props})))}}]),a}(r.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={projectList:[]},n.getProjects=n.getProjects.bind(Object(m.a)(n)),n.parseProjects=n.parseProjects.bind(Object(m.a)(n)),n.getAsList=n.getAsList.bind(Object(m.a)(n)),setTimeout(n.getProjects,1),n}return Object(i.a)(a,[{key:"getProjects",value:function(){var e=this;fetch("https://reddtwalls-8176.restdb.io/rest/projects",{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",apikey:"5e7f67a8f96f9f072a0b0a98"}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to get projects")}),(function(e){return console.log(e.message)})).then((function(t){return setTimeout((function(){return e.parseProjects(t)}),1)}))}},{key:"parseProjects",value:function(e){if(console.log(e),e.length){for(var t,a,n,r,l,o,c=[],i=0;i<e.length;i++)c.push((t=e[i].title,a=e[i].subtitle,n=e[i].description,r=e[i].info,l=e[i].features,o=e[i].images,{title:t,subtitle:a,description:n,info:r,features:l,images:o}));this.setState({projectList:c})}else console.log("No response for projects")}},{key:"getAsList",value:function(){var e=[],t=this.state.projectList;if(0===t.length)return r.a.createElement("li",null,r.a.createElement("h3",null,"Please Wait.."));for(var a=0;a<t.length;a++)e.push(r.a.createElement("li",{key:"project_".concat(a)},r.a.createElement(w,{title:t[a].title,subtitle:t[a].subtitle,description:t[a].description,info:t[a].info,features:t[a].features,images:t[a].images})));return e}}]),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutPage"},r.a.createElement(f.b,{to:"/",className:"backButton",align:"center",style:{textDecoration:"none"}},"Back"),r.a.createElement("header",{align:"center"},r.a.createElement("h1",null,"Hello, my name is ",r.a.createElement("strong",null,"Mehul Pillai"),"..."),r.a.createElement("h2",null,"I am an aspiring computer scientist who loves to build applications and solve problems."),r.a.createElement("h2",null,"Check out some of my projects below"),r.a.createElement("hr",null)),r.a.createElement("main",null,r.a.createElement("center",null,r.a.createElement("ul",null,this.getAsList()))))}}]),a}(r.a.Component),I=a(36),P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(I.c,null,r.a.createElement(I.a,{path:"/",component:p,exact:!0}),r.a.createElement(I.a,{path:"/about",component:N}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(f.a,null,r.a.createElement(P,null)),document.getElementById("root"))},65:function(e,t,a){},94:function(e,t,a){}},[[223,1,2]]]);
//# sourceMappingURL=main.27de1302.chunk.js.map
(this.webpackJsonpreactweb=this.webpackJsonpreactweb||[]).push([[0],{227:function(e,t,a){e.exports=a(388)},232:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),i=a.n(l),s=(a(232),a(18)),o=a(10),c=a(19),u=a(20),h=(a(69),a(25)),m=a.n(h),p=a(38),d=a(13),g=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={date:"date",time:"time",greeting:"greeting"},n.getDate=n.getDate.bind(Object(d.a)(n)),n.getTime=n.getTime.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"getDate",value:function(){var e,t=new Date,a=t.getFullYear(),n=g[t.getMonth()],r=t.getDate(),l=f[t.getDay()],i="".concat(l,", ").concat(n," ").concat((e=r,e+(e>0?["th","st","nd","rd"][e>3&&e<21||e%10>3?0:e%10]:"")),", ").concat(a);this.setState({date:i})}},{key:"getTime",value:function(){var e=new Date,t=e.getHours(),a=e.getMinutes();0===a?a="00":a<10&&(a="0".concat(a));var n="hmm";n=t>=0&&t<12?"Good Morning":t>=12&&t<17?"Good Afternoon":t>=17&&t<20?"Good Evening":"Good Night";var r="hm";t>12?(r="P.M",t-=12):12===t?r="P.M":(0===t&&(t=12),r="A.M");var l="".concat(t,":").concat(a," ").concat(r);this.setState({time:l,greeting:n})}},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getDate(),this.getTime(),setInterval(this.getTime,2e3),setInterval(this.getDate,18e3);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"dateStuff",align:"bottom"},r.a.createElement("h1",{id:"date",align:"center",className:"mainPage"},this.state.date),r.a.createElement("h2",{id:"time",align:"center",className:"mainPage"},this.state.time),r.a.createElement("h3",{id:"state",align:"center",className:"mainPage"},this.state.greeting))}}]),a}(r.a.Component),y="5e7f67a8f96f9f072a0b0a98",E="18a485e0392a73af8ebd07a69a33c34a",v="https://api.openweathermap.org/data/2.5/weather?",k=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={quote:"Quote",author:"Author"},n.displayQuote=n.displayQuote.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"displayQuote",value:function(e){var t=e,a=(t=t.contents).quotes;a.length?this.setState({quote:a[0].quote,author:a[0].author}):this.setState({quote:"Not Found",author:"Not Found"})}},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes.rest/qod");case 2:return t=e.sent,e.t0=this,e.next=6,t.json();case 6:e.t1=e.sent,e.t0.displayQuote.call(e.t0,e.t1);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"quoteStuff",align:"center"},r.a.createElement("h3",{id:"quote",align:"center",className:"mainPage"},'"',this.state.quote,'"'),r.a.createElement("hr",{className:"quoteRule"}),r.a.createElement("h4",{id:"author",align:"center",className:"mainPage"},r.a.createElement("strong",null,this.state.author)))}}]),a}(r.a.Component),j={margin:"0 auto",borderRadius:"15px",textShadow:"1px 1px 0px black",border:"2px solid #D3D3D3",padding:"5px",width:"fit-content",height:"fit-content"},x={textShadow:"1px 1px 0px black",color:"white",display:"inline-block",fontFamily:"Open Sans",margin:"10px",fontSize:"22px"},O={textShadow:"1px 1px 0px black",writable:!0,color:"#d4d6d9",fontSize:"16px",display:"inline-block",margin:"5px",cursor:"pointer"},S={textShadow:"1px 1px 0px black",textAlign:"center",color:"#d4d6d9",fontSize:"16px",margin:"10px",fontFamily:"Open Sans"},w=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var r=JSON.parse(JSON.stringify(O));return r.color="#7dc6db",n.state={celsius:!0,units:"C",temperature:12,desc:"great",feelsLike:12,cStyle:r,fStyle:O,loading:!0},n.toggleUnit=n.toggleUnit.bind(Object(d.a)(n)),n.loadingError=n.loadingError.bind(Object(d.a)(n)),n.finishLoading=n.finishLoading.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"toggleUnit",value:function(e){if(!this.state.loading){var t=(e.target?e.target:e.srcElement).innerHTML,a=0,n=0,r="",l=JSON.parse(JSON.stringify(O));l.color="#7dc6db";var i=this.state.celsius;if(i){if("C"===t)return;a=(1.8*this.state.temperature+32).toFixed(2),n=(1.8*this.state.feelsLike+32).toFixed(2),r="F",i=!1}else{if("F"===t)return;a=((this.state.temperature-32)*(5/9)).toFixed(2),n=((this.state.feelsLike-32)*(5/9)).toFixed(2),r="C",i=!0}this.setState({temperature:a,feelsLike:n,cStyle:i?l:O,fStyle:i?O:l,celsius:i,units:r})}}},{key:"finishLoading",value:function(e){console.log(e),this.setState({loading:!1,desc:e.weather[0].description,temperature:(e.main.temp-273.15).toFixed(2),feelsLike:(e.main.feels_like-273.15).toFixed(2),celsius:!0,units:"C"})}},{key:"loadingError",value:function(){this.setState({temperature:"Could not load IP",feelsLike:"Could not load IP",loading:!0,desc:"Could not Load IP"})}},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,a,n,r,l,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://api.ipify.org/?format=json");case 4:t=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),this.loadingError(),e.abrupt("return");case 11:return e.next=13,t.json();case 13:return a=e.sent.ip,console.log(a),e.next=17,fetch("https://api.ipgeolocation.io/ipgeo?apiKey=58da15a019d7427396c055b588b18aac&ip="+a);case 17:return n=e.sent,e.next=20,n.json();case 20:return r=e.sent,console.log(r),l=r.longitude,i=r.latitude,console.log(v+"lat="+i+"&lon="+l+"&appid="+E),e.next=27,fetch(v+"lat="+i+"&lon="+l+"&appid="+E);case 27:return s=e.sent,console.log(s),e.t1=this,e.next=32,s.json();case 32:e.t2=e.sent,e.t1.finishLoading.call(e.t1,e.t2);case 34:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:j},r.a.createElement("div",null,r.a.createElement("h4",{style:x},this.state.desc),r.a.createElement("h2",{style:this.state.cStyle,onClick:this.toggleUnit},"C"),r.a.createElement("h2",{style:O},"|"),r.a.createElement("h2",{style:this.state.fStyle,onClick:this.toggleUnit},"F")),r.a.createElement("h3",{style:S},"Temp: ",this.state.temperature," ",this.state.units),r.a.createElement("h3",{style:S},"Feels Like: ",this.state.feelsLike," ",this.state.units))}}]),a}(r.a.Component),L=a(48),C=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={imgurl:""},n.setImage=n.setImage.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"performSearch",value:function(e){if(13===e.keyCode||13===e.which){var t=document.getElementById("searchBar").value,a="https://google.com/search?q=";t.split(" ").forEach((function(e,t,n){n.length-1===t?a+=e:a+="".concat(e,"%20")})),window.open(a,"_self")}}},{key:"setImage",value:function(e){var t="";if(console.log(e),e.length){for(var a=0;a<e.length;a++){t+=e[a].image+" "}var n=t.trim().split(" ");console.log(n);var r=Math.floor(Math.random()*n.length),l=n[r].includes("https")?n[r]:n[r].replace("http","https");console.log(l),this.setState({imgurl:l})}else console.log("No response for images")}},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://reddtwalls-8176.restdb.io/rest/images",{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",apikey:y}});case 3:return t=e.sent,e.t0=this,e.next=7,t.json();case 7:e.t1=e.sent,e.t0.setImage.call(e.t0,e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.log(e.t2);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(this.state.imgurl,")")}},r.a.createElement("br",null),r.a.createElement(b,null),r.a.createElement("br",null),r.a.createElement(w,null),r.a.createElement("br",null),r.a.createElement("div",{className:"searchDiv"},r.a.createElement("input",{type:"search",id:"searchBar",align:"center",placeholder:"Search...",onKeyPress:this.performSearch})," ")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(L.b,{to:"/about",className:"myButton",align:"center",style:{textDecoration:"none"}},"about"," ")," ")," ")}}]),a}(r.a.Component),N=(a(98),a(398)),P=a(396),D=a(399),F=a(217),T=a(400),I=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={index:0},n.nextImage=n.nextImage.bind(Object(d.a)(n)),n.getAsList=n.getAsList.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"getAsList",value:function(){for(var e=this.props.info.features,t=[],a=0;a<e.length-1;a++)t.push(r.a.createElement("li",{key:"feature_".concat(a)},'"',e[a],'"'));return t}},{key:"nextImage",value:function(){if(1!==this.props.info.images.length){var e=this.state.index;e+1===this.props.info.images.length?e=0:e++,this.setState({index:e}),console.log(this.props.info.images[this.state.index])}}}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(P.a,{trigger:r.a.createElement(D.a,null,"Info"),className:"modal"},r.a.createElement(P.a.Header,null,this.props.info.title),r.a.createElement(P.a.Content,{image:!0},r.a.createElement(F.a,{rounded:!0,size:"large",src:this.props.info.images[this.state.index]}),r.a.createElement(P.a.Description,null,r.a.createElement(T.a,null,"Project Overview"),r.a.createElement("p",{style:{textAlign:"center"}},this.props.info.info),r.a.createElement("h2",null,"Features"),r.a.createElement("ul",{style:{textAlign:"center",alignItems:"center",marginLeft:"auto",marginRight:"auto"}},this.getAsList()),r.a.createElement("button",{className:"backButton",id:"nextButton",onClick:this.nextImage,style:{marginLeft:"auto",marginRight:"auto"}},"Next Image"))))}}]),a}(r.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(N.a,{style:{borderRadius:"10px",borderColor:"#bfbdbf",width:"18em"}},r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,this.props.title),r.a.createElement(N.a.Subtitle,{className:"mb-2 text-muted"},this.props.subtitle),r.a.createElement(N.a.Text,null,this.props.description),r.a.createElement("center",null,r.a.createElement("a",{align:"center",id:"repoLink",className:"backButton",href:this.props.features[this.props.features.length-1],rel:"noopener noreferrer",target:"_blank"})),r.a.createElement(I,{info:this.props})))}}]),a}(r.a.Component),M={padding:"7%"},q=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{style:M},r.a.createElement("hr",{style:{width:"97%",border:"1px solid lightgray"}}),r.a.createElement("a",{className:"fab fa-github",href:"https://github.com/meh430",rel:"noopener noreferrer",target:"_blank",style:{float:"left",fontSize:"30px",color:"black",margin:"10px"}}),r.a.createElement("a",{className:"fas fa-envelope",href:"mailto: mehulpillai30@gmail",rel:"noopener noreferrer",target:"_blank",style:{float:"left",fontSize:"30px",color:"black",margin:"10px"}}),r.a.createElement("h5",{style:{float:"right",margin:"10px",verticalAlign:"center"}},"Mehul Pillai 2020"))}}]),a}(r.a.Component),B={textAlign:"center",margin:"2%",color:"gray"},_={borderRadius:"10px",borderColor:"#bfbdbf",width:"18em"},J={fontSize:"18px"},z=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={sList:[r.a.createElement("li",{key:"skill_".concat(0)},r.a.createElement("h3",null,"Please Wait.."))]},n.parseSkills=n.parseSkills.bind(Object(d.a)(n)),n.getSkills=n.getSkills.bind(Object(d.a)(n)),setTimeout((function(){return n.getSkills()}),1),n}return Object(o.a)(a,[{key:"getSkills",value:function(){var e=this;fetch("https://reddtwalls-8176.restdb.io/rest/skills  ",{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",apikey:y}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to get skills")}),(function(e){return console.log(e.message)})).then((function(t){return setTimeout((function(){return e.parseSkills(t)}),1)}))}},{key:"parseSkills",value:function(e){var t=[];if(e.length){for(var a=0;a<e.length;a++)t.push(r.a.createElement("li",{key:"skill_".concat(a)},r.a.createElement(N.a,{style:_},r.a.createElement(N.a.Body,{style:J},e[a].skill))));this.setState({sList:t})}else console.log("No response for skills")}}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{align:"center",style:{margin:"3%"}},r.a.createElement("hr",{style:{width:"4%"}}),r.a.createElement("h1",{style:B},"Languages and Frameworks"),r.a.createElement("br",null),r.a.createElement("ul",{style:{width:"90%"}},this.state.sList))}}]),a}(r.a.Component),G=a(395),R=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={projectList:[]},n.getProjects=n.getProjects.bind(Object(d.a)(n)),n.parseProjects=n.parseProjects.bind(Object(d.a)(n)),n.getAsList=n.getAsList.bind(Object(d.a)(n)),setTimeout(n.getProjects,1),n}return Object(o.a)(a,[{key:"getProjects",value:function(){var e=this;fetch("https://reddtwalls-8176.restdb.io/rest/projects",{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",apikey:y}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to get projects")}),(function(e){return console.log(e.message)})).then((function(t){return setTimeout((function(){return e.parseProjects(t)}),1)}))}},{key:"parseProjects",value:function(e){if(console.log(e),e.length){for(var t,a,n,r,l,i,s=[],o=0;o<e.length;o++)s.push((t=e[o].title,a=e[o].subtitle,n=e[o].description,r=e[o].info,l=e[o].features,i=e[o].images,{title:t,subtitle:a,description:n,info:r,features:l,images:i}));this.setState({projectList:s})}else console.log("No response for projects")}},{key:"getAsList",value:function(){var e=[],t=[],a=this.state.projectList;if(0===a.length)return r.a.createElement("li",null,r.a.createElement("h3",null,"Please Wait.."));for(var n=0;n<a.length;n++)e.push(r.a.createElement(A,{key:"card_".concat(n),title:a[n].title,subtitle:a[n].subtitle,description:a[n].description,info:a[n].info,features:a[n].features,images:a[n].images})),(n+1)%3===0&&(t.push(r.a.createElement("li",{key:"deck_".concat(n)},r.a.createElement(G.a,null,e))),e=[]);return 0!==e.length&&t.push(r.a.createElement("li",{key:"last deck"},r.a.createElement(G.a,null,e))),t}}]),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutPage"},r.a.createElement(L.b,{to:"/",className:"backButton",align:"center",style:{textDecoration:"none"}},"Back"),r.a.createElement("header",{align:"center"},r.a.createElement("h1",null,"Hello, my name is ",r.a.createElement("strong",null,"Mehul Pillai"),"..."),r.a.createElement("h2",null,"I am an aspiring computer scientist who loves to build applications and solve problems."),r.a.createElement("h2",null,"Check out some of my projects below"),r.a.createElement("hr",null)),r.a.createElement("main",null,r.a.createElement("center",null,r.a.createElement("ul",null,this.getAsList()))),r.a.createElement(z,null),r.a.createElement(q,null))}}]),a}(r.a.Component),Q=a(39),U=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(Q.c,null,r.a.createElement(Q.a,{path:"/",component:C,exact:!0}),r.a.createElement(Q.a,{path:"/about",component:R}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(L.a,null,r.a.createElement(U,null)),document.getElementById("root"))},69:function(e,t,a){},98:function(e,t,a){}},[[227,1,2]]]);
//# sourceMappingURL=main.cd401259.chunk.js.map
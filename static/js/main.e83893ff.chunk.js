(this.webpackJsonpreactweb=this.webpackJsonpreactweb||[]).push([[0],{163:function(e,t,a){e.exports=a(289)},168:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),s=(a(168),a(24)),l=a(15),c=a(25),m=a(26),d=(a(59),a(38)),h=a.n(d),p=a(47),u=a(30),g=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={date:"date",time:"time",greeting:"greeting"},n.getDate=n.getDate.bind(Object(u.a)(n)),n.getTime=n.getTime.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"getDate",value:function(){var e,t=new Date,a=t.getFullYear(),n=g[t.getMonth()],r=t.getDate(),o=f[t.getDay()],i="".concat(o,", ").concat(n," ").concat((e=r,e+(e>0?["th","st","nd","rd"][e>3&&e<21||e%10>3?0:e%10]:"")),", ").concat(a);this.setState({date:i})}},{key:"getTime",value:function(){var e=new Date,t=e.getHours(),a=e.getMinutes();0===a?a="00":a<10&&(a="0".concat(a));var n="hmm";n=t>=0&&t<12?"Good Morning":t>=12&&t<17?"Good Afternoon":t>=17&&t<20?"Good Evening":"Good Night";var r="hm";t>12?(r="P.M",t-=12):12===t?r="P.M":(0===t&&(t=12),r="A.M");var o="".concat(t,":").concat(a," ").concat(r);this.setState({time:o,greeting:n})}},{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getDate(),this.getTime(),setInterval(this.getTime,2e3),setInterval(this.getDate,18e3);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"dateStuff",align:"bottom"},r.a.createElement("h1",{id:"date",align:"center",className:"mainPage"},this.state.date),r.a.createElement("h2",{id:"time",align:"center",className:"mainPage"},this.state.time),r.a.createElement("h3",{id:"state",align:"center",className:"mainPage"},this.state.greeting))}}]),a}(r.a.Component),y="18a485e0392a73af8ebd07a69a33c34a",k="https://api.openweathermap.org/data/2.5/weather?",w=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={quote:"Quote",author:"Author"},n.displayQuote=n.displayQuote.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"displayQuote",value:function(e){var t=e,a=(t=t.contents).quotes;a.length?this.setState({quote:a[0].quote,author:a[0].author}):this.setState({quote:"Not Found",author:"Not Found"})}},{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes.rest/qod");case 2:return t=e.sent,e.t0=this,e.next=6,t.json();case 6:e.t1=e.sent,e.t0.displayQuote.call(e.t0,e.t1);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"quoteStuff",align:"center"},r.a.createElement("h3",{id:"quote",align:"center",className:"mainPage"},'"',this.state.quote,'"'),r.a.createElement("hr",{className:"quoteRule"}),r.a.createElement("h4",{id:"author",align:"center",className:"mainPage"},r.a.createElement("strong",null,this.state.author)))}}]),a}(r.a.Component),v={margin:"0 auto",borderRadius:"15px",textShadow:"1px 1px 0px black",border:"2px solid #D3D3D3",padding:"5px",width:"fit-content",height:"fit-content"},x={textShadow:"1px 1px 0px black",color:"white",display:"inline-block",fontFamily:"'DM Sans', sans-serif",margin:"10px",fontSize:"22px"},E={textShadow:"1px 1px 0px black",writable:!0,color:"#d4d6d9",fontSize:"16px",display:"inline-block",margin:"5px",cursor:"pointer"},S={textShadow:"1px 1px 0px black",textAlign:"center",color:"#d4d6d9",fontSize:"16px",margin:"10px",fontFamily:"Open Sans"},j=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var r=JSON.parse(JSON.stringify(E));return r.color="#7dc6db",n.state={celsius:!0,units:"C",temperature:12,desc:"great",feelsLike:12,cStyle:r,fStyle:E,loading:!0},n.toggleUnit=n.toggleUnit.bind(Object(u.a)(n)),n.loadingError=n.loadingError.bind(Object(u.a)(n)),n.finishLoading=n.finishLoading.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"toggleUnit",value:function(e){if(!this.state.loading){var t=(e.target?e.target:e.srcElement).innerHTML,a=0,n=0,r="",o=JSON.parse(JSON.stringify(E));o.color="#7dc6db";var i=this.state.celsius;if(i){if("C"===t)return;a=(1.8*this.state.temperature+32).toFixed(2),n=(1.8*this.state.feelsLike+32).toFixed(2),r="F",i=!1}else{if("F"===t)return;a=((this.state.temperature-32)*(5/9)).toFixed(2),n=((this.state.feelsLike-32)*(5/9)).toFixed(2),r="C",i=!0}this.setState({temperature:a,feelsLike:n,cStyle:i?o:E,fStyle:i?E:o,celsius:i,units:r})}}},{key:"finishLoading",value:function(e){console.log(e),this.setState({loading:!1,desc:e.weather[0].description,temperature:(e.main.temp-273.15).toFixed(2),feelsLike:(e.main.feels_like-273.15).toFixed(2),celsius:!0,units:"C"})}},{key:"loadingError",value:function(){this.setState({temperature:"Could not load IP",feelsLike:"Could not load IP",loading:!0,desc:"Could not Load IP"})}},{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t,a,n,r,o,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://api.ipify.org/?format=json");case 4:t=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),this.loadingError(),e.abrupt("return");case 11:return e.next=13,t.json();case 13:return a=e.sent.ip,console.log(a),e.next=17,fetch("https://api.ipgeolocation.io/ipgeo?apiKey=58da15a019d7427396c055b588b18aac&ip="+a);case 17:return n=e.sent,e.next=20,n.json();case 20:return r=e.sent,console.log(r),o=r.longitude,i=r.latitude,console.log(k+"lat="+i+"&lon="+o+"&appid="+y),e.next=27,fetch(k+"lat="+i+"&lon="+o+"&appid="+y);case 27:return s=e.sent,console.log(s),e.t1=this,e.next=32,s.json();case 32:e.t2=e.sent,e.t1.finishLoading.call(e.t1,e.t2);case 34:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()}]),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:v},r.a.createElement("div",null,r.a.createElement("h4",{style:x},this.state.desc),r.a.createElement("h2",{style:this.state.cStyle,onClick:this.toggleUnit},"C"),r.a.createElement("h2",{style:E},"|"),r.a.createElement("h2",{style:this.state.fStyle,onClick:this.toggleUnit},"F")),r.a.createElement("h3",{style:S},"Temp: ",this.state.temperature," ",this.state.units),r.a.createElement("h3",{style:S},"Feels Like: ",this.state.feelsLike," ",this.state.units))}}]),a}(r.a.Component),C=a(31),D={projects:[{title:"Personal Website",tech:"JavaScript, React, Bootstrap, npm",brief:"My personal website is built mainly using ReactJS and the SPA architecture. The site also makes use of various node modules like React Bootstrap to make sure that the site works well on mobile devices.",repo:"https://github.com/meh430/meh430.github.io",description:"This site uses the React DOM to render different components that represent parts of the site allowing for code reusability. The React router is also used which aids in implementing the SPA architecture and allows for faster page switches.",features:["Displays time, date, and a greeting","Displays an inspirational quote every day","A search bar that redirects queries to Google"],images:["https://miro.medium.com/max/1400/1*teK4yjRXfJ5IBavrQueB6g.png"]},{title:"St. Augustine Android App",tech:"Android, Java, XML, Firebase",brief:"The official Android app for the St. Augustine Catholic High School made for students, by students. The app is available to students of the mentioned school and uses Google's Firebase as its backend.",repo:"https://github.com/meh430/StAugustineCHSAndroidApp",description:"I was an app developer at St. Augustine's app development club. During my time as a member, I worked in a team and implemented a system-wide dark mode, a ui revamp, an faq screen that pulled data from Firebase, a sidebar with relevant links, and a notes feature.",features:["Displays cafeteria menu for the day","View daily announcements"],images:["https://github.com/meh430/meh430.github.io/blob/source/src/about/imgs/1586550531665.png?raw=true","https://github.com/meh430/meh430.github.io/blob/source/src/about/imgs/1586550536263.png?raw=true"]},{title:"Reddit Walls",tech:"Android, Kotlin, XML",brief:"An app that allows users to choose an image from Reddit and set it as their device wallpaper. The app makes use of the Android jetpack library to link the data layer to the ui layer.",repo:"https://github.com/meh430/RedditWall",description:"This app takes a query and uses Reddit's REST api to pull data in a JSON format. It then parses the JSON data returned by the REST api and scrapes for image urls. Finally, the app loads the image urls to be set as wallpapers. The app also uses Kotlin's coroutines to efficiently fetch results returned from Reddit and update the user interface. The app even uses other new technologies like view binding to effectively inflate the user interface.",features:["Search for subreddits","Save favorite subreddits using a Room database","Save favorite images to be viewed later","View history of downloaded or set wallpapers"],images:["https://github.com/meh430/RedditWall/blob/master/screens/dark_home.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/previews.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/bott_bar_dark.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/set_walls.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/dark_rec.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/dark_fav.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/fav_fab.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/sark_search.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/dark_saves.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/dark_hist.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/setting.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/light_home.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/bott_bar_light.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/light_rec.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/light_search.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/light_saves.png?raw=true","https://github.com/meh430/RedditWall/blob/master/screens/light_hist.png?raw=true"]},{title:"MehBot",tech:"Python, MongoDB, Docker",brief:"A Discord bot written in Python that is mainly centered around getting information from the internet. It has been dockerized for easy deployment and uses MongoDB to persist relevant data.",repo:"https://github.com/meh430/MehBot",description:"This is a bot made for the popular chat client Discord using its Python API wrapper, Discord.py. This project was mainly a learning experience that taught me how to use MongoDB, Docker, and improved my Python skills.",features:["Download songs from YouTube in an mp3 format","Play YouTube videos in a voice channel","Find info on anime","Have a list of favorite Anime unique to each user"],images:["https://www.online-tech-tips.com/wp-content/uploads/2019/10/discord.jpg.optimal.jpg"]},{title:"Chess",tech:"Java, swing/awt, sockets",brief:"A multiplayer chess game made using Java swing/awt. One instance of the game is run as a server while the other is run as a client who then joins the server.",repo:"https://github.com/meh430/Java-Chess",description:"This was my final project for the ISC4U1 computer science course in high school. It makes use of the MVC software design pattern to separate the logic associated with chess and the UI.",features:["Text chat","A tutorial that teaches the basics of chess","Different board colors for customization","Stores a log of the game which can be replayed"],images:["https://github.com/meh430/meh430.github.io/blob/source/src/about/imgs/chess1.png?raw=true","https://github.com/meh430/meh430.github.io/blob/source/src/about/imgs/chess2.png?raw=true"]},{title:"Censor Me!",tech:"JavaScript, HTML/CSS, Chrome",brief:"A Chrome extension that blocks out specified keywords on any website. The extension includes a popup user interface to allow for the entry of any keywords that should be blocked.",repo:"https://github.com/meh430/CensorMe",description:"The extension uses Chrome's sync storage API to store user-entered keywords. Thanks to the API, the data is saved to the user's Google account and will be visible on other devices as well. This extension also allows the user to quickly toggle off the blocking globally and on a per-site basis.",features:["Blocks specified keywords on any website","Specified keywords are saved across devices","Disable the keyword blocking on a specific site"],images:["https://cdn.discordapp.com/attachments/602976258615279628/716338124329844766/unknown.png","https://cdn.discordapp.com/attachments/602976258615279628/716338219314315314/unknown.png","https://cdn.discordapp.com/attachments/602976258615279628/716338372117004631/unknown.png"]},{title:"Math Me!",tech:"Android, Java, XML",brief:"An app for improving mental math and basic arithmetic. Users can practice their addition, subtraction, multiplication, and division skills using this app.",repo:"https://github.com/meh430/MathMe",description:"If you wanted to improve the speed of your mental math or just decrease your reliance on calculators, this app is for you! There are various modes that test different aspects of arithmetic. This app uses the Android Room library and other Android architectural components like LiveData to effectively store past scores.",features:["Different modes like test, timed, and infinite to help practice mental arithmetic skills","Notification reminder to practice math","Different settings within each mode like choosing operations, setting a number limit, and so on"],images:["https://github.com/meh430/MathMe/blob/master/screens/main_dark.png?raw=true","https://github.com/meh430/MathMe/blob/master/screens/main_light.png?raw=true","https://github.com/meh430/MathMe/blob/master/screens/settings_dark.png?raw=true","https://github.com/meh430/MathMe/blob/master/screens/time_dark.png?raw=true","https://github.com/meh430/MathMe/blob/master/screens/time_light.png?raw=true","https://github.com/meh430/MathMe/blob/master/screens/score_dark.png?raw=true"]},{title:"Share Easy",tech:"HTML/CSS, JavaScript, React, NPM, NodeJS, Firebase",brief:"A react app that allows users to upload files and generate download links that expire in 12 hours to quickly and easily share fairly large files.",repo:"https://github.com/meh430/ShareEasy",description:"This web app uses react to handle the user interface and uses Firebase to handle the storage of uploaded files. Uploaded files are only accessible for around 12 hours so the generated download links are temporary. The browser's local storage is used to keep track of any other generated links that have not expired.",features:["Quickly upload files","Generates shortened download links that can be easily shared"],images:["https://miro.medium.com/max/1400/1*teK4yjRXfJ5IBavrQueB6g.png"]}],skills:[{skill:"Java",icon:"fab fa-java",color:"#FF0000"},{skill:"JavaScript",icon:"fab fa-js-square",color:"#DBDB38"},{skill:"Kotlin",icon:"https://img.icons8.com/color/48/000000/kotlin.png"},{skill:"C++",icon:"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"},{skill:"Python",icon:"fab fa-python",color:"#FFB70B"},{skill:"Dart",icon:"https://img.icons8.com/color/48/000000/devpost.png",color:"#1C0BFF"},{skill:"Android",icon:"fab fa-android",color:"#3DDC84"},{skill:"ReactJS",icon:"fab fa-react",color:"#0BBFFF"},{skill:"Bootstrap",icon:"fab fa-bootstrap",color:"#9420B0"},{skill:"Flutter",icon:"https://img.icons8.com/color/48/000000/flutter.png"},{skill:"MongoDB",icon:"fas fa-database",color:"#32910A"},{skill:"Docker",icon:"fab fa-docker",color:"#437CFF"}],education:[{title:"Westbrough High School",period:"Sept 2016 - Feb 2018",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wisconsin_Badgers_logo.svg/200px-Wisconsin_Badgers_logo.svg.png",brief:"Westborough High School arguably improved my time management skills the most. The transition from elementary to secondary school is drastic because of the new environment and there is definitely more work assigned in high school compared to elementary school. On top of the change in environment and the increased workload, I joined the track and field club that held practice that ran for 2 hours every week day which forced me to carefully budget my time."},{title:"St. Augustine CHS",period:"Mar 2018 - Jun 2020",image:"https://media.discordapp.net/attachments/717487791491121162/731603366517407864/stalogo.png",brief:"During my time here, I was a member of the math club and the app development club. In the math club, students got together to solve problems from past math contests to improving our problem solving abilities. In the app club, I learned a lot about developing with a team and how to adjust my workflow accordingly. I also volunteered as a math tutor and at the Habitat for Humanity. While participating in all of these activities, I maintained a 98% overall average in my grade 12 year."},{title:"University Of Waterloo",period:"Sept 2020 - Apr 2025",image:"https://media.discordapp.net/attachments/717487791491121162/731604810188587018/unknown.png?width=620&height=620",brief:"Currently, I\u2019m lucky enough to count myself as a student at the University of Waterloo where I am majoring in computer science. I chose Waterloo specifically because I think experiential learning is extremely important for success. Waterloo\u2019s co-op program offers more opportunities than most other universities and I plan on taking full advantage of these opportunities. Waterloo also has some of the best computer science professors in the world and it is an honour to learn from them."}],interests:[{title:"Programming",image:"https://storage.needpix.com/rsynced_images/code-944504_1280.jpg",brief:"Programming gives me a great sense of accomplishment. I occasionally peruse Project Euler to find programming problems to solve. After minutes of planning, mapping, and coding, entering the answer into the website and getting a big green checkmark feels truly amazing. Personal projects that demonstrate my growth as a programmer also serve as a source of pride. one of my first projects with Android was to make an easy to use arithmetic practice app and it was exciting to see the app come alive. It was also interesting to learn how an OS I used every day worked internally."},{title:"Android Tweaks",image:"https://www.gizmochina.com/wp-content/uploads/2020/04/LineageOS-Dark-Logo-1024x576.jpg",brief:"My first phone was a very mediocre, low-spec Android phone. To make the experience worse, it ran a heavily skinned version of Android that made everything slower and did not get any more software updates. That\u2019s when I dived down the rabbit hole of Android custom roms and tweaks. Since then, I\u2019ve flashed countless different roms on my phone and made all sorts of tweaks like overclocking the cpu and the display's refresh rate. If you give me an old phone, I would probably be entertained for the whole day trying to breathe new life into it by flashing different roms. Currently, I\u2019m running AICP on my phone which is a rom based on the popular LineageOS."},{title:"Gaming",image:"https://store-images.s-microsoft.com/image/apps.58752.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.0cf58754-9802-46f8-8557-8d3ff32a627a?mode=scale&q=90&h=720&w=1280",brief:"I really enjoy playing an immersive video game. My favorites include The Witcher 3, Red Dead Redemption 2, and Resident Evil 2."},{title:"Anime",image:"https://finalweapon.net/wp-content/uploads/2019/07/attack-on-titan.jpg",brief:"I enjoy watching anime from time to time. My favorites include the Attack on Titan series, Fate/Zero, Steins;Gate, and JoJo. "},{title:"Shows",image:"https://cdn.vox-cdn.com/thumbor/hOagCnRe2cCIIZhcLuJUH5ZPVvk=/0x0:1075x604/1200x800/filters:focal(452x216:624x388)/cdn.vox-cdn.com/uploads/chorus_image/image/66255911/Screen_Shot_2020_02_05_at_9.44.59_AM.0.png",brief:"I usually watch comedy shows and I enjoy all the popular sitcoms like Friends, The Office, and Brooklyn 99, but my favorite show has to be Bojack Horseman."},{title:"Books",image:"https://www.grandforksherald.com/incoming/article1118336.ece/alternates/BASE_LANDSCAPE/605074%2BPrincessBook.jpg",brief:"I used to be a very avid reader until High school sort of killed my love for books. I still do enjoy reading but I don\u2019t have as much time to sink into them as I used to. My favorite book is the Princess Bride."}],backgrounds:["https://i.redd.it/5oxeqrahdap41.jpg","https://i.redd.it/p8dxzsrk1ap41.jpg","https://i.redd.it/g5g7mtzvmht01.jpg","https://external-preview.redd.it/n8tzjgP6wltAEgv5Cpdk2dEnlODfm09FQaKx4oINK1k.jpg?auto=webp&s=611bb4b9e3297e11390d2452ebebbdccf3224a4b","https://i.imgur.com/CS8QhJG.jpg","https://i.imgur.com/H5k6AOa.jpg","https://i.imgur.com/Kt0jUHf.jpg","https://i.redd.it/godb3yiihvaz.jpg","https://i.redd.it/nt7hai6h6ccz.jpg","https://512pixels.net/downloads/macos-wallpapers/10-9.jpg","https://512pixels.net/downloads/macos-wallpapers/10-0_10.1.png","https://512pixels.net/downloads/macos-wallpapers/10-5.png","https://512pixels.net/downloads/macos-wallpapers/10-7.png","https://512pixels.net/downloads/macos-wallpapers/10-10.jpg","https://512pixels.net/downloads/macos-wallpapers/10-11.jpg","https://stormandsky.com/gif/14.gif","https://512pixels.net/downloads/macos-wallpapers/10-15-Day.jpg","https://512pixels.net/downloads//macos-wallpapers/10-14-Night.jpg","https://512pixels.net/downloads/macos-wallpapers/10-14-Day.jpg","https://512pixels.net/downloads/macos-wallpapers/10-13.jpg"]},I=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"performSearch",value:function(e){if(13===e.keyCode||13===e.which){var t=document.getElementById("searchBar").value,a="https://google.com/search?q=";t.split(" ").forEach((function(e,t,n){n.length-1===t?a+=e:a+="".concat(e,"%20")})),window.open(a,"_self")}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"backgroundImage",style:{backgroundImage:"url(".concat(D.backgrounds[Math.floor(Math.random()*D.backgrounds.length)],")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("br",null),r.a.createElement(b,null),r.a.createElement("br",null),r.a.createElement(j,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"search",id:"searchBar",align:"center",placeholder:"Search...",onKeyPress:this.performSearch}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C.b,{className:"aboutButton",to:"/about",style:{textDecoration:"none"},onClick:function(){return sessionStorage.clear()}},r.a.createElement("i",{className:"fa fa-user"}),r.a.createElement("span",{"data-hover":"About"}))))}}]),a}(r.a.Component),F=(a(60),a(10)),N=a(294),A=a(295),O=a(299),T=a(298),M=a(77),R=a(300),_=a(152),B=a(297),P=a(296),W=function(e){var t=Object(n.useState)(0),a=Object(M.a)(t,2),o=a[0],i=a[1];return r.a.createElement(B.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(B.a.Header,{style:{backgroundColor:e.info.dark?"#212121":"white",border:"none",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},r.a.createElement("i",{className:"fas fa-arrow-left",onClick:e.onHide,style:{fontSize:"26px",marginLeft:"20px",color:e.info.dark?"white":"black",cursor:"pointer",position:"absolute",left:"0"}}),r.a.createElement(B.a.Title,{id:"contained-modal-title-vcenter",style:{color:e.info.dark?"white":"black",marginRight:"5px",fontFamily:"'Rubik', sans-serif"}},e.info.title)),r.a.createElement(B.a.Body,{style:{maxHeight:"calc(100vh - 210px)",overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",backgroundColor:e.info.dark?"#212121":"white"}},r.a.createElement(P.a,{rounded:!0,size:"medium",src:e.info.images[o]}),1===e.info.images.length?r.a.createElement("i",{style:{display:"none"}}):r.a.createElement("div",{style:{flexDirection:"column",alignItems:"center",marginTop:"15px"}},r.a.createElement("i",{onClick:function(){var t=o;t-1<0?t=e.info.images.length-1:t-=1,i(t)},className:"fas fa-chevron-circle-left",style:{fontSize:"28px",margin:"5px",cursor:"pointer",color:e.info.dark?"white":"black"}}),r.a.createElement("i",{onClick:function(){var t=o;t+1>=e.info.images.length?t=0:t+=1,i(t)},className:"fas fa-chevron-circle-right",style:{fontSize:"28px",margin:"5px",cursor:"pointer",color:e.info.dark?"white":"black"}})),r.a.createElement("p",{style:{fontFamily:"'Nunito', sans-serif",fontSize:"16px",margin:"10px",color:e.info.dark?"white":"black"}},e.info.description),r.a.createElement("h2",{style:{fontFamily:"'Nunito', sans-serif",color:e.info.dark?"white":"black"}},"Features"),r.a.createElement("ul",{style:{width:"85%"}},e.info.features.map((function(e,t){return r.a.createElement("li",{key:"feature_".concat(t),style:{fontFamily:"'Nunito', sans-serif",backgroundColor:"#7B95E9",color:"white",padding:"5px 15px 5px 15px",borderRadius:"20px"}},e)})))),r.a.createElement(B.a.Footer,{style:{backgroundColor:e.info.dark?"#212121":"white",border:"none"}},r.a.createElement(_.a,{onClick:e.onHide,style:{fontFamily:"'Rubik', sans-serif"}},"Close")))},L=function(e){var t=Object(n.useState)(!1),a=Object(M.a)(t,2),o=a[0],i=a[1];return r.a.createElement(R.a,{style:{boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",borderRadius:"10px",width:"19em",backgroundColor:e.dark?"#2D2E31":"#F6F6F6"}},r.a.createElement(R.a.Body,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(R.a.Title,{style:{color:e.dark?"white":"black",fontSize:"18px",margin:"0px",fontFamily:"'Rubik', sans-serif"}},e.title),r.a.createElement(R.a.Subtitle,{className:"mb-2 text-muted",style:{margin:"6px",fontFamily:"'DM Sans', sans-serif",fontSize:"14px"}},r.a.createElement("h5",{style:{color:e.dark?"#CDCDCD":"#808080"}},e.tech)),r.a.createElement(R.a.Text,{style:{color:e.dark?"white":"black",fontSize:"16px",margin:"0px",marginTop:"6px",fontFamily:"'Nunito', sans-serif"}},e.brief),r.a.createElement("a",{id:"repoLink",className:"backButton",href:e.repo,rel:"noopener noreferrer",target:"_blank"}),r.a.createElement(_.a,{variant:"primary",onClick:function(){return i(!0)},style:{fontFamily:"'Nunito', sans-serif",borderRadius:"20px",backgroundColor:"#7D7D7D",border:"0px"}},"More Info"),r.a.createElement(W,{show:o,onHide:function(){return i(!1)},info:e})))},J=function(e){return r.a.createElement("div",{align:"center",style:{margin:"3%"}},r.a.createElement("hr",{style:{borderRadius:"20px",width:"125px",backgroundColor:e.dark?"white":"black",border:e.dark?"1px solid white":"1px solid black"}}),r.a.createElement("h1",{style:{fontSize:"48px",fontFamily:"'Nunito', sans-serif",color:e.dark?"#E8E8E8":"#868686"}},"Languages and Frameworks"),r.a.createElement("br",null),r.a.createElement("ul",{style:{width:"90%"}},D.skills.map((function(t,a){return r.a.createElement("li",{key:"skill_".concat(a)},r.a.createElement(R.a,{style:{display:"flex",justifyContent:"center",alignItems:"Center",flexDirection:"row",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",borderRadius:"10px",width:"18em",backgroundColor:e.dark?"#2D2E31":"#F5F5F5"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"80%"}},t.icon.endsWith(".png")?r.a.createElement("img",{src:t.icon,height:"36px",width:"36px"}):r.a.createElement("i",{className:t.icon,style:{fontSize:"42px",margin:"0px",color:t.color}}),r.a.createElement(R.a.Body,{style:{fontFamily:"'Nunito', sans-serif",fontSize:"18px",color:e.dark?"white":"black"}},t.skill))))}))))},z=function(e){var t=e.dark?"#E8E8E8":"#868686",a=e.dark?"white":"black",n=e.dark?"1px solid white":"1px solid black";return r.a.createElement("header",{style:{width:"85%",margin:"20px",marginTop:"50px"}},r.a.createElement("h2",{style:{fontFamily:"'Nunito', sans-serif",margin:"5px",color:t}},e.line1),r.a.createElement("h2",{style:{fontFamily:"'Nunito', sans-serif",margin:"5px",color:t}},e.line2),r.a.createElement("hr",{style:{backgroundColor:a,border:n,borderRadius:"20px",width:"250px"}}))},q=function(e){return r.a.createElement("div",{className:"projectPage"},r.a.createElement(z,{dark:e.dark,line1:"I find learning by doing to be a lot more effective than reading from a textbook.",line2:"To that end, I've worked on some things to improve my skills. Check out some of my projects below."}),r.a.createElement("main",{style:{width:"75%"}},r.a.createElement("ul",null,D.projects.map((function(t,a){return r.a.createElement("li",{key:"li_".concat(a)},r.a.createElement(L,{key:"card_".concat(a),dark:e.dark,title:t.title,tech:t.tech,brief:t.brief,description:t.description,repo:t.repo,features:t.features,images:t.images}))})))),r.a.createElement(J,{dark:e.dark}))},H=function(e){return r.a.createElement(R.a,{style:{margin:"15px",maxWidth:"500px",minHeight:e.isEdu?"660px":"fit-content",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",borderRadius:"10px",backgroundColor:e.dark?"#2D2E31":"#F5F5F5"}},r.a.createElement(R.a.Body,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(R.a.Title,{style:{color:e.dark?"white":"black",fontSize:"22px",fontFamily:"'Rubik', sans-serif"}},e.title),e.isEdu?r.a.createElement(R.a.Subtitle,{className:"mb-2 text-muted",style:{margin:"4px",fontFamily:"'DM Sans', sans-serif"}},r.a.createElement("h5",{style:{color:e.dark?"#CDCDCD":"#808080",fontSize:"16px"}},e.period)):r.a.createElement("i",{style:{display:"none"}}),e.isEdu?r.a.createElement(P.a,{rounded:!0,src:e.image,size:"medium"}):r.a.createElement("img",{src:e.image,style:{margin:"10px",borderRadius:"20px",width:"90%",height:"auto"}}),r.a.createElement(R.a.Text,{style:{margin:"15px",color:e.dark?"white":"black",fontSize:"16px",fontFamily:"'Nunito', sans-serif"}},e.brief)))},K=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100%"}},D.education.map((function(t,a){return r.a.createElement(H,{key:"edu_".concat(a),dark:e.dark,isEdu:!0,title:t.title,period:t.period,image:t.image,brief:t.brief})}))))},U=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"85%",marginTop:"5px"}},D.interests.map((function(t,a){return r.a.createElement(H,{key:"interest_".concat(a),dark:e.dark,isEdu:!1,title:t.title,image:t.image,brief:t.brief})}))))},V={color:"#78BBEE"},G=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement(R.a,{style:{maxWidth:"700px",margin:"30px",boxShadow:"0 6px 12px rgba(0,0,0,0.16), 0 6px 12px rgba(0,0,0,0.23)",borderRadius:"20px",backgroundColor:e.dark?"#2D2E31":"#FAFAFA"}},r.a.createElement(R.a.Body,{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px"}},r.a.createElement(P.a,{src:"https://cdn.discordapp.com/attachments/717487791491121162/731273446545424414/unknown.png",size:"medium",circular:!0,style:{margin:"20px"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",margin:"5px"}},r.a.createElement("a",{className:"social",style:{color:"#0072b1"},href:"https://www.linkedin.com/in/mehul-pillai-36b343170/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{className:"social",style:{color:e.dark?"white":"black"},href:"https://github.com/meh430",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-github-square"})),r.a.createElement("a",{className:"social",style:{color:"#C13584"},href:"https://www.instagram.com/mehul.pillai/?hl=en",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram-square"})),r.a.createElement("a",{className:"social",style:{color:"#4267B2"},href:"https://www.facebook.com/mehul.pillai.50/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{className:"social",style:{color:"#D44638"},href:"mailto: mehulpillai30@gmail",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("p",{style:{fontFamily:"'Nunito', sans-serif",fontSize:"18px",color:e.dark?"white":"black"}},"Hello, my name is ",r.a.createElement("strong",{style:V},"Mehul Pillai"),". I\u2019m an aspiring"," ",r.a.createElement("strong",{style:V},"computer scientist")," who loves to"," ",r.a.createElement("strong",{style:V},"solve problems")," and"," ",r.a.createElement("strong",{style:V},"build applications"),". I am fascinated by the idea that behind every interaction we have with technology, lies lines of code written by someone, and I have a strong desire to write code for society's betterment. One of the main reasons I actively pursue computer science is its potential to incite change. The opportunity to"," ",r.a.createElement("strong",{style:V},"change society for the better")," through programming is immense and I hope to spearhead such a change in the future."))))},Q={borderRadius:"5px",margin:"3px"},X=[{name:"Light",value:"1"},{name:"Dark",value:"2"}],Y=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={radioValue:"1"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"aboutPage",style:{backgroundColor:"2"===this.state.radioValue?"black":"white"}},r.a.createElement("div",{className:"topBar"},r.a.createElement(C.b,{className:"backButton",to:"/",style:{textDecoration:"none"}},r.a.createElement("i",{className:"fas fa-arrow-left"}),r.a.createElement("span",{"data-hover":"Back"})),r.a.createElement("div",{className:"navDark"},r.a.createElement(N.a,{toggle:!0,className:"darkToggle"},X.map((function(t,a){return r.a.createElement(A.a,{className:"toggleButton",key:a,type:"radio",variant:"secondary",name:"radio",value:t.value,checked:e.state.radioValue===t.value,onChange:function(t){return e.setState({radioValue:t.currentTarget.value})}},t.name)}))),r.a.createElement(O.a,{bg:"dark",expand:"lg",className:"navBar"},r.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{variant:"pills",className:"mr-auto",defaultActiveKey:sessionStorage.getItem("nav")?sessionStorage.getItem("nav"):"projects"},r.a.createElement(T.a.Link,{as:C.b,style:Q,eventKey:"projects",to:"/about",onClick:function(){return sessionStorage.setItem("nav","projects")}},r.a.createElement("h3",{className:"navText"},"Projects")),r.a.createElement(T.a.Link,{as:C.b,style:Q,eventKey:"education",to:"/about/education",onClick:function(){return sessionStorage.setItem("nav","education")}},r.a.createElement("h3",{className:"navText"},"Education")),r.a.createElement(T.a.Link,{as:C.b,style:Q,eventKey:"interests",to:"/about/interests",onClick:function(){return sessionStorage.setItem("nav","interests")}},r.a.createElement("h3",{className:"navText"},"Interests")),r.a.createElement(T.a.Link,{as:C.b,style:Q,eventKey:"profile",to:"/about/profile",onClick:function(){return sessionStorage.setItem("nav","profile")}},r.a.createElement("h3",{className:"navText"},"Profile"))))))),r.a.createElement("div",null,r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/about",render:function(){return r.a.createElement(q,{dark:"2"===e.state.radioValue})},exact:!0}),r.a.createElement(F.a,{path:"/about/education",render:function(){return r.a.createElement(K,{dark:"2"===e.state.radioValue})}}),r.a.createElement(F.a,{path:"/about/interests",render:function(){return r.a.createElement(U,{dark:"2"===e.state.radioValue})}}),r.a.createElement(F.a,{path:"/about/profile",render:function(){return r.a.createElement(G,{dark:"2"===e.state.radioValue})}}))))}}]),a}(r.a.Component),Z=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/",component:I,exact:!0}),r.a.createElement(F.a,{path:"/about",component:Y}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(C.a,null,r.a.createElement(Z,null)),document.getElementById("root"))},59:function(e,t,a){},60:function(e,t,a){}},[[163,1,2]]]);
//# sourceMappingURL=main.e83893ff.chunk.js.map
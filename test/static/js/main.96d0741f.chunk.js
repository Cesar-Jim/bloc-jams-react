(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},20:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(13),l=a.n(s),r=a(42),o=(a(20),a(5)),c=a(6),u=a(8),m=a(7),d=a(9),h=a(41),p=a(43),g=(a(22),a(26),function(){return i.a.createElement("section",{className:"landing"},i.a.createElement("div",{className:"hero-container"},i.a.createElement("img",{className:"hero-image",height:"430px",width:"800px",src:"/assets/images/landing_images/boy_singing.jpg",alt:"Boy singing"}),i.a.createElement("h1",{className:"hero-title"},"Turn the music up!")),i.a.createElement("section",{className:"selling-points"},i.a.createElement("div",{className:"point-1-container"},i.a.createElement("h2",{className:"point-title-1"},"Choose your music..."),i.a.createElement("p",{className:"point-description-1"},"...The world is full of music; ",i.a.createElement("br",null)," WHY should you have to listen to music ",i.a.createElement("br",null),"that someone else chose?")),i.a.createElement("div",{className:"point-2-container"},i.a.createElement("h2",{className:"point-title-2"},"Unlimited, streaming, ",i.a.createElement("br",null)," ad-free!"),i.a.createElement("p",{className:"point-description-2"},"No arbitrary limits. ",i.a.createElement("br",null),"No distractions.")),i.a.createElement("div",{className:"point-3-container"},i.a.createElement("h2",{className:"point-title-3"},"Mobile enabled..."),i.a.createElement("p",{className:"point-description-3"},"...Listen to your music on the go. ",i.a.createElement("br",null),"This streaming service is available on ",i.a.createElement("br",null),"all mobile platforms. "))))}),E=[{title:"The Colors",artist:"Pablo Picasso",releaseInfo:"1909 Spanish Records",albumCover:"/assets/images/album_covers/01.jpg",slug:"the-colors",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]},{title:"The Telephone",artist:"Guglielmo Marconi",releaseInfo:"1909 EM",albumCover:"/assets/images/album_covers/02.jpg",slug:"the-telephone",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]},{title:"Funny Songs",artist:"Speedy Gonzalez",releaseInfo:"1979 Mexico",albumCover:"/assets/images/album_covers/03.jpg",slug:"funny-songs",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"},{title:"Bonus track",duration:"153.14",audioSrc:"/assets/music/pink.mp3"}]}],v=(a(30),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={albums:E},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"library-container"},this.state.albums.map(function(e,t){return i.a.createElement(h.a,{className:"album-container",to:"/album/".concat(e.slug),key:t},i.a.createElement("img",{className:"album-cover",src:e.albumCover,alt:e.title}),i.a.createElement("div",{className:"album-info-container"},i.a.createElement("div",null,e.title),i.a.createElement("div",null,e.artist),i.a.createElement("div",null,e.songs.length," songs")))}))}}]),t}(n.Component)),b=(a(35),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"player-bar-container"},i.a.createElement("section",{id:"buttons"},i.a.createElement("button",{id:"previous",onClick:this.props.handlePrevClick},i.a.createElement("span",{className:"ion-skip-backward"})),i.a.createElement("button",{id:"play-pause",onClick:this.props.handleSongClick},i.a.createElement("span",{className:this.props.isPlaying?"ion-pause":"ion-play"})),i.a.createElement("button",{id:"next"},i.a.createElement("span",{className:"ion-skip-forward",onClick:this.props.handleNextClick}))),i.a.createElement("section",{id:"time-control"},i.a.createElement("div",{className:"current-time"},this.props.formatTime(this.props.currentTime)),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.currentTime/this.props.duration||0,max:"1",min:"0",step:"0.01",onChange:this.props.handleTimeChange}),i.a.createElement("div",{className:"total-time"},this.props.formatTime(this.props.duration))),i.a.createElement("section",{id:"volume-control"},i.a.createElement("div",{className:"icon ion-volume-low"}),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.volume,max:"1",min:"0",step:"0.01",onChange:this.props.handleVolumeChange}),i.a.createElement("div",{className:"icon ion-volume-high"})))}}]),t}(n.Component)),f=(a(37),function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e));var n=E.find(function(e){return e.slug===a.props.match.params.slug});return a.state={album:n,currentSong:n.songs[0],currentTime:0,duration:n.songs[0].duration,isPlaying:!1,isHovering:null,volume:.2,init:!0},a.audioElement=document.createElement("audio"),a.audioElement.src=n.songs[0].audioSrc,a.audioElement.volume=a.state.volume,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"play",value:function(){this.audioElement.play(),this.setState({isPlaying:!0,init:!1})}},{key:"pause",value:function(){this.audioElement.pause(),this.setState({isPlaying:!1})}},{key:"componentDidMount",value:function(){var e=this;this.eventListeners={timeupdate:function(t){e.setState({currentTime:e.audioElement.currentTime})},durationchange:function(t){e.setState({duration:e.audioElement.duration})}},this.audioElement.addEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.addEventListener("durationchange",this.eventListeners.durationchange)}},{key:"componentWillUnmount",value:function(){this.audioElement.src=null,this.audioElement.removeEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.removeEventListener("durationchange",this.eventListeners.durationchange)}},{key:"setSong",value:function(e){this.audioElement.src=e.audioSrc,this.setState({currentSong:e})}},{key:"handleSongClick",value:function(e){var t=this.state.currentSong===e;this.state.isPlaying&&t?this.pause():(t||this.setSong(e),this.play())}},{key:"handlePrevClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t}),a=Math.max(0,t-1),n=this.state.album.songs[a];this.setSong(n),this.play()}},{key:"handleNextClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t}),a=Math.min(t+1,this.state.album.songs.length-1),n=this.state.album.songs[a];this.setSong(n),this.play()}},{key:"handleTimeChange",value:function(e){var t=this.audioElement.duration*e.target.value;this.audioElement.currentTime=t,this.setState({currentTime:t})}},{key:"formatTime",value:function(e){if(isNaN(e))return"-:--";var t=Math.trunc(e/60),a=Math.floor(60*(e/60-Math.trunc(e/60)));return t+":"+(a>9?"":"0")+a}},{key:"handleVolumeChange",value:function(e){var t=e.target.value;this.setState({volume:t}),this.audioElement.volume=e.target.value}},{key:"handleMouseEnter",value:function(e){this.setState({isHovering:this.state.album.songs[e]})}},{key:"handleMouseLeave",value:function(){this.setState({isHovering:null})}},{key:"handleIconsDisplay",value:function(e,t){return!this.state.isHovering&&this.state.isPlaying&&this.state.currentSong===e?i.a.createElement("span",{className:"ion-pause"}):this.state.currentSong===e&&this.state.isPlaying?i.a.createElement("span",{className:"ion-pause"}):this.state.isHovering===this.state.album.songs[t]?i.a.createElement("span",{className:"ion-play"}):this.state.isPlaying||this.state.currentSong!==this.state.album.songs[t]||this.state.init?i.a.createElement("span",null,t+1):i.a.createElement("span",{className:"ion-play"})}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"album"},i.a.createElement("section",{className:"album-info"},i.a.createElement("img",{id:"album-cover-art",src:this.state.album.albumCover,alt:this.state.album.title}),i.a.createElement("div",{className:"album-details"},i.a.createElement("h1",{id:"album-title"},this.state.album.title),i.a.createElement("h2",{id:"artist"},this.state.album.artist),i.a.createElement("div",{id:"release-info"},this.state.album.releaseInfo))),i.a.createElement("table",{id:"song-list"},i.a.createElement("colgroup",null,i.a.createElement("col",{id:"song-number-column"}),i.a.createElement("col",{id:"song-title-column"}),i.a.createElement("col",{id:"song-duration-column"})),i.a.createElement("tbody",null,this.state.album.songs.map(function(t,a){return i.a.createElement("tr",{className:"song",key:a,onClick:function(){return e.handleSongClick(t)},onMouseEnter:function(){return e.handleMouseEnter(a)},onMouseLeave:function(){return e.handleMouseLeave()}},i.a.createElement("td",null,e.handleIconsDisplay(t,a)),i.a.createElement("td",{key:"title"},t.title),i.a.createElement("td",{key:"duration"},e.formatTime(t.duration)))}))),i.a.createElement(b,{isPlaying:this.state.isPlaying,volume:this.state.volume,currentSong:this.state.currentSong,currentTime:this.audioElement.currentTime,duration:this.audioElement.duration,handleSongClick:function(){return e.handleSongClick(e.state.currentSong)},handlePrevClick:function(){return e.handlePrevClick()},handleNextClick:function(){return e.handleNextClick()},handleTimeChange:function(t){return e.handleTimeChange(t)},handleVolumeChange:function(t){return e.handleVolumeChange(t)},formatTime:this.formatTime}))}}]),t}(n.Component)),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("div",{className:"top-bar-container"},i.a.createElement("nav",null,i.a.createElement(h.a,{className:"landing-link",to:"/"},"Home"),i.a.createElement("p",{id:"separator"},"|"),i.a.createElement(h.a,{className:"library-link",to:"/library"},"Library"))),i.a.createElement("div",{className:"main-title-container"},i.a.createElement("div",{className:"bloc-jams-title"},"Bloc Jams"))),i.a.createElement("main",null,i.a.createElement(p.a,{exact:!0,path:"/",component:g}),i.a.createElement(p.a,{path:"/library",component:v}),i.a.createElement(p.a,{path:"/album/:slug",component:f})),i.a.createElement("footer",{className:"footer"},i.a.createElement("img",{className:"hero-image",height:"75px",width:"100px",src:"/assets/images/landing_images/logo.png",alt:"Boy singing"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(r.a,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.96d0741f.chunk.js.map
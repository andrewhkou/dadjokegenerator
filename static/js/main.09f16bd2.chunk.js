(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(4),c=n.n(s),i=(n(17),n(1)),r=n.n(i),l=n(3),h=n(6),u=n(7),k=n(9),d=n(8),j=n(10),p=n(2),x=(n(20),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(k.a)(this,Object(d.a)(t).call(this))).state={joke:"",joke_list:[],index:-1},e.prevJoke=e.prevJoke.bind(Object(p.a)(Object(p.a)(e))),e.nextJoke=e.nextJoke.bind(Object(p.a)(Object(p.a)(e))),e}return Object(j.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getNewJoke();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNewJoke",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new joke"),e.next=3,fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(this.state.index),this.setState({joke:n.joke,joke_list:this.state.joke_list.concat([n.id]),index:this.state.index+1}),console.log(this.state.index),console.log(this.state.joke_list);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPrevJoke",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("entered getjokebyid"),console.log(this.state.joke_list[this.state.index-1]),e.next=4,fetch("https://icanhazdadjoke.com/j/"+this.state.joke_list[this.state.index-1],{headers:{Accept:"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,this.setState({joke:n.joke,index:this.state.index-1});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNextJoke",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://icanhazdadjoke.com/j/"+this.state.joke_list[this.state.index+1],{headers:{Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({joke:n.joke,index:this.state.index+1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"prevJoke",value:function(){console.log("entered"),console.log(this.state.index),this.state.index>0&&this.getPrevJoke()}},{key:"nextJoke",value:function(){console.log(this.state.joke_list),console.log(this.state.index),this.state.index+1===this.state.joke_list.length?this.getNewJoke():this.getNextJoke()}},{key:"render",value:function(){return o.a.createElement("div",{className:"generator"},o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/339217_244815522248767_1884044519_o.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=0d30a0fa0a038a678db58edbfabf9c7d&oe=5D117D9D",className:"LMAO",alt:"LMFAOOOOOO",height:"150"}),o.a.createElement("header",{className:"joke-title"},"julia joke generator")),o.a.createElement("div",{className:"joke"},this.state.joke),o.a.createElement("div",{className:"clicky"},o.a.createElement("button",{className:"prev",type:"button",onClick:this.prevJoke},"prev"),o.a.createElement("button",{className:"next",type:"button",onClick:this.nextJoke},"next")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.09f16bd2.chunk.js.map
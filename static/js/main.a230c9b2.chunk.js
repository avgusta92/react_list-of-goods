(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(6),a=n.n(s),c=n(1),i=n(2),u=n(4),l=n(3),d=(n(13),n(7)),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={goods:t.props.goods,isReversed:!1,sortBy:"default"},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByName=function(){t.setState({sortBy:"name"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({sortBy:"default",isReversed:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isReversed,o=t.sortBy,s=Object(d.a)(e);return"length"===o&&s.sort((function(t,e){return t.length-e.length})),"name"===o&&s.sort((function(t,e){return t.localeCompare(e)})),n&&s.reverse(),r.a.createElement("div",{className:"GoodsList"},r.a.createElement("ul",null,s.map((function(t){return r.a.createElement("li",{key:t},t)}))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortByName},"Sort By Name"),r.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort By Length"),r.a.createElement("button",{type:"button",onClick:this.reset},"Reset")))}}]),n}(r.a.PureComponent),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={goods:m,showGoods:!1},t.showGoods=function(){t.setState((function(t){return{showGoods:!t.showGoods}}))},t}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("button",{type:"button",onClick:this.showGoods},"Start"),this.state.showGoods&&r.a.createElement(h,{goods:this.state.goods}))}}]),n}(r.a.Component);a.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a230c9b2.chunk.js.map
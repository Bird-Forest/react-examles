"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{4407:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5671),a=n(3144),o=n(136),s=n(3668),i=n(2791),u=n(8174),c=n(8494),m=n(184),p={form:{marginBottom:20}},l=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={pokemonName:""},e.handleNameChange=function(t){e.setState({pokemonName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.pokemonName.trim()?(e.props.newName(e.state.pokemonName),e.setState({pokemonName:""})):u.Am.error("Enter pokemon name")},e}return(0,a.Z)(n,[{key:"render",value:function(){return(0,m.jsx)("div",{children:(0,m.jsxs)("form",{onSubmit:this.handleSubmit,style:p.form,children:[(0,m.jsx)("input",{type:"text",name:"pokemonName",value:this.state.pokemonName,onChange:this.handleNameChange}),(0,m.jsxs)("button",{type:"submit",children:[(0,m.jsx)(c.Yfv,{style:{marginRight:8}}),"\u041d\u0430\u0439\u0442\u0438"]})]})})}}]),n}(i.Component),h=n(5861),d=n(7757),f=n.n(d);function v(e){var t=e.message;return(0,m.jsx)("div",{role:"alert",children:(0,m.jsx)("p",{children:t})})}function k(e){var t=e.pokemon,n=t.sprites,r=t.name,a=t.stats;return(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:n.other["official-artwork"].front_default,width:"240",height:"240",alt:r}),(0,m.jsx)("h2",{children:r}),(0,m.jsx)("ul",{children:a.map((function(e){return(0,m.jsxs)("li",{children:[e.stat.name,": ",e.base_stat]},e.stat.name)}))})]})}var x={spinner:{display:"flex",alignItems:"center",marginBottom:10,fontSize:24}};function j(e){var t={name:e.pokemonName,sprites:{other:{"official-artwork":{}}},stats:[]};return(0,m.jsxs)("div",{role:"alert",children:[(0,m.jsxs)("div",{style:x.spinner,children:[(0,m.jsx)(c.crq,{size:"32",className:"icon-spin"}),"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."]}),(0,m.jsx)(k,{pokemon:t})]})}var g=n(5294);function N(e){return y.apply(this,arguments)}function y(){return(y=(0,h.Z)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w="pending",Z="resolved",b="rejected",S=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={pokemon:null,error:null,status:"idle"},e}return(0,a.Z)(n,[{key:"componentDidUpdate",value:function(){var e=(0,h.Z)(f().mark((function e(t,n){var r,a,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.pokemonName,a=this.props.pokemonName,r!==a){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,this.setState({status:w}),e.next=8,N(a);case 8:o=e.sent,console.log(o),this.setState({pokemon:o,status:Z}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0,status:b});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pokemon,n=e.status,r=this.props.pokemonName;return"idle"===n?(0,m.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430."}):"pending"===n?(0,m.jsx)(j,{pokemonName:r}):"rejected"===n?(0,m.jsx)(v,{message:"not found"}):"resolved"===n?(0,m.jsx)(k,{pokemon:t}):void 0}}]),n}(i.Component),C=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={pokemon:null,pokemonName:""},e.handleSubmitForm=function(t){console.log(t),e.setState({pokemonName:t})},e}return(0,a.Z)(n,[{key:"render",value:function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(l,{newName:this.handleSubmitForm}),(0,m.jsx)(S,{pokemonName:this.state.pokemonName}),(0,m.jsx)(u.Ix,{autoClose:2e3})]})}}]),n}(i.Component);function _(){return(0,m.jsx)("div",{children:(0,m.jsx)(C,{})})}}}]);
//# sourceMappingURL=407.c18cb062.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},18:function(e,t,a){e.exports={footer:"styles_footer__-wWGG",bill:"styles_bill__3xw5Z",next:"styles_next__1oUJx",row:"styles_row__UoifR"}},217:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"CART_ITEM_REMOVE",function(){return g}),a.d(n,"CART_ADD_ITEM",function(){return f}),a.d(n,"CART_SUM_PRICE",function(){return h}),a.d(n,"itemRemove",function(){return y}),a.d(n,"addItem",function(){return x}),a.d(n,"sumPrice",function(){return v}),a.d(n,"default",function(){return b});var r={};a.r(r),a.d(r,"Cart",function(){return b});var o=a(0),c=a.n(o),i=a(27),l=a.n(i),s=a(23),m=a(17),u=a(79),p=a(80),d=a(41),g="cart/ITEM_REMOVE",f="cart/ADD_ITEM",h="cart/SUM_PRICE",y=function(e){var t=e.itemKey;return{type:g,payload:{itemKey:t}}},x=function(e){var t=e.product;return{type:f,payload:{product:t}}},v=function(e){return{type:h,payload:{totalPrice:e}}},E={totalPrice:0,identity:[{storeId:0,seatId:0}],menus:[{id:1,name:"\ubc14\uc2a4\ubc84\uac70",image:"http://s3.amazon.com/...",unitPrice:5e3},{id:2,name:"\uce58\ud0a8\ubc84\uac70",image:"http://s3.amazon.com/...",unitPrice:5500,options:[{id:100,name:"\uacc4\ub780 \ud504\ub77c\uc774",image:"http://s3.amazon.com/...",unitPrice:1e3},{id:200,name:"\uac10\uc790",image:"http://s3.amazon.com/...",unitPrice:2e3}]}]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=e.menus.slice();switch(t.type){case g:return a.splice(t.payload.itemKey,1),Object(d.a)({},e,{menus:a});case f:return a.push(t.payload.product),Object(d.a)({},e,{menus:a});case h:var n=t.payload.totalPrice;return Object(d.a)({},e,{totalPrice:n});default:return e}},N=a(219),I=a(221),P=a(220),j=a(42),C=a.n(j),O=a(81),w=a.n(O),k=a(82),S=a.n(k),_=function(e){var t=e.title;return c.a.createElement("header",{className:C.a.header},c.a.createElement("div",{className:C.a.backBtn},c.a.createElement("img",{src:w.a,alt:"\ub4a4\ub85c \uac00\uae30"})),c.a.createElement("div",{className:C.a.title},t),c.a.createElement("div",{className:"menu"},c.a.createElement("img",{src:S.a,alt:"\uba54\ub274"})))};_.defaultProps={title:"Menu"};var R=_,z=(a(103),a(83)),A=a.n(z),T=function(e){e.Picture;var t=e.Title,a=e.TableNum;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:"Picture",src:A.a}),c.a.createElement("div",{className:"StoreInfo"},c.a.createElement("div",{className:"Text"}," ",t," "),c.a.createElement("div",{className:"Text"}," ",a,"\ubc88 \ud14c\uc774\ube14 ")))},F=a(35),M=a(36),W=a(39),H=a(37),D=a(40),U=a(22),B=a(85),J=a.n(B),G=a(84),K=a.n(G),V=a(54),Z=a.n(V),$=Object(U.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,maxWidth:360,width:360}}},{withTheme:!0})(function(e){var t=e.classes,a=(e.theme,e.categories),n=e.onClick,r=e.value,o=a.map(function(e){return c.a.createElement(K.a,{component:"a",key:e.categoryId,label:e.categoryName,href:"#".concat(e.categoryId),onClick:function(t){t.preventDefault(),n(e.categoryId)}})});return c.a.createElement("div",{className:t.root},c.a.createElement(Z.a,{position:"static",color:"default"},c.a.createElement(J.a,{value:r,indicatorColor:"primary",textColor:"primary",fullWidth:!0,scrollable:!0,scrollButtons:"off"},o)))}),q=a(88),L=a.n(q),Q=a(89),X=a.n(Q),Y=a(86),ee=a.n(Y),te=a(87),ae=a.n(te),ne=a(11),re=a.n(ne),oe=function(e){return c.a.createElement(ee.a,Object.assign({button:!0,component:"a"},e))},ce=Object(U.withStyles)()(function(e){var t=e.product,a=e.classes,n=t.productName,r=t.productPrice,o=t.categoryId;return c.a.createElement(oe,{href:"#".concat(o)},c.a.createElement(ae.a,{primary:n,secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(re.a,{component:"span",className:a.inline,color:"textPrimary"},"to Scott, Alex, Jennifer"),r,"\uc6d0")}))}),ie=Object(U.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:300},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0,textAlign:"left"}}})(function(e){var t=e.classes,a=e.products,n=e.categories;return c.a.createElement(L.a,{className:t.root,subheader:c.a.createElement("li",null)},n.map(function(e){return c.a.createElement("li",{key:e.categoryId,className:t.listSection},c.a.createElement("ul",{className:t.ul},c.a.createElement(X.a,null,e.categoryName),a.filter(function(t){return t.categoryId===e.categoryId}).map(function(e){return c.a.createElement(ce,{product:e,key:e.productId})})))}))}),le=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(W.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={selectedCategorie:0,categories:[{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274"},{categoryId:1,categoryName:"\uc0ac\uc774\ub4dc"},{categoryId:2,categoryName:"\uc74c\ub8cc\uc218"},{categoryId:3,categoryName:"\uc138\ud2b8\uba54\ub274"}],products:[{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:1,productName:"\ubc14\uc2a4\ubc84\uac70",productImage:"https://s3.amazon.com/xxx/products/1/xxx.jpg",productPrice:5800},{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:2,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:3,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:1,categoryName:"\uba54\ub2741",productId:4,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:1,categoryName:"\uba54\ub2741",productId:5,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:2,categoryName:"\uba54\ub2742",productId:6,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:2,categoryName:"\uba54\ub2742",productId:7,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:3,categoryName:"\uba54\ub2743",productId:8,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:3,categoryName:"\uba54\ub2743",productId:9,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200}]},a.handleClickCategorie=function(e){a.setState({selectedCategorie:e})},a}return Object(D.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement($,{categories:this.state.categories,value:this.state.selectedCategorie,onClick:this.handleClickCategorie}),c.a.createElement(ie,{products:this.state.products,categories:this.state.categories}))}}]),t}(o.Component),se=a(18),me=a.n(se),ue=a(90),pe=a.n(ue),de=function(e){var t=e.totalPrice,a=e.totalCount;return c.a.createElement("div",{className:me.a.bill},c.a.createElement("div",{className:me.a.row},c.a.createElement("div",{className:me.a.billTitle},"\uc8fc\ubb38\uba54\ub274"),c.a.createElement("div",{className:me.a.billContent},a)),c.a.createElement("div",{className:me.a.row},c.a.createElement("div",{className:me.a.billTitle},"\ucd1d \uac00\uaca9"),c.a.createElement("div",{className:me.a.billContent},t)))},ge=function(e){var t=e.text;return c.a.createElement("footer",{className:me.a.footer},c.a.createElement(de,null),c.a.createElement("div",{className:me.a.next},c.a.createElement("span",null,t,c.a.createElement("img",{src:pe.a,alt:"\ub2e4\uc74c"}))))};de.defaultProps={totalCount:0,totalPrice:0},ge.defaultProps={text:"\uc8fc\ubb38\ud558\uae30"};var fe,he=ge,ye=function(){return c.a.createElement("div",null,c.a.createElement(R,null),c.a.createElement(T,null),c.a.createElement(le,null),c.a.createElement(he,null))},xe=a(34),ve=a(5),Ee=a.n(ve),be=a(43),Ne=a.n(be),Ie=/(\d)(?=(\d{3})+(?!\d))/g,Pe=function(e){return String(e).replace(Ie,"$1,")},je=Ee()(function(e){return{"Food-Main":{display:"flex",height:"36px",objectFit:"contain"},"Headline-6":{width:"80%",height:"24px",fontFamily:"Roboto",fontSize:"20px",fontWeight:"500",fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"},caption:{width:"20%",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"rgba(0, 0, 0, 0.6)"}}})(function(e){var t=e.classes,a=e.name,n=e.unitPrice;return c.a.createElement("div",{className:t["Food-Main"]},c.a.createElement(re.a,{component:"span",className:t["Headline-6"]},a),c.a.createElement(re.a,{component:"span",variant:"display4",className:t.caption},"".concat(Pe(n)," won")))}),Ce=Ee()(function(e){return{"Food-Option":{display:"flex",height:"36px",objectFit:"contain"},"Subtitle-1":{width:"80%",height:"24px",fontFamily:"Roboto",fontSize:"16px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.5",letterSpacing:"0.2px",color:"rgba(0, 0, 0, 0.6)"},caption:{width:"20%",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"rgba(0, 0, 0, 0.6)"}}})(function(e){var t=e.classes,a=e.name,n=e.unitPrice;return c.a.createElement("div",{className:t["Food-Option"]},c.a.createElement(re.a,{component:"span",className:t["Subtitle-1"]},"+ ".concat(a)),c.a.createElement(re.a,{component:"span",className:t.caption},"".concat(Pe(n)," won")))}),Oe=a(91),we=a.n(Oe),ke=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(W.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).totalPrice=0,a}return Object(D.a)(t,e),Object(M.a)(t,[{key:"componentWillMount",value:function(){return this.getOrderSize(this.props)}},{key:"componentDidMount",value:function(){this.props.CartActions.sumPrice(this.totalPrice)}},{key:"shouldComponentUpdate",value:function(e){return this.getOrderSize(e)}},{key:"componentDidUpdate",value:function(){this.props.CartActions.sumPrice(this.totalPrice)}},{key:"getOptions",value:function(e){var t=this;return e.map(function(e,a){var n=e.name,r=e.unitPrice;return t.totalPrice+=r,c.a.createElement(Ce,{name:n,unitPrice:r,key:a})})}},{key:"getOrders",value:function(){var e=this,t=this.props,a=t.menus,n=t.classes,r=t.CartActions,o=a.map(function(t,a){var o=t.options,i=t.name,l=t.unitPrice;return e.totalPrice+=l,c.a.createElement(Ne.a,{key:a,component:"div",className:n.product},c.a.createElement(Ne.a,{component:"div",className:n.Remove},c.a.createElement(re.a,{component:"span",className:n.caption},"Remove this order"),c.a.createElement(re.a,{component:"span",variant:"h5",className:n.Times,onClick:function(){return r.itemRemove({itemKey:"".concat(a)})}},c.a.createElement("img",{src:"".concat(we.a),alt:"Remove"}))),c.a.createElement(je,{name:i,unitPrice:l}),o&&e.getOptions(o),c.a.createElement("div",{className:n["Rectangle-13"]}))});return c.a.createElement("div",null,o)}},{key:"getOrderSize",value:function(e){return e.menus.length||alert("\uc8fc\ubb38 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ub4a4\ub85c\uac00\uae30"),!0}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(Ne.a,{container:!0,className:e.root},this.getOrders())}}]),t}(o.Component),Se=Object(s.b)(function(e){return{menus:e.Cart.menus}},function(e){return{CartActions:Object(m.b)(n,e)}})(Ee()(function(e){return{root:{flexGrow:1,padding:"0 16px",display:"block",marginBottom:"100px"},product:{width:"100%"},Remove:{display:"flex",width:"100%",height:"48px",objectFit:"contain",alignItems:"right",justifyContent:"flex-end"},caption:{marginTop:"19px",paddingRight:"4px",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"#3eafa2"},Times:{marginTop:"12px",color:"#3eafa2",cursor:"pointer",textAlign:"center",width:"20px",height:"20px"},"Rectangle-13":{height:"1px",opacity:"0.12",backgroundColor:"#000000"}}})(ke)),_e=Object(s.b)(function(e){return{totalPrice:e.Cart.totalPrice}},function(e){return{CartActions:Object(m.b)(n,e)}})(Ee()(function(e){return{root:Object(xe.a)({width:"100%"},"@media screen and (max-width: 376px) and  (orientation: portrait)",{width:"360px"}),Top:{height:"56px",objectFit:"contain",backgroundColor:"#ff4a5b",color:"white",textAlign:"center",alignItems:"center"},Mask:{height:"100px",backgroundColor:"#ff4a5b",color:"white",textAlign:"center"}}})(function(e){var t=e.classes,a=e.totalPrice;return c.a.createElement("div",{className:t.root},c.a.createElement(R,{title:"My Order"}),c.a.createElement(Se,null),c.a.createElement(he,{totalPrice:a,text:"Place Order"}))})),Re=Object(m.c)(r),ze=Object(m.d)(Re,fe,Object(m.a)(u.logger,p.a));l.a.render(c.a.createElement(s.a,{store:ze},c.a.createElement(function(){return c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(P.a,{exact:!0,path:"/",component:ye}),c.a.createElement(P.a,{path:"/cart",component:_e})))},null)),document.getElementById("root"))},42:function(e,t,a){e.exports={header:"styles_header__1JcHh",backBtn:"styles_backBtn__3jUZG"}},81:function(e,t,a){e.exports=a.p+"static/media/baseline-chevron_left-24px.1547086b.svg"},82:function(e,t,a){e.exports=a.p+"static/media/baseline-menu-24px.a50ff341.svg"},83:function(e,t,a){e.exports=a.p+"static/media/logostory.5850e49c.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/baseline-chevron_right-24px.d78234fa.svg"},91:function(e,t,a){e.exports=a.p+"static/media/custom_icon_remove.9e214224.svg"},93:function(e,t,a){e.exports=a(217)}},[[93,2,1]]]);
//# sourceMappingURL=main.519273d5.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports={footer:"styles_footer__-wWGG",bill:"styles_bill__3xw5Z",next:"styles_next__1oUJx",row:"styles_row__UoifR"}},219:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"CART_ITEM_REMOVE",function(){return g}),a.d(n,"CART_ADD_ITEM",function(){return f}),a.d(n,"CART_SUM_PRICE",function(){return h}),a.d(n,"itemRemove",function(){return y}),a.d(n,"addItem",function(){return x}),a.d(n,"sumPrice",function(){return b}),a.d(n,"default",function(){return E});var r={};a.r(r),a.d(r,"Cart",function(){return E});var o=a(0),c=a.n(o),i=a(27),l=a.n(i),m=a(23),s=a(17),u=a(79),p=a(80),d=a(41),g="cart/ITEM_REMOVE",f="cart/ADD_ITEM",h="cart/SUM_PRICE",y=function(e){var t=e.itemKey;return{type:g,payload:{itemKey:t}}},x=function(e){var t=e.product;return{type:f,payload:{product:t}}},b=function(e){return{type:h,payload:{totalPrice:e}}},v={totalPrice:0,identity:[{storeId:0,seatId:0}],menus:[{id:1,name:"\ubc14\uc2a4\ubc84\uac70",image:"http://s3.amazon.com/...",unitPrice:5e3},{id:2,name:"\uce58\ud0a8\ubc84\uac70",image:"http://s3.amazon.com/...",unitPrice:5500,options:[{id:100,name:"\uacc4\ub780 \ud504\ub77c\uc774",image:"http://s3.amazon.com/...",unitPrice:1e3},{id:200,name:"\uac10\uc790",image:"http://s3.amazon.com/...",unitPrice:2e3}]}]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=e.menus.slice();switch(t.type){case g:return a.splice(t.payload.itemKey,1),Object(d.a)({},e,{menus:a});case f:return a.push(t.payload.product),Object(d.a)({},e,{menus:a});case h:var n=t.payload.totalPrice;return Object(d.a)({},e,{totalPrice:n});default:return e}},N=a(224),I=a(226),P=a(225),S=a(42),j=a.n(S),C=a(81),w=a.n(C),O=a(82),k=a.n(O),_=function(e){var t=e.title;return c.a.createElement("header",{className:j.a.header},c.a.createElement("div",{className:j.a.backBtn},c.a.createElement("img",{src:w.a,alt:"\ub4a4\ub85c \uac00\uae30"})),c.a.createElement("div",{className:j.a.title},t),c.a.createElement("div",{className:"menu"},c.a.createElement("img",{src:k.a,alt:"\uba54\ub274"})))};_.defaultProps={title:"Menu"};var R=_,z=a(19),A=a(83),T=a.n(A),F=a(10),M=a.n(F),W=Object(z.withStyles)({card:{display:"flex",flexDirection:"column",justifyContent:"spaceBetween",boxShadow:"none",marginLeft:"16px",marginRight:"16px"},image:{width:"calc(100% - 16px)",margin:"8px"},table:{marginBottom:"8px",fontFamily:"Roboto",fontSize:"12px",fontWeight:500,fontStyle:"normal",fontStretch:"normal",lineHeight:1.33,letterSpacing:"2px",color:"rgba(0, 0, 0, 0.87)"},title:{marginBottom:"21px",fontFamily:"Roboto",fontSize:"20px",fontWeight:500,fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"}})(function(e){var t=e.classes,a=e.Image,n=e.Table,r=e.Title;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:t.image,src:a}),c.a.createElement(T.a,{className:t.card},c.a.createElement(M.a,{className:t.table,variant:"overline"},n),c.a.createElement(M.a,{className:t.title,variant:"h6"},r)))}),B=a(35),H=a(36),D=a(39),U=a(37),J=a(40),G=a(85),K=a.n(G),L=a(84),V=a.n(L),Z=a(54),$=a.n(Z),q=Object(z.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,maxWidth:360,width:360}}},{withTheme:!0})(function(e){var t=e.classes,a=(e.theme,e.categories),n=e.onClick,r=e.value,o=a.map(function(e){return c.a.createElement(V.a,{component:"a",key:e.categoryId,label:e.categoryName,href:"#".concat(e.categoryId),onClick:function(t){t.preventDefault(),n(e.categoryId)}})});return c.a.createElement("div",{className:t.root},c.a.createElement($.a,{position:"static",color:"default"},c.a.createElement(K.a,{value:r,indicatorColor:"primary",textColor:"primary",fullWidth:!0,scrollable:!0,scrollButtons:"off"},o)))}),Q=a(88),X=a.n(Q),Y=a(89),ee=a.n(Y),te=a(86),ae=a.n(te),ne=a(87),re=a.n(ne),oe=function(e){return c.a.createElement(ae.a,Object.assign({button:!0,component:"a"},e))},ce=Object(z.withStyles)()(function(e){var t=e.product,a=e.classes,n=t.productName,r=t.productPrice,o=t.categoryId;return c.a.createElement(oe,{href:"#".concat(o)},c.a.createElement(re.a,{primary:n,secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{component:"span",className:a.inline,color:"textPrimary"},"to Scott, Alex, Jennifer"),r,"\uc6d0")}))}),ie=Object(z.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:300},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0,textAlign:"left"}}})(function(e){var t=e.classes,a=e.products,n=e.categories;return c.a.createElement(X.a,{className:t.root,subheader:c.a.createElement("li",null)},n.map(function(e){return c.a.createElement("li",{key:e.categoryId,className:t.listSection},c.a.createElement("ul",{className:t.ul},c.a.createElement(ee.a,null,e.categoryName),a.filter(function(t){return t.categoryId===e.categoryId}).map(function(e){return c.a.createElement(ce,{product:e,key:e.productId})})))}))}),le=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).state={selectedCategorie:0,categories:[{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274"},{categoryId:1,categoryName:"\uc0ac\uc774\ub4dc"},{categoryId:2,categoryName:"\uc74c\ub8cc\uc218"},{categoryId:3,categoryName:"\uc138\ud2b8\uba54\ub274"}],products:[{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:1,productName:"\ubc14\uc2a4\ubc84\uac70",productImage:"https://s3.amazon.com/xxx/products/1/xxx.jpg",productPrice:5800},{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:2,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:3,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:1,categoryName:"\uba54\ub2741",productId:4,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:1,categoryName:"\uba54\ub2741",productId:5,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:2,categoryName:"\uba54\ub2742",productId:6,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:2,categoryName:"\uba54\ub2742",productId:7,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:3,categoryName:"\uba54\ub2743",productId:8,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200},{categoryId:3,categoryName:"\uba54\ub2743",productId:9,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://s3.amazon.com/xxx/products/2/yyy.jpg",productPrice:11200}]},a.handleClickCategorie=function(e){a.setState({selectedCategorie:e})},a}return Object(J.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(q,{categories:this.state.categories,value:this.state.selectedCategorie,onClick:this.handleClickCategorie}),c.a.createElement(ie,{products:this.state.products,categories:this.state.categories}))}}]),t}(o.Component),me=a(18),se=a.n(me),ue=a(90),pe=a.n(ue),de=function(e){var t=e.totalPrice,a=e.totalCount;return c.a.createElement("div",{className:se.a.bill},c.a.createElement("div",{className:se.a.row},c.a.createElement("div",{className:se.a.billTitle},"\uc8fc\ubb38\uba54\ub274"),c.a.createElement("div",{className:se.a.billContent},a)),c.a.createElement("div",{className:se.a.row},c.a.createElement("div",{className:se.a.billTitle},"\ucd1d \uac00\uaca9"),c.a.createElement("div",{className:se.a.billContent},t)))},ge=function(e){var t=e.text;return c.a.createElement("footer",{className:se.a.footer},c.a.createElement(de,null),c.a.createElement("div",{className:se.a.next},c.a.createElement("span",null,t,c.a.createElement("img",{src:pe.a,alt:"\ub2e4\uc74c"}))))};de.defaultProps={totalCount:0,totalPrice:0},ge.defaultProps={text:"\uc8fc\ubb38\ud558\uae30"};var fe,he=ge,ye=a(91),xe=a.n(ye),be=function(){return c.a.createElement("div",null,c.a.createElement(R,null),c.a.createElement(W,{Image:xe.a,Table:"TABLE 17",Title:"The Burgur Co"}),c.a.createElement(le,null),c.a.createElement(he,null))},ve=a(34),Ee=a(5),Ne=a.n(Ee),Ie=a(43),Pe=a.n(Ie),Se=/(\d)(?=(\d{3})+(?!\d))/g,je=function(e){return String(e).replace(Se,"$1,")},Ce=Ne()(function(e){return{"Food-Main":{display:"flex",height:"36px",objectFit:"contain"},"Headline-6":{width:"80%",height:"24px",fontFamily:"Roboto",fontSize:"20px",fontWeight:"500",fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"},caption:{width:"20%",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"rgba(0, 0, 0, 0.6)"}}})(function(e){var t=e.classes,a=e.name,n=e.unitPrice;return c.a.createElement("div",{className:t["Food-Main"]},c.a.createElement(M.a,{component:"span",className:t["Headline-6"]},a),c.a.createElement(M.a,{component:"span",variant:"display4",className:t.caption},"".concat(je(n)," won")))}),we=Ne()(function(e){return{"Food-Option":{display:"flex",height:"36px",objectFit:"contain"},"Subtitle-1":{width:"80%",height:"24px",fontFamily:"Roboto",fontSize:"16px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.5",letterSpacing:"0.2px",color:"rgba(0, 0, 0, 0.6)"},caption:{width:"20%",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"rgba(0, 0, 0, 0.6)"}}})(function(e){var t=e.classes,a=e.name,n=e.unitPrice;return c.a.createElement("div",{className:t["Food-Option"]},c.a.createElement(M.a,{component:"span",className:t["Subtitle-1"]},"+ ".concat(a)),c.a.createElement(M.a,{component:"span",className:t.caption},"".concat(je(n)," won")))}),Oe=a(92),ke=a.n(Oe),_e=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).totalPrice=0,a}return Object(J.a)(t,e),Object(H.a)(t,[{key:"componentWillMount",value:function(){return this.getOrderSize(this.props)}},{key:"componentDidMount",value:function(){this.props.CartActions.sumPrice(this.totalPrice)}},{key:"shouldComponentUpdate",value:function(e){return this.getOrderSize(e)}},{key:"componentDidUpdate",value:function(){this.props.CartActions.sumPrice(this.totalPrice)}},{key:"getOptions",value:function(e){var t=this;return e.map(function(e,a){var n=e.name,r=e.unitPrice;return t.totalPrice+=r,c.a.createElement(we,{name:n,unitPrice:r,key:a})})}},{key:"getOrders",value:function(){var e=this,t=this.props,a=t.menus,n=t.classes,r=t.CartActions,o=a.map(function(t,a){var o=t.options,i=t.name,l=t.unitPrice;return e.totalPrice+=l,c.a.createElement(Pe.a,{key:a,component:"div",className:n.product},c.a.createElement(Pe.a,{component:"div",className:n.Remove},c.a.createElement(M.a,{component:"span",className:n.caption},"Remove this order"),c.a.createElement(M.a,{component:"span",variant:"h5",className:n.Times,onClick:function(){return r.itemRemove({itemKey:"".concat(a)})}},c.a.createElement("img",{src:"".concat(ke.a),alt:"Remove"}))),c.a.createElement(Ce,{name:i,unitPrice:l}),o&&e.getOptions(o),c.a.createElement("div",{className:n["Rectangle-13"]}))});return c.a.createElement("div",null,o)}},{key:"getOrderSize",value:function(e){return e.menus.length||alert("\uc8fc\ubb38 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ub4a4\ub85c\uac00\uae30"),!0}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(Pe.a,{container:!0,className:e.root},this.getOrders())}}]),t}(o.Component),Re=Object(m.b)(function(e){return{menus:e.Cart.menus}},function(e){return{CartActions:Object(s.b)(n,e)}})(Ne()(function(e){return{root:{flexGrow:1,padding:"0 16px",display:"block",marginBottom:"100px"},product:{width:"100%"},Remove:{display:"flex",width:"100%",height:"48px",objectFit:"contain",alignItems:"right",justifyContent:"flex-end"},caption:{marginTop:"19px",paddingRight:"4px",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"#3eafa2"},Times:{marginTop:"12px",color:"#3eafa2",cursor:"pointer",textAlign:"center",width:"20px",height:"20px"},"Rectangle-13":{height:"1px",opacity:"0.12",backgroundColor:"#000000"}}})(_e)),ze=Object(m.b)(function(e){return{totalPrice:e.Cart.totalPrice}},function(e){return{CartActions:Object(s.b)(n,e)}})(Ne()(function(e){return{root:Object(ve.a)({width:"100%"},"@media screen and (max-width: 376px) and  (orientation: portrait)",{width:"360px"}),Top:{height:"56px",objectFit:"contain",backgroundColor:"#ff4a5b",color:"white",textAlign:"center",alignItems:"center"},Mask:{height:"100px",backgroundColor:"#ff4a5b",color:"white",textAlign:"center"}}})(function(e){var t=e.classes,a=e.totalPrice;return c.a.createElement("div",{className:t.root},c.a.createElement(R,{title:"My Order"}),c.a.createElement(Re,null),c.a.createElement(he,{totalPrice:a,text:"Place Order"}))})),Ae=Object(s.c)(r),Te=Object(s.d)(Ae,fe,Object(s.a)(u.logger,p.a));l.a.render(c.a.createElement(m.a,{store:Te},c.a.createElement(function(){return c.a.createElement(N.a,null,c.a.createElement(I.a,null,c.a.createElement(P.a,{exact:!0,path:"/",component:be}),c.a.createElement(P.a,{path:"/cart",component:ze})))},null)),document.getElementById("root"))},42:function(e,t,a){e.exports={header:"styles_header__1JcHh",backBtn:"styles_backBtn__3jUZG"}},81:function(e,t,a){e.exports=a.p+"static/media/baseline-chevron_left-24px.1547086b.svg"},82:function(e,t,a){e.exports=a.p+"static/media/baseline-menu-24px.a50ff341.svg"},90:function(e,t,a){e.exports=a.p+"static/media/baseline-chevron_right-24px.d78234fa.svg"},91:function(e,t,a){e.exports=a.p+"static/media/logostory.5850e49c.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/custom_icon_remove.9e214224.svg"},94:function(e,t,a){e.exports=a(219)}},[[94,2,1]]]);
//# sourceMappingURL=main.2881f091.chunk.js.map
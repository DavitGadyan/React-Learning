(this["webpackJsonpyoutube-disney-clone"]=this["webpackJsonpyoutube-disney-clone"]||[]).push([[0],{56:function(n,e,i){},70:function(n,e,i){},88:function(n,e,i){"use strict";i.r(e);var t,a,r,o,c,s,p,d,l,x,b,g,j,h,m,u,O,f,v,w,y,k,z,I,S,E,A,D,P,L,T,R,C,H,M,G,N,B,W,U,V,X,F,J=i(3),K=i.n(J),Q=i(35),Y=i.n(Q),$=(i(56),i(18)),q=i(11),Z=i(5),_=i(6),nn=i(2),en=_.a.section(t||(t=Object(Z.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100vh;\n"]))),tn=_.a.div(a||(a=Object(Z.a)(["\n  margin-bottom: 10vw;\n  width: 100%;\n  position: relative;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 40px;\n  height: 100%;\n"]))),an=_.a.div(r||(r=Object(Z.a)(['\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("/images/login-background.jpg");\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: -1;\n']))),rn=_.a.div(o||(o=Object(Z.a)(["\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),on=_.a.img(c||(c=Object(Z.a)(["\n  margin-bottom: 12px;\n  max-width: 600px;\n  min-height: 1px;\n  display: block;\n  width: 100%;\n"]))),cn=_.a.a(s||(s=Object(Z.a)(["\n  font-weight: bold;\n  color: #f9f9f9;\n  background-color: #0063e5;\n  margin-bottom: 12px;\n  width: 100%;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  padding: 16.5px 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),sn=_.a.p(p||(p=Object(Z.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  font-size: 11px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),pn=_.a.img(d||(d=Object(Z.a)(["\n  max-width: 600px;\n  margin-bottom: 20px;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n"]))),dn=function(n){return Object(nn.jsx)(en,{children:Object(nn.jsxs)(tn,{children:[Object(nn.jsxs)(rn,{children:[Object(nn.jsx)(on,{src:"/images/cta-logo-one.svg",alt:""}),Object(nn.jsx)(cn,{children:"GET ALL THERE"}),Object(nn.jsx)(sn,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(nn.jsx)(pn,{src:"/images/cta-logo-two.png",alt:""})]}),Object(nn.jsx)(an,{})]})})},ln=i(39),xn=i(48),bn=i(14),gn=i(31),jn=gn.a.initializeApp({apiKey:"AIzaSyAy6uP-xdV2QladPFsfILPbenhBzWrzoPI",authDomain:"disney-clone-7e767.firebaseapp.com",projectId:"disney-clone-7e767",storageBucket:"disney-clone-7e767.appspot.com",messagingSenderId:"14574856591",appId:"1:14574856591:web:ae3b88d407631446d383fa"}).firestore(),hn=gn.a.auth(),mn=new gn.a.auth.GoogleAuthProvider,un=(gn.a.storage(),jn),On=i(25),fn=Object(On.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),vn=fn.actions,wn=vn.setUserLoginDetails,yn=vn.setSignOutState,kn=function(n){return n.user.name},zn=function(n){return n.user.photo},In=fn.reducer,Sn=_.a.nav(l||(l=Object(Z.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-color: #090b13;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 36px;\n  letter-spacing: 16px;\n  z-index: 3;\n"]))),En=_.a.a(x||(x=Object(Z.a)(["\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),An=_.a.div(b||(b=Object(Z.a)(['\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  margin-right: auto;\n  margin-left: 25px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    img {\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n      z-index: auto;\n    }\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      line-height: 1.08;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n      &:before {\n        background-color: rgb(249, 249, 249);\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n      }\n    }\n  }\n  /* @media (max-width: 768px) {\n    display: none;\n  } */\n']))),Dn=_.a.a(g||(g=Object(Z.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  border: 1px solid #f9f9f9;\n  border-radius: 4px;\n  transition: all 0.2s ease 0s;\n  &:hover {\n    background-color: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n  }\n"]))),Pn=_.a.img(j||(j=Object(Z.a)(["\n  height: 100%;\n"]))),Ln=_.a.div(h||(h=Object(Z.a)(["\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  background: rgb(19, 19, 19);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 14px;\n  letter-spacing: 3px;\n  width: 100px;\n  opacity: 0;\n"]))),Tn=_.a.div(m||(m=Object(Z.a)(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n"])),Pn,Ln),Rn=function(n){var e=Object(bn.b)(),i=Object(q.f)(),t=Object(bn.c)(kn),a=Object(bn.c)(zn);Object(J.useEffect)((function(){hn.onAuthStateChanged(function(){var n=Object(xn.a)(Object(ln.a)().mark((function n(e){return Object(ln.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(o(e),i.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]);var r=function(){t?t&&hn.signOut().then((function(){e(yn()),i.push("/")})).catch((function(n){return alert(n.message)})):hn.signInWithPopup(mn).then((function(n){o(n.user)})).catch((function(n){alert(n.message)}))},o=function(n){e(wn({name:n.displayName,email:n.email,photo:n.photoURL}))};return console.log(t),console.log(a),Object(nn.jsxs)(Sn,{children:[Object(nn.jsx)(En,{children:Object(nn.jsx)("img",{src:"/images/logo.svg",alt:"Disney+"})}),t?Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsxs)(An,{children:[Object(nn.jsxs)("a",{href:"/home",children:[Object(nn.jsx)("img",{src:"/images/home-icon.svg",alt:"HOME"}),Object(nn.jsx)("span",{children:"HOME"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/search-icon.svg",alt:"SEARCH"}),Object(nn.jsx)("span",{children:"SEARCH"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"WATCHLIST"}),Object(nn.jsx)("span",{children:"WATCHLIST"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/original-icon.svg",alt:"ORIGINALS"}),Object(nn.jsx)("span",{children:"ORIGINALS"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/movie-icon.svg",alt:"MOVIES"}),Object(nn.jsx)("span",{children:"MOVIES"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/series-icon.svg",alt:"SERIES"}),Object(nn.jsx)("span",{children:"SERIES"})]})]}),Object(nn.jsxs)(Tn,{children:[Object(nn.jsx)(Pn,{src:a,alt:t,referrerPolicy:"no-referrer"}),Object(nn.jsx)(Ln,{children:Object(nn.jsx)("span",{onClick:r,children:"Sign out"})})]})]}):Object(nn.jsx)(Dn,{onClick:r,children:"Login"})]})},Cn=(i(70),i(20)),Hn=i(32),Mn=(i(71),i(72),i(50)),Gn=i.n(Mn),Nn=Object(_.a)(Gn.a)(u||(u=Object(Z.a)(["\n  margin-top: 20px;\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n  li.slick-active button:before {\n    color: white;\n  }\n  .slick-list {\n    overflow: initial;\n  }\n  .slick-prev {\n    left: -75px;\n  }\n  .slick-next {\n    right: -75px;\n  }\n"]))),Bn=_.a.div(O||(O=Object(Z.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),Wn=function(n){return Object(nn.jsxs)(Nn,Object(Cn.a)(Object(Cn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(nn.jsx)(Bn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-badging.jpg",alt:""})})}),Object(nn.jsx)(Bn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-scale.jpg",alt:""})})}),Object(nn.jsx)(Bn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-badag.jpg",alt:""})})}),Object(nn.jsx)(Bn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})})})]}))},Un=_.a.div(f||(f=Object(Z.a)(["\n  margin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"]))),Vn=_.a.div(v||(v=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    opacity: 0;\n    z-index: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n    video {\n      opacity: 1;\n    }\n  }\n"]))),Xn=function(n){return Object(nn.jsxs)(Un,{children:[Object(nn.jsxs)(Vn,{children:[Object(nn.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(Vn,{children:[Object(nn.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(Vn,{children:[Object(nn.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(Vn,{children:[Object(nn.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(Vn,{children:[Object(nn.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]})},Fn=Object(On.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),Jn=Fn.actions.setMovies,Kn=function(n){return n.movie.recommend},Qn=function(n){return n.movie.newDisney},Yn=function(n){return n.movie.original},$n=function(n){return n.movie.trending},qn=Fn.reducer,Zn=_.a.div(w||(w=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),_n=_.a.div(y||(y=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ne=_.a.div(k||(k=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),ee=function(n){var e=Object(bn.c)(Kn);return console.log(e,":\ud83d\udee2\ufe0f"),Object(nn.jsxs)(Zn,{children:[Object(nn.jsx)("h4",{children:"Recommended for You"}),Object(nn.jsx)(_n,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ne,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ie=_.a.div(z||(z=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),te=_.a.div(I||(I=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ae=_.a.div(S||(S=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),re=function(n){var e=Object(bn.c)(Qn);return Object(nn.jsxs)(ie,{children:[Object(nn.jsx)("h4",{children:"New to Disney+"}),Object(nn.jsx)(te,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ae,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},oe=_.a.div(E||(E=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),ce=_.a.div(A||(A=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),se=_.a.div(D||(D=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),pe=function(n){var e=Object(bn.c)(Yn);return Object(nn.jsxs)(oe,{children:[Object(nn.jsx)("h4",{children:"Originals"}),Object(nn.jsx)(ce,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(se,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},de=_.a.div(P||(P=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),le=_.a.div(L||(L=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),xe=_.a.div(T||(T=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),be=function(n){var e=Object(bn.c)($n);return Object(nn.jsxs)(de,{children:[Object(nn.jsx)("h4",{children:"Trending"}),Object(nn.jsx)(le,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(xe,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ge=_.a.main(R||(R=Object(Z.a)(['\n  position: relative;\n  min-height: calc(100vh - 250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n  &:after {\n    background: url("/images/home-background.png") center center / cover\n      no-repeat fixed;\n    content: "";\n    position: absolute;\n    inset: 0px;\n    opacity: 1;\n    z-index: -1;\n  }\n']))),je=function(n){var e=Object(bn.b)(),i=Object(bn.c)(kn),t=[],a=[],r=[],o=[];return Object(J.useEffect)((function(){console.log("hello"),un.collection("movies").onSnapshot((function(n){n.docs.map((function(n){switch(console.log(t),n.data().type){case"recommend":t=[].concat(Object(Hn.a)(t),[Object(Cn.a)({id:n.id},n.data())]);break;case"new":a=[].concat(Object(Hn.a)(a),[Object(Cn.a)({id:n.id},n.data())]);break;case"original":r=[].concat(Object(Hn.a)(r),[Object(Cn.a)({id:n.id},n.data())]);break;case"trending":o=[].concat(Object(Hn.a)(o),[Object(Cn.a)({id:n.id},n.data())])}})),e(Jn({recommend:t,newDisney:a,original:r,trending:o}))}))}),[i]),Object(nn.jsxs)(ge,{children:[Object(nn.jsx)(Wn,{}),Object(nn.jsx)(Xn,{}),Object(nn.jsx)(ee,{}),Object(nn.jsx)(re,{}),Object(nn.jsx)(pe,{}),Object(nn.jsx)(be,{})]})},he=i(51),me=_.a.div(C||(C=Object(Z.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),ue=_.a.div(H||(H=Object(Z.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n  img {\n    width: 100vw;\n    height: 100vh;\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),Oe=_.a.div(M||(M=Object(Z.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),fe=_.a.div(G||(G=Object(Z.a)(["\n  max-width: 874px;\n"]))),ve=_.a.div(N||(N=Object(Z.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),we=_.a.button(B||(B=Object(Z.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n  img {\n    width: 32px;\n  }\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n    img {\n      width: 25px;\n    }\n  }\n"]))),ye=Object(_.a)(we)(W||(W=Object(Z.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),ke=_.a.div(U||(U=Object(Z.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),ze=_.a.div(V||(V=Object(Z.a)(["\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n    img {\n      width: 100%;\n    }\n  }\n"]))),Ie=_.a.div(X||(X=Object(Z.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),Se=_.a.div(F||(F=Object(Z.a)(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Ee=function(n){var e=Object(q.g)().id,i=Object(J.useState)({}),t=Object(he.a)(i,2),a=t[0],r=t[1];return Object(J.useEffect)((function(){un.collection("movies").doc(e).get().then((function(n){n.exists?r(n.data()):console.log("no such document in firebase \ud83d\udd25")})).catch((function(n){console.log("Error getting document:",n)}))}),[e]),console.log(a),Object(nn.jsxs)(me,{children:[Object(nn.jsx)(ue,{children:Object(nn.jsx)("img",{alt:a.title,src:a.backgroundImg})}),Object(nn.jsx)(Oe,{children:Object(nn.jsx)("img",{alt:a.title,src:a.titleImg})}),Object(nn.jsxs)(fe,{children:[Object(nn.jsxs)(ve,{children:[Object(nn.jsxs)(we,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(nn.jsx)("span",{children:"Play"})]}),Object(nn.jsxs)(ye,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(nn.jsx)("span",{children:"Trailer"})]}),Object(nn.jsxs)(ke,{children:[Object(nn.jsx)("span",{}),Object(nn.jsx)("span",{})]}),Object(nn.jsx)(ze,{children:Object(nn.jsx)("div",{children:Object(nn.jsx)("img",{src:"/images/group-icon.png",alt:""})})})]}),Object(nn.jsx)(Ie,{children:a.subTitle}),Object(nn.jsx)(Se,{children:a.description})]})]})};var Ae=function(){return Object(nn.jsx)("div",{className:"App",children:Object(nn.jsxs)($.a,{children:[Object(nn.jsx)(Rn,{}),Object(nn.jsxs)(q.c,{children:[Object(nn.jsx)(q.a,{exact:!0,path:"/",children:Object(nn.jsx)(dn,{})}),Object(nn.jsx)(q.a,{path:"/home",children:Object(nn.jsx)(je,{})}),Object(nn.jsx)(q.a,{path:"/detail/:id",children:Object(nn.jsx)(Ee,{})})]})]})})},De=Object(On.a)({reducer:{user:In,movie:qn},middleware:Object(On.c)({serializableCheck:!1})});Y.a.render(Object(nn.jsx)(K.a.StrictMode,{children:Object(nn.jsx)(bn.a,{store:De,children:Object(nn.jsx)(Ae,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.57b7bfdf.chunk.js.map
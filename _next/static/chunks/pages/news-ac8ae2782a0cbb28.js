(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{830:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(1356)}])},1356:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var l=t(5893),n=t(7294),a=t(682),r=t(5675),i=t.n(r),c=t(4051),o=t(1664),d=t.n(o),h=t(1555),x=t(5500),p=t(7977),m=t(6154),f=t(2962),w=t(6066),u=t(8738);function j(){let[e,s]=(0,n.useState)([]),t=e=>{let{id:s,title:t,content:a,news_date:r,feature:i,mark:c=""}=e,[o,p]=(0,n.useState)(!1);return(0,l.jsx)(l.Fragment,{children:!1==c?"":(0,l.jsx)(h.Z,{lg:"6",className:"mb-4",children:(0,l.jsx)(x.Z,{className:"rounded-0",children:(0,l.jsxs)(x.Z.Body,{className:"p-4",children:[(0,l.jsx)("h5",{className:"mb-1 ",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"18px"},children:t}),(0,l.jsx)("p",{className:"mb-4 ",style:{fontSize:"13px"},children:r.substr(0,10).replace(/-/gi,".")}),(0,l.jsx)("p",{className:o?"true":"false",style:{fontSize:"16px",wordBreak:"break-all"},children:a}),(0,l.jsx)(d(),{href:"/news/detail/?id=".concat(s),className:"float-start d-block mt-2",style:{textDecoration:"none",fontSize:"13px",cursor:"pointer"},children:"READ MORE.."})]})})})})},r=()=>(0,l.jsx)(l.Fragment,{children:e.map((e,s)=>(0,l.jsx)(t,{...e},s))});return(0,n.useEffect)(()=>{let e=async()=>{let e=await (0,m.Z)("https://api.barunsonlabs.io/v1/news?take=10&page=1");console.log(e),s(e.data.data)};e()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.PB,{title:"What’s new?"}),(0,l.jsx)(a.Z,{children:(0,l.jsx)("div",{className:"mt-2 mt-lg-5 pt-5",children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(c.Z,{children:(0,l.jsx)(w.Z,{dots:!1,arrows:!0,infinite:!0,speed:500,autoPlay:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{arrows:!1,dots:!0}}],children:e.map((e,s)=>!0==e.mark&&!0==e.featured?(0,l.jsx)(h.Z,{children:(0,l.jsxs)("div",{className:"text-center p-5",style:{backgroundColor:e.color},children:[(0,l.jsx)(p.Z,{bg:"black",style:{color:e.color},children:"FEAUTRED"}),(0,l.jsx)("h2",{className:"mt-3 mb-5 barlow fw-500 brf-darkest",style:{display:"block",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:e.title}),(0,l.jsx)("div",{style:{width:"100px",height:"100px",margin:"0 auto"},children:null===e.file_manage?"":e.file_manage.file_content.map((e,s)=>"main_file"===e.content_name?(0,l.jsx)(i(),{width:0,height:0,layout:"responsive",alt:"news",className:"w-100",src:e.file_path},s):"")}),(0,l.jsx)("h5",{className:"mt-4 barlow fw-600 brf-darkest",children:e.news_date.substr(0,10)}),(0,l.jsx)(d(),{href:"news/detail/?id=".concat(e.id),children:(0,l.jsx)("p",{className:"d-block barlow fw-600 mb-0 brf-darkest",style:{textDecoration:"none",cursor:"pointer"},children:"READ MORE"})})]})},s):"")})}),(0,l.jsx)(u.ZP,{columns:1,spacing:0,className:"row mt-5",style:{marginLeft:"-12px",marginRight:"-12px",width:"calc(100% + 24px)"},children:(0,l.jsx)(r,{})})]})})})]})}}},function(e){e.O(0,[152,154,481,774,888,179],function(){return e(e.s=830)}),_N_E=e.O()}]);
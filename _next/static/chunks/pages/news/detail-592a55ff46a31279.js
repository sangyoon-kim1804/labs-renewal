(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{9453:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/detail",function(){return n(193)}])},193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(5893),s=n(7294),r=n(1163),c=n(682),l=n(6154),i=n(1664),u=n.n(i),o=n(2962);function d(){let[e,t]=(0,s.useState)([]),[n,i]=(0,s.useState)(""),d=(0,r.useRouter)(),{id:w}=d.query;console.log(JSON.stringify(d.query)+":"+d.pathname);let h=async()=>{let e=await (0,l.Z)("https://api.barunsonlabs.io/v1/news/detail/".concat(w));t(e.data.data),i(e.data.data.news_date.substr(0,10).replace(/-/gi,"."))};return(0,s.useEffect)(()=>{w&&h()},[w]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.PB,{title:"Content-Fi"}),(0,a.jsx)(c.Z,{children:(0,a.jsxs)("div",{className:"mt-2 mt-lg-5 pt-5",children:[(0,a.jsx)(u(),{href:"/news",children:"Back to list"}),(0,a.jsx)("h2",{className:"barlow fw-600 text-center pt-3 mt-5",children:e.title}),(0,a.jsx)("h5",{className:"barlow fw-400 text-center mt-3",children:n}),(0,a.jsx)("p",{className:"mt-5",style:{whiteSpace:"pre-wrap",wordBreak:"break-all"},children:e.content})]})})]})}}},function(e){e.O(0,[408,774,888,179],function(){return e(e.s=9453)}),_N_E=e.O()}]);
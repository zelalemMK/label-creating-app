(()=>{var e={};e.id=413,e.ids=[413],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9748:e=>{"use strict";e.exports=require("fs/promises")},3873:e=>{"use strict";e.exports=require("path")},6534:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>d,serverHooks:()=>f,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{POST:()=>l});var a=t(2706),o=t(8203),p=t(5994),i=t(9187),n=t(9748),u=t(3873);async function l(e){try{let r=await e.formData(),t=r.get("file"),s=r.get("type");if(!t||!s)return i.NextResponse.json({error:"Missing file or type"},{status:400});let a=await t.arrayBuffer(),o=Buffer.from(a),p=(0,u.join)(process.cwd(),"public","uploads"),l=(0,u.join)(p,t.name);return await (0,n.writeFile)(l,o),i.NextResponse.json({message:`${s} file uploaded`,path:`/uploads/${s}/${t.name}`},{status:201})}catch(e){return console.error("Upload error:",e),i.NextResponse.json({error:"Failed to upload file"},{status:500})}}let d=new a.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/upload/route",pathname:"/api/upload",filename:"route",bundlePath:"app/api/upload/route"},resolvedPagePath:"/Users/zelalemmekonnen/Desktop/PixelPeak/projects/label-creating-app/label-creating-app/label-creating-app/src/app/api/upload/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:c,workUnitAsyncStorage:x,serverHooks:f}=d;function m(){return(0,p.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:x})}},6487:()=>{},8335:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[989,452],()=>t(6534));module.exports=s})();
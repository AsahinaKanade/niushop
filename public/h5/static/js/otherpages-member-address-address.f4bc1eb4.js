(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-address-address"],{"30b1":function(e,t,i){var n=i("c097");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("635f4504",n,!0,{sourceMap:!1,shadowMode:!1})},"4dfa":function(e,t,i){"use strict";var n=i("30b1"),a=i.n(n);a.a},"5e27":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Weixin=void 0;var n=function(){var e=i("67d2");this.init=function(t){e.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["chooseWXPay","openAddress","updateAppMessageShareData","updateTimelineShareData","scanQRCode"]})},this.pay=function(t,i){e.ready((function(){e.chooseWXPay({timestamp:t.timestamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,success:function(e){"function"==typeof i&&i(e)}})}))},this.openAddress=function(t){e.ready((function(){e.openAddress({success:function(e){"function"==typeof t&&t(e)},fail:function(e){alert(JSON.stringify(e))}})}))},this.setShareData=function(t,i){e.ready((function(){e.updateAppMessageShareData({title:t.title||"",desc:t.desc||"",link:t.link||"",imgUrl:t.imgUrl||"",success:function(){"function"==typeof i&&i(res)}}),e.updateTimelineShareData({title:t.title||"",link:t.link||"",imgUrl:t.imgUrl||"",success:function(){"function"==typeof i&&i(res)}})}))},this.scanQRCode=function(t){e.ready((function(){e.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){"function"==typeof t&&t(e)}})}))}};t.Weixin=n},"67d2":function(e,t,i){(function(t){i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var n=i("9523");!function(t,i){e.exports=i(t)}(window,(function(e,i){function a(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,r(i),(function(e){d(t,e,n)})):l(t,n)}function s(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){n&&n.trigger&&n.trigger(e),d(t,e,i)})):l(t,n||i)}function r(e){return(e=e||{}).appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function d(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=g[i];n&&(i=n);var a="ok";if(t){var s=t.indexOf(":");"confirm"==(a=t.substring(s+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return i+":"+a}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",A.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var a=n.indexOf(":");switch(n.substring(a+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],a=m[n];a&&(e[t]=a)}return e}}function l(e,i){if(!(!A.debug||i&&i.isInnerInvoke)){var n=g[e];n&&(e=n),i&&i._complete&&delete i._complete,t.log('"'+e+'",',i||"")}}function u(){return(new Date).getTime()}function f(t){x&&(e.WeixinJSBridge?t():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",t,!1))}if(!e.jWeixin){var p,m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),h=e.document,v=h.title,b=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),w=!(!y.match("mac")&&!y.match("win")),k=-1!=b.indexOf("wxdebugger"),x=-1!=b.indexOf("micromessenger"),S=-1!=b.indexOf("android"),_=-1!=b.indexOf("iphone")||-1!=b.indexOf("ipad"),I=(B=b.match(/micromessenger\/(\d+\.\d+\.\d+)/)||b.match(/micromessenger\/(\d+\.\d+)/))?B[1]:"",T={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:_?1:S?2:-1,clientVersion:I,url:encodeURIComponent(location.href)},A={},M={_completes:[]},P={state:0,data:{}};f((function(){T.initEndTime=u()}));var $=!1,E=[],L=(p={config:function(t){l("config",A=t);var i=!1!==A.check;f((function(){if(i)a(m.config,{verifyJsApiList:c(A.jsApiList)},function(){M._complete=function(e){T.preVerifyEndTime=u(),P.state=1,P.data=e},M.success=function(e){C.isPreVerifyOk=0},M.fail=function(e){M._fail?M._fail(e):P.state=-1};var e=M._completes;return e.push((function(){!function(e){if(!(w||k||A.debug||I<"6.0.2"||C.systemType<0)){var t=new Image;C.appId=A.appId,C.initTime=T.initEndTime-T.initStartTime,C.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){C.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;t.src=i}})}}()})),M.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();M._completes=[]},M}()),T.preVerifyStartTime=u();else{P.state=1;for(var e=M._completes,t=0,n=e.length;t<n;++t)e[t]();M._completes=[]}})),L.invoke||(L.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,r(i),n)},L.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=P.state?e():(M._completes.push(e),!x&&A.debug&&e())},error:function(e){I<"6.0.2"||(-1==P.state?e(P.data):M._fail=e)},checkJsApi:function(e){a("checkJsApi",{jsApiList:c(e.jsApiList)},(e._complete=function(e){if(S){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=g[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){s(m.onMenuShareTimeline,{complete:function(){a("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){s(m.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?a("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):a("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){s(m.onMenuShareQQ,{complete:function(){a("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){s(m.onMenuShareWeibo,{complete:function(){a("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){s(m.onMenuShareQZone,{complete:function(){a("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){a("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){a("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){a("startRecord",{},e)},stopRecord:function(e){a("stopRecord",{},e)},onVoiceRecordEnd:function(e){s("onVoiceRecordEnd",e)},playVoice:function(e){a("playVoice",{localId:e.localId},e)},pauseVoice:function(e){a("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){a("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){s("onVoicePlayEnd",e)},uploadVoice:function(e){a("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){a("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){a("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){a("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(S){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){a(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){a("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){a("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===$?($=!0,a("getLocalImgData",{localId:e.localId},(e._complete=function(e){if($=!1,0<E.length){var t=E.shift();wx.getLocalImgData(t)}},e))):E.push(e)},getNetworkType:function(e){a("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){a("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},n(p,"getLocation",(function(e){a(m.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),n(p,"hideOptionMenu",(function(e){a("hideOptionMenu",{},e)})),n(p,"showOptionMenu",(function(e){a("showOptionMenu",{},e)})),n(p,"closeWindow",(function(e){a("closeWindow",{},e=e||{})})),n(p,"hideMenuItems",(function(e){a("hideMenuItems",{menuList:e.menuList},e)})),n(p,"showMenuItems",(function(e){a("showMenuItems",{menuList:e.menuList},e)})),n(p,"hideAllNonBaseMenuItem",(function(e){a("hideAllNonBaseMenuItem",{},e)})),n(p,"showAllNonBaseMenuItem",(function(e){a("showAllNonBaseMenuItem",{},e)})),n(p,"scanQRCode",(function(e){a("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(_){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),n(p,"openAddress",(function(e){a(m.openAddress,{},(e._complete=function(e){var t;(t=e).postalCode=t.addressPostalCode,delete t.addressPostalCode,t.provinceName=t.proviceFirstStageName,delete t.proviceFirstStageName,t.cityName=t.addressCitySecondStageName,delete t.addressCitySecondStageName,t.countryName=t.addressCountiesThirdStageName,delete t.addressCountiesThirdStageName,t.detailInfo=t.addressDetailInfo,delete t.addressDetailInfo,e=t},e))})),n(p,"openProductSpecificView",(function(e){a(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),n(p,"addCard",(function(e){for(var t=e.cardList,i=[],n=0,s=t.length;n<s;++n){var r=t[n],o={card_id:r.cardId,card_ext:r.cardExt};i.push(o)}a(m.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))})),n(p,"chooseCard",(function(e){a("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),n(p,"openCard",(function(e){for(var t=e.cardList,i=[],n=0,s=t.length;n<s;++n){var r=t[n],o={card_id:r.cardId,code:r.code};i.push(o)}a(m.openCard,{card_list:i},e)})),n(p,"consumeAndShareCard",(function(e){a(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),n(p,"chooseWXPay",(function(e){a(m.chooseWXPay,o(e),e)})),n(p,"openEnterpriseRedPacket",(function(e){a(m.openEnterpriseRedPacket,o(e),e)})),n(p,"startSearchBeacons",(function(e){a(m.startSearchBeacons,{ticket:e.ticket},e)})),n(p,"stopSearchBeacons",(function(e){a(m.stopSearchBeacons,{},e)})),n(p,"onSearchBeacons",(function(e){s(m.onSearchBeacons,e)})),n(p,"openEnterpriseChat",(function(e){a("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),n(p,"launchMiniProgram",(function(e){a("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)})),n(p,"miniProgram",{navigateBack:function(e){e=e||{},f((function(){a("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){f((function(){a("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){f((function(){a("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){f((function(){a("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){f((function(){a("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){f((function(){a("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){f((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),p),V=1,N={};return h.addEventListener("error",(function(e){if(!S){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=V++,t["wx-id"]=a),N[a])return;N[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))}}}),!0),h.addEventListener("load",(function(e){if(!S){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(N[n]=!1)}}}),!0),i&&(e.wx=e.jWeixin=L),L}var B}))}).call(this,i("5a52")["default"])},"7d2a":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var n={nsEmpty:i("2c4c").default,loadingCover:i("790a").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"nc-address-content",attrs:{"data-theme":e.themeStyle}},[i("mescroll-uni",{ref:"mescroll",on:{getData:function(t){arguments[0]=t=e.$handleEvent(t),e.getListData.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[i("v-uni-view",{staticClass:"address-list"},[0!==e.addressList.length?[e._l(e.addressList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"address-item"},[i("v-uni-view",{staticClass:"address-item-top",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.setDefault(t.id)}}},[i("v-uni-view",{staticClass:"address-top-info"},[i("v-uni-view",{staticClass:"address-name"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"address-tel"},[e._v(e._s(t.mobile))])],1),i("v-uni-view",{staticClass:"address-info"},[e._v(e._s(t.full_address)+e._s(t.address))])],1),i("v-uni-view",{staticClass:"address-item-bottom"},[i("v-uni-view",{staticClass:"address-default"},[i("v-uni-view",{staticClass:"iconfont",class:1==t.is_default?"iconyuan_checked color-base-text":"iconyuan_checkbox"}),i("v-uni-text",{staticClass:"default",class:{"color-base-text":1==t.is_default},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.setDefault(t.id)}}},[e._v("默认地址")])],1),i("v-uni-view",{staticClass:"address-btn"},[i("v-uni-text",{staticClass:"edit",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.addAddress("edit",t.id)}}},[i("v-uni-text",{staticClass:"iconfont iconbianji"}),e._v(e._s(e.$lang("modify")))],1),1!=t.is_default?i("v-uni-text",{staticClass:"delete",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.deleteAddress(t.id,t.is_default)}}},[i("v-uni-text",{staticClass:"iconfont iconicon7"}),e._v(e._s(e.$lang("del")))],1):e._e()],1)],1)],1)})),i("v-uni-view",{staticClass:"btn-add"},[e.$util.isWeiXin()&&1!=e.local?i("v-uni-button",{staticClass:"add-address",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getChooseAddress()}}},[e._v(e._s(e.$lang("getAddress")))]):e._e(),i("v-uni-button",{staticClass:"add-address",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress("add")}}},[i("v-uni-text",{staticClass:"iconfont iconadd1"}),e._v(e._s(e.$lang("newAddAddress")))],1)],1)]:e._e(),0==e.addressList.length&&e.showEmpty?i("v-uni-view",{staticClass:"empty-box cart-empty"},[i("ns-empty",{attrs:{text:"暂无可用地址",isIndex:e.isIndex,fixed:!1}})],1):e._e(),0==e.addressList.length&&e.showEmpty?i("v-uni-view",{staticClass:"button-wrap"},[e.$util.isWeiXin()&&1!=e.local?i("v-uni-button",{staticClass:"add-address",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getChooseAddress()}}},[e._v(e._s(e.$lang("getAddress")))]):e._e(),i("v-uni-button",{staticClass:"add-address",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress("add")}}},[i("v-uni-text",{staticClass:"iconfont iconadd1"}),e._v(e._s(e.$lang("newAddAddress")))],1)],1):e._e()],2)],1)],2),i("loading-cover",{ref:"loadingCover"})],1)},s=[]},"8e9f":function(e,t,i){"use strict";i.r(t);var n=i("a160"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},9523:function(e,t){function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.exports=i},a160:function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("c975"),i("26e9"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("c409")),s=i("5e27"),r={data:function(){return{addressList:[],back:"",redirect:"redirectTo",isIndex:!1,showEmpty:!1,local:0,localType:1}},components:{},mixins:[a.default],onLoad:function(e){e.back&&(this.back=e.back,uni.setStorageSync("addressBack",e.back)),e.redirect&&(this.redirect=e.redirect),e.local&&(this.local=e.local),e.type&&(this.localType=e.type),uni.getStorageSync("addressBack")&&(this.back=uni.getStorageSync("addressBack"))},onShow:function(){this.$langConfig.refresh(),this.$refs.mescroll&&this.$refs.mescroll.refresh(),uni.removeStorageSync("addressInfo")},methods:{getListData:function(e){var t=this;this.showEmpty=!1,this.$api.sendRequest({url:"/api/memberaddress/page",data:{page:e.num,page_size:e.size,type:this.localType},success:function(i){t.showEmpty=!0;var n=[],a=i.message;0==i.code&&i.data?n=i.data.list:t.$util.showToast({title:a}),e.endSuccess(n.length),1==e.num&&(t.addressList=[]),t.addressList=t.addressList.concat(n),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(i){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},addAddress:function(e,t){var i={type:this.localType};"edit"==e&&(i.id=t),this.back&&(i.back=this.back),this.$util.redirectTo("/otherpages/member/address_edit/address_edit",i)},deleteAddress:function(e,t){var i=this;uni.showModal({title:"操作提示",content:"确定要删除该地址吗？",success:function(n){if(n.confirm){if(1==t)return void i.$util.showToast({title:"默认地址，不能删除"});i.$api.sendRequest({url:"/api/memberaddress/delete",data:{id:e},success:function(e){0==e.code?i.$util.showToast({title:"删除成功"}):i.$util.showToast({title:"删除失败"}),i.$refs.mescroll.refresh()},fail:function(e){mescroll.endErr()}})}}})},setDefault:function(e){var t=this;this.$api.sendRequest({url:"/api/memberaddress/setdefault",data:{id:e},success:function(e){if(e.data>0)if(t.$refs.mescroll.refresh(),""!=t.back){for(var i=!0,n=getCurrentPages().reverse(),a=0;a<n.length;a++)if(-1!=t.back.indexOf(n[a].route)){i=!1,uni.navigateBack({delta:a});break}i&&t.$util.redirectTo(t.back,{},"redirectTo")}else t.$refs.mescroll.refresh(),t.$util.showToast({title:"修改默认地址成功"});else t.$util.showToast({title:e.message})}})},getChooseAddress:function(){var e=this;if(this.$util.isWeiXin()){if("ios"==uni.getSystemInfoSync().platform)var t=uni.getStorageSync("initUrl");else t=location.href;this.$api.sendRequest({url:"/wechat/api/wechat/jssdkconfig",data:{url:t},success:function(t){if(0==t.code){var i=new s.Weixin;i.init(t.data),i.openAddress((function(t){"openAddress:ok"==t.errMsg?e.saveAddress({name:t.userName,mobile:t.telNumber,province:t.provinceName,city:t.cityName,district:t.countryName,address:t.detailInfo,full_address:t.provinceName+"-"+t.cityName+"-"+t.countryName}):e.$util.showToast({title:t.errMsg})}))}else e.$util.showToast({title:t.message})}})}},saveAddress:function(e){var t=this;this.$api.sendRequest({url:"/api/memberaddress/addthreeparties",data:e,success:function(e){e.code>=0?t.$refs.mescroll.refresh():t.$util.showToast({title:e.message})}})}}};t.default=r},c097:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-a2c1d888] .fixed{position:relative;top:0}.cart-empty[data-v-a2c1d888]{padding-top:104px!important}.address-list[data-v-a2c1d888]{width:100%;height:100%}.address-list .local[data-v-a2c1d888]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% %?30?%;background-color:#fff;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.address-list .local uni-text[data-v-a2c1d888]{margin-right:%?10?%}.address-list .address-item[data-v-a2c1d888]{margin:%?20?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:%?20?%;border-radius:%?20?%}.address-list .address-item .address-item-top[data-v-a2c1d888]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border-bottom:%?1?% solid #eee}.address-list .address-item .address-item-top .address-top-info[data-v-a2c1d888]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.address-list .address-item .address-item-top .address-top-info .address-name[data-v-a2c1d888]{color:#000;font-size:%?32?%}.address-list .address-item .address-item-top .address-top-info .address-tel[data-v-a2c1d888]{color:#000;font-size:%?32?%;margin-left:%?26?%}.address-list .address-item .address-item-top .address-info[data-v-a2c1d888]{font-size:%?28?%;color:#909399;margin-top:%?10?%;margin-bottom:%?28?%}.address-list .address-item .address-item-bottom[data-v-a2c1d888]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?30?%}.address-list .address-item .address-item-bottom .address-default[data-v-a2c1d888]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;line-height:1}.address-list .address-item .address-item-bottom .address-default .default[data-v-a2c1d888]{padding-left:%?10?%}.address-list .address-item .address-item-bottom .address-default .iconfont[data-v-a2c1d888]{line-height:1}.address-list .address-item .address-item-bottom .address-btn[data-v-a2c1d888]{font-size:%?28?%;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-list .address-item .address-item-bottom .address-btn .edit uni-text[data-v-a2c1d888]{vertical-align:center;margin-right:%?10?%;font-size:%?30?%}.address-list .address-item .address-item-bottom .address-btn .delete[data-v-a2c1d888]{padding-left:%?40?%}.address-list .address-item .address-item-bottom .address-btn .delete uni-text[data-v-a2c1d888]{margin-right:%?10?%;font-size:%?26?%}.address-list .btn-add[data-v-a2c1d888]{margin-top:%?60?%;bottom:0;margin-left:%?30?%;margin-right:%?30?%;width:calc(100% - %?60?%)}.address-list .btn-add .add-address[data-v-a2c1d888]{height:%?80?%;line-height:%?80?%;-webkit-border-radius:%?80?%;border-radius:%?80?%;margin:%?30?% 0 %?30?%}.address-list .btn-add .add-address uni-text[data-v-a2c1d888]{margin-right:%?10?%;font-size:%?28?%}.address-list .wx-add[data-v-a2c1d888]{margin-top:%?30?%;margin-bottom:%?30?%;text-align:center;height:%?80?%;line-height:%?80?%;border:1px solid #ccc;-webkit-border-radius:%?80?%;border-radius:%?80?%}.button-wrap[data-v-a2c1d888]{height:%?250?%;margin:auto;margin-top:%?30?%;width:calc(100% - %?60?%);z-index:9;text-align:center;overflow:hidden}.button-wrap .add-address[data-v-a2c1d888]{height:%?80?%;line-height:%?80?%;-webkit-border-radius:%?80?%;border-radius:%?80?%;margin:%?30?% 0 %?30?%}.button-wrap .add-address uni-text[data-v-a2c1d888]{margin-right:%?10?%;font-size:%?28?%}.button-wrap .add-wx[data-v-a2c1d888]{background-color:none;margin-top:%?30?%;margin-bottom:%?30?%;width:100%;text-align:center;height:%?92?%;line-height:%?92?%;border:1px solid #ccc;-webkit-border-radius:%?92?%;border-radius:%?92?%}',""]),e.exports=t},ecd3:function(e,t,i){"use strict";i.r(t);var n=i("7d2a"),a=i("8e9f");for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("4dfa");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"a2c1d888",null,!1,n["a"],r);t["default"]=d.exports}}]);
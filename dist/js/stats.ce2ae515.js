(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={stats:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([1,"chunk-vendors"]),a()})({"025e":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("b85c"),r=function(t){var e=[];function a(t){if(t){var r,n=Object(s["a"])(t);try{for(n.s();!(r=n.n()).done;){var i=r.value;e.push(i),a(i.subFolders)}}catch(o){n.e(o)}finally{n.f()}}}return a(t.folders),e}},1:function(t,e,a){t.exports=a("783b")},"12e7":function(t,e,a){"use strict";var s=a("33bf"),r=a.n(s);r.a},"33bf":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"46a7":function(t,e,a){},6672:function(t){t.exports=JSON.parse('{"extensionDescription":{"message":"Wunderschön visualisierte Statistiken für Thunderbird E-Mail-Konten"},"popup":{"message":"","account":"Konto | Konten","messagesInFolder":"{0} Nachrichten in {1} Ordnern"},"stats":{"message":"","mailsTotal":"E-Mails gesamt","withinYears":"in {0} Jahren","mailsUnread":"E-Mails ungelesen","niceWork":"Gute Arbeit!","percentOfReceived":"{0}% von Empfangenen","mailsReceived":"E-Mails empfangen","percentOfTotal":"{0}% von Gesamt","mailsSent":"E-Mails gesendet","mailsPerMonth":"E-Mails pro Monat","mailsYear":"E-Mails/Jahr","mailsPerDay":"E-Mails pro Tag","mailsWeek":"E-Mails/Woche","charts":{"years":{"title":"Jahre","description":"Gesamtanzahl aller E-Mails pro Jahr"},"months":{"title":"Monate","description":"Gesamtanzahl aller E-Mails pro Monat"},"daytime":{"title":"Uhrzeit","description":"Anzahl aller E-Mails pro Stunde am Tag"},"weekday":{"title":"Wochentag","description":"Anzahl aller E-Mails pro Wochentag"},"temporalDistribution":{"title":"Zeitliche Verteilung","descriptionReceived":"Anzahl empfangener E-Mails pro Wochentag pro Stunde","descriptionSent":"Anzahl gesendeter E-Mails pro Wochentag pro Stunde"}},"starAndImprove":"Beteilige dich an diesem Projekt auf <a href=\'{0}\' target=\'_blank\'>Github</a>"}}')},"6d21":function(t,e,a){"use strict";var s=a("46a7"),r=a.n(s);r.a},"783b":function(t,e,a){"use strict";a.r(e);a("a9e3"),a("b680"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"stats"}},[a("h1",[t._m(0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.activeAccount,expression:"activeAccount"}],attrs:{name:"account",disabled:t.waiting},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.activeAccount=e.target.multiple?a:a[0]}}},t._l(t.accounts,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0),t.waiting?a("span",{staticClass:"loading"}):a("svg",{staticClass:"ready",attrs:{width:"36",height:"36",viewBox:"0 0 24 24","stroke-width":"3",stroke:"#8a8a97",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M5 12l5 5l10 -10"}})])]),a("section",{staticClass:"numbers mt-2"},[a("div",[a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.mailsTotal")))]),a("div",{staticClass:"featured"},[t._v(t._s(t.numbers.total.toLocaleString()))]),a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.withinYears",[t.oneDigit(t.years)])))])]),a("div",[a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.mailsUnread")))]),a("div",{staticClass:"featured"},[t._v(t._s(t.numbers.unread.toLocaleString()))]),0==t.numbers.unread?a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.niceWork")))]):a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.percentOfReceived",[t.unreadPercentage])))])]),a("div",[a("div",{staticClass:"text-gray text-secondary"},[t._v(t._s(t.$t("stats.mailsReceived")))]),a("div",{staticClass:"featured text-secondary"},[t._v(t._s(t.numbers.received.toLocaleString()))]),a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.percentOfTotal",[t.receivedPercentage])))])]),a("div",[a("div",{staticClass:"text-gray text-primary"},[t._v(t._s(t.$t("stats.mailsSent")))]),a("div",{staticClass:"featured text-primary"},[t._v(t._s(t.numbers.sent.toLocaleString()))]),a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.percentOfTotal",[t.sentPercentage])))])]),a("div",[a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.mailsPerMonth")))]),a("div",{staticClass:"featured"},[t._v(t._s(t.perMonth))]),a("div",{staticClass:"text-gray"},[t._v(t._s(t.perYear)+" "+t._s(t.$t("stats.mailsYear")))])]),a("div",[a("div",{staticClass:"text-gray"},[t._v(t._s(t.$t("stats.mailsPerDay")))]),a("div",{staticClass:"featured"},[t._v(t._s(t.perDay))]),a("div",{staticClass:"text-gray"},[t._v(t._s(t.perWeek)+" "+t._s(t.$t("stats.mailsWeek")))])])]),a("section",{staticClass:"charts mt-2"},[a("LineChart",{attrs:{title:t.$t("stats.charts.years.title"),description:t.$t("stats.charts.years.description"),datasets:t.yearsChartData.datasets,labels:t.yearsChartData.labels}}),a("LineChart",{attrs:{title:t.$t("stats.charts.months.title"),description:t.$t("stats.charts.months.description"),datasets:t.monthsChartData.datasets,labels:t.monthsChartData.labels}}),a("BarChart",{attrs:{title:t.$t("stats.charts.daytime.title"),description:t.$t("stats.charts.daytime.description"),datasets:t.daytimeChartData.datasets,labels:t.daytimeChartData.labels}}),a("BarChart",{attrs:{title:t.$t("stats.charts.weekday.title"),description:t.$t("stats.charts.weekday.description"),datasets:t.weekdayChartData.datasets,labels:t.weekdayChartData.labels}}),a("HeatMap",{attrs:{title:t.$t("stats.charts.temporalDistribution.title"),description:t.$t("stats.charts.temporalDistribution.descriptionReceived"),rgb:"10, 132, 255",dataset:t.weekdayPerHourChartData.received}}),a("HeatMap",{attrs:{title:t.$t("stats.charts.temporalDistribution.title"),description:t.$t("stats.charts.temporalDistribution.descriptionSent"),rgb:"230, 77, 185",dataset:t.weekdayPerHourChartData.sent}})],1),a("footer",{staticClass:"my-6 text-center"},[a("div",{staticClass:"text-gray"},[t._v("ThirdStats v"+t._s(t.appVersion))]),a("div",{staticClass:"text-gray",domProps:{innerHTML:t._s(t.$t("stats.starAndImprove",["https://github.com/devmount/third-stats"]))}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"mr-2"},[t._v("Th"),a("span",{staticClass:"text-gray"},[t._v("underb")]),t._v("ird Stats")])}],i=(a("cb29"),a("4de4"),a("caad"),a("baa5"),a("d81d"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("2532"),a("3ca3"),a("841c"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),o=a("2909"),c=a("d4ec"),l=a("025e"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart"},[t.title?a("h2",{staticClass:"text-center"},[t._v(t._s(t.title))]):t._e(),t.description?a("p",{staticClass:"text-gray text-center"},[t._v(t._s(t.description))]):t._e(),a("canvas",{attrs:{id:t.id}})])},u=[],h=(a("4160"),a("25f0"),a("159b"),{props:{title:String,description:String,labels:Array,datasets:Array},data:function(){return{id:Math.random().toString(36).substring(7),chart:null}},mounted:function(){""!=this.title&&this.labels&&this.datasets&&this.draw()},computed:{currentData:function(){for(var t=[],e=0;e<this.datasets.length;e++){var a=this.datasets[e];t.push({label:a.label,data:a.data,borderColor:a.color,borderWidth:2,lineTension:.15,pointRadius:0,backgroundColor:a.bcolor})}return t}},methods:{draw:function(){this.chart=new Chart(this.id,{type:"line",data:{datasets:this.currentData,labels:this.labels},options:{scales:{xAxes:[{stacked:!1,gridLines:{display:!1},ticks:{maxRotation:0,autoSkipPadding:10}}],yAxes:[{display:!1,stacked:!1,gridLines:{display:!1}}]}}})}},watch:{datasets:function(){var t=this;this.chart.data.labels=this.labels,this.chart.data.datasets.length>=this.currentData.length?this.chart.data.datasets.forEach((function(e,a){a in t.currentData?e.data=t.currentData[a].data:t.chart.data.datasets.pop()})):this.currentData.forEach((function(e,a){a in t.chart.data.datasets?t.chart.data.datasets[a].data=e.data:t.chart.data.datasets.push(e)})),this.chart.update()}}}),b=h,f=a("2877"),m=Object(f["a"])(b,d,u,!1,null,null,null),p=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart"},[t.title?a("h2",{staticClass:"text-center"},[t._v(t._s(t.title))]):t._e(),t.description?a("p",{staticClass:"text-gray text-center"},[t._v(t._s(t.description))]):t._e(),a("canvas",{attrs:{id:t.id}})])},v=[],y={props:{title:String,description:String,labels:Array,datasets:Array},data:function(){return{id:Math.random().toString(36).substring(7),chart:null}},mounted:function(){""!=this.title&&this.labels&&this.datasets&&this.draw()},computed:{currentData:function(){for(var t=[],e=0;e<this.datasets.length;e++){var a=this.datasets[e];t.push({label:a.label,data:a.data,backgroundColor:a.bcolor,borderWidth:{top:2},borderColor:a.color,barPercentage:1,categoryPercentage:.6})}return t}},methods:{draw:function(){this.chart=new Chart(this.id,{type:"bar",data:{datasets:this.currentData,labels:this.labels},options:{scales:{xAxes:[{stacked:!1,gridLines:{display:!1},ticks:{maxRotation:0,autoSkipPadding:10}}],yAxes:[{display:!1,stacked:!1,gridLines:{display:!1}}]}}})}},watch:{datasets:function(){var t=this;this.chart.data.labels=this.labels,this.chart.data.datasets.length>=this.currentData.length?this.chart.data.datasets.forEach((function(e,a){a in t.currentData?e.data=t.currentData[a].data:t.chart.data.datasets.pop()})):this.currentData.forEach((function(e,a){a in t.chart.data.datasets?t.chart.data.datasets[a].data=e.data:t.chart.data.datasets.push(e)})),this.chart.update()}}},j=y,w=Object(f["a"])(j,g,v,!1,null,null,null),k=w.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart heatmap"},[t.title?a("h2",{staticClass:"text-center"},[t._v(t._s(t.title))]):t._e(),t.description?a("p",{staticClass:"text-gray text-center"},[t._v(t._s(t.description))]):t._e(),t._l(7,(function(e){return a("div",{key:e,staticClass:"row"},[a("div",{staticClass:"legend text-gray text-small text-right mr-1"},[t._v(t._s(t.weekdays[e-1]))]),t._l(24,(function(s){return a("div",{key:s,staticClass:"cell tooltip",style:"background: rgba("+t.rgb+", "+t.opacity(t.dataset[e-1][s-1])+")",attrs:{"data-tooltip":t.weekdays[e-1]+", "+(s-1)+":00\n"+t.dataset[e-1][s-1]+" mails"}})}))],2)})),a("div",{staticClass:"row"},[a("div",{staticClass:"legend mr-1"}),t._l(24,(function(e){return a("div",{key:e,staticClass:"legend text-gray text-small text-center mt-1"},[e%2==1?a("span",[t._v(t._s(e-1))]):t._e()])}))],2)],2)},x=[],D={props:{title:String,description:String,rgb:String,dataset:Object},methods:{opacity:function(t){return 0==this.mailsPerWeekdayPerHourMax?0:t/this.mailsPerWeekdayPerHourMax}},computed:{mailsPerWeekdayPerHourMax:function(){var t=0;for(var e in this.dataset){var a=Math.max.apply(Math,Object(o["a"])(this.dataset[e]));t=a>t?a:t}return t},weekdays:function(){return["Mo","Tu","We","Th","Fr","Sa","Su"]}}},C=D,M=(a("6d21"),Object(f["a"])(C,_,x,!1,null,null,null)),O=M.exports,S=a("30ef"),P=a.n(S);P.a.defaults.global.defaultFontColor="#8a8a97",P.a.defaults.global.elements.arc.borderWidth=0,P.a.defaults.global.legend.display=!1,P.a.defaults.global.tooltips.mode="index",P.a.defaults.global.tooltips.intersect=!1,P.a.defaults.global.tooltips.multiKeyBackground="#000",P.a.defaults.global.tooltips.titleMarginBottom=10,P.a.defaults.global.tooltips.xPadding=10,P.a.defaults.global.tooltips.yPadding=10,P.a.defaults.global.tooltips.cornerRadius=2,P.a.defaults.global.hover.mode="index";var $=function t(e){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(c["a"])(this,t);var r=Object(o["a"])(Array(e).keys());r.map((function(t){a[t]=null===s?0:new Array(s).fill(0)}))},z={name:"Stats",components:{LineChart:p,BarChart:k,HeatMap:O},data:function(){return{accounts:[],activeAccount:null,waiting:!0,numbers:{},yearsData:{},monthsData:{},daytimeData:{},weekdayData:{},weekdayPerHourData:{}}},created:function(){this.reset(),this.getAccounts()},methods:{getAccounts:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,browser.accounts.list();case 2:e=t.sent,e=e.filter((function(t){return"none"!=t.type})),a=window.location.search.substring(1),s=new URLSearchParams(a),r=Number(s.get("a")),this.accounts=e,this.activeAccount=e[r].id;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),processAccount:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,s,r,n,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.waiting=!0,t.next=3,browser.accounts.get(e);case 3:return a=t.sent,s=a.identities.map((function(t){return t.email})),r=Object(l["a"])(a),n=this,t.next=9,Promise.all(r.map(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.processMessages(e,s);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(){o.waiting=!1}));case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),processMessages:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=this,t.next=3,browser.messages.list(e);case 3:r=t.sent,r.messages.map((function(t){return s.analyzeMessage(t,a)}));case 5:if(!r.id){t.next=12;break}return t.next=8,browser.messages.continueList(r.id);case 8:r=t.sent,r.messages.map((function(t){return s.analyzeMessage(t,a)})),t.next=5;break;case 12:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),analyzeMessage:function(t,e){var a="";this.numbers.total++,!1===t.read&&this.numbers.unread++;var s=t.author;s.lastIndexOf("<")>=0&&s.lastIndexOf(">")>=0&&(s=s.substring(s.lastIndexOf("<")+1,s.lastIndexOf(">"))),e.includes(s)?(this.numbers.sent++,a="sent"):(this.numbers.received++,a="received"),t.date.getTime()<this.numbers.start.getTime()&&(this.numbers.start=t.date);var r=t.date.getFullYear();r in this.yearsData[a]?this.yearsData[a][r]++:this.yearsData[a][r]=1;var n=t.date.getMonth();r in this.monthsData[a]?n in this.monthsData[a][r]?this.monthsData[a][r][n]++:this.monthsData[a][r][n]=1:(this.monthsData[a][r]={},this.monthsData[a][r][n]=1);var i=t.date.getHours();this.daytimeData[a][i]++;var o=t.date.getDay();this.weekdayData[a][o]++,this.weekdayPerHourData[a][o][i]++},reset:function(){this.numbers={total:0,unread:0,received:0,sent:0,start:new Date},this.yearsData={received:{},sent:{}},this.monthsData={received:{},sent:{}},this.daytimeData={received:new $(24),sent:new $(24)},this.weekdayData={received:new $(7),sent:new $(7)},this.weekdayPerHourData={received:new $(7,24),sent:new $(7,24)}}},computed:{appVersion:function(){return"0.3.2"},days:function(){var t=864e5,e=new Date;return Math.round(Math.abs((this.numbers.start-e)/t))},weeks:function(){return this.days/7},months:function(){return this.days/(365/12)},years:function(){return this.days/365},receivedPercentage:function(){return this.numbers.total>0?this.twoDigit(100*this.numbers.received/this.numbers.total):0},sentPercentage:function(){return this.numbers.total>0?this.twoDigit(100*this.numbers.sent/this.numbers.total):0},unreadPercentage:function(){return this.numbers.received>0?this.twoDigit(100*this.numbers.unread/this.numbers.received):0},perDay:function(){return this.numbers.total>0&&this.days>0?this.oneDigit(this.numbers.total/this.days):0},perWeek:function(){return this.numbers.total>0&&this.weeks>0?this.oneDigit(this.numbers.total/this.weeks):0},perMonth:function(){return this.numbers.total>0&&this.months>0?this.oneDigit(this.numbers.total/this.months):0},perYear:function(){return this.numbers.total>0&&this.years>0?this.oneDigit(this.numbers.total/this.years):0},yearsChartData:function(){if(this.waiting)return{datasets:[],labels:[]};for(var t=this.yearsData.received,e=this.yearsData.sent,a=new Date,s=this.numbers.start.getFullYear();s<=a.getFullYear();++s)t[s]||(t[s]=0),e[s]||(e[s]=0);return{datasets:[{label:this.$t("stats.mailsSent"),data:Object.values(e),color:"rgb(230, 77, 185)",bcolor:"rgb(230, 77, 185, .2)"},{label:this.$t("stats.mailsReceived"),data:Object.values(t),color:"rgb(10, 132, 255)",bcolor:"rgb(10, 132, 255, .2)"}],labels:Object.keys(t)}},monthsChartData:function(){if(this.waiting)return{datasets:[],labels:[]};for(var t=this.monthsData.received,e=this.monthsData.sent,a=[],s=[],r=[],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=new Date,o=this.numbers.start.getFullYear();o<=i.getFullYear();++o)for(var c=0;c<12;++c)if(!(o==this.numbers.start.getFullYear()&&c<this.numbers.start.getMonth())){if(o==i.getFullYear()&&c>i.getMonth())break;a.push(o+" "+n[c]),s.push(o in t&&c in t[o]?t[o][c]:0),r.push(o in e&&c in e[o]?e[o][c]:0)}return{datasets:[{label:this.$t("stats.mailsSent"),data:r,color:"rgb(230, 77, 185)",bcolor:"rgb(230, 77, 185, .2)"},{label:this.$t("stats.mailsReceived"),data:s,color:"rgb(10, 132, 255)",bcolor:"rgb(10, 132, 255, .2)"}],labels:a}},daytimeChartData:function(){if(this.waiting)return{datasets:[],labels:[]};var t=this.daytimeData.received,e=this.daytimeData.sent;return{datasets:[{label:this.$t("stats.mailsSent"),data:Object.values(e),color:"rgb(230, 77, 185)",bcolor:"rgb(230, 77, 185, .2)"},{label:this.$t("stats.mailsReceived"),data:Object.values(t),color:"rgb(10, 132, 255)",bcolor:"rgb(10, 132, 255, .2)"}],labels:Object.keys(t)}},weekdayChartData:function(){if(this.waiting)return{datasets:[],labels:[]};var t=Object.values(this.weekdayData.received),e=Object.values(this.weekdayData.sent);return t.push(t.shift()),e.push(e.shift()),{datasets:[{label:this.$t("stats.mailsSent"),data:e,color:"rgb(230, 77, 185)",bcolor:"rgb(230, 77, 185, .2)"},{label:this.$t("stats.mailsReceived"),data:t,color:"rgb(10, 132, 255)",bcolor:"rgb(10, 132, 255, .2)"}],labels:["Mo","Tu","We","Th","Fr","Sa","Su"]}},weekdayPerHourChartData:function(){if(this.waiting)return{received:new $(7,24),sent:new $(7,24)};var t=Object.values(this.weekdayPerHourData.received),e=Object.values(this.weekdayPerHourData.sent);return t.push(t.shift()),e.push(e.shift()),{received:t,sent:e}}},watch:{activeAccount:function(t){this.reset(),this.processAccount(t)}}},A=z,E=(a("12e7"),Object(f["a"])(A,r,n,!1,null,null,null)),T=E.exports,R=a("a925");s["a"].config.productionTip=!1,s["a"].config.devtools=!1,s["a"].mixin({methods:{twoDigit:function(t){return t.toFixed(2)},oneDigit:function(t){return t.toFixed(1)},round:function(t,e){return Number(Math.round(t+"e+"+e)+"e-"+e)}}}),s["a"].use(R["a"]);var W={en:a("d6dc"),de:a("6672")},F=new R["a"]({locale:browser.i18n.getUILanguage(),fallbackLocale:"en",messages:W});new s["a"]({i18n:F,render:function(t){return t(T)}}).$mount("#stats")},d6dc:function(t){t.exports=JSON.parse('{"extensionDescription":{"message":"Beautifully visualized statistics for your Thunderbird Email Accounts"},"popup":{"message":"","account":"Account | Accounts","messagesInFolder":"{0} messages in {1} folders"},"stats":{"message":"","mailsTotal":"Mails total","withinYears":"within {0} years","mailsUnread":"Mails unread","niceWork":"Nice work!","percentOfReceived":"{0}% of received","mailsReceived":"Mails received","percentOfTotal":"{0}% of total","mailsSent":"Mails sent","mailsPerMonth":"Mails per month","mailsYear":"mails/year","mailsPerDay":"Mails per day","mailsWeek":"mails/week","charts":{"years":{"title":"Years","description":"Total number of emails per year"},"months":{"title":"Months","description":"Total number of emails per month"},"daytime":{"title":"Daytime","description":"Number of emails per time of day"},"weekday":{"title":"Weekday","description":"Number of emails per day of week"},"temporalDistribution":{"title":"Temporal distribution","descriptionReceived":"Number of incoming emails per weekday per hour","descriptionSent":"Number of outgoing emails per weekday per hour"}},"starAndImprove":"Star and improve this project on <a href=\'{0}\' target=\'_blank\'>Github</a>"}}')}});
//# sourceMappingURL=stats.ce2ae515.js.map
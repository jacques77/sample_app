/*1293561822,169776067*/

((location=='about:blank'&&(window.parent.eval_global||window.parent.eval))||(window.eval_global||window.eval))("if (window.CavalryLogger) { CavalryLogger.start_js([\"Xr4cm\"]); }\n\nfunction object(b){var a=new Function();a.prototype=b;return new a();}function is_scalar(a){return \/string|number|boolean\/.test(typeof a);}function keys(c){if(hasArrayNature(c))throw new TypeError('keys() was passed an array.');var b=[];for(var a in c)b.push(a);return b;}function values(b){if(hasArrayNature(b))throw new TypeError('values() was passed an array; use $A().');var c=[];for(var a in b)c.push(b[a]);return c;}function count(c){if(hasArrayNature(c))throw new TypeError('count() was passed an array.');var a=0;for(var b in c)a++;return a;}function are_equal(a,b){return JSON.encode(a)==JSON.encode(b);}function merge(){var b={};for(var a=0;a<arguments.length;a++)copy_properties(b,arguments[a]);return b;}function head(b){for(var a in b)return b[a];return null;}Object.from=function(c,e){if(!hasArrayNature(c))throw new TypeError('Must pass an array of keys.');var d={};var b=hasArrayNature(e);if(typeof e=='undefined')e=true;for(var a=c.length;a--;)d[c[a]]=b?e[a]:e;return d;};function coalesce(){for(var a=0;a<arguments.length;++a)if(arguments[a]!=null)return arguments[a];return null;}\nfunction muffinize(d){var c='a';var b='d';var a=[c,b].join('');return d.replace(\/muffin\/g,a);}window.Util=window.Util||{warn:bagofholding,error:bagofholding,info:bagofholding,log:bagofholding,stack:bagofholding};if(typeof console=='undefined')console={log:bagofholding};\nfunction AsyncSignal(b,a){this.data=a||{};if(window.Env&&Env.tracking_domain&&b.charAt(0)=='\/')b=Env.tracking_domain+b;this.uri=b;this.handler=null;}AsyncSignal.prototype.setHandler=function(a){this.handler=a;return this;};AsyncSignal.prototype.send=function(){var c=this.handler,b=this.data,g=this.uri,f=[],d=new Image(),a=document.getElementById('post_form_id');b.asyncSignal=Math.floor(Math.random()*10000)+1;if(a)b.post_form_id=a.value;for(var e in b)f.push(encodeURIComponent(e)+'='+encodeURIComponent(b[e]));if(g.indexOf('?')==-1)g+='?';g+=f.join('&');if(c)d.onload=d.onerror=(function(i,h){return function(){h((i.height==1));};})(d,c);d.src=g;return this;};\nfunction setCookie(a,b,d,e){if(d){var f=new Date();var c=new Date();c.setTime(f.getTime()+d);}document.cookie=a+\"=\"+encodeURIComponent(b)+\"; \"+(d?\"expires=\"+c.toGMTString()+\"; \":\"\")+\"path=\"+(e||'\/')+\"; domain=\"+window.location.hostname.replace(\/^.*(\\.facebook\\..*)$\/i,'$1');}function clearCookie(a){document.cookie=a+\"=; expires=Sat, 01 Jan 2000 00:00:00 GMT; \"+\"path=\/; domain=\"+window.location.hostname.replace(\/^.*(\\.facebook\\..*)$\/i,'$1');}function getCookie(d){var e=d+\"=\";var b=document.cookie.split(';');for(var c=0;c<b.length;c++){var a=b[c];while(a.charAt(0)==' ')a=a.substring(1,a.length);if(a.indexOf(e)==0)return decodeURIComponent(a.substring(e.length,a.length));}return null;}\nfunction URI(a){if(a===window)return;if(this===window)return new URI(a||window.location.href);this.parse(a||'');}copy_properties(URI,{getRequestURI:function(a,b){a=a===undefined||a;if(a&&window.PageTransitions&&PageTransitions.isInitialized()){return PageTransitions.getCurrentURI(!!b).getQualifiedURI();}else return new URI(window.location.href);},getMostRecentURI:function(){if(window.PageTransitions&&PageTransitions.isInitialized()){return PageTransitions.getMostRecentURI().getQualifiedURI();}else return new URI(window.location.href);},expression:\/(((\\w+):\\\/\\\/)([^\\\/:]*)(:(\\d+))?)?([^#?]*)(\\?([^#]*))?(#(.*))?\/,arrayQueryExpression:\/^(\\w+)((?:\\[\\w*\\])+)=?(.*)\/,explodeQuery:function(g){if(!g)return {};var h={};g=g.replace(\/%5B\/ig,'[').replace(\/%5D\/ig,']');g=g.split('&');for(var b=0,d=g.length;b<d;b++){var e=g[b].match(URI.arrayQueryExpression);if(!e){var j=g[b].split('=');h[URI.decodeComponent(j[0])]=j[1]===undefined?null:URI.decodeComponent(j[1]);}else{var c=e[2].split(\/\\]\\[|\\[|\\]\/).slice(0,-1);var f=e[1];var k=URI.decodeComponent(e[3]||'');c[0]=f;var i=h;for(var a=0;a<c.length-1;a++)if(c[a]){if(i[c[a]]===undefined)if(c[a+1]&&!c[a+1].match(\/\\d+$\/)){i[c[a]]={};}else i[c[a]]=[];i=i[c[a]];}else{if(c[a+1]&&!c[a+1].match(\/\\d+$\/)){i.push({});}else i.push([]);i=i[i.length-1];}if(i instanceof Array&&c[c.length-1]==''){i.push(k);}else i[c[c.length-1]]=k;}}return h;},implodeQuery:function(f,e,a){e=e||'';if(a===undefined)a=true;var g=[];if(f===null||f===undefined){g.push(a?URI.encodeComponent(e):e);}else if(f instanceof Array){for(var c=0;c<f.length;++c)try{if(f[c]!==undefined)g.push(URI.implodeQuery(f[c],e?(e+'['+c+']'):c));}catch(b){}}else if(typeof(f)=='object'){if(DOM.isNode(f)){g.push('{node}');}else for(var d in f)try{if(f[d]!==undefined)g.push(URI.implodeQuery(f[d],e?(e+'['+d+']'):d));}catch(b){}}else if(a){g.push(URI.encodeComponent(e)+'='+URI.encodeComponent(f));}else g.push(e+'='+f);return g.join('&');},encodeComponent:function(d){var c=String(d).split(\/([\\[\\]])\/);for(var a=0,b=c.length;a<b;a+=2)c[a]=window.encodeURIComponent(c[a]);return c.join('');},decodeComponent:function(a){return window.decodeURIComponent(a.replace(\/\\+\/g,' '));}});copy_properties(URI.prototype,{parse:function(b){var a=b.toString().match(URI.expression);copy_properties(this,{protocol:a[3]||'',domain:a[4]||'',port:a[6]||'',path:a[7]||'',query_s:a[9]||'',fragment:a[11]||''});return this;},setProtocol:function(a){this.protocol=a;return this;},getProtocol:function(){return this.protocol;},setQueryData:function(a){this.query_s=URI.implodeQuery(a);return this;},addQueryData:function(a){return this.setQueryData(copy_properties(this.getQueryData(),a));},removeQueryData:function(b){if(!(b instanceof Array))b=[b];var d=this.getQueryData();for(var a=0,c=b.length;a<c;++a)delete d[b[a]];return this.setQueryData(d);},getQueryData:function(){return URI.explodeQuery(this.query_s);},setFragment:function(a){this.fragment=a;return this;},getFragment:function(){return this.fragment;},setDomain:function(a){this.domain=a;return this;},getDomain:function(){return this.domain;},setPort:function(a){this.port=a;return this;},getPort:function(){return this.port;},setPath:function(a){this.path=a;return this;},getPath:function(){return this.path.replace(\/^\\\/+\/,'\/');},toString:function(){var a='';this.protocol&&(a+=this.protocol+':\/\/');this.domain&&(a+=this.domain);this.port&&(a+=':'+this.port);if(this.domain&&!this.path)a+='\/';this.path&&(a+=this.path);this.query_s&&(a+='?'+this.query_s);this.fragment&&(a+='#'+this.fragment);return a;},valueOf:function(){return this.toString();},isFacebookURI:function(){if(!URI._facebookURIRegex)URI._facebookURIRegex=new RegExp('(^|\\.)facebook\\.('+env_get('tlds').join('|')+')([^.]*)$','i');return (!this.domain||URI._facebookURIRegex.test(this.domain));},isQuicklingEnabled:function(){return window.Quickling&&Quickling.isActive()&&Quickling.isPageActive(this);},getRegisteredDomain:function(){if(!this.domain)return '';if(!this.isFacebookURI())return null;var b=this.domain.split('.');var a=b.indexOf('facebook');return b.slice(a).join('.');},getTld:function(f){if(!this.domain)return '';var d=this.domain.split('.');var e=d[d.length-1];if(f)return e;var c=env_get('tlds');if(c.indexOf(e)==-1)for(var a=0;a<c.length;++a){var b=c[a];if(new RegExp(b+'$').test(this.domain)){e=b;break;}}return e;},getUnqualifiedURI:function(){return new URI(this).setProtocol(null).setDomain(null).setPort(null);},getQualifiedURI:function(){var b=new URI(this);if(!b.getDomain()){var a=URI();b.setProtocol(a.getProtocol()).setDomain(a.getDomain()).setPort(a.getPort());}return b;},isSameOrigin:function(a){var b=a||window.location.href;if(!(b instanceof URI))b=new URI(b.toString());if(this.getProtocol()&&this.getProtocol()!=b.getProtocol())return false;if(this.getDomain()&&this.getDomain()!=b.getDomain())return false;return true;},go:function(a){goURI(this,a);},setSubdomain:function(b){var c=new URI(this).getQualifiedURI();var a=c.getDomain().split('.');if(a.length<=2){a.unshift(b);}else a[0]=b;return c.setDomain(a.join('.'));},getSubdomain:function(){if(!this.getDomain())return '';var a=this.getDomain().split('.');if(a.length<=2){return '';}else return a[0];},setSecure:function(a){return this.setProtocol(a?'https':'http');},isSecure:function(){return this.getProtocol()=='https';}});\nfunction detect_broken_proxy_cache(d,a){var b=getCookie(a);if((b!=d)&&(b!=null)&&(d!='0')){var c={c:'si_detect_broken_proxy_cache',m:a+' '+d+' '+b};var e=new URI('\/common\/scribe_endpoint.php').getQualifiedURI().toString();new AsyncSignal(e,c).send();}}\nfunction HTML(a){if(a&&a.__html)a=a.__html;if(this===window){if(a instanceof HTML)return a;return new HTML(a);}this._content=a;this._defer=false;this._extra_action='';this._nodes=null;this._inline_js=bagofholding;this._has_option_elements=false;return this;}HTML.isHTML=function(a){return a&&(a instanceof HTML||a.__html!==undefined);};HTML.replaceJSONWrapper=function(a){return a&&a.__html!==undefined?new HTML(a.__html):a;};copy_properties(HTML.prototype,{toString:function(){var a=this._content||'';if(this._extra_action)a+='<script type=\"text\/javascript\">'+this._extra_action+'<\/scr'+'ipt>';return a;},setAction:function(a){this._extra_action=a;return this;},getAction:function(){this._fillCache();var a=function(){this._inline_js();eval_global(this._extra_action);}.bind(this);if(this.getDeferred()){return a.defer.bind(a);}else return a;},setDeferred:function(a){this._defer=!!a;return this;},getDeferred:function(){return this._defer;},getContent:function(){return this._content;},getNodes:function(){this._fillCache();return this._nodes;},getRootNode:function(){return this.getNodes()[0];},hasOptionElements:function(){this._fillCache();return this._has_option_elements;},_fillCache:function(){if(null!==this._nodes)return;var d=this._content;if(!d){this._nodes=[];return;}d=d.replace(\/(<(\\w+)[^>]*?)\\\/>\/g,function(l,m,n){return n.match(\/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$\/i)?l:m+'><\/'+n+'>';});var h=d.trim().toLowerCase(),k=document.createElement('div'),b=false;var j=(!h.indexOf('<opt')&&[1,'<select multiple=\"multiple\" class=\"__WRAPPER\">','<\/select>'])||(!h.indexOf('<leg')&&[1,'<fieldset class=\"__WRAPPER\">','<\/fieldset>'])||(h.match(\/^<(thead|tbody|tfoot|colg|cap)\/)&&[1,'<table class=\"__WRAPPER\">','<\/table>'])||(!h.indexOf('<tr')&&[2,'<table><tbody class=\"__WRAPPER\">','<\/tbody><\/table>'])||((!h.indexOf('<td')||!h.indexOf('<th'))&&[3,'<table><tbody><tr class=\"__WRAPPER\">','<\/tr><\/tbody><\/table>'])||(!h.indexOf('<col')&&[2,'<table><tbody><\/tbody><colgroup class=\"__WRAPPER\">','<\/colgroup><\/table>'])||null;if(null===j){k.className='__WRAPPER';if(ua.ie()){j=[0,'<span style=\"display:none\">&nbsp;<\/span>',''];b=true;}else j=[0,'',''];}k.innerHTML=j[1]+d+j[2];while(j[0]--)k=k.lastChild;if(b)k.removeChild(k.firstChild);k.className!='__WRAPPER';if(0!=k.getElementsByTagName('option').length)this._has_option_elements=true;if(ua.ie()){var i;if(!h.indexOf('<table')&&-1==h.indexOf('<tbody')){i=k.firstChild&&k.firstChild.childNodes;}else if(j[1]=='<table>'&&-1==h.indexOf('<tbody')){i=k.childNodes;}else i=[];for(var f=i.length-1;f>=0;--f)if(i[f].nodeName&&i[f].nodeName.toLowerCase()=='tbody'&&i[f].childNodes.length==0)i[f].parentNode.removeChild(i[f]);}var g=k.getElementsByTagName('script');var a=[];for(var e=0;e<g.length;e++)if(g[e].src){a.push(Bootloader.requestResource.bind(Bootloader,'js',g[e].src));}else a.push(eval_global.bind(null,g[e].innerHTML));for(var e=g.length-1;e>=0;e--)g[e].parentNode.removeChild(g[e]);var c=function(){for(var l=0;l<a.length;l++)a[l]();};this._nodes=$A(k.childNodes);this._inline_js=c;}});\nvar DOM={find:function(a,c){var b=DOM.scry(a,c);return b[0];},scry:function(j,v){if(!j)return [];var w=v.split(' ');var d=[j];var i=j===document;for(var m=0;m<w.length;m++){if(d.length==0)break;if(w[m]=='')continue;var u=w[m];var s=[];var zd=false;if(u.charAt(0)=='^')if(m==0){zd=true;u=u.slice(1);}else return;u=u.replace(\/\\.\/g,' .');u=u.replace(\/\\#\/g,' #');u=u.replace(\/\\[\/g,' [');var z=u.split(' ');var za=z[0]||'*';var n=z[1]&&z[1].charAt(0)=='#';if(n){var h=ge(z[1].slice(1),true);if(h&&('*'==za||h.tagName.toLowerCase()==za))for(var q=0;q<d.length;q++)if(zd&&DOM.contains(h,d[q])){s=[h];break;}else if(document==d[q]||DOM.contains(d[q],h)){s=[h];break;}}else{var zc=[];var c=d.length;for(var o=0;o<c;o++){if(zd){var k=[];var g=d[o].parentNode;var a=za=='*';while(DOM.isNode(g,DOM.NODE_TYPES.ELEMENT)){if(a||g.tagName.toLowerCase()==za)k.push(g);g=g.parentNode;}}else var k=d[o].getElementsByTagName(za);var l=k.length;for(var r=0;r<l;r++)zc.push(k[r]);}for(var x=1;x<z.length;x++){var y=z[x];var p=y.charAt(0)=='.';var e=y.substring(1);for(var o=0;o<zc.length;o++){var zb=zc[o];if(!zb)continue;if(p){if(!CSS.hasClass(zb,e))delete zc[o];continue;}else{var f=y.slice(1,y.length-1);if(f.indexOf('=')==-1){if(zb.getAttribute(f)===null){delete zc[o];continue;}}else{var t=f.split('=');var b=t[0];var ze=t[1];ze=ze.slice(1,ze.length-1);if(zb.getAttribute(b)!=ze){delete zc[o];continue;}}}}}for(var o=0;o<zc.length;o++)if(zc[o]){s.push(zc[o]);if(zd)break;}}d=s;}return d;},getText:(function(){var a=document.createElement('div'),b=a.innerText==null?'textContent':'innerText';return function(c){if(!c){return '';}else if(DOM.isNode(c,DOM.NODE_TYPES.TEXT)){return c.data;}else return c[b];};})(),getSelection:function(){var b=window.getSelection,a=document.selection;if(b){return b()+'';}else if(a)return a.createRange().text;return null;},create:function(c,a,b){c=document.createElement(c);if(a){a=copy_properties({},a);if(a.style){copy_properties(c.style,a.style);delete a.style;}for(var d in a)if(d.toLowerCase().indexOf('on')==0){if(!(typeof a[d]!='function'))if(window.Event&&Event.listen){Event.listen(c,d.substr(2),a[d]);}else c[d]=a[d];delete a[d];}copy_properties(c,a);}if(b!=undefined)DOM.setContent(c,b);return c;},prependContent:function(c,b){if(!DOM.isNode(c))throw new Error('DOM.prependContent: reference element is not a node');var a=function(d){if(c.firstChild){c.insertBefore(d,c.firstChild);}else c.appendChild(d);};return DOM._addContent(b,a,c);},insertAfter:function(c,b){if(!DOM.isNode(c)||!c.parentNode)throw new Error('DOM.insertAfter: reference element is not a node');var a=function(d){if(c.nextSibling){c.parentNode.insertBefore(d,c.nextSibling);}else c.parentNode.appendChild(d);};return DOM._addContent(b,a,c.parentNode);},insertBefore:function(b,c){if(!DOM.isNode(c)||!c.parentNode)throw new Error('DOM.insertBefore: reference element is not a node or '+'does not have a parent.');var a=function(d){c.parentNode.insertBefore(d,c);};return DOM._addContent(b,a,c.parentNode);},setContent:function(b,a){if(!DOM.isNode(b))throw new Error('DOM.setContent: reference element is not a node');DOM.empty(b);return DOM.appendContent(b,a);},appendContent:function(c,b){if(!DOM.isNode(c))throw new Error('DOM.appendContent: reference element is not a node');var a=function(d){c.appendChild(d);};return DOM._addContent(b,a,c);},replace:function(c,b){if(!DOM.isNode(c)||!c.parentNode)throw new Error('DOM.replace: reference element must be a node with a'+' parent');var a=function(d){c.parentNode.replaceChild(d,c);};return DOM._addContent(b,a,c.parentNode);},remove:function(a){a=$(a);if(a.parentNode)a.parentNode.removeChild(a);},empty:function(a){a=$(a);while(a.firstChild)DOM.remove(a.firstChild);},contains:function(b,a){b=ge(b);a=ge(a);if(!b||!a){return false;}else if(b===a){return true;}else if(DOM.isNode(b,'#text')){return false;}else if(DOM.isNode(a,'#text')){return DOM.contains(b,a.parentNode);}else if(b.contains){return b.contains(a);}else if(b.compareDocumentPosition){return !!(b.compareDocumentPosition(a)&16);}else return false;},getRootElement:function(){var a=null;if(window.Quickling&&Quickling.isActive())a=ge('content');return a||document.body;},isNode:function(d,e){if(typeof(Node)=='undefined')Node=null;try{if(!d||!((Node!=undefined&&d instanceof Node)||d.nodeName))return false;}catch(a){return false;}if(typeof(e)!=='undefined'){e=$A(e).map(function(g){return (g+'').toUpperCase();});var c,f;try{c=new String(d.nodeName).toUpperCase();f=d.nodeType;}catch(a){return false;}for(var b=0;b<e.length;b++)try{if(c==e[b]||f==e[b])return true;}catch(a){}return false;}return true;},NODE_TYPES:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION_NODE:12},_addContent:function(d,a,l){d=HTML.replaceJSONWrapper(d);if(d instanceof HTML&&-1==d.toString().indexOf('<scr'+'ipt')&&''==l.innerHTML){var g=ua.ie();if(!g||(g>7&&!DOM.isNode(l,['table','tbody','thead','tfoot','tr','select','fieldset']))){l.innerHTML=d;return $A(l.childNodes);}}else if(DOM.isNode(l,DOM.NODE_TYPES.TEXT)){l.data=d;return [d];}var i,e=[],b=[];var f=document.createDocumentFragment();if(!(d instanceof Array))d=[d];for(var h=0;h<d.length;h++){i=HTML.replaceJSONWrapper(d[h]);if(i instanceof HTML){b.push(i.getAction());var k=i.getNodes(),c;for(var j=0;j<k.length;j++){c=(ua.safari()||(ua.ie()&&i.hasOptionElements()))?k[j]:k[j].cloneNode(true);e.push(c);f.appendChild(c);}}else if(is_scalar(i)){var m=document.createTextNode(i);e.push(m);f.appendChild(m);}else if(DOM.isNode(i)){e.push(i);f.appendChild(i);}else if(!(i instanceof Array))i!==null;}a(f);for(var h=0;h<b.length;h++)b[h]();return e;}};function $N(c,a,b){if(typeof a!='object'||DOM.isNode(a)||a instanceof Array||HTML.isHTML(a)){b=a;a=null;}return DOM.create(c,a,b);}var $$=function _$$(a){return DOM.scry.apply(null,[document].concat($A(arguments)));};\nDataStore=window.DataStore||{_storage:{},_elements:{},_tokenCounter:1,_NOT_IN_DOM_CONST:1,_getStorage:function(a){var b;if(typeof a=='string'){b='str_'+a;}else{b='elem_'+(a.__FB_TOKEN||(a.__FB_TOKEN=[DataStore._tokenCounter++]))[0];DataStore._elements[b]=a;}return DataStore._storage[b]||(DataStore._storage[b]={});},_shouldDeleteData:function(a){if(!a.nodeName)return false;try{if(null!=a.offsetParent)return false;}catch(b){}if(document.documentElement.contains){return !document.documentElement.contains(a);}else return (document.documentElement.compareDocumentPosition(a)&DataStore._NOT_IN_DOM_CONST);},set:function(c,b,d){var a=DataStore._getStorage(c);a[b]=d;return c;},get:function(e,d,c){var b=DataStore._getStorage(e),f=b[d];if(typeof f==='undefined'&&e.getAttribute){var a=e.getAttribute('data-'+d);f=(null===a)?undefined:a;}if((c!==undefined)&&(f===undefined))f=b[d]=c;return f;},remove:function(c,b){var a=DataStore._getStorage(c),d=a[b];delete a[b];return d;},cleanup:function(){var b,a;for(b in DataStore._elements){a=DataStore._elements[b];if(DataStore._shouldDeleteData(a)){delete DataStore._storage[b];delete DataStore._elements[b];}}}};\nEvent.DATASTORE_KEY='Event.listeners';if(!Event.prototype)Event.prototype={};function $E(a){a=a||window.event||{};if(!a._inherits_from_prototype)for(var c in Event.prototype)try{a[c]=Event.prototype[c];}catch(b){}return a;}(function(){copy_properties(Event.prototype,{_inherits_from_prototype:true,stop:function(){this.cancelBubble=true;this.stopPropagation&&this.stopPropagation();return this;},prevent:function(){this.returnValue=false;this.preventDefault&&this.preventDefault();return this;},kill:function(){this.stop().prevent();return false;},getTarget:function(){var g=this.target||this.srcElement;return g?$(g):null;},getRelatedTarget:function(){var g=this.relatedTarget||this.fromElement;return g?$(g):null;},getModifiers:function(){var g={control:!!this.ctrlKey,shift:!!this.shiftKey,alt:!!this.altKey,meta:!!this.metaKey};g.access=ua.osx()?g.control:g.alt;g.any=g.control||g.shift||g.alt||g.meta;return g;}});copy_properties(Event,{listen:function(h,p,j,m){if(typeof h=='string')h=$(h);if(typeof m=='undefined')m=Event.Priority.NORMAL;if(typeof p=='object'){var i={};for(var o in p)i[o]=Event.listen(h,o,p[o],m);return i;}if(p.match(\/^on\/i))throw new TypeError(\"Bad event name `\"+event+\"': use `click', not `onclick'.\");p=p.toLowerCase();var k=DataStore.get(h,b,{});if(f[p]){var g=f[p];p=g.base;j=g.wrap(j);}a(h,p);var q=k[p];if(!(m in q))q[m]=[];var l=q[m].length,n=new EventHandlerRef(j,q[m],l);q[m].push(n);return n;},stop:function(g){return $E(g).stop();},prevent:function(g){return $E(g).prevent();},kill:function(g){return $E(g).kill();},getKeyCode:function(event){event=$E(event);if(!event)return false;switch(event.keyCode){case 63232:return 38;case 63233:return 40;case 63234:return 37;case 63235:return 39;case 63272:case 63273:case 63275:return null;case 63276:return 33;case 63277:return 34;}if(event.shiftKey)switch(event.keyCode){case 33:case 34:case 37:case 38:case 39:case 40:return null;}return event.keyCode;},getPriorities:function(){if(!e){var g=values(Event.Priority);g.sort(function(h,i){return h-i;});e=g;}return e;},__fire:function(g,i,event){var h=Event.__getHandler(g,i);if(h)return h($E(event));},__getHandler:function(g,h){return DataStore.get(g,Event.DATASTORE_KEY+h);}});var e=null,b=Event.DATASTORE_KEY;var c=function(g){return function(h){if(!DOM.contains(this,h.getRelatedTarget()))return g.call(this,h);};};var f={mouseenter:{base:'mouseover',wrap:c},mouseleave:{base:'mouseout',wrap:c}};var a=function(g,l){var h='on'+l;var k=d.bind(g);var j=DataStore.get(g,b);if(l in j)return;j[l]={};if(g.addEventListener){g.addEventListener(l,k,false);}else if(g.attachEvent)g.attachEvent(h,k);DataStore.set(g,b+l,k);if(g[h]){var i=g[h];g[h]=null;Event.listen(g,l,i,Event.Priority.TRADITIONAL);}if(g.nodeName==='FORM'&&l==='submit')Event.listen(g,l,Event.__bubbleSubmit.curry(g),Event.Priority._BUBBLE);};var d=function(event){event=$E(event);var n=event.type;if(!DataStore.get(this,b))throw new Error(\"Bad listenHandler context.\");var o=DataStore.get(this,b)[n];if(!o)throw new Error(\"No registered handlers for `\"+n+\"'.\");if(n=='click'){var i=Parent.byTag(event.getTarget(),'a');user_action(i,n,event);}var k=Event.getPriorities();for(var j=0;j<k.length;j++){var l=k[j];if(l in o){var g=o[l];for(var h=0;h<g.length;h++){if(!g[h])continue;var m=g[h].fire(this,event);if(m===false){return event.kill();}else if(event.cancelBubble)return event.stop();}}}return event.returnValue;};})();Event.Priority={URGENT:-20,TRADITIONAL:-10,NORMAL:0,_BUBBLE:1000};function EventHandlerRef(b,a,c){this._handler=b;this._container=a;this._index=c;}EventHandlerRef.prototype={remove:function(){delete this._handler;delete this._container[this._index];},fire:function(a,event){return this._handler.call(a,event);}};\nfunction Vector2(b,c,a){copy_properties(this,{x:parseFloat(b),y:parseFloat(c),domain:a||'pure'});}copy_properties(Vector2.prototype,{toString:function(){return '('+this.x+', '+this.y+')';},add:function(c,d){if(arguments.length==1){if(c.domain!='pure')c=c.convertTo(this.domain);return this.add(c.x,c.y);}var a=parseFloat(c);var b=parseFloat(d);return new Vector2(this.x+a,this.y+b,this.domain);},mul:function(a,b){if(typeof(b)==\"undefined\")b=a;return new Vector2(this.x*a,this.y*b,this.domain);},sub:function(a,b){if(arguments.length==1){return this.add(a.mul(-1));}else return this.add(-a,-b);},distanceTo:function(a){return this.sub(a).magnitude();},magnitude:function(){return Math.sqrt((this.x*this.x)+(this.y*this.y));},convertTo:function(a){if(a!='pure'&&a!='viewport'&&a!='document')return new Vector2(0,0);if(a==this.domain)return new Vector2(this.x,this.y,this.domain);if(a=='pure')return new Vector2(this.x,this.y);if(this.domain=='pure')return new Vector2(0,0);var b=Vector2.getScrollPosition('document');var c=this.x,d=this.y;if(this.domain=='document'){c-=b.x;d-=b.y;}else{c+=b.x;d+=b.y;}return new Vector2(c,d,a);},setElementPosition:function(a){var b=this.convertTo('document');a.style.left=parseInt(b.x)+'px';a.style.top=parseInt(b.y)+'px';return this;},setElementDimensions:function(a){return this.setElementWidth(a).setElementHeight(a);},setElementWidth:function(a){a.style.width=parseInt(this.x,10)+'px';return this;},setElementHeight:function(a){a.style.height=parseInt(this.y,10)+'px';return this;},scrollElementBy:function(a){if(a==document.body){window.scrollBy(this.x,this.y);}else{a.scrollLeft+=this.x;a.scrollTop+=this.y;}return this;}});copy_properties(Vector2,{getEventPosition:function(b,a){a=a||'document';b=$E(b);var d=b.pageX||(b.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));var e=b.pageY||(b.clientY+(document.documentElement.scrollTop||document.body.scrollTop));var c=new Vector2(d,e,'document');return c.convertTo(a);},getScrollPosition:function(a){a=a||'document';var b=document.body.scrollLeft||document.documentElement.scrollLeft;var c=document.body.scrollTop||document.documentElement.scrollTop;return new Vector2(b,c,'document').convertTo(a);},getElementPosition:function(c,b){b=b||'document';if(!c)return;if(!('getBoundingClientRect' in c))return new Vector2(0,0,'document');var e=c.getBoundingClientRect(),a=document.documentElement,d=Math.round(e.left)-a.clientLeft,f=Math.round(e.top)-a.clientTop;return new Vector2(d,f,'viewport').convertTo(b);},getElementDimensions:function(a){return new Vector2(a.offsetWidth||0,a.offsetHeight||0);},getViewportDimensions:function(){var a=(window&&window.innerWidth)||(document&&document.documentElement&&document.documentElement.clientWidth)||(document&&document.body&&document.body.clientWidth)||0;var b=(window&&window.innerHeight)||(document&&document.documentElement&&document.documentElement.clientHeight)||(document&&document.body&&document.body.clientHeight)||0;return new Vector2(a,b,'viewport');},getDocumentDimensions:function(){var a=(document&&document.documentElement&&document.documentElement.scrollWidth)||(document&&document.body&&document.body.scrollWidth)||0;var b=(document&&document.documentElement&&document.documentElement.scrollHeight)||(document&&document.body&&document.body.scrollHeight)||0;return new Vector2(a,b,'document');},scrollIntoView:function(a){var b=a.offsetParent;var d=Rect(a);var c=d.boundWithin(Rect(b)).getPositionVector();d.getPositionVector().sub(c).scrollElementBy(b);}});var operaIgnoreScroll={table:true,'inline-table':true,inline:true};function elementX(a){return Vector2.getElementPosition(a,'document').x;}function elementY(a){return Vector2.getElementPosition(a,'document').y;}\n\nif (window.Bootloader) { Bootloader.done([\"Xr4cm\"]); }")
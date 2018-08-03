!function(t,i,e){t.fn.backstretch=function(n,s){return(n===e||0===n.length)&&t.error("No images were supplied for Backstretch"),0===t(i).scrollTop()&&i.scrollTo(0,0),this.each(function(){var i=t(this),e=i.data("backstretch");if(e){if("string"==typeof n&&"function"==typeof e[n])return void e[n](s);s=t.extend(e.options,s),e.destroy(!0)}e=new r(this,n,s),i.data("backstretch",e)})},t.backstretch=function(i,e){return t("body").backstretch(i,e).data("backstretch")},t.expr[":"].backstretch=function(i){return t(i).data("backstretch")!==e},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var n={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},r=function(e,s,r){this.options=t.extend({},t.fn.backstretch.defaults,r||{}),this.images=t.isArray(s)?s:[s],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=e===document.body,this.$container=t(e),this.$root=this.isBody?t(a?i:document):this.$container,e=this.$container.children(".backstretch").first(),this.$wrap=e.length?e:t('<div class="backstretch"></div>').css(n).appendTo(this.$container),this.isBody||(e=this.$container.css("position"),s=this.$container.css("zIndex"),this.$container.css({position:"static"===e?"relative":e,zIndex:"auto"===s?0:s,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&a?"fixed":"absolute"}),this.index=0,this.show(this.index),t(i).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===i.pageYOffset&&(i.scrollTo(0,1),this.resize())},this))};r.prototype={resize:function(){try{var t,e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),s=n,r=this.isBody?i.innerHeight?i.innerHeight:this.$root.height():this.$root.innerHeight(),a=s/this.$img.data("ratio");a>=r?(t=(a-r)/2,this.options.centeredY&&(e.top="-"+t+"px")):(a=r,s=a*this.$img.data("ratio"),t=(s-n)/2,this.options.centeredX&&(e.left="-"+t+"px")),this.$wrap.css({width:n,height:r}).find("img:not(.deleteable)").css({width:s,height:a}).css(e)}catch(t){}return this},show:function(i){if(!(Math.abs(i)>this.images.length-1)){var e=this,n=e.$wrap.find("img").addClass("deleteable"),r={relatedTarget:e.$container[0]};return e.$container.trigger(t.Event("backstretch.before",r),[e,i]),this.index=i,clearInterval(e.interval),e.$img=t("<img />").css(s).bind("load",function(s){var a=this.width||t(s.target).width();s=this.height||t(s.target).height(),t(this).data("ratio",a/s),t(this).fadeIn(e.options.speed||e.options.fade,function(){n.remove(),e.paused||e.cycle(),t(["after","show"]).each(function(){e.$container.trigger(t.Event("backstretch."+this,r),[e,i])})}),e.resize()}).appendTo(e.$wrap),e.$img.attr("src",e.images[i]),e}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(e){t(i).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),e||this.$wrap.remove(),this.$container.removeData("backstretch")}};var a,o=navigator.userAgent,h=navigator.platform,c=!!(c=o.match(/AppleWebKit\/([0-9]+)/))&&c[1],d=!!(d=o.match(/Fennec\/([0-9]+)/))&&d[1],p=o.match(/Opera Mobi\/([0-9]+)/),f=!!p&&p[1],u=!!(u=o.match(/MSIE ([0-9]+)/))&&u[1];a=!((-1<h.indexOf("iPhone")||-1<h.indexOf("iPad")||-1<h.indexOf("iPod"))&&c&&534>c||i.operamini&&"[object OperaMini]"==={}.toString.call(i.operamini)||p&&7458>f||-1<o.indexOf("Android")&&c&&533>c||d&&6>d||"palmGetResource"in i&&c&&534>c||-1<o.indexOf("MeeGo")&&-1<o.indexOf("NokiaBrowser/8.5.0")||u&&6>=u)}(jQuery,window);
// build time:Mon Oct 15 2018 21:12:26 GMT+0800 (GMT+08:00)
(function(o){"use strict";function t(o){this.config=o}t.prototype.setup=function(){var o=this.config.leancloud;this.navbar();if(this.config.toc){this.scrollToc();this.tocFollow()}if(this.config.fancybox){this.fancybox()}if(o.app_id&&o.app_key){this.recordReadings()}if(this.config.pjax){this.pjax()}this.backToTop()};t.prototype.navbar=function(){var o=$("#mobile-navbar");var t=$(".mobile-navbar-icon");var e=new Slideout({panel:document.getElementById("mobile-panel"),menu:document.getElementById("mobile-menu"),padding:180,tolerance:70});e.disableTouch();t.click(function(){e.toggle()});e.on("beforeopen",function(){o.addClass("fixed-open");t.addClass("icon-click").removeClass("icon-out")});e.on("beforeclose",function(){o.removeClass("fixed-open");t.addClass("icon-out").removeClass("icon-click")});$("#mobile-panel").on("touchend",function(){e.isOpen()&&t.click()})};t.prototype.scrollToc=function(){var t=20;var e=$(".post-toc");var n=$(".post-footer");if(e.length){var i=e.offset().top-t;var a=n.offset().top-e.height()-t;var c={start:{position:"absolute",top:i},process:{position:"fixed",top:t},end:{position:"absolute",top:a}};$(o).scroll(function(){var t=$(o).scrollTop();if(t<i){e.css(c.start)}else if(t>a){e.css(c.end)}else{e.css(c.process)}})}};t.prototype.tocFollow=function(){var t=30;var e=$(".toc-link"),n=$(".headerlink");var i=$.map(n,function(o){return $(o).offset().top});$(o).scroll(function(){var n=$(o).scrollTop();for(var a=0;a<e.length;a++){var c=a+1===e.length,s=i[a]-t,r=c?Infinity:i[a+1]-t;if(s<n&&n<=r){$(e[a]).addClass("active")}else{$(e[a]).removeClass("active")}}})};t.prototype.fancybox=function(){if($.fancybox){$(".post").each(function(){$(this).find("img").each(function(){var o='href="'+this.src+'"';var t='title="'+this.alt+'"';$(this).wrap('<a class="fancybox" '+o+" "+t+"></a>")})});$(".fancybox").fancybox({openEffect:"elastic",closeEffect:"elastic"})}};t.prototype.recordReadings=function(){if(typeof AV!=="object")return;var o=$(".post-visits");var t=AV.Object.extend("Counter");if(o.length===1){n(t)}else{i(t)}function e(o,t){var e=o.text().replace(/(\d+)/i,t);o.text(e)}function n(t){var n=new AV.Query(t);var i=o.data("url").trim();var a=o.data("title").trim();n.equalTo("url",i);n.find().then(function(n){if(n.length>0){var c=n[0];c.save(null,{fetchWhenSave:true}).then(function(o){o.increment("time",1);return o.save()}).then(function(t){e(o,t.get("time"))})}else{var s=new t;s.set("title",a);s.set("url",i);s.set("time",1);s.save().then(function(){e(o,s.get("time"))})}},function(o){console.log("Error:"+o.code+" "+o.message)})}function i(t){o.each(function(){var o=$(this);var n=new AV.Query(t);var i=o.data("url").trim();n.equalTo("url",i);n.find().then(function(t){if(t.length===0){e(o,0)}else{var n=t[0];e(o,n.get("time"))}},function(o){console.log("Error:"+o.code+" "+o.message)})})}};t.prototype.pjax=function(){if(location.hostname==="localhost"||this.hasPjax)return;this.hasPjax=true;var o=this;$(document).pjax("a","body",{fragment:"body"});$(document).on("pjax:send",function(){NProgress.start();$("body").addClass("hide-top")});$(document).on("pjax:complete",function(){NProgress.done();$("body").removeClass("hide-top");o.setup()})};t.prototype.backToTop=function(){var t=$("#back-to-top");$(o).scroll(function(){if($(o).scrollTop()>100){t.fadeIn(1e3)}else{t.fadeOut(1e3)}});t.click(function(){$("body,html").animate({scrollTop:0})})};var e=o.config;var n=new t(e);n.setup()})(window);
//rebuild by neat 
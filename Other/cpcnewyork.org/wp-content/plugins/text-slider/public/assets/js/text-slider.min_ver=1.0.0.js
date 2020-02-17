(function(e,t,n,r){function o(t,n){this.element=t;this.settings=e.extend({},s,n);this._defaults=s;this._name=i;this.timeId=null;this.resizeThrottle=null;this.$container=e(this.element).find(".text-slideshow:first");this.$slides=this.$container.children();this.$nextButton=e(this.element).find(".next:first");this.$prevButton=e(this.element).find(".prev:first");this.init()}var i="textSlider",s={intervalTime:9e3,duration:4,definedHeight:false};o.prototype={init:function(){function r(){n.initAutoHeight()}this.$slides.not(":first").not(".dummy-slide").hide();if(this.$slides.length>1){this.start();this.$nextButton.on("click",{plugin:this},this.pressForward);this.$prevButton.on("click",{plugin:this},this.pressBackwards)}this.settings._autoHeightOnResize=function(){clearTimeout(this.resizeThrottle);this.resizeThrottle=setTimeout(this.initAutoHeight,50)};e(t).on("resize orientationchange",this.settings._autoHeightOnResize);var n=this;setTimeout(r,30)},initAutoHeight:function(){var t,n;n=this.calcDummyIndex();if(n==this.settings._sentinelIndex)return;this.settings._sentinelIndex=n;if(this.settings._sentinel)this.settings._sentinel.remove();t=e(this.$slides[n]).clone();t.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel");t.css({position:"static",visibility:"hidden",display:"block"}).prependTo(this.$container).addClass(".dummy-slide");t.find("*").css("visibility","hidden");if(this.settings.definedHeight!==false){this.settings.definedHeight=parseInt(this.settings.definedHeight);if(e.type(this.settings.definedHeight)=="number"){t.height(this.settings.definedHeight)}}this.settings._sentinel=t},calcDummyIndex:function(){var t=0,n=-1;this.$slides.each(function(r){var i=e(this).height();if(i>n){n=i;t=r}});return t},start:function(){clearTimeout(this.timeId);var e=this;this.timeId=setInterval(function(){e.moveForward()},this.settings.intervalTime)},moveForward:function(){this.$container.children().filter(":first").next().fadeOut(this.settings.duration).next().fadeIn(this.settings.duration).end().appendTo(this.$container)},moveBackwards:function(){this.$container.children().filter(":first").next().fadeOut(this.settings.duration);this.$container.children().filter(":last").fadeIn(this.settings.duration).insertAfter(this.$container.children().filter(":first"))},pressForward:function(e){clearTimeout(e.data.plugin.timeId);e.data.plugin.moveForward();e.data.plugin.timeId=setInterval(function(){e.data.plugin.moveForward()},e.data.plugin.settings.intervalTime);e.preventDefault()},pressBackwards:function(e){clearTimeout(e.data.plugin.timeId);e.data.plugin.moveBackwards();e.data.plugin.timeId=setInterval(function(){e.data.plugin.moveForward()},e.data.plugin.settings.intervalTime);e.preventDefault()},stop:function(){clearTimeout(this.timeId)}};e.fn[i]=function(t){this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new o(this,t))}});return this}})(jQuery,window,document)
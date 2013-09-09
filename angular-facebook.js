angular.module("angular-facebook-sdk",[]).factory("facebook",["$rootScope",function(a){var b={};return b.config={appId:388862497906723,channelUrl:void 0,language:"en_US",status:!0,xfbml:!0,elementId:"facebook-jssdk"},b.load=function(){var c,d=document.getElementsByTagName("script")[0];document.getElementById(b.config.elementId)||(c=document.createElement("script"),c.id=b.config.elementId,c.src="//connect.facebook.net/"+b.config.language+"/all.js",c.onload=function(){c.onload.first&&(c.onload.first=!1,FB.init(b.config),console.log("FacebookLoaded"),a.$broadcast("FacebookLoaded"))},c.onload.first=!0,c.onreadystatechange=function(){"complete"==this.readyState&&c.onload()},d.parentNode.insertBefore(c,d))},b.reload=function(){delete window.FB;var a=document.getElementById(b.config.elementId);a.parentNode.removeChild(a),b.load()},b.changeLanguage=function(a){b.config.language=a,b.reload()},b}]);var socialWidget=function(a){return function(){return{restrict:"C",scope:!0,controller:["$element","$attrs","$scope",function(b,c,d){d.$attrs=c,console.log(c);var e=!1,f=function(){e&&(e=!1,window.FB&&window.FB.XFBML&&window.FB.XFBML.parse(b[0].parentElement))};angular.forEach(a,function(a){d.$watch("$attrs."+a,function(){e=!0})}),d.$watch(f),d.$on("FacebookLoaded",function(){e=!0})}]}}};angular.module("angular-facebook-plugins",[]).directive("fbLike",socialWidget(["href","width","colorscheme","layout","send","showFaces","action","font"])).directive("fbSend",socialWidget(["href","font","colorscheme","ref"])).directive("fbPost",socialWidget(["href"])).directive("fbFollow",socialWidget(["href","layout","showFaces","colorscheme","font","width"])).directive("fbComments",socialWidget(["href","colorscheme","mobile","width"])).directive("fbActivity",socialWidget(["site","action","width","height","header","colorscheme","font","recommendations","filter","linktarget","ref"])).directive("fbRecommendations",socialWidget(["site","action","width","height","header","colorscheme","font","linktarget","ref"])).directive("fbRecommendationsBar",socialWidget(["href","trigger","action","side","site","ref"])).directive("fbLikeBox",socialWidget(["href","width","colorscheme","showFaces","stream","header","showBorder","forceWall"])).directive("fbLoginButton",socialWidget(["showFaces","autologoutlink","onlogin","maxRows","width","scope","registrationUrl","size"])).directive("fbFacepile",socialWidget(["href","action","maxRows","width","colorscheme","size"])),angular.module("angular-facebook",["angular-facebook-plugins","angular-facebook-sdk"]);
//# sourceMappingURL=angular-facebook.map.js
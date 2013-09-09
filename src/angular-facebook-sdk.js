angular.module("angular-facebook-sdk",[])
	.factory("facebook", ["$rootScope", function($rootScope){
		var facebook = {};
		facebook.config = {
			appId		: 388862497906723,
			channelUrl	: undefined,
			language	: "en_US",
			status		: true,
			xfbml		: true,
			elementId   : "facebook-jssdk"
		};

		facebook.load = function(){
			var js, fjs = document.getElementsByTagName('script')[0];
			if (document.getElementById(facebook.config.elementId))
				return;
			js = document.createElement("script");
			js.id = facebook.config.elementId;
			js.src = "//connect.facebook.net/"+facebook.config.language+"/all.js";
			js.onload = function(){
				if (js.onload.first){
					js.onload.first = false;
					FB.init(facebook.config);
					console.log("FacebookLoaded");
					$rootScope.$broadcast("FacebookLoaded");
				}
			};
			js.onload.first = true;
			js.onreadystatechange = function(){
				if (this.readyState == 'complete')
					js.onload();
			};
			fjs.parentNode.insertBefore(js,fjs);
		};

		facebook.reload = function(){
			delete(window.FB);
			var jssdk = document.getElementById(facebook.config.elementId);
			jssdk.parentNode.removeChild(jssdk);
			facebook.load();
		};

		facebook.changeLanguage = function(code){
			facebook.config.language = code;
			facebook.reload();
		};
		return facebook;
	}]);
		

var socialWidget = function(attributes){
	return function(){
		return {
			restrict: 'C',
			scope: true,
			controller: ["$element", "$attrs", "$scope", function($element, $attrs, $scope) {
				$scope.$attrs = $attrs;
				console.log($attrs);
				var change = false;
				var reloadFB = function(){
					if (change){
						change = false;
						if (window.FB && window.FB.XFBML){
							window.FB.XFBML.parse($element[0].parentElement);
						}
					}
				};
				angular.forEach(attributes,function(value){
					$scope.$watch("$attrs."+value, function(){
						change = true;
					});
				});
				$scope.$watch(reloadFB);
				$scope.$on("FacebookLoaded", function(){
					change = true;
				});
			}]
		};
	};
};

angular.module("angular-facebook-plugins",[])
	.directive("fbLike", socialWidget(["href", "width", "colorscheme", "layout", "send", "showFaces", "action", "font"]))
	.directive("fbSend", socialWidget(["href", "font", "colorscheme","ref"]))
	.directive("fbPost", socialWidget(["href"]))
	.directive("fbFollow", socialWidget(["href", "layout", "showFaces", "colorscheme", "font", "width"]))
	.directive("fbComments", socialWidget(["href", "colorscheme", "mobile", "width"]))
	.directive("fbActivity", socialWidget(["site", "action", "width", "height", "header", "colorscheme", "font", "recommendations", "filter", "linktarget", "ref"]))
	.directive("fbRecommendations", socialWidget(["site", "action", "width", "height", "header", "colorscheme","font","linktarget","ref"]))
	.directive("fbRecommendationsBar", socialWidget(["href", "trigger", "action", "side", "site", "ref"]))
	.directive("fbLikeBox", socialWidget(["href", "width", "colorscheme", "showFaces", "stream", "header", "showBorder", "forceWall"]))
	.directive("fbLoginButton", socialWidget(["showFaces", "autologoutlink", "onlogin", "maxRows", "width", "scope", "registrationUrl", "size"]))
	.directive("fbFacepile", socialWidget(["href", "action", "maxRows", "width", "colorscheme", "size"]));

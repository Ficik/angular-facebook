# angular-facebook

angular-facebook is angular module to provide easy access to facebook's sdk and social plugins.

## Social Plugins module

If you use html5 version of social plugins you can just load this plugin. It will allow you to use databindings in social plugins without manually reloading the plugin.

##SDK module

Provides injectable facebook object, which loads sdk:

    angular.module("myApp",["angular-facebook"])
	    .run(function(facebook){
		    facebook.config.appId = MY_APP_ID;
		    facebook.load();
	    });

You can also change language of loaded sdk as simply as calling: `facebook.changeLanguage("ll_CC")`.
When used with angular-facebook-plugins plugins will automaticky change language as soon as new sdk is loaded.
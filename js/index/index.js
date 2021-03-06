require.config({
	baseUrl: "js",
    paths:{
    	zepto:"lib/zepto.new",
        underscore:"lib/underscore",
        
        backbone:"lib/backbone",
        router:"index/router"
    }
})

require(["zepto","underscore","backbone"],function($,_,Backbone){
		
		Backbone.Router.extend({
		   // Hash maps for routes
		   routes : {
		      "" : "index",
		      "/teams" : "getTeams",
		      "/teams/:country" : "getTeamsCountry",
		      "/teams/:country/:name ": "getTeam"
		   },
		   
		   index: function(){
		       // Homepage 
		       $("body").html("Homepage");
		   },
		   
		   getTeams: function() {
		       // List all teams 
		       $("body").html(" List all teams");
		   },
		   getTeamsCountry: function(country) {
		       // Get list of teams for specific country
		   		$("body").html("Get list of teams for specific country");
		   },
		   getTeam: function(country, name) {
		       // Get the teams for a specific country and with a specific name
		       $("body").html("teams/country/name");
		   },	
		   fourOfour: function(error) {
		       // 404 page
		   }
		});
})
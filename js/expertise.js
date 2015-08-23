angular.module('webApp').controller('expController',[function() {

		this.techs = [{"title":"Java", "id": "1"},
		              {"title":"HTML5", "id": "2"},
		              {"title":"CSS3", "id": "3"},
		              {"title":"Javascript", "id": "4"},
		              {"title":"Dojo", "id": "5"},
                      {"title":"AngularJS", "id": "6"},
		              {"title":"XML", "id": "7"},
                      {"title":"PHP", "id": "8"},
                      {"title":"SQL", "id": "9"}];

        this.tools = [{"title":"Eclipse", "id": "1"},
                      {"title":"RAD", "id": "2"},
                      {"title":"Websphere", "id": "3"},
                      {"title":"Tomcat", "id": "4"},
                      {"title":"Solr", "id": "5"},
                      {"title":"Linux", "id": "6"},
                      {"title":"Putty", "id": "7"},
                      {"title":"Cygwin", "id": "8"},
                      {"title":"Firebug", "id": "9"},
                      {"title":"SQuirreL", "id": "10"},
                      {"title":"Chrome Dev Tools", "id": "11"},
                      {"title":"Brackets", "id": "12"},
                      {"title":"GitHub", "id": "13"},
                      {"title":"Rational Team Concert", "id": "14"},
                      {"title":"Gimp", "id": "15"},
                      {"title":"Paint.net", "id": "16"}];

        this.other = [{"title":"Agile", "id": "1"},
		              {"title":"Scrum", "id": "2"},
		              {"title":"Team Building", "id": "3"},
		              {"title":"Empathy", "id": "4"},
		              {"title":"Psychology", "id": "5"}];

}]);


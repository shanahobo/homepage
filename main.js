//angular.module('myApp.controllers', []);angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('webApp', ['ngRoute','ngAnimate', 'ui.bootstrap'])
			.config(function($routeProvider) {
				$routeProvider.when("/",
				{
					templateUrl: "partials/home.html",
				    })
                .when("/Home",
				{
					templateUrl: "partials/home.html"
					})
				.when("/Skills",
				{
					templateUrl: "partials/expertise.html"
					})
				.when("/Projects",
				{
					templateUrl: "partials/projects.html"
					})
				.when("/About",
				{
					templateUrl: "partials/about.html"
					})
				.when("/Contact",
				{
					templateUrl: "partials/contact.html"
					})
				.when("/Downloads",
				{
					templateUrl: "partials/downloads.html"
					})
				.otherwise({
					redirectTo: '/Home'
					});

}).controller('menuController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {


            $scope.toggleMenu = function(){

                $scope.showMenu === true ? $scope.showMenu = false : $scope.showMenu = true;
			};



             $scope.scrollTo = function(eID) {
                    var startY = currentYPosition();
                    var stopY = elmYPosition(eID);
                    var distance = stopY > startY ? stopY - startY : startY - stopY;
                    if (distance < 100) {
                        scrollTo(0, stopY); return;
                    }
                    var speed = 20;
                    var step = Math.round(distance / 25);
                    var leapY = stopY > startY ? startY + step : startY - step;
                    var timer = 0;
                    if (stopY > startY) {
                        for ( var i=startY; i<stopY; i+=step ) {
                            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                        } return;
                    }
                    for ( var i=startY; i>stopY; i-=step ) {
                        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
                    }

                    function currentYPosition() {
                        // Firefox, Chrome, Opera, Safari
                        if (self.pageYOffset) return self.pageYOffset;
                        // Internet Explorer 6 - standards mode
                        if (document.documentElement && document.documentElement.scrollTop)
                            return document.documentElement.scrollTop;
                        // Internet Explorer 6, 7 and 8
                        if (document.body.scrollTop) return document.body.scrollTop;
                        return 0;
                    }

                    function elmYPosition(eID) {
                        var elm = document.getElementById(eID);
                        var y = elm.offsetTop;
                        var node = elm;
                        while (node.offsetParent && node.offsetParent != document.body) {
                            node = node.offsetParent;
                            y += node.offsetTop;
                        } return y;
                    }

                };

            $scope.removeContent = function(){
                //$scope.classType = "animated bounceOut";
                $scope.scrollTo("landing");
            };

            $scope.bringBackTheContent = function(){
                //$scope.classType="animated fadeInLeft";
                $scope.scrollTo("main-screen-footer");
                $scope.toggleMenu();
            }

}]).directive("social", function(){
        return{
            restrict:"E",
            templateUrl: "partials/social.html"
        }

})

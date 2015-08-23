 angular.module('webApp').controller('socialController', ['$scope', function($scope){


		this.socialMedia = [{"imageSrc":"style/images/social_email_small.png" , "title": "Email", "href":"mailTo:info@niallshannon.com", "alt":"Email Me"},
                            {"imageSrc":"style/images/social_linkedin_small.png" , "title": "LinkedIn", "href":"https://ie.linkedin.com/pub/niall-shannon/60/9bb/1a4", "alt":"Link with me"},
                            {"imageSrc":"style/images/social_twitter_small.png" , "title": "Twitter", "href":"https://twitter.com/niallshannon", "alt":"Follow me on Twitter"},
                            {"imageSrc":"style/images/social_google_small.png" , "title": "Google Plus", "href":"https://plus.google.com/+NiallShannon86/posts", "alt":"Add me to your circle"},
                            {"imageSrc":"style/images/social_git_small.png" , "title": "GitHub", "href":"https://github.com/shanahobo/", "alt":"View my GitHub"}];

        $scope.className="";

        $scope.mouseEnter = function(arg){
            $scope.arg="animated bounce";
        };

        $scope.mouseLeave = function(){
            $scope.className="";
        }
}]);

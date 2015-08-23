angular.module('webApp')
.controller('aboutController', ['$scope', function($scope) {

}])

.directive('age', ['$interval', 'dateFilter', function($interval, dateFilter) {

      function link(scope, element, attrs) {
            var format,
            today = new Date(),
            birthDate = new Date("1986-03-30T04:00:00"),
            bdInMilis = birthDate.getTime(),
            todayInMilis = today.getTime(),
            timeoutId;


            element.on('$destroy', function() {
              $interval.cancel(timeoutId);
            });

            // start the UI update process; save the timeoutId for canceling
            timeoutId = $interval(function() {

                todayInMilis=todayInMilis+1000;
                var timeAlive = todayInMilis - bdInMilis;
                timeAlive = timeAlive/1000;

                var numyears = Math.floor(timeAlive / 31536000);

                var numdays = Math.floor((timeAlive % 31536000) / 86400);

                var numhours = Math.floor(((timeAlive % 31536000) % 86400) / 3600);

                var numminutes = Math.floor((((timeAlive % 31536000) % 86400) % 3600) / 60);

                var numseconds = Math.floor((((timeAlive % 31536000) % 86400) % 3600) % 60);

                element.text(numyears+ " years, " + numdays + " days, " + numhours + " hours, " + numminutes + " minutes, " + numseconds);
            }, 1000);
      }

      return {
        link: link
      };
}]);

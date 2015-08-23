 angular.module('webApp').controller('contactController', ['$http','$scope', function($http, $scope){

     $scope.formSubmitted = false;
     $scope.formError = false;

     $scope.submitForm = function(){

            var formProcess = processForm();
            formProcess.then(
                function(result) {  // this is only run after $http completes
                    $scope.data = result;
                    if($scope.data.status===200){
                        // form submitted successfully
                        $scope.formSubmitted = true;
                    }
                    else{
                        // form not submitted successfully
                        $scope.formError = true;
                    }
                },
                function(error){
                    console.log("form submit error "+error);
                    // form not submitted successfully
                    $scope.formError = true;
                }
            );
     };


     var processForm = function() {

        return $http({
            method: 'POST',
            url: 'services/ContactService.php',
            data: $scope.contact,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(status) {
            console.log("submit success" + status);
            return status;
        }).error(function(e, status) {
            console.log("submit failure" + e);
        });
     };

}]);

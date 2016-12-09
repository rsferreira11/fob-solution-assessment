// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('loginController', ['$scope', '$http', function ($scope, $http) {
    
    $scope.username = '';
    $scope.password = '';
    
    $scope.submit = function(){
        console.log($scope.username, $scope.password);
            var data = {
                "username": $scope.username,
                "password": $scope.password
            };
        
            $http.post(
                "http://localhost:3000/api/login",
                data
            )
            .then(function successCallback(res){
                $scope.flashMessage = res.data.message;
                $scope.httpStatus = res.status;
            }, function errorCallback(res){
                $scope.flashMessage = res.data.message;
                $scope.httpStatus = res.status;
            });
        
    };
    
}]);
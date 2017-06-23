angular.module("todo", ['angularMoment']);
angular.module("todo").controller("myCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.tasks = [];
    $scope.title;

    $http.get('entere a url to get data').then(function(response) {
        $scope.tasks = response.data;
    });

    $scope.removeTask = function(id) {
        $http.delete('http://localhost:3000/tasks/' + id);
    };

    $scope.addTask = function() {
        // do a post request here
    }

}]);
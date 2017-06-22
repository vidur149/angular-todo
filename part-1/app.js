angular.module("todo", []);
angular.module("todo").controller("myCtrl", ['$scope', '$http', function($scope, $http) {

    $scope.tasks = [{
            'title': 'Complete the Html code',
            'id': 1
        },
        {
            'title': 'Complete the JS code',
            'id': 2
        }
    ];

    $scope.removeTask = function(id) {
        // this function will be called when you wish to remove a todo
    };

    $scope.addTask = function() {
        // this function will be called when you wish to add a todo
    };
}]);
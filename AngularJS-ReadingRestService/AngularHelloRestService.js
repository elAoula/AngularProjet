angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('https://antsaresting.appspot.com/rest/resources/json').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
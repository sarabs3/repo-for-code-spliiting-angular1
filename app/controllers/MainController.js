const MainController = function($scope, $route, $routeParams, $location) {
    $scope.greet = 'Hello World!';
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
};
MainController.$inject = ['$scope', '$route', '$routeParams', '$location'];

export default MainController;
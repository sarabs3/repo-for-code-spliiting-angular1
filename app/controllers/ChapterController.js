const ChapterController = function($scope, $routeParams) {
    $scope.name = 'ChapterController';
    $scope.params = $routeParams;
}
ChapterController.$inject = ['$scope', '$routeParams'];

export default ChapterController;
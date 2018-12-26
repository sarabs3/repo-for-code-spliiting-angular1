// const BookController = function($scope, $routeParams) {
//     $scope.name = 'BookController';
//     $scope.params = $routeParams;
// };
// BookController.$inject = ['$scope', '$routeParams'];

// export default BookController;



import angular from 'angular';

const BookController = function($scope, $routeParams) {
    $scope.name = 'BookController';
    $scope.params = $routeParams;
};
BookController.$inject = ['$scope', '$routeParams'];



export default angular
.module('bookModule', [])
.controller('BookController', BookController);
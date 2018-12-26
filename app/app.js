import angular from 'angular';
import homeController from './controllers/home';
import MainController from "./controllers/MainController";
import ChapterController from "./controllers/ChapterController";
import $ocLazyLoad from 'oclazyload';
const ngRoute = require('angular-route');

var app = angular.module('myApp', [ngRoute, $ocLazyLoad])



app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/Book/:bookId', {
      templateUrl: './app/views/book.html',
      controller: 'BookController',
      resolve: {
        loadMyCtrl: ['$oclazyload', function ($ocLazyLoad) {
            return $ocLazyLoad.load('./controllers/BookController.js')
        }]
      }
    })
    .when('/Book/:bookId/ch/:chapterId', {
      templateUrl: './app/views/chapter.html',
      controller: 'ChapterController'
    });
   
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
   });

   app.controller('home', homeController);
   app.controller('MainController', MainController)
//    app.controller('BookController', import(/* webpackChunkName: "BookController" */'./controllers/BookController').then(({default: BookController}) => {
//     $ocLazyLoad.load(BookController);
//    }))
   app.controller('ChapterController', ChapterController )
   
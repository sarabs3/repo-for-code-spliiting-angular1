import angular from 'angular';
import WelcomeController from './controllers/WelcomeController';
import $ocLazyLoad from 'oclazyload';
import homeController from './controllers/home';
import MainController from "./controllers/MainController";
import ChapterController from "./controllers/ChapterController";
const ngRoute = require('angular-route');

const app = angular.module('demo', [ngRoute, $ocLazyLoad])
.controller('WelcomeController', WelcomeController);

// routes
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
    })
    .when("/", {
        templateUrl : "../views/main.htm"
    })
    .when("/red", {
        templateUrl : "../views/red.htm"
    })
    .when("/green", {
        templateUrl : "../views/green.htm"
    })
    .when("/blue", {
        templateUrl : "../views/blue.htm"
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

export default app;
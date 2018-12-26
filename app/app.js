import angular from 'angular';
import homeController from './controllers/home';

var app = angular.module('myApp', [])


app.controller('home', homeController);


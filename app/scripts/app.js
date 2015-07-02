'use strict';

/**
 * @ngdoc overview
 * @name test1App
 * @description
 * # test1App
 *
 * Main module of the application.
 */
angular
  .module('test1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/purchase', {
        templateUrl: 'views/purchase.html',
        controller: 'purchaseCtrl'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'confirmCtrl'
      })
      .when('/myCarousel', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('test1App')
  .service('guitserv',function($http){
     this.imgct="";
    return{
      getStuff: function (GuitData) {
        return $http.get('guitardata.json').success(function(resp){
            GuitData=resp;
        }).error(function(){
            console.log('Error');
        });
      }
    };
      

      

  });
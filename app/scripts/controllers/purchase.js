'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('purchaseCtrl', function ($scope, guitserv) {
    $scope.userguit=guitserv.imgct;
    $scope.userpicdat=[];

    guitserv.getStuff().then(function(response){
  			$scope.userguitdata=response.data.allProducts;

  			for(var i=0;i<$scope.userguitdata.length;i++){
  				$scope.userpicdat.push($scope.userguitdata[i].image_path);
  			}
    		
  

  });


  });

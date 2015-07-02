'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('mainCtrl', function ($scope, guitserv) {
  		$scope.imagedat=[];
  		$scope.cts=0;
  		$scope.isCollapsed = false;
  		$scope.isCollapsedShip = false;
  		$scope.isCollapsedCust = false;

  		guitserv.getStuff().then(function(response){
  			$scope.mainguitdata=response.data.allProducts;
  		

  			for(var i=0;i<$scope.mainguitdata.length;i++){
  				$scope.imagedat.push($scope.mainguitdata[i].image_path);
  			}

			 			
  			$scope.prev = function(){
  			if($scope.cts==0){$scope.cts=6;}
  			else{$scope.cts--;}
  			console.log($scope.cts);
  			};

  			$scope.next = function(){
  			if($scope.cts==6){$scope.cts=0;}
  			else{$scope.cts++;}
  			console.log($scope.cts);
  			};

  			$scope.buy = function(x){
  			guitserv.imgct=x;
  			};

  		});
  });

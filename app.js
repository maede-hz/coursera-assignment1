(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
   $scope.dishes="";
   $scope.message ="";

  $scope.countDishes = function () {
    var splitedDishes=$scope.dishes.split(",");
    var count=0;
    for (var i = 0; i <splitedDishes.length ; i++) {
      if (splitedDishes[i]!="") {
        count++;
      }
    }
    if (count==0) {
      $scope.message="Please enter data first.";
    }
    else if(count<=3){
      $scope.message="Enjoy!";
    }
    else{
      $scope.message="Too much!";
    }
  };

}

})();

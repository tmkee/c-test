(function () {
'use strict';

angular.module('NameCalculator',[])
.controller('nameCalculatorController',function($scope){
$scope.name="";
$scope.totalValue=0;
$scope.displayNumeric = function(){
  var t = ca($scope.name);
  $scope.totalValue=t;


};//gettotalValue


function ca(string){

  var t= 0;
  for(var i =0;i<string.length;i++){
    t+=string.charCodeAt(i);
  }
  return t;
}

});



})();

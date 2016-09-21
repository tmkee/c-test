(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.inputLunch = "";
  $scope.message = "";
  $scope.checkLunch=function(){
      var lunch = $scope.inputLunch;
      var outputMessage="";
      if(lunch==''){
        outputMessage = "Please enter data first"
      }else {
        //do NOT consider the condition where there is an empty item, i.e., `, ,`
        //empty item is consider as a valid count too.
        var lunches = lunch.split(",")
        console.log(lunches.length);
        if(lunches.length<=3){
          outputMessage="Enjoy!";
        }else {
          outputMessage="Too much!";
        }
      }
        $scope.message=outputMessage;
  };



}


})();

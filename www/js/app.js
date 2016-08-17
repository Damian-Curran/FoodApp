angular.module('food', ['ionic'])

.controller('foodCtrl', function($scope) {
  $scope.foods = [];
  $scope.calorie = [];

  
  $scope.createFood = function(food) {
    $scope.foods.push({
      name: food.name,
	  calorie: food.calorie
    });
	$scope.calorie.push({
	  calorie: food.calorie
    });
	
    food.name = "";
	food.calorie = "";

	};
});
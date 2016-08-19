//<!-- sources used : https://www.youtube.com/watch?v=i9MHigUZKEM -->

angular.module('food', ['ionic'])

.controller('foodCtrl', function($scope) {
  $scope.foods = [];
  $scope.calorie = [];

  //function which sets entered food name and calorie value to the two arrays
  $scope.createFood = function(food) {
	  //if statement which doesnt allow creation of empty list item
	  if(food.calorie >= 0)
	  {
		$scope.foods.push({
		  name: food.name,
		  calorie: food.calorie
		});
		$scope.calorie.push({
		  calorie: food.calorie
		});
		//clears the input boxs
		food.name = "";
		food.calorie = "";
	  }

	};
	
	//function which reads through the calorie function and sums it and returns
	$scope.totalCalorie = function () {
	  var total = 0;
	 
	 angular.forEach($scope.calorie, function(item){
		 total += item.calorie;
	 })
	  
	 return total;
    };
	
	//function which takes values from item in list and creates new item in list with same values
	//adds calorie value to calorie array to show total calories
	$scope.duplicate = function (name, calorie) {
		$scope.foods.push({
		name: name,
		calorie: calorie
    });
	$scope.calorie.push({
	  calorie: calorie
    });
	}
});
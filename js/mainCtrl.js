angular.module("friendsList").controller("mainCtrl", function($scope){

$scope.name = "Sam"

$scope.friends = ['mo', 'jess', 'josh', 'jeff', 'emma']

$scope.newFriend

$scope.addFriend = function(){
  console.log($scope.friends)
  $scope.friends.push($scope.newFriend);
}

});

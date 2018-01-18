angular.module("friendsList").controller("mainCtrl", function($scope){

  $scope.name = "Sam"

  $scope.friends = ['mo', 'jess', 'josh', 'jeff', 'emma']

  $scope.newFriend

  $scope.addFriend = function(){
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = ""
  }

});

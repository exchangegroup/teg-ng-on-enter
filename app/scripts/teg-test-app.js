angular.module('TegTestApp', ['TegNgOnEnter']).
controller('tegTestAppController', function($scope) {
  $scope.onEnterPressed = function() {
    $scope.text = 'Enter is pressed: ' + (new Date()).toString();
  }
});
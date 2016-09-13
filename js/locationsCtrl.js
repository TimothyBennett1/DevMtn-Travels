angular.module('devmtnTravel')
.controller('locationsCtrl', function($scope, mainSrv, $state) {
  $scope.locations = mainSrv.travelInfo;

  $scope.booked = function(cityId) {
    $state.go("booked", {id: cityId});
  };
});

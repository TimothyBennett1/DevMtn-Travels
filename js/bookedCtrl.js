angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
  var locations = mainSrv.travelInfo;
  var getLocation = function() {
    for (var i = 0; i < locations.length; i++) {
      if ($stateParams.id == locations[i].id) {
        $scope.location = locations[i];
      }
    }
  };
  getLocation();
});

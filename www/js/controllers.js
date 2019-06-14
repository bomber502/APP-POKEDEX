angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state) {
  $scope.irLogin = function() {
    $state.go('test')
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $state) {
  $scope.test = function() {
    // Ir a la vista principal con los botones
    $state.go("tab.dash");
  }
})

.controller('testCtrl', function($scope,$state) {
  $scope.goBack = function() {
    $state.go('tab.dash')
  }
})




.controller('loadingCtrl', function($scope, $stateParams, Chats,$state){
    setTimeout(function(){
      $state.go("login")
    }, 3000);
})

// Controlador para elejir al compañero 
.controller('selectCtrl', function($scope, $stateParams, $state) {
  $scope.prueba = 'Si funciona';
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

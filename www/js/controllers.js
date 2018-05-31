angular.module('starter.controllers', ['pdf'])

.controller('AppCtrl', function($scope, $ionicModal, pdfDelegate, $timeout){
  

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on   start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //markmacasiray
  
  
  $scope.getPDF = function() {
    var myPdf = localStorage.getItem('pdfpath');
    $scope.pdfUrl = myPdf;
  }


    $scope.loadNewFile = function(refid, url) {
      var path = 'http://localhost/virtualportfolio/uploads/portfolios/' + refid + '/'+ url;
     
      localStorage.setItem('pdfpath', path);
      pdfDelegate
        .$getByHandle('my-pdf-container')
        .load(path);
    };


   $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



.controller('PortfolioCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

  $scope.portfolios = [];
  $scope.getAllPortfolio = function() {
    $http.get(base_url  + 'models/portfolios/select-portfolios.php')
    .then(response => {
      $scope.portfolios = response.data;
    })
  }
}]);


// .controller('CategoryCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

//   $scope.category = [];
//   $scope.getAllCategories = function() {
//     $http.get(base_url  + 'models/category/select-category.php')
//     .then(response => {
//       $scope.category = response.data;
//     })
//   }
// }]);
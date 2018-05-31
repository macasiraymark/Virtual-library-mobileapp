
angular.module('starter', ['ionic', 'starter.controllers', 'pdf'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.category', {
    url: '/category',
    views: {
      'menuContent': {
        templateUrl: 'templates/category.html'
      }
    }
  })
  

  .state('app.portfoliolist', {
      url: '/portfoliolist',
      views: {
        'menuContent': {
          templateUrl: 'templates/portfoliolist.html',
          controller: 'PortfolioCtrl'
        }
      }
    })

  
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.pdfview', {
    url: '/pdfview',
    views: {
      'menuContent': {
        templateUrl: 'templates/pdfview.html',
        controller: 'AppCtrl'
      }
    }
  })

    .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'AppCtrl'
      }
    }
  })
    

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');


});



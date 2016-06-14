angular.module('app.controllers').controller('topBar',function ($scope, mainMenu,topBar, $location, $rootScope, $window,$cacheFactory,homeCtrlParams) {

  $scope.data = topBar.getData();

  $scope.$watch(topBar.getData, function (newValue) {
    $scope.data = newValue;
  });

  $scope.homeCtrlParams = homeCtrlParams;

  /**
* To re-direct user route on click of title
*
* @method routeChange
* @param {String} view route name
* @param {String} param discription of the route
*/
  $scope.routeChange=function(view,param){
    if(param =='redirect'){
      window.location.href = view;
    }
  }


  $scope.back = function () {
    $window.history.back();
  };

  $scope.items = [];
  $scope.$watch(function () {
    return mainMenu.items;
  }, function (items) {
    $scope.items = items;
  });

  $scope.navigate = function (item) {
    item.navigate();
    $scope.closeMenu();
  };

  $scope.placeholders = {
    search: 'Search'
  };

  $scope.data = {
    search: 'Search'
  };

  $scope.cleanSearchCache = function () {
    $cacheFactory.get('searchController').removeAll();
  };

  $scope.$watch($rootScope.isMenuClosed, function (value) {
    if (!value) {
      $scope.$broadcast('scroll-content-changed');
    }
  });
}).controller('mainMenu',function ($scope, mainMenu,$route,$location, $rootScope, $cacheFactory, homeCtrlParams, topBar, groups) {
  $scope.items = [];
  $scope.$watch(function () {
    return mainMenu.items;
  }, function (items) {
    $scope.items = items;
  });

  /**
* To re-direct user route for profile and groups
*
* @method routeChange
* @param {String} view route name
* @param {String} param discription of the route
*/
  $scope.routeChange=function(view,param){
    if(param=='group-profile'){
      //console.log($location.path());
      $location.path('/group/'+view.id);
    //  window.location.reload();
          $route.reload();
    }
    else{
      if($location.path() == ('/profile')){
        $route.reload();
      }else{
        $location.path('/profile')
      }
    }
  }

  $scope.navigate = function (item) {
    item.navigate();
    $scope.closeMenu();
  };

  $scope.navigateToProfile = function (item) {
    //console.log(item);
    $scope.path('/representative/' + (item.representative ? item.representative.id : 0) + '/' + item.storage_id);
  };

  $scope.placeholders = {
    search: 'Search'
  };

  $scope.data = {
    search: 'Search'
  };

  $scope.cleanSearchCache = function () {
    $cacheFactory.get('searchController').removeAll();
  };

  $scope.$watch($rootScope.isMenuClosed, function (value) {
    if (!value) {
      $scope.$broadcast('scroll-content-changed');
    }
  });

  $scope.homeCtrlParams = homeCtrlParams;

  $scope.filterLocation = function(group) {
    if(group != 'All'){
      homeCtrlParams.filter.selectedLocationGroup = group;
      
      if(!group.acronym)
        topBar.set('title', 'Post > '+ group.official_title);
      else
        topBar.set('title', 'Post > '+ group.acronym);
    }
    else{
      homeCtrlParams.filter.selectedLocationGroup = null;
    }
  }

}).controller('notifications', function ($scope, socialActivityTabManager, $location, groupsInvites, invites, announcements, $route, homeCtrlParams) {

  $scope.homeCtrlParams = homeCtrlParams;

  $scope.SAState = socialActivityTabManager.getState();

  $scope.$watch(getMessagesCount, function (messagesCount) {
    $scope.messagesCount = messagesCount;
  });

  $scope.activity = function () {
    homeCtrlParams.loaded = false;
    homeCtrlParams.filter.selectedGroup = null;
    if ('/main' !== $location.path()) {
      $location.path('/main');
    } else {
      $route.reload();
    }
  };

  $scope.goToMessages = function () {
    announcements.setViewed();
    announcements.updateNumberOfNew();
    $scope.navigateTo('path', 'messages');
  };

  $scope.followersNotifications = function () {
    $scope.SAState.reload = true;
    if ('/influences/notifications' === $location.path()) {
      $route.reload();
    } else {
      $location.path('/influences/notifications');
    }
  };

  $scope.getClass = function (path) {
    return $scope.getActiveClass(path, $location.path());
  };

  function getMessagesCount() {

    return groupsInvites.get().length + announcements.getNumberOfNew() + invites.get().size();
  }
}).controller('rightBar', function ($scope, homeCtrlParams) {

  $scope.homeCtrlParams = homeCtrlParams;
});

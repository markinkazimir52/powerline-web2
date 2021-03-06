angular.module('app.directives').directive('youtube', function () {
  return {
    scope: {
      link: '='
    },
    restrict: 'E',
    templateUrl: 'templates/directives/youtube.html',
    controller: function ($scope, $sce, youtube) {
      $scope.iframeLink = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + youtube.parseId($scope.link));
    }
  };
});
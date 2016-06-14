(function() {

    'use strict';

    angular.module('app', [
      'app.config',
      'ui.router',
      'app.controllers',
      'app.directives',
      'app.filters',
      'app.services',
      'ngTouch',
      'ngFacebook',
      'ngBootbox',
      'ngImgCrop',
      'zeroclipboard',
      'ngLetterAvatar',
      'ngSanitize',
      'ngAnimate',
      'JsCollection',
      'pasvaz.bindonce',
      'google-maps'.ns()
    ]).config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $facebookProvider) {

      $facebookProvider.setAppId('244141112405524');

      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      $httpProvider.responseInterceptors.push('authInterceptor');

      //$locationProvider.html5Mode(true).hashPrefix('!');;
      //$locationProvider.html5Mode(true);

      // defaults to Radar Page
      $urlRouterProvider.otherwise('/main');
      
      // ----------------------------------------------------------------------
      // Application Routes
      // ----------------------------------------------------------------------
      $stateProvider
          .state('/', {
              url: '/',
              templateUrl: 'templates/home/preload.html',
              controller: 'preload'
          })
          .state('landing', {
              url: '/landing',
              templateUrl: 'templates/landing-page/main.html'
          })
          .state('main', {
              url: '/main',
              templateUrl: 'templates/home/home.html',
              controller: 'home'
          })
          .state('new-activities', {
              url: '/new-activities',
              templateUrl: 'templates/home/home.html',
              controller: 'home'
          })
          .state('login', {
              url: '/login',
              templateUrl: 'templates/session/login.html',
              controller: 'session.login'
          })
          .state('logout', {
              url: '/logout',
              templateUrl: 'templates/session/logout.html',
              controller: 'session.logout'
          })
          .state('coming-soon', {
              url: '/coming-soon',
              templateUrl: 'templates/coming-soon.html'
          })
          .state('terms', {
              url: '/terms',
              templateUrl: 'templates/terms.html',
              controller: 'session.terms'
          })
          .state('registration', {
              url: '/registration',
              templateUrl: 'templates/session/registration.html',
              controller: 'session.registration'
          })
          .state('registration-step2', {
              url: '/registration-step2',
              templateUrl: 'templates/session/registration-step2.html',
              controller: 'session.registration-step2'
          })
          .state('registration-step3', {
              url: '/registration-step3',
              templateUrl: 'templates/session/registration-step3.html',
              controller: 'session.registration-step3'
          })
          .state('questions', {
              url: '/questions/:id',
              templateUrl: 'templates/question/layout.html',
              controller: 'question'
          })
          .state('questions-news', {
              url: '/questions/news/:id',
              templateUrl: 'templates/question/news.html',
              controller: 'question.news'
          })
          .state('question-leader-petition', {
              url: '/question/leader-petition/:id',
              templateUrl: 'templates/question/petition.html',
              controller: 'question.leader-petition'
          })
          .state('questions-educational', {
              url: '/questions/educational/:id',
              templateUrl: 'templates/question/educational-context.html',
              controller: 'question.educational-context'
          })
          .state('questions-influences', {
              url: '/questions/influences/:id',
              templateUrl: 'templates/question/influences.html',
              controller: 'question.influences'
          })
          .state('forgot-password', {
              url: '/forgot-password',
              templateUrl: 'templates/session/forgot-password.html',
              controller: 'session.forgot-password'
          })
          .state('town', {
              url: '/town',
              templateUrl: 'templates/coming-soon.html'
          })
          .state('groups', {
              url: '/groups',
              templateUrl: 'templates/groups/my-groups.html',
              controller: 'groups'
          })
          .state('groups-search', {
              url: '/groups/search',
              templateUrl: 'templates/groups/search.html',
              controller: 'groups.search'
          })
          .state('groups-create', {
              url: '/groups/create',
              templateUrl: 'templates/groups/create.html',
              controller: 'groups.create'
          })
          .state('group', {
              url: '/group/:id',
              templateUrl: 'templates/groups/profile.html',
              controller: 'groups.profile'
          })
          .state('group-join', {
              url: '/group/:id/join/:publicStatus/:isFieldRequired',
              templateUrl: 'templates/groups/join.html',
              controller: 'groups.join'
          })
          .state('messages', {
              url: '/messages',
              templateUrl: 'templates/messages/list.html',
              controller: 'messages'
          })
          .state('influences', {
              url: '/influences',
              templateUrl: 'templates/influence/influences.html',
              controller: 'influences'
          })
          .state('influences-add', {
              url: '/influences/add',
              templateUrl: 'templates/influence/search.html',
              controller: 'influences.search'
          })
          .state('influences-notifications', {
              url: '/influences/notifications',
              templateUrl: 'templates/influence/notifications.html',
              controller: 'influences.notifications'
          })
          .state('representatives', {
              url: '/representatives',
              templateUrl: 'templates/representatives/list.html',
              controller: 'representatives'
          })
          .state('representative', {
              url: '/representative/:id/:storageId',
              templateUrl: 'templates/representatives/profile.html',
              controller: 'representatives.profile'
          })
          .state('group-petitions', {
              url: '/group-petitions',
              templateUrl: 'templates/home/home.html',
              controller: 'home'
          })
          .state('micro-petitions-add-type', {
              url: '/micro-petitions/add/:type',
              templateUrl: 'templates/petitions/add.html',
              controller: 'petitions.add'
          })
          .state('micro-petitions-add-type-groupId', {
              url: '/micro-petitions/add/:type/:group_id',
              templateUrl: 'templates/petitions/add.html',
              controller: 'petitions.add'
          })
          .state('group-petition', {
              url: '/group-petitions/:id',
              templateUrl: 'templates/petitions/group.html',
              controller: 'petitions.group'
          })
          .state('petition', {
              url: '/petition/:id',
              templateUrl: 'templates/petitions/petition.html',
              controller: 'petition'
          })
          .state('payment-polls-payment-request', {
              url: '/payment-polls/payment-request/:id',
              templateUrl: 'templates/payment-polls/payment-request.html',
              controller: 'question.payment-request'
          })
          .state('payment-polls-crowdfunding-payment-request', {
              url: '/payment-polls/crowdfunding-payment-request/:id',
              templateUrl: 'templates/payment-polls/crowdfunding-payment-request.html',
              controller: 'question.payment-request'
          })
          .state('leader-event', {
              url: '/leader-event/:id',
              templateUrl: 'templates/leader-event/leader-event.html',
              controller: 'question.leader-event'
          })
          .state('poling', {
              url: '/poling',
              templateUrl: 'templates/coming-soon.html'
          })
          .state('other-services', {
              url: '/other-services',
              templateUrl: 'templates/services/index.html',
              controller: 'services'
          })
          .state('profile', {
              url: '/profile',
              templateUrl: 'templates/profile/profile.html',
              controller: 'profile'
          })
          .state('profile-2', {
              url: '/profile-2',
              templateUrl: 'templates/profile/profile-2.html',
              controller: 'profile-step2'
          })
          .state('profile-3', {
              url: '/profile-3',
              templateUrl: 'templates/profile/profile-3.html',
              controller: 'profile-step3'
          })
          .state('settings', {
              url: '/settings',
              templateUrl: 'templates/profile/settings.html',
              controller: 'settings'
          })
          .state('influence-profile', {
              url: '/influence/profile/:id',
              templateUrl: 'templates/influence/profile.html',
              controller: 'influence.profile'
          })
          .state('discussion-entity-id', {
              url: '/discussion/:entity/:id',
              templateUrl: 'templates/question/discussion.html',
              controller: 'discussion'
          })
          .state('discussion-entity-id-comment', {
              url: '/discussion/:entity/:id/:comment',
              templateUrl: 'templates/question/discussion.html',
              controller: 'discussion'
          })
          .state('search', {
              url: '/search/:q?',
              templateUrl: 'templates/search/index.html',
              controller: 'search'
          })
          .state('guide', {
              url: '/guide',
              templateUrl: 'templates/guide/index.html',
              controller: 'guide'
          })
          .state('guide-confirm', {
              url: '/guide-confirm',
              templateUrl: 'templates/guide/confirm.html',
              controller: 'guide.confirm'
          })
     
    }).run(function (session, $location, layout, $document, $rootScope, $state, $stateParams, $window, iStorageMemory, profile, homeCtrlParams) {

      // Set reference to access them from any scope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$storage = $window.localStorage;    
      
      // Hook success
      $rootScope.$on('$stateChangeSuccess',
        function(event, next, current) {
            if(session.token){

              if(next.loadedTemplateUrl == 'templates/session/login.html'){
                homeCtrlParams.leftBar.group = null;
                homeCtrlParams.leftBar.user = null;
                homeCtrlParams.leftBar.currUser = null;
                return;
              }

              if(!homeCtrlParams.leftBar.currUser || !homeCtrlParams.filter.myRepresentatives){
                 $location.path('/main');
                 return;
              }

              if(current && current.loadedTemplateUrl == 'templates/groups/profile.html'){
                homeCtrlParams.leftBar.group = null;
              }else if(current && current.loadedTemplateUrl == 'templates/influence/profile.html'){
                homeCtrlParams.leftBar.user = null;
              }else if(!current || current.loadedTemplateUrl == 'templates/home/home.html'){
                homeCtrlParams.leftBar.group = null;
                homeCtrlParams.leftBar.user = null;
              }
            }

            document.body.scrollTop=0;
        });


      var $body = $document.find('body');
      $document.bind('scroll', function () {
        if ($document.height() <= $document.scrollTop() + $body.height()) {
          $rootScope.$broadcast('scrollEnd');
        }
      });

      angular.element($window).bind('resize', function () {
        $rootScope.$broadcast('resize');
      });

      layout.init();
      if (session.token) {
        if (session.is_registration_complete) {
          profile.load()
            .then(function () {
              profile.checkRemind();
            })
          ;
          if (!$location.path() || '/' === $location.path()) {
            $location.path('/main');
          }
        } else {
          $location.path('/profile');
        }
      } else {
        $location.path('/login');
      }      

      iStorageMemory.put('home-activities-need-load', true);

      // Load the facebook SDK asynchronously
      (function(){
         // If we've already installed the SDK, we're done
         if (document.getElementById('facebook-jssdk')) {return;}

         // Get the first script element, which we'll use to find the parent node
         var firstScriptElement = document.getElementsByTagName('script')[0];

         // Create a new script element and set its id
         var facebookJS = document.createElement('script');
         facebookJS.id = 'facebook-jssdk';

         // Set the new script's source to the source of the Facebook JS SDK
         facebookJS.src = '//connect.facebook.net/en_US/all.js';

         // Insert the Facebook JS SDK into the DOM
         firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
       }());

    }).config(function ($compileProvider) {
    //    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel):/);
    }).config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
      GoogleMapApi.configure({
        //    key: 'your api key',
        v: '3.18',
        libraries: 'places'
      });
    }]).config(['uiZeroclipConfigProvider', function(uiZeroclipConfigProvider) {
      // config ZeroClipboard
      uiZeroclipConfigProvider.setZcConf({
        swfPath: 'js/vendor/zeroclipboard/dist/ZeroClipboard.swf'
      });
    }]);

})();
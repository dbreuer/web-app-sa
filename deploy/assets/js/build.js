
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @description Collection of shared resources
 *
 */
angular
    .module('shared', [
        //'shared.component',
        'shared.hero',
        //'shared.html',
        //'shared.module',
        //'shared.image',
        'shared.slideshow',
        'shared.spotlights',
        //'shared.title',
        //'shared.steps',
        //'shared.campaign-cta',
        //'shared.secondary-cta',
        'shared.social',
        'shared.404'
    ]);

/***
 *
 * MOBILE MENU COMPONENT
 *
 * @file
 *  Provides the mobile menu functionality for the site, including directives
 *
 */
(function() {
'use strict';

angular.module('mobile-menu', [])

  // Directives
  .directive('mobileMenu', mobileMenu);

// Inject Deps
mobileMenu.$inject = [];

/**
 *
 * Mobile Meny Directive : Provides the hamburger icon and menu overlay functionality.
 *
 * @returns {{replace: boolean, restrict: string, template: string, link: link}}
 *
 */
function mobileMenu() {

  return {
    replace: true,
    restrict: 'AE',
    scope: {},

    templateUrl: 'shared/directives/mobile-menu/mobile-menu.tpl.html',

    link: function(scope, elem, attrs) {

      // Toggle Menu
      scope.isActive = false;
      scope.closeMenu = closeMenu;
      scope.toggleMenu = toggleMenu;

      function toggleMenu() {
        scope.isActive = (scope.isActive) ? false : true;
      }

      function closeMenu() {
        scope.isActive = false;
      }

    }
  };

}

}());

//aat-menu.js
/**
 * Created by David Breuer on 17/02/2016.
 *
 * @file menu.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('menu', ['menu-service'])
    .directive('menu', menuDirective);

  menuDirective.$inject = ['menuService', '$location'];

  /* @ngInject */
  function menuDirective(menuService, location) {
    var directive = {
      templateUrl: 'shared/directives/menu/menu.tpl.html',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
      menuService.getMenu(attrs.position);
    }
  }

})();


//hero.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file hero.js
 *
 */
(function() {
  'use strict';

  angular
    .module('shared.hero', [])
    .directive('heroContent', heroContentDirective);

  heroContentDirective.$inject = [];

  /* @ngInject */
  function heroContentDirective() {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/hero/hero.html',
      replace: true,
      restrict: 'E'
    };
    return directive;
  }

})();


//social.js
/**
 * Created by David Breuer on 22/02/2016.
 *
 * @file social.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('social', [])
    .directive('socialContent', socialContent)
    .directive('socialShareButtons', socialShareButtons);

  socialContent.$inject = [];
  socialShareButtons.$inject = [];

  /* @ngInject */
  function socialContent() {
    var directive = {
      bindToController: true,
      templateUrl: 'shared/directives/social/social.tpl.html',
      controller: socialController,
      controllerAs: 'sc',
      link: link,
      restrict: 'E',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }

  /* @ngInject */
  function socialShareButtons() {
    var directive = {
      bindToController: true,
      templateUrl: 'shared/directives/social/social-share-buttons.tpl.html',
      controller: socialController,
      controllerAs: 'sc',
      link: link,
      restrict: 'AE',
      scope: {
        'pageTitle': '=pageTitle',
        'pageSlug': '=pageSlug'
      }
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

  socialController.$inject = [];

  /* @ngInject */
  function socialController() {

  }

})();


//slideshow.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file slideshow.js
 *
 *
 */
(function() {
  'use strict';

  angular
    .module('slideshow', [])
    .directive('slideshowContent', slideshowDirective);

  slideshowDirective.$inject = [];

  /* @ngInject */
  function slideshowDirective() {
    var directive = {
      templateUrl: 'shared/directives/slideshow/slideshow.tpl.html',
      replace: true,
      restrict: 'E',
      scope: {
        slideshow: '='
      }
    };
    return directive;
  }

})();


//spotlights.js
/**
 * Created by David Breuer on 19/02/2016.
 *
 * @file spotlights.js
 *
 */
(function() {
  'use strict';

  angular
    .module('spotlights', [])
    .controller('spotlightsController', spotlightsController)
    .directive('spotlightsContent', spotlightsDirective);

  spotlightsController.$inject = [];
  spotlightsDirective.$inject = [];

  /* @ngInject */
  function spotlightsDirective() {
    var directive = {
      bindToController: true,
      templateUrl: 'shared/directives/spotlights/spotlights.tpl.html',
      controller: 'spotlightsController',
      controllerAs: 'vm',
      replace: true,
      scope: {
        spotlights: '='
      },
      restrict: 'E'
    };
    return directive;
  }

  function spotlightsController() {

  }

})();


//spinner.js
/**
 * Created by David Breuer on 26/05/2016.
 *
 * @file spinner.js
 * @description Spinner component
 * @author David Breuer <dbreuer83@gmail.com>
 *
 */

(function() {
  'use strict';

  angular
    .module('spinner', [])
    .directive('spinner', spinnerDirective);

  spinnerDirective.$inject = [];

  /* @ngInject */
  function spinnerDirective() {
    var directive = {
      templateUrl: 'shared/directives/spinner/spinner.tpl.html',
      link: link,
      restrict: 'E',
      replace: true,
      scope: {
        show: '='
      }
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
})();

//404
/**
 * Created by David Breuer on 23/02/2016.
 *
 * @file 404
 *
 * @class Error
 *
 * @description Default error page
 *
 * @memberof app
 *
 */
(function() {
  'use strict';

  angular
    .module('shared.404', [])
    .directive('pageNotFound', error404Directive);

  error404Directive.$inject = [];

  /* @ngInject */
  function error404Directive() {
    var directive = {
      bindToController: true,
      templateUrl: 'site/shared/directives/404/404.html',
      controller: error404Controller,
      controllerAs: 'error',
      link: link,
      restrict: 'E',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }

  error404Controller.$inject = [];

  /* @ngInject */
  function error404Controller() {

  }

})();


/**
 *
 * MY-AAT COMPONENT
 *
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.Frontpage
 *
 * @description Provides the frontpage functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.myaat', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/myaat', {
        pageTitle: 'AAT - MyAAT',
        templateUrl: 'components/myaat/myaat.tpl.html',
        controller: 'MyaatController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('MyaatController', MyaatController);

  // Inject Deps
  MyaatController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function MyaatController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('myaat');
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'MyAAT - online tools for success',
          'text': 'Assessment results, revision guides, career help, exclusive discounts, and more.',
          'image': {
            'src': '../img/hero/edith_bayoli_2.jpg',
            'alt': 'MyAAT - online tools for success'
          },
          'button': {
            'text': 'Log in to MyAAT',
            'url': 'http://www.aat.org.uk/myaat'
          }
        },
        {
          'id': 2,
          'title': 'MyAAT - training providers',
          'text': 'Study support and e-learning content, marketing support, administration services, and more.',
          'image': {
            'src': '../img/hero/sebathu_bengani_2.jpg',
            'alt': 'MyAAT - training providers'
          },
          'button': {
            'text': 'Log in to MyAAT',
            'url': 'http://www.aat.org.uk/myaat'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'What is MyAAT?',
          'text': 'Tailored to you, MyAAT provides interactive services and ' +
          'resources designed to help you get the most out of AAT.',
          'image': {
            'src': '../img/landing_pages/tapiwa_obert_2.jpg?itok=jR1IsKOu',
            'alt': 'What is MyAAT?'
          },
          'button': {
            'text': 'Find out more about MyAAT',
            'url': 'http://sa.aws.aat.org.uk/myaat/about'
          }
        },
        {
          'id': 2,
          'title': 'Register for your MyAAT account',
          'text': 'Registration is simple - you just need your email address and AAT membership number.',
          'image': {
            'src': '../img/landing_pages/sylvia_segone_2.jpg?itok=AICzP4vt',
            'alt': 'Register for your MyAAT account'
          },
          'button': {
            'text': 'Register today',
            'url': 'http://www.aat.org.uk/get-myaat/options'
          }
        },
        {
          'id': 3,
          'title': 'Log in to MyAAT',
          'text': 'Log in to MyAAT to access your exclusive member benefits and services.',
          'image': {
            'src': '../img/landing_pages/jessie_bosco_2.jpg?itok=d33I8BNH',
            'alt': 'Log in to MyAAT'
          },
          'button': {
            'text': 'Log in now',
            'url': 'http://www.aat.org.uk/myaat'
          }
        },
        {
          'id': 4,
          'title': 'Log in help for MyAAT',
          'text': 'Having problems logging in to MyAAT? Get help here.',
          'image': {
            'src': '../img/landing_pages/lawrence_mtolo.jpg?itok=yZTt6ykX',
            'alt': 'Log in help for MyAAT'
          },
          'button': {
            'text': 'Forgotten your password?',
            'url': 'http://www.aat.org.uk/user/password'
          }
        }
      ]
    };

  }

}());

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
/**
 *
 * node COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *    David Breuer <dbreuer83@gmail.com>
 *
 * @class app.node
 *
 * @description Provides the subpage nodes functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.node', ['ngRoute', 'menu-service', 'node-service'])
    .config(['$routeProvider',
      function($routeProvider) {
      $routeProvider.when('/:sectionID/:nodeID', {
        pageTitle: 'page node',
        templateUrl: 'components/node/node.tpl.html',
        controller: 'NodeController',
        controllerAs: 'vm'
      });
    }])
    .controller('NodeController', NodeController);

  // Inject Deps
  NodeController.$inject = ['$rootScope', '$routeParams','menuService', 'nodeService'];
  /**
   *
   * Controller
   *
   * @constructor
   */
  function NodeController($rootScope, $routeParams, menuService, nodeService) {
    var vm = this;
    vm.menuNode = $routeParams.sectionID;
    vm.isLoading = true;
    vm.pageContent = {};
    vm.pageError = false;

    vm.init = init;

    function init() {
      getMenuItems();
      pageLoadContent();
    }

    function getMenuItems() {
      $rootScope.menu = menuService.getMenu($routeParams.sectionID);
    }

    function pageLoadContent() {
      nodeService.getPage($routeParams.sectionID, $routeParams.nodeID)
        .then(function(response) {
          vm.pageContent = new PostType(response, nodeService);
          $rootScope.pageTitle = response.title;
          console.log('success:', response);
          vm.isLoading = false;
        })
        .catch(function(err) {
          console.log('catch:', err);
          $rootScope.pageTitle = 'Page not Found: 404';
          vm.isLoading = false;
          vm.pageError = true;
          vm.pageContent = {
            title: 'Something doesn\'t add up here...',
            body: '<h4>There seems to be an error on this page.</h4> <ul> <li>If you followed a link to get here,' +
            ' it must be broken. Please <a href="/about-aat/contact-aat">contact us</a> ' +
            'and we\'ll fix it.</li> <li>If you typed in the address, ' +
            'please check you typed it in correctly.</li> </ul>'
          };
        });
    }

  }

  function PostType(post, nodeService) {
    this.body = post.body.und[0].safe_value;
    this.title = post.title;
    this.slug = post.slug;
    this.date = new Date(post.created * 1000);
    this.signpost = [];
    if (post.field_page_signpost && post.field_page_signpost.und &&
      post.field_page_signpost.und.length > 0) {/* jshint ignore:line */
      var spl = post.field_page_signpost.und.length;/* jshint ignore:line */
      while (spl--) {
        this.signpost.push(post.field_page_signpost.und[spl]);/* jshint ignore:line */
      }
    }

    if (post.field_tabs_page_signpost && post.field_tabs_page_signpost.und &&
      post.field_tabs_page_signpost.und.length > 0) {/* jshint ignore:line */
      var spl = post.field_tabs_page_signpost.und.length;/* jshint ignore:line */
      while (spl--) {
        this.signpost.push(post.field_tabs_page_signpost.und[spl]);/* jshint ignore:line */
      }
    }
    this.tabIDs = [];
    this.tabs = [];
    if (post.field_tabs_page_tab_items && post.field_tabs_page_tab_items.und &&
      post.field_tabs_page_tab_items.und.length > 0) {/* jshint ignore:line */
      var spl = post.field_tabs_page_tab_items.und.length;/* jshint ignore:line */
      while (spl--) {
        this.tabIDs.push(post.field_tabs_page_tab_items.und[spl]);/* jshint ignore:line */
      }
      this.tabs = new PostTabs(this.tabIDs, nodeService);
      this.tabsStyle = post.field_tabs_page_tab_style.und[0].value;
    }
    return this;
  }

  function PostTabs(tabidarray, nodeService) {
    var Tabs = [];
    function successTabsDetails(response) {
      Tabs.push(new PostType(response));
    }
    for (var tb = 0; tb < tabidarray.length; tb++) {
      nodeService.getPage(tabidarray[tb].nid, '', true).then(successTabsDetails);
    }
    return Tabs;
  }

}());

// jscs:enable requireCamelCaseOrUpperCaseIdentifiers

//header.js
/**
 * Created by David Breuer on 12/05/2016.
 *
 * @file header.js
 * @description This is a heade controller component
 *
 */

(function() {
  'use strict';

  angular
    .module('header',[])
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = [];

  /* @ngInject */
  function HeaderController() {
    var vm = this;
    vm.title = 'HeaderController';
    vm.isActive = false;
    vm.toggleMenu = toggleMenu;
    vm.closeMenu = closeMenu;

    function toggleMenu() {
      vm.isActive = (vm.isActive) ? false : true;
    }

    function closeMenu() {
      vm.isActive = false;
    }
  }

})();


/**
 *
 * FRONTPAGE COMPONENT
 *
 *
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 *
 * @class app.Frontpage
 *
 * @description Provides the frontpage functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.frontpage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/frontpage', {
        pageTitle: 'AAT - Welcome',
        templateUrl: 'components/frontpage/frontpage.tpl.html',
        controller: 'FrontpageController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('FrontpageController', FrontpageController);

  // Inject Deps
  FrontpageController.$inject = [];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function FrontpageController() {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    //API.getPageById('frontpage', false)
    //    .then(function(response) {
    //        console.log('get it', response.data.data);
    //        vm.pageContent = response.data.data;
    //        //$timeout(function(){vm.isPageLoading = false;}, 1000);
    //        vm.isPageLoading = false;
    //    }).catch(function(err) {
    //    vm.isPageLoading = false;
    //    vm.pageContent = {'error': 500};
    //});

  }

}());

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

/**
 *
 * News Module
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @description News template component
 * @class app.news
 * @file Simple page component to surface news content from the API
 * @memberof app
 */
(function() {
  'use strict';

  angular.module('project.news', ['ngRoute', 'menu-service', 'news-service'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/news', {
        pageTitle: 'AAT - news',
        templateUrl: 'components/news/news.tpl.html',
        controller: 'NewsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });

      $routeProvider.when('/news/:slug', {
        pageTitle: 'AAT - news',
        templateUrl: 'components/news/news-single.tpl.html',
        controller: 'NewsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])
    .controller('NewsController', NewsController);
  // Inject Deps
  NewsController.$inject = ['menuService', '$http', '$location', '$routeParams',
    '$rootScope', '$scope', '$timeout', 'NewsService'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function NewsController(menuService, $http, $location, $routeParams, $rootScope, $scope, $timeout, NewsService) {
    var errorMessage = {
      title: 'Something doesn\'t add up here...',
      body: '<h4>There seems to be an error on this page.</h4> <ul> <li>If you followed a link to get here,' +
      ' it must be broken. Please <a href="/about-aat/contact-aat">contact us</a> ' +
      'and we\'ll fix it.</li> <li>If you typed in the address, ' +
      'please check you typed it in correctly.</li> </ul>'
    };

    var vm = this;
    vm.pageContent = {};
    vm.isLoading = true;
    vm.news = [];
    vm.newsSinglePost = {};
    vm.currentPage = 0;
    vm.limit = 5;

    $rootScope.menu = menuService.getMenu('news');
    $rootScope.params = {
      limit: 5,
      steps: 5,
      page: 0,
      hasNext: false,
      hasMore: true
    };

    vm.getNewsListing = getNewsListing;
    vm.getSinglePost = getSinglePost;
    vm.goToNews = goToNews;
    vm.nextPage = nextPage;
    vm.prevPage = prevPage;
    vm.showMore = showMore;

    function getNewsListing() {
      NewsService.getAllNews({page: $rootScope.params.page, limit: $rootScope.params.limit})
        .then(function(response) {
          vm.news = response;
          vm.isLoading = false;
          NewsService.getAllNews({page: $rootScope.params.page + 1})
            .then(function(response) {
              $rootScope.params.hasNext = (response.length > 0) ? true : false;
              $rootScope.params.hasMore =
                (response.length > 0 && vm.news.length >= $rootScope.params.limit) ? true : false;
            })
            .catch(function(err) {
              console.log('catch:', err);
              $rootScope.pageTitle = 'Page not Found: 404';
              vm.isLoading = false;
              vm.pageError = true;
              vm.pageContent = errorMessage;
            });
        })
        .catch(function(err) {
          console.log('catch:', err);
          $rootScope.pageTitle = 'Page not Found: 404';
          vm.isLoading = false;
          vm.pageError = true;
          vm.pageContent = errorMessage;
        });
    }

    function getSinglePost() {
      if (!$rootScope.nodeid) {
        $location.path('/news');
      }
      NewsService.getNews($rootScope.nodeid)
        .then(function(response) {
          vm.newsSinglePost = new PostType(response);
          if (response.field_news_photos.length > 0) {/* jshint ignore:line */
            vm.newsSinglePost.images = new PostImages(response.field_news_photos.und);/* jshint ignore:line */
          }
          vm.isLoading = false;
        })
        .catch(function(err) {
          console.log('catch:', err);
          $rootScope.pageTitle = 'Page not Found: 404';
          vm.isLoading = false;
          vm.pageError = true;
          vm.pageContent = errorMessage;
        });
    }

    function goToNews(nodeid, slug) {
      $rootScope.nodeid = nodeid;
      $location.path('/news/' + slug);
    }

    function nextPage() {
      if ($rootScope.params.hasNext) {
        $rootScope.params.page += 1;
      }
      $rootScope.params.limit = 5;
      getNewsListing();
      console.log($rootScope.params);
    }

    function prevPage() {
      if ($rootScope.params.page > 0) {
        $rootScope.params.page -= 1;
      }
      $rootScope.params.limit = 5;
      getNewsListing();
      console.log($rootScope.params);
    }

    function showMore() {
      if ($rootScope.params.page > 0) {
        $rootScope.params.limit = $rootScope.params.page * $rootScope.params.limit;
        $rootScope.params.page = 0;
      } else {
        $rootScope.params.limit += 5;
      };
      getNewsListing();
      console.log($rootScope.params);
    }

  }

  function PostImages(images) {
    var out = [];
    for (var im = 0; im < images.length; im++) {
      out.push('<img src="http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/' +
        'styles/news_thumb/public/' + images[im].filename + '?itok=Mmd7w4oG" alt="' + images[im].alt + '" />');
    }
    return out[0];
  }

  function PostType(post) {
    this.body = post.body.und[0].value;
    this.title = post.title;
    this.slug = post.slug;
    this.date = new Date(post.created * 1000);
    this.images = [];
    if (post.field_news_photos.length > 0) {/* jshint ignore:line */
      this.images = new PostImages(post.field_news_photos.und);/* jshint ignore:line */
    }

    return this;
  }

  function convertToSlug(Text) {
    return Text
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
  }

}());

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

/**
 *
 * STATIC FILES COMPONENT
 *
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class App.Staticpages
 *
 * @memberof App.Staticpages
 *
 * @description Provides the static pages for the website.
 *
 */

(function() {

  'use strict';

  angular.module('project.static-pages', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

        //Equality of opportunity
        $routeProvider.when('/get-myaat/aat-equal-opportunities-policy', {
          pageTitle: 'Equality of opportunity',
          templateUrl: 'components/static-pages/equal.tpl.html',
          controller: 'MyaatController',
          controllerAs: 'vm',
          access: {
            requiresLogin: false,
            roles: []
          }
        });

      }]);

  //
})();

/**
 *
 * QUALIFICATIONS COMPONENT
 *
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.qualifications
 *
 * @description Provides the qualifications functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.qualifications', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/qualifications', {
        pageTitle: 'AAT - Qualifications',
        templateUrl: 'components/qualifications/qualifications.tpl.html',
        controller: 'QualificationsController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('QualificationsController', QualificationsController);

  // Inject Deps
  QualificationsController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function QualificationsController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('qualifications');

    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Find a training provider',
          'text': 'Use our online search tool to find an AAT(SA) approved training provider in your area.',
          'image': {
            'src': '../img/hero/edith_bayoli_2.jpg',
            'alt': 'Find a training provider'
          },
          'button': {
            'text': 'Download our list of training providers (Word)',
            'url': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/assets/AATSA-provider-list.docx'
          }
        },
        {
          'id': 2,
          'title': 'The AAT(SA) Accounting Qualification',
          'text': 'Based on practical, real world accounting knowledge you can put to use from day one.',
          'image': {
            'src': '../img/hero/sebathu_bengani_2.jpg',
            'alt': 'The AAT(SA) Accounting Qualification'
          },
          'button': {
            'text': 'Find out more',
            'url': '/qualifications/accounting-qualification'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'The AAT(SA) Accounting qualification',
          'text': 'The AAT(SA) Accounting qualification can enable your career in finance and ' +
          'accounting and help you make a positive contribution to your business, department.',
          'image': {
            'src': '../img/landing_pages/sylvia_segone_2.jpg?itok=QNoYKYfq',
            'alt': 'The AAT(SA) Accounting qualification'
          },
          'button': {
            'text': 'Find out more',
            'url': 'http://sa.aws.aat.org.uk/qualifications/accounting-qualification'
          }
        },
        {
          'id': 2,
          'title': 'How long does it take to qualify?',
          'text': 'You can study full-time, part-time, from home or ' +
          'online - so how long you take to qualify is up to you.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/event.jpg?itok=tq_vtYjt',
            'alt': 'How long does it take to qualify?'
          },
          'button': {
            'text': 'Read more about your options',
            'url': '/qualifications/how-long'
          }
        },
        {
          'id': 3,
          'title': 'Becoming a student member',
          'text': 'We advise that you register with us as soon as you enrol with ' +
          'your training provider to avoid any delays in taking your assessments.',
          'image': {
            'src': '../img/landing_pages/tapiwa_obert_2.jpg?itok=KimL61vx',
            'alt': 'Becoming a student member'
          },
          'button': {
            'text': 'Find out more',
            'url': '/qualifications/student-membership'
          }
        },
        {
          'id': 4,
          'title': 'Find a training provider',
          'text': 'Download our comprehensive list to find an AAT(SA) approved training provider in your area.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/ashgar_ali_hassim_0.jpg?itok=5P2xwBka',
            'alt': 'Download our list of training providers (PDF)'
          },
          'button': {
            'text': 'Download our list of training providers (PDF)',
            'url': 'http://sa.aws.aat.org.uk/sites/default/files/public/assets/AATSA-provider-list.pdf'
          }
        }
      ]
    };

  }

}());

/**
 *
 * employers COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.employers
 *
 * @description Provides the employers functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.employers', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/employers', {
        pageTitle: 'AAT Employers',
        templateUrl: 'components/employers/employers.tpl.html',
        controller: 'EmployersController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('EmployersController', EmployersController);

  // Inject Deps
  EmployersController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function EmployersController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('employers');
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Membership for your staff',
          'text': 'We offer a range of benefits and services to our members long ' +
          'after they have completed their initial qualification.',
          'image': {
            'src': '../img/hero/ayton_namwaza_banda.jpg',
            'alt': 'Membership for your staff'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/staff-membership'
          }
        },
        {
          'id': 2,
          'title': 'Training for your business',
          'text': 'We offer a range of flexible training options, designed to suit your organisation and employees.',
          'image': {
            'src': '../img/hero/edith_bayoli_2.jpg',
            'alt': 'Training for your business'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/business-training'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'Training for your business',
          'text': 'We offer a range of flexible training options, carefully' +
          ' designed to suit the needs of your organisation and employees.',
          'image': {
            'src': '../img/landing_pages/israel_mogobe.jpg?itok=vH2K6Qn2',
            'alt': 'Training for your business'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/business-training'
          }
        },
        {
          'id': 2,
          'title': 'Membership for your staff',
          'text': 'We offer a range of benefits and services that will enable our ' +
          'members to continue their professional development.',
          'image': {
            'src': '../img/landing_pages/lawrence_mtolo.jpg?itok=6HqACUwI',
            'alt': 'Membership for your staff'
          },
          'button': {
            'text': 'Find out more',
            'url': '/employers/staff-membership'
          }
        },
        {
          'id': 3,
          'title': 'The AAT(SA) learnerships',
          'text': 'Aimed at learners who are employed or want to prepare themselves ' +
          'for employment in the accounting environment at technician level.',
          'image': {
            'src': '../img/landing_pages/jessie_bosco_2.jpg?itok=3z-GVVw8',
            'alt': 'The AAT(SA) learnerships'
          },
          'button': {
            'text': 'More information',
            'url': '/employers/learnerships'
          }
        },
        {
          'id': 4,
          'title': 'Find a training provider',
          'text': 'We have AAT(SA) approved training providers all over South Africa. ' +
          'Download our list below to contact a training provider in your province.',
          'image': {
            'src': '../img/landing_pages/tapiwa_obert_2.jpg?itok=kZmOK4q0',
            'alt': 'Download our list of training providers (PDF)'
          },
          'button': {
            'text': 'Download our list of training providers (PDF)',
            'url': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/assets/AATSA-provider-list.pdf'
          }
        }
      ]
    };

  }

}());

/**
 *
 * deliver COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.deliver
 *
 * @description Provides the deliver functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.deliver', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/deliver', {
        pageTitle: 'AAT deliver',
        templateUrl: 'components/deliver/deliver.tpl.html',
        controller: 'DeliverController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('DeliverController', DeliverController);

  // Inject Deps
  DeliverController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function DeliverController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('deliver');
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Deliver AAT(SA) qualifications',
          'text': 'Find out how you can become approved to deliver AAT(SA) qualifications,' +
          ' and join our network of approved training providers.',
          'image': {
            'src': '../img/hero/sebathu_bengani_2.jpg',
            'alt': 'Deliver AAT(SA)qualifications'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/qualifications'
          }
        },
        {
          'id': 2,
          'title': 'Become a CBA venue',
          'text': 'Become associated with one of the largest professional' +
          ' membership bodies by offering computer based assessments.',
          'image': {
            'src': '../img/hero/lungile_mawonga.jpg',
            'alt': 'Become a CBA venue'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/cba-venue'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'Deliver AAT(SA) qualifications',
          'text': 'Find out how you can become approved to deliver AAT(SA) qualifications, ' +
          'and join our network of approved training providers.',
          'image': {
            'src': '../img/landing_pages/edward_makwana_saica.jpg?itok=Z4Vq3N6g',
            'alt': 'Deliver AAT(SA) qualifications'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/qualifications'
          }
        },
        {
          'id': 2,
          'title': 'Become a CBA venue',
          'text': 'Become associated with one of the largest professional membership ' +
          'bodies by offering computer based assessments.',
          'image': {
            'src': '../img/landing_pages/lawrence_mtolo.jpg?itok=zknYNy3W',
            'alt': 'Become a CBA venue'
          },
          'button': {
            'text': 'Find out more',
            'url': '/deliver/cba-venue'
          }
        },
        {
          'id': 3,
          'title': 'Contact AAT(SA)',
          'text': 'You can email us with your details if you are interested ' +
          'in delivering AAT(SA) qualifications, or find out more below.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/event_2.jpg?itok=FI87SI0_',
            'alt': 'Contact AAT(SA)'
          },
          'button': {
            'text': 'Register your interest',
            'url': '/deliver/qualifications'
          }
        },
        {
          'id': 4,
          'title': 'Marketing support',
          'text': 'We\'ve provided a range of marketing materials designed ' +
          'to help you promote AAT(SA) to your students and members.',
          'image': {
            'src': '../img/landing_pages/sylvia_segone_2.jpg?itok=B-wDsPO4',
            'alt': 'Marketing support'
          },
          'button': {
            'text': 'Access the resources',
            'url': '/deliver/marketing'
          }
        }
      ]
    };

  }

}());

/**
 *
 * membership COMPONENT
 *
 * @author
 *    Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.membership
 *
 * @description Provides the membership functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.membership', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/membership', {
        pageTitle: 'AAT membership',
        templateUrl: 'components/membership/membership.tpl.html',
        controller: 'MembershipController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])

    .controller('MembershipController', MembershipController);

  // Inject Deps
  MembershipController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function MembershipController(menuService, $rootScope) {

    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;
    $rootScope.menu = menuService.getMenu('membership');
    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'Benefits of membership',
          'text': 'Benefits include professional and career advice, networking' +
          ' opportunities, exclusive discounts and more.',
          'image': {
            'src': '../img/hero/edith_bayoli_2.jpg',
            'alt': 'Benefits of membership'
          },
          'button': {
            'text': 'Find out more',
            'url': '/membership/benefits'
          }
        },
        {
          'id': 2,
          'title': 'Apply for AAT(SA) membership',
          'text': 'Join a professional accountancy body that recognises your achievements and hard work.',
          'image': {
            'src': '../img/hero/lungile_mawonga.jpg',
            'alt': 'Apply for AAT(SA) membership'
          },
          'button': {
            'text': 'Apply for membership',
            'url': '/membership/apply'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'About AAT(SA) membership',
          'text': 'Be part of a professional accountancy body that recognises' +
          ' your achievements and offers you a range of benefits.',
          'image': {
            'src': '../img/landing_pages/jessie_bosco_2.jpg?itok=8VpvQaCo',
            'alt': 'About AAT(SA) membership'
          },
          'button': {
            'text': 'Find out more',
            'url': '/membership/about'
          }
        },
        {
          'id': 2,
          'title': 'Benefits of membership',
          'text': 'Benefits include professional and career advice, ' +
          'networking opportunities, exclusive discounts and more.',
          'image': {
            'src': '../img/landing_pages/lawrence_mtolo.jpg?itok=pkqtVT-_',
            'alt': 'Benefits of membership'
          },
          'button': {
            'text': 'Read more',
            'url': '/membership/benefits'
          }
        },
        {
          'id': 3,
          'title': 'Apply for membership',
          'text': 'Join a professional accountancy body that recognises your achievements and hard work.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/ashgar_ali_hassim_2.jpg?itok=ucRfdlhh',
            'alt': 'Apply for membership'
          },
          'button': {
            'text': 'Apply for membership',
            'url': '/membership/apply'
          }
        },
        {
          'id': 4,
          'title': 'Continuing Professional Development',
          'text': 'Continuing Professional Development (CPD) is any activity that helps ' +
          'you maintain your knowledge and skills related to your work.',
          'image': {
            'src': '../img/landing_pages/edward_makwana_saica.jpg?itok=lKC6Kry7',
            'alt': 'Marketing support'
          },
          'button': {
            'text': 'Find out more about CPD',
            'url': '/membership/cpd'
          }
        }
      ]
    };
  }

}());

/**
 *
 * ABOUT COMPONENT
 *
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @class app.About
 *
 * @description Provides the about-us functionality for the site
 *
 * @memberof app
 *
 */

(function() {
  'use strict';

  angular.module('project.about', ['ngRoute', 'menu-service'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/about', {
        pageTitle: 'AAT - About Us',
        templateUrl: 'components/about/about.tpl.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        access: {
          requiresLogin: false,
          roles: []
        }
      });
    }])
    .controller('AboutController', AboutController);

  // Inject Deps
  AboutController.$inject = ['menuService', '$rootScope'];

  /**
   *
   * Controller
   *
   * @constructor
   */
  function AboutController(menuService, $rootScope) {
    var vm = this;
    vm.pageContent = {};
    vm.isPageLoading = true;

    $rootScope.menu = menuService.getMenu('about');

    vm.pageContent = {
      'slideshow': [
        {
          'id': 1,
          'title': 'AAT(SA) membership',
          'text': 'Join a professional accountancy body that recognises your ' +
          'achievements and provides you with a range of benefits.',
          'image': {
            'src': '../img/hero/lungile_mawonga.jpg',
            'alt': ''
          },
          'button': {
            'text': 'Find out more',
            'url': '/membership/about'
          }
        },
        {
          'id': 2,
          'title': 'AAT(SA) qualifications',
          'text': 'The AAT(SA) qualification can enable your career in finance and accounting' +
          ' and help you make a truly positive contribution to your business, department or unit.',
          'image': {
            'src': '../img/hero/ayton_namwaza_banda.jpg',
            'alt': ''
          },
          'button': {
            'text': 'Find out more',
            'url': '/qualifications/accounting-qualification'
          }
        }
      ],
      'spotlights': [
        {
          'id': 1,
          'title': 'What we do',
          'text': 'We are a professional body dedicated to the education, development,' +
          ' regulation and support of accounting technicians in South Africa.',
          'image': {
            'src': '../img/landing_pages/israel_mogobe.jpg?itok=vXbL54nk',
            'alt': 'What we do'
          },
          'button': {
            'text': 'Find out more',
            'url': '/about/what-we-do'
          }
        },
        {
          'id': 2,
          'title': 'Contact us',
          'text': 'You can call or email us with queries or to request more information about what we do.',
          'image': {
            'src': 'http://aatsa-web.s3-eu-west-1.amazonaws.com/sa-prod/s3fs-public/styles/' +
            'landing_page_content_box/public/landing_pages/ashgar_ali_hassim.jpg?itok=KQngkAag',
            'alt': 'Contact us'
          },
          'button': {
            'text': 'Contact us',
            'url': '/about/contact-us'
          }
        },
        {
          'id': 3,
          'title': 'AAT UK',
          'text': 'Visit the Association of Accounting Technician\'s UK web site.',
          'image': {
            'src': '../img/landing_pages/edward_makwana_saica.jpg?itok=-35K2xUE',
            'alt': 'AAT UK'
          },
          'button': {
            'text': 'Visit the AAT UK website',
            'url': 'http://www.aat.org.uk/'
          }
        },
        {
          'id': 4,
          'title': 'Terms and conditions',
          'text': 'Access to and use of AAT(SA)\'s website constitutes ' +
          'acceptance of the terms and conditions listed here.',
          'image': {
            'src': '../img/landing_pages/sylvia_segone_2.jpg?itok=OaqGU7O3',
            'alt': 'Ts & Cs'
          },
          'button': {
            'text': 'Read our terms and conditions',
            'url': 'http://sa.aws.aat.org.uk/about/terms-conditions'
          }
        }
      ]
    };
  }

}());

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
/**
 * Created by David Breuer on 13/05/2016.
 *
 * @file menu-service.js
 * @description Menu service
 *
 */
(function() {
  'use strict';
  angular
    .module('menu-service', [])
    .service('menuService', menuService);

  menuService.$inject = ['$rootScope', '$http', '$q'];
  /* @ngInject */
  function menuService($rootScope, $http, $q) {
    var settings = {};
    settings.apiBase = 'http://sa.aws.aat.org.uk/api/v1';

    if ($rootScope && $rootScope.menus === 'undefined') {
      $rootScope.menus = {};
    }
    console.log('service Init');
    /**
     * Menu Items
     */
    return {
      api: api,
      setMenu: setMenu,
      getMenu: getMenu
    };

    function api(endpoint, method, cache, params, data, headers) {
      var deferred = $q.defer();

      $http({
        url: settings.apiBase + endpoint,
        method: method ? method : 'GET',
        params: params,
        data: data,
        headers: headers,
        cache: cache ? cache : false,
        withCredentials: false
      })
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }

    /**
     *
     * Get Menu
     *
     * @returns {items|{}}
     */
    function setMenu(menuObject) {
      $rootScope.menu = angular.extend({}, $rootScope.menus, menuObject);
    }

    function getMenu(slug) {
      //@todo: Menu list API
      return getMenuMachineNameBySlug(slug);
    }
  }

  /**
   *
   * @param slug
   * @returns {*}
   */
  function getMenuMachineNameBySlug(slug) {
    var menuMap = {
      'myaat': {
        'data': [
          {'name': 'What is MyAAT?', 'url': '/myaat/about', 'id': 11},
          {
            'name': 'Register for your MyAAT account', 'url': 'http://www.aat.org.uk/get-myaat/options',
            'id': 12, external: true
          },
          {'name': 'AAT privacy policy', 'url': '/myaat/privacy', 'id': 13},
          {'name': 'AAT use of cookies', 'url': '/myaat/cookies', 'id': 14},
          {'name': 'Help logging in to MyAAT', 'url': '/myaat/help', 'id': 15}
        ],
        'title': 'MyAAT',
        'class': 'sidebar__menu'
      },
      'about': {
        'data': [
          {'name': 'What we do', 'url': '/about/what-we-do', 'id': 11},
          {'name': 'Contact us', 'url': '/about/contact-us', 'id': 12},
          {'name': 'AAT UK', 'url': 'http://www.aat.org.uk', 'id': 13, external: true},
          {'name': 'Terms and conditions', 'url': '/about/terms-conditions', 'id': 14},
          {'name': 'Link to the SAICA website', 'url': 'http://www.saica.co.za', 'id': 15, external: true}
        ],
        'title': 'About Us',
        'class': 'sidebar__menu'
      },
      'qualifications': {
        'data': [
          {
            'name': 'The AAT(SA) Accounting Qualification',
            'url': '/qualifications/accounting-qualification',
            'id': 31,
            'data': [
              {'name': 'What you\'ll learn at L3', 'url': '/qualifications/level3', 'id': 321},
              {'name': 'What you\'ll learn at L4', 'url': '/qualifications/level4', 'id': 322},
              {'name': 'What you\'ll learn at L5', 'url': '/qualifications/level5', 'id': 323},
              {'name': 'How you\'re assessed', 'url': '/qualifications/assessed', 'id': 324},
              {'name': 'How long it takes to qualify', 'url': '/qualifications/how-long', 'id': 325},
              {'name': 'Course fees', 'url': '/qualifications/fees', 'id': 326}
            ]
          },
          {
            'name': 'Becoming an AAT(SA) student member', 'url': '/qualifications/student-membership', 'id': 32,
            'data': [
              {
                'name': 'Find a training provider',
                'url': 'http://www.aatsa.org.za/sites/default/files/public/assets/AATSA-provider-list.pdf',
                'external': true,
                'id': 321
              }
            ]
          }
        ],
        'title': 'AAT(SA) qualification',
        'class': 'sidebar__menu'
      },
      'employers': {
        'data': [
          {
            'name': 'AAT(SA) training for your business',
            'url': '/employers/business-training',
            'id': 41
          },
          {
            'name': 'AAT(SA) membership for your staff',
            'url': '/employers/staff-membership',
            'id': 42
          },
          {
            'name': 'The AAT(SA) Learnerships', 'url': '/employers/learnerships', 'id': 43,
            'data': [
              {
                'name': 'Certificate: Accounting Technician - Level 3',
                'url': '/employers/level3',
                'id': 431
              },
              {
                'name': 'FET Certificate Accounting Technician - Level 4',
                'url': '/employers/level4',
                'id': 432
              },
              {
                'name': 'Certificate: Accounting - Level 5',
                'url': '/employers/level5',
                'id': 433
              },
              {
                'name': '(LGAC) Local Government Accounting Certificate',
                'url': '/employers/lgac',
                'id': 434
              },
              {
                'name': '(LGAAC) FET Certificate: Local Government Accounting - Level 4',
                'url': '/employers/lgaac-fet',
                'id': 435
              }
            ]
          }
        ],
        'title': 'AAT for employers',
        'class': 'sidebar__menu'
      },
      'deliver': {
        'data': [
          {
            'name': 'Deliver AAT(SA) qualifications',
            'url': '/deliver/qualifications',
            'id': 51
          },
          {
            'name': 'Become a CBA venue',
            'url': '/deliver/cba-venue',
            'id': 52
          },
          {
            'name': 'Marketing support',
            'url': '/deliver/marketing',
            'id': 53
          }
        ],
        'title': 'Deliver AAT',
        'class': 'sidebar__menu'
      },
      'membership': {
        'data': [
          {
            'name': 'About AAT(SA) membership',
            'url': '/membership/about',
            'id': 61
          },
          {
            'name': 'Benefits of membership',
            'url': '/membership/benefits',
            'id': 62
          },
          {
            'name': 'Apply for membership',
            'url': '/membership/apply',
            'id': 63
          },
          {
            'name': 'Continuing professional development (CPD)',
            'url': '/membership/cpd',
            'id': 64,
            'data': [
              {'name': 'What counts as CPD?', 'url': '/membership/cpd--what-counts', 'id': 641},
              {'name': 'Record your CPD', 'url': '/membership/cpd--record', 'id': 642},
              {'name': 'CPD resources', 'url': '/membership/cpd--resources', 'id': 643}
            ]
          },
          {
            'name': 'Professional standards',
            'url': '/membership/professional-standards',
            'id': 65
          }
        ],
        'title': 'AAT membership',
        'class': 'sidebar__menu'
      },
      'news': {
        'data': [
          {'name': 'News', 'url': '/news', 'id': 71},
          {
            'name': 'Voice of AAT(SA) blog',
            'url': 'http://www.voiceofaatsa.org.za/',
            'id': 72,
            external: true
          }
        ],
        'title': 'News',
        'class': 'sidebar__menu'
      }
    };

    return menuMap[slug];
  }

})();

// jscs:enable requireCamelCaseOrUpperCaseIdentifiers


/**
 * Created by David Breuer on 13/05/2016.
 *
 * @file menu-service.js
 * @description Menu service
 *
 */
(function() {
  'use strict';
  angular
    .module('node-service', [])
    .service('nodeService', nodeService);

  nodeService.$inject = ['$http', '$sce', '$q', '$rootScope'];
  /* @ngInject */
  function nodeService($http, $sce, $q, $rootScope) {
    var settings = {};
    settings.apiBase = 'http://sa.aws.aat.org.uk/api/v1';
    var pages = {};
    /**
     * Menu Items
     */
    return {
      $get: isExist,
      api: api,
      getPage: getPage
    };

    function api(endpoint, method, cache, params, data, headers) {
      var deferred = $q.defer();

      $http({
        url: settings.apiBase + endpoint,
        method: method ? method : 'GET',
        params: params,
        data: data,
        headers: headers,
        cache: cache ? cache : false,
        withCredentials: false
      })
        .success(function(data) {
          $rootScope.progressbar.complete();
          deferred.resolve(data);
        })
        .error(function(data) {
          $rootScope.progressbar.stop();
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function isExist(params) {
      return true;
    }

    function getPage(parent, slug, hasParent) {
      var pageID = getNodeIDBySlug(parent, slug);
      if (hasParent) {
        pageID = parent;
      }
      $rootScope.progressbar.start();
      return this.api('/node/' + pageID, 'GET', true);
    }
  }

  function getNodeIDBySlug(parent, slug) {
    var pageMap = {
      'myaat': {
        'about': 20130,
        'privacy': 20136,
        'cookies': 20137,
        'help': 179
      },
      'about': {
        'what-we-do': 20070,
        'contact-us': 20071,
        'terms-conditions': 20144
      },
      'qualifications': {
        'accounting-qualification': 20072,
        'level3': 20068,
        'level4': 20082,
        'level5': 20088,
        'assessed': 20089,
        'how-long': 20090,
        'fees': 20091,
        'student-membership': 20094
      },
      'employers': {
        'business-training': 20100,
        'staff-membership': 20069,
        'learnerships': 20101,
        'level3': 20108,
        'level4': 20113,
        'level5': 20117,
        'lgac': 20123,
        'lgaac-fet': 20135
      },
      'deliver': {
        'qualifications': 20124,
        'cba-venue': 20126,
        'marketing': 20181
      },
      'membership': {
        'about': 20096,
        'benefits': 20097,
        'apply': 20098,
        'cpd': 20146,
        'cpd--what-counts': 20148,
        'cpd--record': 20153,
        'cpd--resources': 20154,
        'professional-standards': 20226
      }
    };
    if (!pageMap[parent]) {
      return false;
    }
    return pageMap[parent][slug];
  }
})();


//news-service
/**
 * Created by David Breuer on 20/05/2016.
 *
 * @file news-service
 * @description News service
 *
 */
(function() {
  'use strict';

  angular.module('news-service', [])
    .service('NewsService', NewsService);

  NewsService.$inject = ['$http', '$q', '$rootScope'];
  /**
   * News API service
   * @param $http
   * @param $q
   * @returns {{api: api, getNews: getNews, getAllNews: getAllNews}}
   * @constructor
   */
  function NewsService($http, $q, $rootScope) {
    var settings = {};
    settings.apiBase = 'http://sa.aws.aat.org.uk/api/v1';
    settings.limit = 5;
    settings.page = 0;

    return {
      api: api,
      getNews: getNews,
      getAllNews: getAllNews
    };

    function api(endpoint, method, cache, params, data, headers) {
      var deferred = $q.defer();

      $http({
        url: settings.apiBase + endpoint,
        method: method ? method : 'GET',
        params: params,
        data: data,
        headers: headers,
        cache: cache ? cache : false,
        withCredentials: false
      })
        .success(function(data) {
          $rootScope.progressbar.complete();
          deferred.resolve(data);
        })
        .error(function(data) {
          $rootScope.progressbar.stop();
          deferred.reject(data);
        });
      return deferred.promise;
    }

    function getNews(news) {
      $rootScope.progressbar.start();
      return this.api('/node/' + news, 'GET', true);
    }

    function getAllNews(params) {
      $rootScope.progressbar.start();
      return this.api('/views/api_news', 'GET', true, {
        limit: (params && params.limit) ? params.limit : 5,
        page: (params && params.page) ? params.page : 0
      });
    }

  }

}());

/**
 *
 * WEB APP SA
 *
 * @author David Breuer <David.Breuer@aat.org.uk>
 * @author Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @description Main angular application
 *
 * @namespace app
 *
 */

(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('project', [

      // CORE
      'ngRoute',
      'templates',
      'ngSanitize',
      'ngAnimate',
      'angular-jwt',
      'angular-storage',
      'slick',
      '720kb.socialshare',
      'ngProgress',
      'spinner',

      //'formly',
      //'formlyBootstrap',
      'ui.bootstrap',

      // SHARED
      'mobile-menu',
      //'search-bar',
      //'bookmarks',
      //'meta',
      'slideshow',
      'spotlights',
      'social',
      'menu',
      //'landing-page',
      'header',

      // CUSTOM
      'project.frontpage',
      'project.myaat',
      'project.news',
      'project.static-pages',
      'project.qualifications',
      'project.employers',
      'project.deliver',
      'project.membership',
      'project.about',
      'project.node'

  ])

  // App config
    .config([

      '$routeProvider',
      '$locationProvider',
      '$httpProvider',
      'jwtInterceptorProvider',
      '$sceProvider',

      function($routeProvider, $locationProvider, $httpProvider, jwtInterceptorProvider, $sceProvider) {
        $sceProvider.enabled(false);
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        //$httpProvider.interceptors.push('AuthInterceptor');
        $routeProvider.otherwise({redirectTo: '/frontpage'});

        // Add JWT Token to each request
        jwtInterceptorProvider.tokenGetter = function() {
          return sessionStorage.getItem('auth-token');
        };

        $httpProvider.interceptors.push('jwtInterceptor');

      }])

    // Define App constants (ref env vars)
    .constant('API_URL', 'http://sa.aws.aat.org.uk/api/v1')
    .filter('slug',  function() {
      return function(input) {
        return input
          .toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'');
      };
    })
    .run(appRun);

  // Inject Deps
  appRun.$inject = ['$route', '$rootScope', '$location', 'ngProgressFactory'];

  /**
   *
   * App RUN scope
   *
   * @param {object} $rootScope
   * @param {object} $location
   *
   */

  function appRun($route, $rootScope, $location, ngProgressFactory) {
    //var original = $location.path;
    //$location.path = function(path, reload) {
    //  if (reload === false) {
    //    var lastRoute = $route.current;
    //    var un = $rootScope.$on('$locationChangeSuccess', function() {
    //      $route.current = lastRoute;
    //      un();
    //    });
    //  }
    //  return original.apply($location, [path]);
    //};
    $rootScope.progressbar = ngProgressFactory.createInstance();
    $rootScope.progressbar.setColor('#00746f');
    // register listener to watch route changes
    $rootScope.$on('$routeChangeStart', function(event, current, next) {

      // Page Title
      //$rootScope.pageTitle = MetaDataService.pageTitle();
      //$rootScope.metaDescription = MetaDataService.pageTitle();

      // Check token
      var token = localStorage.getItem('auth-token');

      if (current.access && current.access.requiresLogin === true) {

        if (!token) {
          console.log('REQUIRES LOGIN');
          event.preventDefault();
          $location.path('/login');
        }

      }

    });

    // Page Title
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {

      //console.log(current.hasOwnProperty('$$route'));

      if (current.hasOwnProperty('$$route')) {
        $rootScope.pageTitle = current.$$route.pageTitle;
        $rootScope.metaDescription = current.$$route.metaDescription;
      }
    });

  }

  // Precompile .tpls
  angular.module('templates', []);

}());

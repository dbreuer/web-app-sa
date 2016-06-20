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


    $rootScope.menus = $rootScope.menus || {};

    //console.log('service Init');
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
        .success(_successAPICallback)
        .error(_errorAPICallback);

      function _successAPICallback(data) {
        deferred.resolve(data);
      }

      function _errorAPICallback(data) {
        deferred.reject(data);
      }

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


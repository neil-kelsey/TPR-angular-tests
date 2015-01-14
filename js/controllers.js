'use strict';

/* Controllers */

var TPRsearchApp = angular.module('TPRsearchApp', []);

TPRsearchApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Key points',
     'anchor': '9394',
     'snippet': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, risus sit amet ultricies pretium, mi diam volutpat nisi, et consectetur odio leo ac turpis. Nam ex sapien, eleifend in lacus ac, porttitor placerat velit. Phasellus commodo lacus consequat magna egestas congue.'},
    {'name': 'Why you might postpone',
     'anchor': '9395',
     'snippet': 'aecenas molestie mattis ipsum, nec commodo odio luctus in. Donec dignissim ultricies lorem nec tristique. Morbi non tincidunt risus. Etiam vitae placerat felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nulla elit, elementum nec'},
    {'name': 'When you can postpone',
     'anchor': '9396',
     'snippet': 'Maecenas convallis, nisi at consectetur euismod, massa dolor interdum augue, sed consequat risus leo ac sem. Praesent nibh libero, venenatis quis eleifend tempor, lacinia sit amet ipsum. Suspendisse potenti. Nam vehicula vitae purus id rhoncus. Duis rhoncus lectus et pharetra semper. Etiam aliquam sagittis nibh at pulvinar. Mauris tincidunt et nulla sit amet elementum. Phasellus nec velit erat. Nam justo ligula, molestie vitae neque in, volutpat bibendum mauris.'},
     {'name': 'Postponing automatic enrolment',
      'anchor': '9397',
     'snippet': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, risus sit amet ultricies pretium, mi diam volutpat nisi, et consectetur odio leo ac turpis. Nam ex sapien, eleifend in lacus ac, porttitor placerat velit. Phasellus commodo lacus consequat magna egestas congue.'},
     {'name': 'During the postponement period',
      'anchor': '9399',
     'snippet': 'aecenas molestie mattis ipsum, nec commodo odio luctus in. Donec dignissim ultricies lorem nec tristique. Morbi non tincidunt risus. Etiam vitae placerat felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nulla elit, elementum nec'},
     {'name': 'At the end of the postponement period',
      'anchor': '9400',
     'snippet': 'Maecenas convallis, nisi at consectetur euismod, massa dolor interdum augue, sed consequat risus leo ac sem. Praesent nibh libero, venenatis quis eleifend tempor, lacinia sit amet ipsum. Suspendisse potenti. Nam vehicula vitae purus id rhoncus. Duis rhoncus lectus et pharetra semper. Etiam aliquam sagittis nibh at pulvinar. Mauris tincidunt et nulla sit amet elementum. Phasellus nec velit erat. Nam justo ligula, molestie vitae neque in, volutpat bibendum mauris.'},
     {'name': 'What is automatic enrolement?',
      'anchor': '9904',
     'snippet': 'Aliquam sem neque, vehicula congue lobortis vitae, euismod id mauris. Aenean quis tortor ante. Proin scelerisque mi a pellentesque consectetur. Cras sit amet eros nisl. Suspendisse potenti. Pellentesque nunc nunc, sagittis sed leo eget, vestibulum pretium risus. Pellentesque venenatis, mi euismod varius condimentum, tellus neque varius mi, non vulputate est est eu neque. Pellentesque vel est laoreet, condimentum risus a, tempor nisi. Pellentesque pellentesque rhoncus lorem, id consectetur odio tempor non.'},
	 {'name': 'Detailed guidance',
      'anchor': '9904',
     'snippet': 'In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vitae neque in, volutpat bibendum mauris.'},
    ];
  $scope.name = "World";
});

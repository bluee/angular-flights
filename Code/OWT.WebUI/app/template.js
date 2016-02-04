angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('results.html',
    "<div class=jumbotron id=searchresults>{{search.from.municipality}} ({{search.from.iata_code}}) to {{search.to.municipality}} ({{search.to.iata_code}}) Departing {{search.datefrom}}<br><br><table class=\"table table-hover\"><thead><tr><td>Carrier</td><td>Flight</td><td>Depart</td><td>Arrive</td><td>Fare</td><td></td></tr></thead><tbody><tr ng-repeat=\"item in searchresult\"><td>{{item.Carrier}}</td><td>{{item.Flight}}</td><td>{{item.Depart}}</td><td>{{item.Arrive}}</td><td>{{item.Fare}}</td><td><input type=\"radio\"> Select</td></tr></tbody></table></div>"
  );

}]);

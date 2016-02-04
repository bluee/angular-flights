/*
 * Main controller for search
 */
app.controller('MainController', function ($scope, $location, commonRepository) {

    //Initial search parameters
    $scope.search = {
        from: 'BNE',
        to: 'SYD',
        datefrom: new Date()
    };

    //Sample airport list
    $scope.data = {
        airports: commonRepository.getAirports()
    };

    //Search. Will redirect request so users can easier bookmark/reload/send link to this page
    //Returns url: /#/fromAirportCode/toAirportCode/dateYYYY-MM-DD
    $scope.searchButton = function ()
    {
        var dateStr = moment($scope.search.datefrom).format('YYYY-MM-DD');
        var pathStr = '/#/' + $scope.search.from + '/' + $scope.search.to + '/' + dateStr;
        window.location = pathStr;
    }

});


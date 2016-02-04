
app.controller('MainController', function ($scope, $location, commonRepository) {

    $scope.search = {
        from: 'BNE',
        to: 'SYD',
        datefrom: new Date()
    };

    $scope.data = {
        airports: commonRepository.getAirports()
    };

    $scope.searchButton = function ()
    {
        var dateStr = moment($scope.search.datefrom).format('YYYY-MM-DD');
        var pathStr = '/#/' + $scope.search.from + '/' + $scope.search.to + '/' + dateStr;
        window.location = pathStr;
    }

});


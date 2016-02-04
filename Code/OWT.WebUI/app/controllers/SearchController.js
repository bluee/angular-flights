/*
 * Search controller. Display search from routing
 */
app.controller('SearchController', function ($scope, $routeParams, commonRepository) {

    $scope.data = {
        airports: commonRepository.getAirports()
    };
    $scope.search = {
        from: commonRepository.getAirport($routeParams.sfrom),
        to: commonRepository.getAirport($routeParams.sto),
        datefrom: moment($routeParams.sdate).format('MMMM Do YYYY')
    };

    var searchFlights = function () {

        commonRepository.searchFlights($scope.search).then(
            function (data) {
                $scope.searchresult = _.sample(data, 4);
            },
            function (error) {
                //handle error
            }
            );
    }
    searchFlights();

});


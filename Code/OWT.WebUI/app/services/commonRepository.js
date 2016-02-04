/*
 * CommonRepository
 */
app.factory('commonRepository', function ($http, $q, $cacheFactory) {
    return {
        //Airports is a small sample of airports. Should be moved to database and cached in ASP.NET
        getAirports: function () {
            return [
              { "airport_type": "large_airport", "name": "Brisbane International Airport", "loc": { type: "Point", "coordinates": [153.1170044, -27.38419914] }, "continent": "OC", "iso_country": "AU", "iso_region": "AU-QLD", "municipality": "Brisbane", "iata_code": "BNE" },
              { "airport_type": "large_airport", "name": "Sydney Kingsford Smith International Airport", "loc": { type: "Point", "coordinates": [151.177002, -33.94609833] }, "continent": "OC", "iso_country": "AU", "iso_region": "AU-NSW", "municipality": "Sydney", "iata_code": "SYD" },
              { "airport_type": "medium_airport", "name": "Adelaide International Airport", "loc": { type: "Point", "coordinates": [138.5310059, -34.94499969] }, "continent": "OC", "iso_country": "AU", "iso_region": "AU-SA", "municipality": "Adelaide", "iata_code": "ADL" },
              { "airport_type": "large_airport", "name": "Perth International Airport", "loc": { type: "Point", "coordinates": [115.9670029, -31.94029999] }, "continent": "OC", "iso_country": "AU", "iso_region": "AU-WA", "municipality": "Perth", "iata_code": "PER" },
              { "airport_type": "medium_airport", "name": "Melbourne International Airport", "loc": { type: "Point", "coordinates": [-80.64530182, 28.10280037] }, "continent": "NA", "iso_country": "US", "iso_region": "US-FL", "municipality": "Melbourne", "iata_code": "MLB" }
            ];
        },
        //Lookup iata code
        getAirport: function (iataCode) {
            return _.find(this.getAirports(), { iata_code: iataCode });
        },
        //Search flights. Currently ignores parameters due to small mock sample
        searchFlights: function (params) {
            var deferred = $q.defer();
            $http.get("/api/Flights/", { cache: false }).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        },

    }
});

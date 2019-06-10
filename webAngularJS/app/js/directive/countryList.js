worldApp.directive("countryList", function () {
    return {
        link:  function (scope, element, attrs) {

        },
        transclude: true,
        templateUrl: "/app/templates/CountryList.html",
        restrict: "E"
      }
})
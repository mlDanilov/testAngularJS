worldApp.directive("countryList", function () {
    return {
        link:  function (scope, element, attrs) {
           // scope.Comments = "Preved, медвед!!!";
        },
        transclude: true,
        templateUrl: "/app/templates/CountryList.html",
        restrict: "E"
      }
})
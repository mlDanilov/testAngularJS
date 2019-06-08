worldApp.directive("cityList", function () {
    return {
        link: function (scope, element, attrs) 
        {
            var data = scope[attrs["cityList"]];
            if (angular.isArray(data)) {
                var selectElem = angular.element("<select>");
                element.append(selectElem);

                for (var i = 0; i < data.length; i++) {
                    var optionElem = angular.element("<option>").text(data[i].Id + " - " + data[i].Name);
                    selectElem.append(optionElem);
                }
            }
        },
        restrict: "E"
    }
})
worldApp.directive("compileCountryList", function ($compile) {
    return function (scope, element, attrs) {
            scope.Comments = "Ура, каменты!";

            var content = "<select><option>Preved!!</option>" +
                "<option>Medved!!</option></select>" +
                "<div>Комментариий:</div>" +
                "<div>{{Comments}}</div>";

            var answerElem = angular.element(content);

            var compileFn = $compile(answerElem);
            compileFn(scope);

            element.append(answerElem);
    }
})
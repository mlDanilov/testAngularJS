worldApp.filter('millenium', function () {
    return function (cityEstablished, year) {
        if (cityEstablished < year)
            return "В допотопье";
        else
            return cityEstablished + " г.";
    }
})

worldApp.filter('MoreYear', function () {
    return function (cityArray, year) {
        return cityArray.filter(c=> c.Established > year);
    }
})
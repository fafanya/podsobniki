function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http)
{
    var curbidid = getCookie("curbidid");
    $http.get("http://fafanya.netau.net/ui/dbquery/bid_details_by_customer_query.php?id=" + curbidid)
    .success(function (response)
    {
        $scope.name = response.name;
        $scope.category = response.category;
        $scope.id = response.id;
        $scope.summary = response.summary;
        $scope.categories = response.categories;
        $scope.selectedcategory = response.selectedcategory;
        $scope.comments = response.comments;
    });
});
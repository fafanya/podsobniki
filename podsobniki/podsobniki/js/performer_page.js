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
    var userid = getCookie("userid");
    $http.get("http://fafanya.netau.net/ui/dbquery/bid_link_list_by_performer_query.php?userid=" + userid + "&client=android")
    .success(
    function (response)
    {
        $scope.links = response.links;
    });
});
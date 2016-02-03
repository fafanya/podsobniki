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
    $http.get("http://fafanya.netau.net/ui/dbquery/all_bid_list_query.php")
    .success(function (response)
    {
        $scope.names = response.records;
    });


    $scope.addBid = function (id)
    {
        var userid = getCookie("userid");
        $http.get("http://fafanya.netau.net/ui/performer_all_bids_action.php?id=" + id + "&client=android&add=0&userid="+userid)
        .success(function (response)
        {
            window.location = "../html/performer_page.html";
        });
    };
});
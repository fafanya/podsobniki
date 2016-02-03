function getCookie(cname)
{
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i=0; i<ca.length; i++) {
         var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
         if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
     }
     return "";
 }

var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http)
{
    var userid = getCookie("userid");
    $http.get("http://fafanya.netau.net/ui/dbquery/bid_list_by_customer_query.php?userid=" + userid + "&client=android")
    .success(function (response)
    {
        $scope.names = response.records;
    });

    $scope.deleteBid = function (id)
    {
        $http.get("http://fafanya.netau.net/ui/delete_bid_action.php?id=" + id + "&client=android")
        .success(function (response)
        {
            window.location = "../html/customer_page.html";
        });
    };

    $scope.viewBid = function (id)
    {
        document.cookie = "curbidid=" + id;
        window.location = "../html/view_bid_page.html";
    };

    $scope.editBid = function (id)
    {
        document.cookie = "curbidid=" + id;
        window.location = "../html/edit_bid_page.html";
    };
});

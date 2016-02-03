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
    var t = 1 + 1;
    $http.get("http://fafanya.netau.net/ui/dbquery/bid_details_by_customer_query.php?id=" + curbidid)
    .success(function (response)
    {
        $scope.name = response.name;
        $scope.category = response.category;
        $scope.id = response.id;
        $scope.summary = response.summary;
        $scope.categories = response.categories;
        $scope.selectedcategory = response.selectedcategory;
    });

    $scope.saveBid = function (id)
    {
        var name = document.getElementById("name").value;
        var summary = document.getElementById("summary").value;
        var category_id = document.getElementById("category_id").value;

        $http.get("http://fafanya.netau.net/ui/edit_bid_query.php?client=android&save=0&id="
            + id + "&name=" + name + "&summary=" + summary + "&category_id=" + category_id)
        .success(function (response)
        {
            document.cookie = "curbidid=" + id;
            window.location = "../html/edit_bid_page.html";
        });
    };

    $scope.cancelBid = function (id)
    {
        window.location = "../html/customer_page.html";
    };
});
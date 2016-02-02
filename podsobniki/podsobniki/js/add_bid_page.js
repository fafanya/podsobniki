var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://fafanya.netau.net/ui/dbquery/category_list_query.php")
    .success(function (response)
    {
        $scope.categories = response.categories;
        $scope.selectedcategory = response.selectedcategory;
    });
});

WinJS.UI.processAll().done(function ()
{
    var btnLogin = document.getElementById("btnAddBid");
    btnLogin.addEventListener("click", login, false);
});

function login(eventInfo)
{
    var formparams = "name=yyyy&summary=ggggg&category_id=1&client=android&userid=10";
    WinJS.xhr
    ({
        type: "POST",
        url: "http://fafanya.netau.net/ui/add_bid_query.php",
        data: formparams,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
    .then
    (
        function (success)
        {
            window.location = "../html/customer_page.html";
        },
            function (error)
            {
                var aaa = 1 + 1;
                var bbb = aaa + 1;
            }
    );

    var a = 1 + 1;
    var b = a + 1;
}

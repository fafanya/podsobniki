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
    var userid = getCookie("userid");
    var name = document.getElementById("name").value;
    var summary = document.getElementById("summary").value;
    var category_id = document.getElementById("category_id").value;

    var formparams = "name="+name+"&summary="+summary+"&category_id="+category_id+"&client=android&userid="+userid;
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
            }
    );
}

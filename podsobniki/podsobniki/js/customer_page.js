function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i=0; i<ca.length; i++) {
         var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
         if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
     }
     return "";
 }

WinJS.UI.processAll().done(function ()
{
    var userid = getCookie("userid");
    var records;
    WinJS.xhr(
        {
            //url: "http://fafanya.netau.net/ui/dbquery/bid_list_by_customer_query.php?userid="+userid+"&client=android",
url: "http://fafanya.netau.net/ui/dbquery/bid_list_by_customer_query.php?userid=10&client=android",
            responseType: "application/json"
        }
    ).done(function completed(result) {
        if (result.status === 200) 
        {
var tt = $.parseJSON(result.response);
            records = tt.records;
        }
    });

    //app.controller('customersCtrl', function ($scope, $http)
    //{
    //    $scope.names = records;
    //});

//angular.module('myApp', [])
//    .controller('customersCtrl', function($scope) {
//         $scope.names = records;
//    });

});
var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http)
{
    $http.get("http://fafanya.netau.net/ui/dbquery/bid_list_by_customer_query.php?userid=10&client=android")
    .success(function (response)
    {
        $scope.names = response.records;
    });
});
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
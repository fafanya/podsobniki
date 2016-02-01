var app = angular.module('myApp', []);
            app.controller('customersCtrl', function($scope, $http) {
                $http.get("http://fafanya.netau.net/ui/dbquery/category_list_query.php")
               .success(function (response)
                {
                    $scope.categories = response.categories;
                    $scope.selectedcategory = response.selectedcategory;
                });
            });
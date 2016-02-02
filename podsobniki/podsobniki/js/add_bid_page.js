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
    var fileInputElement = document.getElementById("uploaded_file");
    var formData = new FormData();
    formData.append('uploaded_file', fileInputElement.files[0]);

    file = fileInputElement.files[0];
    var ttt = MSApp.createFileFromStorageFile(file);

    WinJS.xhr({
        type: "POST",
        url: "http://fafanya.netau.net/ui/addbidquery.php",
        data: ttt
    }).done(function completed(result)
    {
        if (result.status === 200)
        {
        }
    });

    /*WinJS.xhr(
        {
            url: "http://fafanya.netau.net/ui/enter_customer_action.php?login=1&password=1&client=android",
            responseType: "application/json",
        }
    ).done(function completed(result) {
        if (result.status === 200) {
            var tt = $.parseJSON(result.response);
            var t = tt.userid;
            document.cookie = "userid=" + t;
            window.location = "../html/customer_page.html";
        }
    });*/


    var a = 1 + 1;
    var b = a + 1;
}

﻿function login(eventInfo)
{
    var l = document.getElementById("inputLogin").value;
    var p = document.getElementById("inputPassword").value;

    WinJS.xhr(
        {
            url: "http://fafanya.netau.net/ui/enter_customer_action.php?login=" + l + "&password=" + p + "&client=android",
            responseType: "application/json",
        }
    )
    .done
    (
        function completed(result)
        {
            if (result.status === 200)
            {
                var useridJSON = $.parseJSON(result.response);
                var userid = useridJSON.userid;
                document.cookie = "userid=" + userid;
                window.location = "../html/customer_page.html";
            }
        },
        function error(req) 
        {
            window.location = "../html/no_enter_customer_page.html";
        } 
    );
}

WinJS.UI.processAll().done(function () {
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", login, false);
});
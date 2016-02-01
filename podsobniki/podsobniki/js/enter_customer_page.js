function login(eventInfo)
{
    var l = document.getElementById("inputLogin").value;
    var p = document.getElementById("inputPassword").value;

    WinJS.xhr(
        {
            url: "http://fafanya.netau.net/ui/enter_customer_action.php?login=" + l + "&password=" + p + "&client=android",
            responseType: "application/json",
        }
    ).done(function completed(result)
    {
        if (result.status === 200)
        {
var tt = $.parseJSON(result.response);
            var t = tt.userid;
            document.cookie = "userid=" + t;
            window.location = "../html/customer_page.html";
        }
    });
}

WinJS.UI.processAll().done(function () {
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", login, false);
});
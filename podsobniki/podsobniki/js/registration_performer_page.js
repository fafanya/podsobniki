function login(eventInfo)
{
    var l = document.getElementById("inputLogin").value;
    var p = document.getElementById("inputPassword").value;
    var e = document.getElementById("inputEmail").value;

    WinJS.xhr(
        {
            url: "http://fafanya.netau.net/ui/dbquery/add_performer_query.php?login=" + l + "&password=" + p + "&email=" + e + "&client=android",
            responseType: "application/json",
        }
    )
    .done
    (
        function completed(result) {
            if (result.status === 200) {
                window.location = "../html/ok_signup_performer_page.html";
            }
        },
        function error(req) {
            window.location = "../html/no_signup_performer_page.html";
        }
    );
}

WinJS.UI.processAll().done(function () {
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", login, false);
});
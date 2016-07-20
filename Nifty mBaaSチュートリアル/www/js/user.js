
var UserPageController = {
    init : function() {
        $(function() {
            UserPageController.prepare();
        });
    },

    prepare : function() {
        $('#logout').on('tappable-tap', function() {
            UserPageController.logout();
        });

        this.load();
    },

    load : function() {

        var currentUser = NCMB.User.current();
        if (currentUser) {
            console.log(currentUser);
            console.log(currentUser.id);
            $('#name').text(currentUser.get('userName'));
            $('#number').text(currentUser.get('number'));
            $('#seibetu').text(currentUser.get('seibetu'));
            $('#gakunen').text(currentUser.get('gakunen'));
            $('#gakubu').text(currentUser.get('gakubu'));
            $('#gakka').text(currentUser.get('gakka'));
            $('#syussinn').text(currentUser.get('syussinn'));
            // $('#todo').text(currentUser.get('todo'));
            $('#syoukai').text(currentUser.get('syoukai'));
            $('#fileName').attr('src',currentUser.get('fileName'));
        } else {
            alert("ログインしていません");
        }
    },

    logout : function() {
        NCMB.User.logOut();
        location.href = 'login.html';
    }
};

// var currentUser1 = ncmb.User.getCurrentUser();
// if (currentUser1) {
//     console.log("ログイン中のユーザー: " + currentUser1.get("userName"));
// } else {
//     console.log("未ログインまたは取得に失敗");
// }
// console.log("ok");

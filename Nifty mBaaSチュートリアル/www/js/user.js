 
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
            $('#name').text(currentUser.get('userName'));
            $('#number').text(currentUser.get('number'));
            $('#seibetu').text(currentUser.get('seibetu'));
            $('#gakubu').text(currentUser.get('gakubu'));
            $('#gakka').text(currentUser.get('gakka'));
            $('#syussinn').text(currentUser.get('syussinn'));
            $('#todo').text(currentUser.get('todo'));
            $('#memo').text(currentUser.get('memo'));
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


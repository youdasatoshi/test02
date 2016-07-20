
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
        console.log($("#edit"));
        $('#edit').click(function(){
          console.log("aaaaa");
          UserPageController.edit();
        });
        this.load();
    },

    load : function() {

        var currentUser = NCMB.User.current();
        if (currentUser) {
            console.log(currentUser);
            console.log(currentUser.id);
            $('#name').val(currentUser.get('userName'));
            $('#number').val(currentUser.get('number'));
            $('#seibetu').val(currentUser.get('seibetu'));
            $('#gakunen').val(currentUser.get('gakunen'));
            $('#gakubu').val(currentUser.get('gakubu'));
            $('#gakka').val(currentUser.get('gakka'));
            $('#syussinn').val(currentUser.get('syussinn'));
            $('#syoukai').val(currentUser.get('syoukai'));
            // $('#memo').text(currentUser.get('memo'));
            $('#fileName').attr('src',currentUser.get('fileName'));
        } else {
            alert("ログインしていません");
        }
    },

    logout : function() {
        NCMB.User.logOut();
        location.href = 'login.html';
    },

    edit : function() {
      console.log("text");
      var currentUser = NCMB.User.current();
      currentUser.set('userName', $("#name").val());
      currentUser.set('number', $("#number").val());
      currentUser.set('seibetu', $("#seibetu").val());
      currentUser.set('gakunen', $("#gakunen").val());
      currentUser.set('gakubu', $("#gakubu").val());
      currentUser.set('gakka', $("#gakka").val());
      currentUser.set('syussinn', $("#syussinn").val());
      currentUser.set('syoukai', $("#syoukai").val());
      currentUser.save().then(function(){
        location.href = 'user.html';
      });
    }
};



// var currentUser1 = ncmb.User.getCurrentUser();
// if (currentUser1) {
//     console.log("ログイン中のユーザー: " + currentUser1.get("userName"));
// } else {
//     console.log("未ログインまたは取得に失敗");
// }
// console.log("ok");

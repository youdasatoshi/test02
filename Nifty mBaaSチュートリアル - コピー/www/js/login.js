
var LoginPageController = {
    init : function() {
        $(function() {
            LoginPageController.prepare();
        });
    },

    prepare : function() {
        $('#login').on('tappable-tap', function() {
            LoginPageController.login();
        });

        $('#back').on('tappable-tap', function() {
            location.href = 'index.html';
        });
    },

    login : function() {
        var userName = $('#user-name').val();
        var password = $('#password').val();

        NCMB.User.logIn(userName, password, {
            success : function(user) {
                // 成功
                alert("ログインに成功しました");
                location.href = 'user.html';
            },
            error : function(user, error) {
                // エラー
                alert("ログインに失敗しました");
                console.log(JSON.stringify(arguments));
            }
        });
    }
};



// $('#submit').on('click',function(){
//     var name = $('#name').val();
//     var pass = $('#pass').val();
//    //SDKの初期化
//     var ncmb = new NCMB("1725c76e9152f467fc3fd321a4ebe3c28c4e3f7ac9541d1b4b2d740ac5c2d8d0","b22175504f8564587440a56d92e0d86ee2d32014e44abfd196c4712a00faad32");
//
//     //Userのインスタンスを作成
//     var user = new ncmb.User();
//
//     //ユーザー名・パスワードを設定
//     user.set("userName",name)
//         .set("password",pass); // 任意フィールドを追加
//
//     // 新規登録
//     user.signUpByAccount()
//         .then(function(){
//             alert("登録完了");
//         })
//         .catch(function(err){
//           // エラー処理
//         });
//
// })

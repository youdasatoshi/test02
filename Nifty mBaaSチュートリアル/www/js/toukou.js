
var TOUKOU = NCMB.Object.extend('toukou');

var currentUser = NCMB.User.current();
if (currentUser) {
    console.log("ログイン中のユーザー: " + currentUser.get("userName"));
} else {
    console.log("未ログインまたは取得に失敗");
}

var state = '募集中';

var TOUKOUListController = {

    init : function() {
        $(function() {
            TOUKOUListController.prepare();
        });
    },

    prepare : function() {
        $('#add-toukou').on('tappable-tap', function() {
            TOUKOUListController.add();
        });

        $('#back').on('tappable-tap', function() {
            location.href = 'index.html';
        });

        // TODOListController.refresh();

    },

    add : function() {
        var date = document.forms.id_form1.date.value;
        var time = document.forms.id_form1.time.value;
        var place = document.forms.id_form1.place.value;
        var seigen = document.forms.id_form1.seigen.value;
        var freeform = document.forms.id_form1.freeform.value;

            new TOUKOU().save({
                date : date,
                time : time,
                place : place,
                seigen :seigen,
                freeform : freeform,
                currentid : currentUser.id,
                state : state
            }, {
                success : function() {
                    alert("追加できましたyo-");
                    TOUKOUListController.refresh();
                },
                error : function() {
                    alert("エラーがおきました:（");
                }
            }).then(function(){
              location.href = 'toukou.html?id='+toukou.id;
            });

    }

};


var TODO = NCMB.Object.extend('TODO');

var currentUser = NCMB.User.current();
if (currentUser) {
    console.log("ログイン中のユーザー: " + currentUser.get("userName"));
} else {
    console.log("未ログインまたは取得に失敗");
}

var TODOListController = {

    init : function() {
        $(function() {
            TODOListController.prepare();
        });
    },

    prepare : function() {
        $('#add-todo').on('tappable-tap', function() {
            TODOListController.add();
        });

        $('#back').on('tappable-tap', function() {
            location.href = 'index.html';
        });

        TODOListController.refresh();

    },

    add : function() {
        // var todo = prompt('TODOを追加');
        // var playerName = "tei";
        var name = document.forms.id_form1.name.value;
        var number = document.forms.id_form1.number.value;
        var seibetu = document.forms.id_form1.seibetu.value;
        var gakubu = document.forms.id_form1.gakubu.value;
        var gakka = document.forms.id_form1.gakka.value;
        var syussinn = document.forms.id_form1.syussinn.value;
        // console.log(todo);
        // console.log(playerName);
        // if (typeof todo === 'string' && todo.length > 0) {
            // TODOを保存
            new TODO().save({
                name : name,
                number : number,
                seibetu : seibetu,
                gakubu : gakubu,
                gakka : gakka,
                syussinn : syussinn,
                currentid : currentUser.id
            }, {
                success : function() {
                    alert("TODO追加できましたyo-");
                    TODOListController.refresh();
                },
                error : function() {
                    alert("エラーがおきました:");
                }
            });
        // }
    },

    refresh : function() {

        showSpinner();

        var query = new NCMB.Query(TODO);
        query.find({
            success : function(results) {
                TODOListController.render(results);
            },
            error : function(error) {
                console.log(JSON.stringify(arguments));
            }
        });
    },

    render : function(todoArray) {
        var tableCellTemplate = $('#table-cell-template')[0];
        var fragment = document.createDocumentFragment();


// if(TODO(currentid) == currentUser.id){

        todoArray.map(function(todo) {
            var tableCell = tableCellTemplate.cloneNode(true);
            console.log(todo);
            $('#todo', tableCell).text(todo.get('todo'));
            $('#name', tableCell).text(todo.get('name'));
            $('#number', tableCell).text(todo.get('number'));
            $('#seibetu', tableCell).text(todo.get('seibetu'));
            $('#gakubu', tableCell).text(todo.get('gakubu'));
            $('#gakka', tableCell).text(todo.get('gakka'));
            $('#syussinn', tableCell).text(todo.get('syussinn'));
            // $('#fileName', tableCell).text(todo.get('fileName'));
            $('#fileName', tableCell).attr('src',todo.get('fileName'));


            return tableCell;
        }).forEach(function(tableCell) {
            fragment.appendChild(tableCell);
        });


// }



        $('.table-body').empty().append(fragment);

        hideSpinner();
    }
};

// var currentUser = NCMB.User.current();
// console.log(currentUser);
// $('#sub').on('click',function(){
//         var pupu = $('#score').val();
//         console.log(pupu);
//     });

// function onButtonClick() {
//          var score = document.forms.id_form1.score.value;
//          var playerName = document.forms.id_form1.playerName.value;
//          console.log(iii);
//          console.log(ooo);
//           //target.innerText = document.id_form1.id_textBox1.value;//これでもOK
//         }

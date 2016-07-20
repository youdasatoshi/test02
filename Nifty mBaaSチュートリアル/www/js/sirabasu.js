
var TOUKOU = NCMB.Object.extend('toukou');

var currentUser = NCMB.User.current();
if (currentUser) {
    console.log("ログイン中のユーザー: " + currentUser.get("userName"));
} else {
    console.log("未ログインまたは取得に失敗");
}

var TOUKOUListController = {

    init : function() {
        $(function() {
            TOUKOUListController.prepare();
        });
    },

    prepare : function() {
        $('#add-todo').on('tappable-tap', function() {
            TOUKOUListController.add();
        });

        $('#back').on('tappable-tap', function() {
            location.href = 'index.html';
        });

        TOUKOUListController.refresh();

    },



    refresh : function() {

        showSpinner();

        var query = new NCMB.Query(TOUKOU);
        var userid = currentUser.id;
        console.log(userid);
        query.find({
            success : function(results) {
                TOUKOUListController.render(results);
            },
            error : function(error) {
                console.log(JSON.stringify(arguments));
            }
        });
    },

    render : function(toukouArray) {
        var tableCellTemplate = $('#table-cell-template')[0];
        var fragment = document.createDocumentFragment();




        toukouArray.map(function(toukou) {
            var tableCell = tableCellTemplate.cloneNode(true);

            $('#objectid', tableCell).text(toukou.id);
            $('#currentid', tableCell).text(toukou.get('currentid'));
            $('#date', tableCell).text(toukou.get('date'));
            $('#time', tableCell).text(toukou.get('time'));
            $('#place', tableCell).text(toukou.get('place'));
            $('#seigen', tableCell).text(toukou.get('seigen'));
            $('#freeform', tableCell).text(toukou.get('freeform'));
            $('#commentid', tableCell).text(toukou.get('commentid'));
            $('#syousai', tableCell).prop('href', 'toukousyousai.html?id='+toukou.id);
            console.log(toukou.id,$('#syousai', tableCell));
            // $('#fileName', tableCell).text(todo.get('fileName'));
            // $('#fileName', tableCell).attr('src',todo.get('fileName'));


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

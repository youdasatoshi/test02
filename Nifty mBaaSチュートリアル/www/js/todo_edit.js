
var TODO = NCMB.Object.extend('TODO');

var currentUser = NCMB.User.current();
if (currentUser) {
    console.log("ログイン中のユーザー: " + currentUser.get("userName"));
} else {
    console.log("未ログインまたは取得に失敗");
}

var TODOEditController = {

    init : function() {
        console.log(location.search);
        var id = location.search.slice(4);
        console.log(id);
        TODOEditController.load(id);
        $(function() {
            TODOEditController.prepare();
        });
    },

    prepare : function() {
      $('#todoedit').click(function(){
        console.log("aaaaa");
        TODOEditController.edit();
      });
    },

    currentItem : null,

    load : function(id) {

            var query = new NCMB.Query(TODO);
            query.equalTo('objectId',id).find({
                success : function(results) {

                  results.map(function(todo) {
                    TODOEditController.currentItem = todo;
                      $('#todo').val(todo.get('todo'));
                  })

                },
                error : function(error) {
                    console.log(JSON.stringify(arguments));
                }
            });

    },

    edit : function() {
      console.log(TODOEditController.currentItem.get('name'));
      TODOEditController.currentItem.set('todo', $("#todo").val());
      TODOEditController.currentItem.save().then(function(){
        location.href = 'todo.html';
      });
    }


};

// TODO.equalTo("currentid", currentUser.id)
//          .fetchAll()
//          .then(function(results){
//            var tableCell = tableCellTemplate.cloneNode(true);
//            console.log(todo);
//            $('#todo', tableCell).text(todo.get('todo'));
//            $('#name', tableCell).text(todo.get('name'));
//            $('#number', tableCell).text(todo.get('number'));
//            $('#seibetu', tableCell).text(todo.get('seibetu'));
//            $('#gakubu', tableCell).text(todo.get('gakubu'));
//            $('#gakka', tableCell).text(todo.get('gakka'));
//            $('#syussinn', tableCell).text(todo.get('syussinn'));
//            // $('#fileName', tableCell).text(todo.get('fileName'));
//            $('#fileName', tableCell).attr('src',todo.get('fileName'));
//
//            return tableCell;
//
//           }).forEach(function(tableCell) {
//               fragment.appendChild(tableCell);
//           });


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

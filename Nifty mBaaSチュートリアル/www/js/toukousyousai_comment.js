
var COMMENT = NCMB.Object.extend('comment');

var currentUser = NCMB.User.current();
if (currentUser) {
    console.log("ログイン中のユーザー: " + currentUser.get("userName"));
} else {
    console.log("未ログインまたは取得に失敗");
}

console.log(location.search);
var toukouid = location.search.slice(4);

var COMMENTListController = {

    init : function() {
      // console.log(location.search);
      // var toukouid = location.search.slice(4);
      // TOUKOUListController.load(toukouid);
      // console.log(toukouid);
      $(function() {
        COMMENTListController.prepare();
      });
    },

    prepare : function() {
        $('#add-comment').on('tappable-tap', function() {
            COMMENTListController.add();
        });

        $('#back').on('tappable-tap', function() {
            location.href = 'index.html';
        });

        COMMENTListController.refresh();

    },

    // currentItem : null,

    add : function() {

        var comment = document.forms.id_form1.comment.value;

        var toukouidhaha = location.search.slice(4);

            new COMMENT().save({
                content : comment,
                toukouid : toukouidhaha,
                currentid : currentUser.id
            }, {
                success : function() {
                    alert("TODO追加できましたyo-");
                    COMMENTListController.refresh();
                },
                error : function() {
                    alert("エラーがおきました:");
                }
            });

    },

    refresh : function() {

        showSpinner();

        var query = new NCMB.Query(COMMENT);
        query.equalTo('toukouid',toukouid).find({
          success : function(results) {
            COMMENTListController.render(results);
          },
          error : function(error) {
              console.log(JSON.stringify(arguments));
          }
      });
    },

    render : function(commentArray) {
        var tableCellTemplate = $('#table-cell-template')[0];
        var fragment = document.createDocumentFragment();


        commentArray.map(function(comment) {
            var tableCell = tableCellTemplate.cloneNode(true);

            $('#comment', tableCell).text(comment.get('content'));

            return tableCell;
        }).forEach(function(tableCell) {
            fragment.appendChild(tableCell);
        });

        $('.table-body').empty().append(fragment);

        hideSpinner();
    }


};

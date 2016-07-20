
var TOUKOU = NCMB.Object.extend('toukou');

var currentUser = NCMB.User.current();
if (currentUser) {
    console.log("ログイン中のユーザー: " + currentUser.get("userName"));
} else {
    console.log("未ログインまたは取得に失敗");
}



var TOUKOUListController = {

    init : function() {
      console.log(location.search);
      var toukouid = location.search.slice(4);
      TOUKOUListController.load(toukouid);
      $(function() {
        TOUKOUListController.prepare();
      });
    },

    prepare : function() {
        // $('#add-todo').on('tappable-tap', function() {
        //     TODOListController.add();
        // });

        $('#back').on('tappable-tap', function() {
            location.href = 'index.html';
        });

        $('#matching').on('click',function(){
          console.log("OK");
        })
        // TOUKOUListController.refresh();

    },

    currentItem : null,

    // add : function() {
    //
    //     var hiduke = document.forms.id_form1.hiduke.value;
    //     var jikan = document.forms.id_form1.jikan.value;
    //     var seibetu = document.forms.id_form1.seibetu.value;
    //     var gakubu = document.forms.id_form1.gakubu.value;
    //     var gakka = document.forms.id_form1.gakka.value;
    //     var syussinn = document.forms.id_form1.syussinn.value;
    //
    //         new TODO().save({
    //             name : name,
    //             number : number,
    //             seibetu : seibetu,
    //             gakubu : gakubu,
    //             gakka : gakka,
    //             syussinn : syussinn,
    //             currentid : currentUser.id
    //         }, {
    //             success : function() {
    //                 alert("TODO追加できましたyo-");
    //                 TODOListController.refresh();
    //             },
    //             error : function() {
    //                 alert("エラーがおきました:");
    //             }
    //         });
    //
    // },

    load : function(toukouid) {

        var query = new NCMB.Query(TOUKOU);
        query.equalTo('objectId',toukouid).find({
          success : function(results) {
            results.map(function(toukou) {
              TOUKOUListController.currentItem = toukou;
              $('#currentid').text(toukou.get('currentid'));
              $('#state').text(toukou.get('state'));
              $('#date').text(toukou.get('date'));
              $('#time').text(toukou.get('time'));
              $('#place').text(toukou.get('place'));
              $('#seigen').text(toukou.get('seigen'));
              $('#freeform').text(toukou.get('freeform'));
              $('#commentid').text(toukou.get('commentid'));
            })
          },
          error : function(error) {
              console.log(JSON.stringify(arguments));
          }
      });
    }


};
console.log("ko");

// var COMMENT = NCMB.Object.extend('comment');
//
// var COMMENTListController = {
//
//     init : function() {
//       console.log(location.search);
//       var id = location.search.slice(4);
//
//       TOUKOUListController.load(toukouid);
//       $(function() {
//         TOUKOUListController.prepare();
//       });
//     },
//
//     prepare : function() {
//         // $('#add-todo').on('tappable-tap', function() {
//         //     TODOListController.add();
//         // });
//
//         $('#back').on('tappable-tap', function() {
//             location.href = 'index.html';
//         });
//
//         $('#matching').click(function(){
//           console.log("okok");
//         });
// console.log("ko");
//
//         // TOUKOUListController.refresh();
//
//     },
//
//     currentItem : null,
//
//     // add : function() {
//     //
//     //     var hiduke = document.forms.id_form1.hiduke.value;
//     //     var jikan = document.forms.id_form1.jikan.value;
//     //     var seibetu = document.forms.id_form1.seibetu.value;
//     //     var gakubu = document.forms.id_form1.gakubu.value;
//     //     var gakka = document.forms.id_form1.gakka.value;
//     //     var syussinn = document.forms.id_form1.syussinn.value;
//     //
//     //         new TODO().save({
//     //             name : name,
//     //             number : number,
//     //             seibetu : seibetu,
//     //             gakubu : gakubu,
//     //             gakka : gakka,
//     //             syussinn : syussinn,
//     //             currentid : currentUser.id
//     //         }, {
//     //             success : function() {
//     //                 alert("TODO追加できましたyo-");
//     //                 TODOListController.refresh();
//     //             },
//     //             error : function() {
//     //                 alert("エラーがおきました:");
//     //             }
//     //         });
//     //
//     // },
//
//     load : function(toukouid) {
//
//         var query = new NCMB.Query(TOUKOU);
//         query.equalTo('objectId',toukouid).find({
//           success : function(results) {
//             results.map(function(toukou) {
//               TOUKOUListController.currentItem = toukou;
//               $('#currentid').text(toukou.get('currentid'));
//               $('#date').text(toukou.get('date'));
//               $('#time').text(toukou.get('time'));
//               $('#place').text(toukou.get('place'));
//               $('#seigen').text(toukou.get('seigen'));
//               $('#freeform').text(toukou.get('freeform'));
//               $('#commentid').text(toukou.get('commentid'));
//             })
//           },
//           error : function(error) {
//               console.log(JSON.stringify(arguments));
//           }
//       });
//     }
// };

//Contact
$('#working_form').submit(function() {

    var action = $(this).attr('action');

    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.gif_loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});
// $(function() {
//     $('button[type=submit]').on('click', function() {
  
//       // Formに入力されたデータを取得
//       var name = $('#name').val();
//       var email = $('#email').val();
//       var body = $('#comments').val();
  
//       // 連想配列化
//       var postData = {"name":name, "email":email, "body":body};
  
//       // POSTで送信
//       $.post(
//         "contact.php",
//         postData,
//       );
  
//       // 送信完了後の処理（送信完了のメッセージ表示）
//       $('.send-email').html('<p>送信完了しました。お問い合わせありがとうございます。</p>');
//       $('#name').val("");
//       $('#email').val("");
//       $('#comments').val("");
//     });
//   });



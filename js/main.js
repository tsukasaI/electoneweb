    // menu
    $(function () {
        $('.menu').hover(function () {
          // menu has 'active'?
          // when hoverd
          $(this).css('background-color', '#000000').css('color', '#ffffff');
        }, function () {
          // when not hoverd
          $(this).css('background-color', '#ffffff').css('color', '#000000');
        });
      })
  
      $(function () {
        $('.active').hover(function () {
  
        }, function () {
          $(this).css('background-color', '#000000').css('color', '#ffffff');
        })
      })
      
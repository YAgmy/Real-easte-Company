// Synce Navbar links with section
$(window).scroll(function() {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top -300) {
            $('.navbar a').removeClass('active')
            var sectionID = $(this).attr('id');
            $('.navbar li a[data-scroll= "' + sectionID + '"]').addClass('active');
        }
    })
})


// adjust card height

var maxHeight = 0;
$('.services .servic').each( function () {
    if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
    }
});
    $(".services .servic").height(maxHeight);


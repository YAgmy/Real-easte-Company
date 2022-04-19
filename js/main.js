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

// img gallary
        let nuofthum = $('.thumbnails').children().length,
        margin = '0.5',
        totalMargin = (nuofthum - 1) * margin,
        thumbnailsWidth = (100 - totalMargin ) / nuofthum

    $('.thumbnails img').css({
        width: thumbnailsWidth + '%',
        marginRight: totalMargin = 'px'
    })

$('.thumbnails img').on('click', function () {
    $(this).addClass('act').siblings().removeClass('act');

    $(".main-img img").attr('src', $(this).attr('src'));
});

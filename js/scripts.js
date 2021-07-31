$(document).ready(function () {
    $('#mycarousel').carousel({interval: 1500});

    $('#carouselButton').click(function () {
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#loginModalButton').click(function () {
        $('#loginModal').modal('show');
    });

    $('#reserveModalButton').click(function () {
        $('#reserveModal').modal('show');
    });
})

/* $('#carouselPause').click(function () {
    $('#mycarousel').carousel('pause');
});
$('#carouselPlay').click(function () {
    $('#mycarousel').carousel('cycle');
});

<script>
$(document).ready(function() {
    $('[data-toggle = "tooltip"]').tooltip();
})
</script> 

<a href = "#reserveForm"  role="button" class="btn nav-link btm-block btn-warning" data-toggle = "tooltip" data-html = "true" title = "Or Call us at <br><strong>+852 12345678</strong>" data-placement = "bottom">Reserve Table</a>
*/
// slide history

$(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
    var slideCount = $('#slide .slide-block .slide-block-image').length;
    var slideWidth = $('#slide .slide-block .slide-block-image');
    var slideHeight = $('#slide .slide-block .slide-block-image');
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slide').css({ width: slideWidth, height: slideHeight });
    
    $('#slide .slide-block').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slide .slide-block .slide-block-image:last-child').prependTo('#slide .slide-block');

    function moveLeft() {
        $('#slide .slide-block').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slide .slide-block img:last-child').prependTo('#slide .slide-block');
            $('#slide .slide-block').css('left', '');
        });
    };

    function moveRight() {
        $('#slide .slide-block').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slide .slide-block .slide-block-image:first-child').appendTo('#slide .slide-block');
            $('#slide .slide-block').css('left', '');
        });
    };

    $('.slide-block-arrowRight').click(function () {
        moveLeft();
    });

    $('.slide-block-arrowLeft').click(function () {
        moveRight();
    });

});   

// menu mobile

$(function(){
	
	$('.navbarMobile-text').click(function(){
		$('.navbarMobile-menu').css('display','flex');
	});
	$('.botaoSair').click(function(){
		$('.navbarMobile-menu').css('display','none');
	});
	$('.contatos').click(function(){
		$('.navbarMobile-menu').css('display','none');
    });
});

// button header

$(function(){      
    $('.close').click(function(){
        $('form').css('display','none');
    });
    $('.banner-contact').click(function(){
        $('form').css('display','block');
    });
    $('.close').click(function(){
        $('form').css('display','none');
    });
    $('.close').clickout(function(){
        $('.banner-contact').css('display','flex');
    });
    $('.banner-contact').click(function(){
        $('.banner-contact').css('display','none');
    }); 
})

// convert

$( document ).ready(function() {
    console.log( "ready!" );

    var moedaDe = $( "#from option:selected" ).val()
    var moedaPara = $( "#to option:selected" ).val()

    $('#from').on('change', function (){
        moedaDe = $(this).val()    
    })

    $('#to').on('change', function (){
        moedaPara = $(this).val() 
    })

    $('#coin').on('change', function (){
        $.get( "https://free.currconv.com/api/v7/convert?q=" + moedaDe + "_" + moedaPara + "&compact=y&apiKey=87199215beb65d0ded9c").done(function( data ) {
          $('#result').val('.....')
           var moedaDePara =  moedaDe + "_" + moedaPara;
    var valorAtualMoeda = data[moedaDePara].val.toFixed(2);
    var valorConvertido = $('#coin').val() * valorAtualMoeda
	  $('#result').val(valorConvertido)
        });
    })

});





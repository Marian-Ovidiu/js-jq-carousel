function clickNext(){
  if($('img.active').hasClass('last')){
    $('img.active, i.active').removeClass('active');
    $('img.first, i.first').addClass('active');
  } else {
    $('img.active, i.active').removeClass('active').next().addClass('active');
  };
};

function clickPrev(){
  if($('img.active').hasClass('first')){
    $('img.active, i.active').removeClass('active');
    $('img.last, i.last').addClass('active');
  } else {
    $('img.active, i.active').removeClass('active').prev().addClass('active');
  };
};


$(document).ready(function() {

  // ridimensiono immagini
  $('.images > img').css('width', '800px');


  // richiamo funzioni sopra per gestire le slide dalle frecce sul display
  $('.next').click(function(){
    clickNext();
  });
  $('.prev').click(function(){
    clickPrev();
  });


  // gestisco le slide cliccando sui pallini
  $('.nav i').click(function(){
    $('.nav i').removeClass('active');
    $(this).addClass('active');
    var indeImg = $('.nav i').index(this) + 1;
    $('img.active').removeClass('active');
    $('img:nth-child(' + indeImg + ')').addClass('active');
  })


  // gestisco le slide dalle frecce sulla tastiera
  $(document).keydown(function(e){
    if(e.which === 39){
      clickNext();
    }
    if(e.which === 37){
      clickPrev();
    }
  })

});

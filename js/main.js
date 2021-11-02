$(function(){



	if ($('.table').length) {
        writeTable();
        $(document).on('click', '.quantity button', function(){
            let delta = 1;
            if (this.innerHTML == '-') {
                delta = -1;
            }
            let id = +$(this).parents('tr').find('.id').prop('id').slice(6);
            for (item of tovardata) {
                if (item.id == id) {
                    item.qty += delta;
                    if (item.qty <= 0) removeTovar(id);
                   break;
                }
            }
			 writeTable();
        })
        $(document).on('click', '.delete button', function(){
            let id = +$(this).parents('tr').find('.id').prop('id').slice(6);
            if (removeTovar(id)) writeTable();
        })
		$('#date').focus(makeCalendar);
        $('.form button').click(function(){
            makeOrder();
        })
    }
    
    if ($('.gallery').length) {
        galstep = $('.smallimage').width(); 
        galgap = parseInt($('.gallery_rail').css('gap')); 
      
        $('.g_left').click(function(){
            galSlide('left'); 
        });
        $('.g_right').click(function(){
            galSlide('right');
        });
        $('.smallimage img').click(function(){
            $('.bigimage img').prop('src', $(this).prop('src').split('min').join('big'));
        });
        $('.bigimage img').click(function(){
            lightbox(this);
        });
    }
    
	if ($('.catalog').length) {
        $('.accordeon, .accordeon .level2').hide();
		$('.mom').click(function(e){
          const $target = $(e.target);
          if ($target.hasClass('mom') || $target.hasClass('title')) {
            $(this).toggleClass('open');
            $('.accordeon').toggle('slow');
          }
        })
		$('.accordeon .level1 > .menupoint').click(function(){
            if ($(this).parent().find('div').length && !$(this).parent().hasClass('open')) {
                $('.level1.open').removeClass('open').find('.level2').hide('slow');
                $(this).parent().addClass('open').find('.level2').show('slow');
                return false;
            }
        });
	}
		
		
    let menuElem = document.querySelectorAll('.mom');
	let titleElem = document.querySelectorAll('.title');
		titleElem.onclick = function() {
		  menuElem.classList.toggle('open');
		}
		
	if ($('.retaimer').length) {
        retimer();
        setInterval(retimer, 500);
	}
	
	if ($('.slider_block').length) {
		slideFlag = false;
		$('.slider_block.curr').each(function(i) {
			const $item = $(this);
			$item.css('left', $item.width() * i + 'px');
		});
		setInterval(function() {
			sliderRun('toleft');
		}, 4000);
		$('.slider .fa-angle-left').click(function() {
			sliderRun('toright');
		});
		$('.slider .fa-angle-right').click(function() {
			sliderRun('toleft');
		});
	}
	
})




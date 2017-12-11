 $(function() {

        var btn_movil = $('#nav-mobile'),
            menu = $('#menu').find('ul');

        // Al dar click agregar/quitar clases que permiten el despliegue del menú
        btn_movil.on('click', function (e) {
            e.preventDefault();

            var el = $(this);

            el.toggleClass('nav-active');
            menu.toggleClass('open-menu');
        })

    });

$(document).ready(function() {                            
                       
    Tweene.defaultTimeUnit = 's';
    var $rocket = $('.rocket'),
        tween = null, 
        speed = 1;
        
    Tweene.defaultDriver = 'gsap';
    
    Tweene.set($rocket, {transformOrigin: '140px 25px'});
    
    function animate(driver)
    {
        if(tween)
        {
            tween.pause();
        }
        
        tween = Tweene.get($rocket, driver)
            .from({rotate: 0})
            .to({rotate: 360})
            .duration(8)
            .speed(speed)
            .easing('linear')
            .loops(-1)
            .play();
    };
    
    

    $('.driverControls li').on('click', function(event){
        var $this = $(this);
        if(!$this.is('.current'))
        {
            var newDriver = $this.data('driver');
            $this.parent().find('.current').removeClass('current');
            $this.addClass('current');
            animate(newDriver);
        }
        event.stopPropagation();
        event.preventDefault();
    });

    $('.speedControls li').on('click', function(event){
        var $this = $(this);
        if(!$this.is('.current'))
        {
            speed = $this.data('speed');
            $this.parent().find('.current').removeClass('current');
            $this.addClass('current');
            tween.speed(speed);
        }
        event.stopPropagation();
        event.preventDefault();
    });
        
    animate('gsap');

});



$(document).ready(function(){   
    $('.ir-a').click(function() {
        var targetOffset= $("."+this.id).offset().top;
        $('html,body').stop().animate({scrollTop: targetOffset}, 3000);           
    });
  });

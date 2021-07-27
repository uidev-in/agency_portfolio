/*------------------------------------------------
Index All JS 
-----------------------
        - Wow Active
        - Feature Icon Activation
        - Youtub Popup 
        - Slick Activation            
        - Paralax Window
        - LightBox
        - Parallax Activation
        - Masonry Activation
        - ScrollUp Activation
        - Mobile Menu Activation
        - Smoth Scroll
--------------------------------------------------*/

(function (window, document, $, undefined) {
    'use strict';

    var imJs = {

        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
            
        },

        methods: function (e) {
            imJs.featherAtcivation();
            imJs.wowActive();
            imJs.slickActivation();
            imJs.mesonaryActivation();
            imJs.mobileMenuActive();
            imJs.stickyHeader();
        },


        featherAtcivation: function () {
            feather.replace()
        },

        wowActive: function () {
            new WOW().init();
        },

        slickActivation: function () {
            function slickactivation() {
                // Check if element exists
                $.fn.elExists = function () {
                    return this.length > 0;
                };
                // Variables
                var $html = $('html'),
                    $elementCarousel = $('.rn-slick-activation');
                if ($elementCarousel.elExists()) {
                    var slickInstances = [];
                    $elementCarousel.each(function (index, element) {
                        var $this = $(this);
                        // Carousel Options
                        var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : '';
                        var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween) : 0,
                            $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl) : 0,
                            $isCustomArrow = $options.isCustomArrow ? $options.isCustomArrow : false,
                            $customPrev = $isCustomArrow === true ? ($options.customPrev ? $options.customPrev : '') : '',
                            $customNext = $isCustomArrow === true ? ($options.customNext ? $options.customNext : '') : '',
                            $vertical = $options.vertical ? $options.vertical : false,
                            $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
                            $asNavFor = $options.asNavFor ? $options.asNavFor : '',
                            $fade = $options.fade ? $options.fade : false,
                            $autoplay = $options.autoplay ? $options.autoplay : false,
                            $autoplaySpeed = $options.autoplaySpeed ? $options.autoplaySpeed : 5000,
                            $swipe = $options.swipe ? $options.swipe : false,
                            $adaptiveHeight = $options.adaptiveHeight ? $options.adaptiveHeight : false,
        
                            $arrows = $options.arrows ? $options.arrows : false,
                            $dots = $options.dots ? $options.dots : false,
                            $infinite = $options.infinite ? $options.infinite : false,
                            $centerMode = $options.centerMode ? $options.centerMode : false,
                            $centerPadding = $options.centerPadding ? $options.centerPadding : '',
                            $speed = $options.speed ? parseInt($options.speed) : 1000,
                            $prevArrow = $arrows === true ? ($options.prevArrow ? '<span class="' + $options.prevArrow.buttonClass + '"><i class="' + $options.prevArrow.iconClass + '"></i></span>' : '<button class="slick-prev">previous</span>') : '',
                            $nextArrow = $arrows === true ? ($options.nextArrow ? '<span class="' + $options.nextArrow.buttonClass + '"><i class="' + $options.nextArrow.iconClass + '"></i></span>' : '<button class="slick-next">next</span>') : '',
                            $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
                            $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;
        
                        /*Responsive Variable, Array & Loops*/
                        var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
                            $responsiveSettingLength = $responsiveSetting.length,
                            $responsiveArray = [];
                        for (var i = 0; i < $responsiveSettingLength; i++) {
                            $responsiveArray[i] = $responsiveSetting[i];
        
                        }
        
                        // Adding Class to instances
                        $this.addClass('slick-carousel-' + index);
                        $this.parent().find('.slick-dots').addClass('dots-' + index);
                        $this.parent().find('.slick-btn').addClass('btn-' + index);
        
                        if ($spaceBetween != 0) {
                            $this.addClass('slick-gutter-' + $spaceBetween);
                        }
                        if ($spaceBetween_xl != 0) {
                            $this.addClass('slick-gutter-xl-' + $spaceBetween_xl);
                        }
                        $this.slick({
                            slidesToShow: $slidesToShow,
                            slidesToScroll: $slidesToScroll,
                            asNavFor: $asNavFor,
                            autoplay: $autoplay,
                            autoplaySpeed: $autoplaySpeed,
                            speed: $speed,
                            infinite: $infinite,
                            arrows: $arrows,
                            dots: $dots,
                            vertical: $vertical,
                            focusOnSelect: $focusOnSelect,
                            centerMode: $centerMode,
                            centerPadding: $centerPadding,
                            fade: $fade,
                            adaptiveHeight: $adaptiveHeight,
                            prevArrow: $prevArrow,
                            nextArrow: $nextArrow,
                            responsive: $responsiveArray,
                        });
        
                        if ($isCustomArrow === true) {
                            $($customPrev).on('click', function () {
                                $this.slick('slickPrev');
                            });
                            $($customNext).on('click', function () {
                                $this.slick('slickNext');
                            });
                        }
                    });
        
                    // Updating the sliders in tab
                    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                        $elementCarousel.slick('setPosition');
                    });
                }
            }
            slickactivation()
        },

        mesonaryActivation: function(){
            $('.rn-masonary-wrapper').imagesLoaded(function () {
                // filter items on button click
                $('.messonry-button').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                // init Isotope
                var $grid = $('.mesonry-list').isotope({
                    itemSelector: '.masonry_item',
                    percentPosition: true,
                    transitionDuration: '0.7s',
                    layoutMode: 'fitRows',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: 1,
                    }
                });
            });
            $('.messonry-button button').on('click', function (event) {
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                event.preventDefault();
            });
        },

        mobileMenuActive: function (e) {
            var screenWidth = imJs._window.width();
            if (screenWidth < 992) {
                $('.humberger-menu').on('click', function (e) {
                    e.preventDefault();
                    $('.rn-popup-mobile-menu').addClass('menu-open');
                    $('html').css({
                        overflow: "hidden"
                    })
                });
    
                $('.close-menu').on('click', function (e) {
                    e.preventDefault();
                    $('.rn-popup-mobile-menu').removeClass('menu-open');
                    $('.has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                    $('html').css({
                        overflow: ""
                    })
                });
    
                $('.has-droupdown > a').on('click', function (e) {
                    e.preventDefault();
                    $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                    $(this).toggleClass('open');
                    $('html').css({
                        overflow: ""
                    })
                });
    
                $('.nav-pills .nav-link').on('click', function (e) {
                    $('.rn-popup-mobile-menu').removeClass('menu-open');
                    $('html').css({
                        overflow: ""
                    })
                })
            }
        },

        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                }else{
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

    }
    imJs.m();
    
})(window, document, jQuery)








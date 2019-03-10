var counterOne = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            setTimeout(
                function() {
                    $('.conterOne').each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 2000,
                            // easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                        return;
                    });
                },
                0
            );
           
        }
    };
})();

$('.waypointOne').waypoint(function (direction) {
    if(direction === "down") {
        this.element.classList.remove("fadeOutUp");
        this.element.classList.add("fadeInUp");
        counterOne(); // "do something" happens
    } else if(direction === "up") {
        this.element.classList.remove("fadeInUp");
        this.element.classList.add("fadeOutUp");
    }   
}, {
    offset: '75%'
});

$('.waypointTwo').waypoint(function (direction) {
    if(direction === "down") {
        this.element.classList.remove("fadeOutUp");
        this.element.classList.add("fadeInUp");
        counterOne(); // "do something" happens
    } else if(direction === "up") {
        this.element.classList.remove("fadeInUp");
        this.element.classList.add("fadeOutUp");
    }   
}, {
    offset: '75%'
})

$('.waypointThree').waypoint(function (direction) {
    if(direction === "down") {
        this.element.classList.remove("fadeOut");
        this.element.classList.add("fadeIn");
        counterOne(); // "do something" happens
    } else if(direction === "up") {
        this.element.classList.remove("fadeIn");
        this.element.classList.add("fadeOut");
    }   
}, {
    offset: '75%'
})


setTimeout(function(){
    $('#loading-screen').fadeOut();
}, 5000);

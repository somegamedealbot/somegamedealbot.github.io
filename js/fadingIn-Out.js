var scrolledPast = false;

console.log(1/2 * $('#target').height());

// when scrolling
$(document).on('scroll', function(){

    // position of the scrolling is lower than the targetSection position
    if ($(this).scrollTop() >= $('#targetSection').position().top - 1/3 * $('#target').height() && !scrolledPast){
        console.log("Objective Reached.")
        scrolledPast = true;
        $("#target").animate({opacity: 1}, 150, "linear");
    }
    
    // resets
    else if (($(this).scrollTop() < $('#targetSection').position().top - 1/3 * $('#target').height() && scrolledPast)){
            //$(this).scrollTop() > $('#targetSection').position().top - 100){
        console.log("reset.");
        scrolledPast = false;
        $("#target").animate({opacity: 0}, 150, "linear");
    };
        
})

$('img').click(function(){
    console.log("clicked.")
    $('#target').animate({
        opacity: 1,
    }, 100);
    scrolledPast = false;
})
import $ from 'jquery'

export const onScrollTo = (targetId, delay=0, callBack=f=>f) => {
    setTimeout((() => {
        $('html, body').animate({
            scrollTop: $(targetId).offset().top + 60
        }, 500)
    }), delay)
    
    callBack()
}

let lastId;

$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()
   
   const $links = $('.menu a')

   const $scrollItems = $links.map(function() {
        var $scrollItem = $($(this).attr("href").replace('/',''))
        if ($scrollItem.length) { return $scrollItem; }
    })

   // Get id of current link
   var $filteredScrollItems = $scrollItems.map(function() {
     if ($(this).offset().top < fromTop + 20)
       return this;
   })

   $filteredScrollItems = $filteredScrollItems[$filteredScrollItems.length-1];
   var currentId = $filteredScrollItems && $filteredScrollItems.length ? $filteredScrollItems[0].id : "";
   
   if (lastId !== currentId) {
       lastId = currentId;
       // Set/remove active class
       $links.removeClass('active')
       $links.filter("[href='/#"+currentId+"']").addClass("active");
   }                   
});
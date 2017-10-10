import $ from 'jquery'

let lastId;

// spy scroll to toggle active class on nav link
$(window).scroll(function () {
   // Get container scroll position
   const fromTop = $(this).scrollTop()
   
   const $links = $('.menu a')

   const $scrollItems = $links.map(function () {
        const $scrollItem = $($(this).attr('href').replace('/', ''))
        return $scrollItem
    })

   // Get id of current link
   let $filteredScrollItems = $scrollItems.map(function () {
     if ($(this).offset().top < fromTop + 20) {
        return this
     }
     return null
   })

   $filteredScrollItems = $filteredScrollItems[$filteredScrollItems.length - 1];
   const currentId = $filteredScrollItems && $filteredScrollItems.length ? $filteredScrollItems[0].id : ''
   
   if (lastId !== currentId) {
       lastId = currentId;
       // Set/remove active class
       $links.not("a[href='/login']").removeClass('active')
       $links.filter(`[href='/#${currentId}']`).addClass('active')
   }                   
})
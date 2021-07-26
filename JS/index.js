window.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicMainBullets: true,
        },

    });

    document.querySelector('.burger').addEventListener('click', function () {
        document.querySelector('.header__menu').classList.add('is_active')
        document.querySelector('.burger_exit').classList.add('on')

    });
    
    // document.querySelector('.burger').addEventListener('click', function () {
    //     document.querySelector('.burger_exit').classList.add('on')

    // });
    
    document.querySelector('.burger_exit').addEventListener('click', function () {
        document.querySelector('.burger_exit').classList.remove('on')
        document.querySelector('.header__menu').classList.remove('is_active')

    }); 

    $(function () {
        $("#accordion").accordion({
         heightStyle: "content",
         collapsible: true,
         active: false
        });
    });

    document.querySelectorAll('.work__list_btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener ('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.work__wrap').forEach(function(tabContent) {
                tabContent.classList.remove('work__wrap__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('work__wrap__active')
        })
    })
})


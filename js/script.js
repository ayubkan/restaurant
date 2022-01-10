window.addEventListener('DOMContentLoaded', function () {
    // Переменные 
    const tabs = document.querySelectorAll('.tabheader__item'), // Это header стиль питание кнопка
          tabsParent = document.querySelector('.tabheader__items'), // Это папа header стиль питания
          tabContent = document.querySelectorAll('.tabcontent'); // Это Меню еды

    function hideTabContent() {
        tabContent.forEach (item =>{
            // Добавления класса для слайдера
            item.classList.add('none')
            item.classList.remove('show', 'fade')
        })
    tabs.forEach( item => {
        // Это функция кнопка когда кликнуть на меню стиль питания будет удалена 
        item.classList.remove('tabheader__item_active')
    })
}
        function showTabContent (i = 0) {
            tabContent[i].classList.add('show','fade')
            tabContent[i].classList.remove('none')
            tabs[i].classList.add('tabheader__item_active')
        }
      
        hideTabContent()
        showTabContent()

        // Главный функция это функция как-будто мама кнопка

        tabsParent.addEventListener('click',(event) => {
            if (event.target && event.target.classList.contains('tabheader__item')) {
                // xar bitta knopkani ozimizga ovolyabmiza
                tabs.forEach ((item, i) => {
                    if (event.target == item) {
                        hideTabContent()
                        showTabContent(i)
                    }
                })
            }
        })
    
})
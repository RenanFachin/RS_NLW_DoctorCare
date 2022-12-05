const navigation = document.querySelector('#navigation')

function onScroll() {
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openAndCloseMenu() {
    const body = document.querySelector('body')

    if(body.classList == ''){
        body.classList.add('menu-expanded')
    } else {
        body.classList.remove('menu-expanded')
    }
}
window.addEventListener('scroll', onScroll)


const navigation = document.querySelector('#navigation')
const backToTopButton = document.querySelector("#backToTopButton")

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 1400){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
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

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`
    );
window.addEventListener('scroll', onScroll)


const navigation = document.getElementById('navigation')
const backToTopButton = document.getElementById("backToTopButton")
const home = document.getElementById('home')
const services = document.getElementById('services')
const about = document.getElementById('about')

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section){

    // Pegando a altura total da viewpart visivel (innerHeight)
    const targetLine = scrollY + (innerHeight / 2)

    // Verificar se a seção passou da linha
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //  Verificando se a base está abaixo da targetLine
    const sectionsEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionsEndsAt <= targetLine

    // Limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
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
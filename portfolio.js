
// scroll section
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height =sec.offsetHeight
        let id =sec.getAttribute('id')

        if(top >=offset && top < offset + height){
           // active navbar links
           navLinks.forEach(links =>{
            links.classList.remove('active')
            document.querySelector('header nav a[href*=' + id +']').classList.add('active')
           })
        }
    })
    //sticky header
    let header =document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
}
 tl = gsap.timeline()
 tl.from(".header>a ",{
    y:-100,
    opacity:0,
    duration:0.5,
    // delay:1
 })
 tl.from(".header .navbar",{
    y:-100,
    opacity:0,
    duration:0.7,
    
 })
 tl.from(".home-content h1",{
    x:-200,
    opacity:0,
    duration:0.4,
    // delay:0.5
 })
 tl.from(".home-content h3",{
    x:-200,
    opacity:0,
    duration:0.4,
    // delay:0.5
 })
 tl.from(".home-content p",{
    x:-200,
    opacity:0,
    duration:0.4,
    // delay:0.5
 })
 
 tl.from(".home-content  .btn-box",{
    x:-200,
    opacity:0,
    duration:0.4,
    // delay:0.5
 })
 
 tl.from(".home-sci",{
    x:-200,
    opacity:0,
    duration:0.4,
    // delay:0.5
 })
 
 tl.from(".image",{
    // y:300,
    scale:0,
    opacity:0,
    duration:0.4,
    
 })
 gsap.from(".about .about-content h3",{
    x:300,
    opacity:0,
    duration:0.8,
    // delay:0.5,
    scrollTrigger:{
        trigger:".about .about-content h3",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"bottom 10%"

    }
 })
 
 gsap.from(".about .about-content p",{
    x:-300,
    opacity:0,
    duration:0.8,
    // delay:0.5,
    scrollTrigger:{
        trigger:".about .about-content p",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"bottom 10%"

    }
 })
 
 gsap.from(".skills .skills-column ",{
    y:-150,
    opacity:0,
    duration:0.8,
    // delay:0.5,
    scrollTrigger:{
        trigger:".skills .skills-column ",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"bottom 10%"

    }
 })
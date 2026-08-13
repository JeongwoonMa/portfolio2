gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


const tl_1 = gsap.timeline({
    scrolltrigger: {
        trigger: 'section.about',
        start: "top  20%",
        end: "bottom 80%",
        scrub: true
    }
});

tl_1.from(".about .title-txt",  {
    x: 200,
    opacity: 0,
    duration: 2
})
.from('.about p', {
    x: 200,
    opacity: 0,
    duration: 2
}, '=-1.6')
.from('.about figure', {
    x: 300,
    opacity: 0,
    duration: 2
},'=-1.8')

const tl_2 = gsap.timeline( {
    scrolltrigger: {
        trigger: 'section.second',
        start: "top 0%",
        end:  "bottom 30%",
        scrub: true,
    }
})

tl_2.from('.second .title-txt', {
    x: 300,
    opacity: 0,
    duration: 2,
},"=-1.5")
.from('.second p', {
    x: 300,
    opacity: 0,
    duration: 2
})
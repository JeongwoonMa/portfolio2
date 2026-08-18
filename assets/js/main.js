gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);



window.onload = () => {
    // about
    let titleText = new SplitText(".title", { type: 'chars, words, lines'})
    let chars = titleText.chars;
    
    const tl_About = gsap.timeline({
        scrollTrigger: {
            trigger: 'section#about',
            start: "top 1%",
            bottom: 'bottom 0',
            markers: true,
        }
    })
    tl_About.from(chars, {
        y: '100%',
        stagger: '0.02',
        duration: '1',
        ease: 'back.out',
    })
    .to(chars, {
        opacity: 0,
    },'+=1')
    .from('section#about p', {
        opacity: 0,
    })
}
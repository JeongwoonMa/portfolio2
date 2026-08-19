gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

let splitTxt = new SplitText('.split-title', {type: 'chars, words, lines'});
let titleSplit = splitTxt.chars;

gsap.to('.bg-list .bg-img img', {
    opacity: 0.3,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

const tl_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: 'top 1%',
        end: 'bottom bottom',
    }
})

tl_1.from('.bg-list .bg-img', {
    backgroundColor: '#000000',
    opacity: 0,
    duration: 3,
    
})
.from('.bg-list .bg-moon', {
    y: '-2%',
    opacity: 0
},'-=2')
.from('.bg-list .bg-earth', {
    y: '10%',
    duration: 1.5,
    opacity: 0
},'-=1.9')
.from(titleSplit, {
    opacity: 0,
    stagger: {
        amount: 0.1,
        from: 'random'
    },
    ease: 'back.out',
    repeat: -1,
})

const tl_end = gsap.timeline({
    scrollTrigger: {
        trigger: ''
    }
})



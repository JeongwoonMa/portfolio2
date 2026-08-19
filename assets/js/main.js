gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

let splitTxt = new SplitText(".split-title", { type: "chars, words, lines" });
let titleSplit = splitTxt.chars;

gsap.to(".bg-list .bg-img img", {
    opacity: 0.3,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
});

const tl_1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#intro",
        start: "top 1%",
        end: "bottom bottom",
    },
});
tl_1.from(".bg-list .bg-img", {
    backgroundColor: "#000000",
    opacity: 0,
    duration: 3,
})
    .from(
        ".bg-list .bg-moon",
        {
            y: "-2%",
            opacity: 0,
        },
        "-=2",
    )
    .from(
        ".bg-list .bg-earth",
        {
            y: "10%",
            duration: 1.5,
            opacity: 0,
        },
        "-=1.9",
    )
    .from(titleSplit, {
        y: "50%",
        opacity: 0,
        stagger: 0.2,
        ease: "back.out",
    })
const tl_2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#intro",
        start: "bottom 100%", // #intro 끝날 때 시작
        end: "+=700",
        scrub: true,
        pin: true,
    },
});

tl_2.to("#intro .split-title", {
    scale: 50,
    transformOrigin: "center center",
    opacity: 0,
    duration: 5
})
.to(".bg-list .bg-fade", {
    backgroundColor: "#000",
    duration: 5
},0);

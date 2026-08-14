gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const firstTl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.first",
        start: "top 1%",
        end: "bottom 50%",
    },
    defaults: {
        duration: 2,
        opacity: 0,
        ease: "power2.inOut",
    },
});
firstTl
    .from(".first h2", {
        y: -50,
        duration: 3,
        stagger: 0.1,
    })
    .from(
        ".first p",
        {
            x: -100,
            rotation: 360,
        },
        "-=1.8",
    )
    .from(
        ".first figure",
        {
            scale: 3,
            rotation: 360,
            duration: 1,
        },
        "-=2",
    );

const secondTl = gsap.timeline({
    scrollTrigger: {
        trigger: "section.second",
        start: "top 0%",
        end: "+=2000",
        scrub: true,
        pin: true,
    },
    defaults: {
        opacity: 0,
        ease: "power2.inOut",
    },
});

secondTl
    .from(".second h2", {
        y: 1000,
    })
    .from(".second p", {
        y: -1000,
    })
    .from(".second figure", {});

const thirdTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".third",
        stat: "top 20%",
        end: "+=5000",
        scrub: true,
        pin: true,
    },
    defaults: {
        opacity: 0,
    },
});

thirdTl.from(".third h2", {
    x: 1000,
    duration: 2,
});
thirdTl
    .from(
        ".third p",
        {
            x: -1000,
            duration: 2,
        },
        "-=0.5",
    )
    .fromTo(
        ".third figure",
        {
            scale: 1,
            opacity: 1,
        },
        {
            scale: 500,
            opacity: 1,
            backgroundColor: '#000',
            duration: 30
        },
        "+=3",
    );

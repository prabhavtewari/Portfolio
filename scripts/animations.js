window.onload = function() {
    gsap.timeline()
        .from(".hey", { opacity: 0, y: 40, ease: "back", scale: 0.8, duration: 0.8 })
        .from(".hey1", { opacity: 0, y: 40, ease: "back", scale: 0.8, duration: 0.8 })
        .from(".herocta", { opacity: 0, y: 40, ease: "back", scale: 0.7, duration: 0.4 })



    gsap.to(".heroimg", {
        duration: 3,
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
            trigger: "#heros",
            start: "top bottom",
            toggleActions: "play pause play pause"
        }
    });

    gsap.from("#animate1", {
        scrollTrigger: {
            trigger: "#animate1",
            start: "bottom bottom",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        ease: "slow",
        scale: 0.8,
        duration: 0.8
    });

    gsap.from(".animate2", {
        scrollTrigger: {
            trigger: ".animate2",
            start: "top center",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        ease: "slow",
        scale: 0.8,
        duration: 0.8,
    });


    gsap.from("#animate3", {
        scrollTrigger: {
            trigger: "#animate3",
            start: "bottom bottom",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        ease: "slow",
        scale: 0.8,
        duration: 0.8
    });

    gsap.from("#animate4", {
        scrollTrigger: {
            trigger: "#animate4",
            start: "bottom bottom",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        ease: "slow",
        scale: 0.8,
        duration: 0.8
    });

    gsap.from("#animate5", {
        scrollTrigger: {
            trigger: "#animate5",
            start: "bottom bottom",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        ease: "slow",
        scale: 0.8,
        duration: 0.8
    });
    gsap.from("#animate6", {
        scrollTrigger: {
            trigger: "#animate6",
            start: "top bottom",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        ease: "slow",
        scale: 0.8,
        duration: 0.8
    });


}

gsap.timeline()
// .from(".heroimg",{opactiy:0,duration:3,ease:"slow"})
.from(".hey",{opacity:0,y:5,duration:0.5,ease:"slow"})
.from(".hey1",{opacity:0,y:5,duration:0.5,ease:"slow"})
.from(".herocta",{opacity:0,y:5,duration:0.5,ease:"slow"})



gsap.to(".heroimg", {
    duration: 3,
    y: -10,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut",
    scrollTrigger: {
        trigger: "#heros",
        start: "top bottom",
        toggleActions: "play pause play pause"
    }
  });
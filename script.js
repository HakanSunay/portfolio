// .from('.tx1',2,{autoAlpha: 0})
// .to('.tx1',2,{autoAlpha: 1})
// .from('.percentage',2,{width:'0%'})
// .to('.percentage',3,{width:'70%'})

// .from('.tx2',2,{autoAlpha: 0})
// .to('.tx2',2,{autoAlpha: 1})
// .from('.percentage1',2,{width:'0%'})
// .to('.percentage1',3,{width:'65%'})

// .from('.tx3',2,{autoAlpha: 0})
// .to('.tx3',2,{autoAlpha: 1})
// .from('.percentage2',2,{width:'0%'})
// .to('.percentage2',3,{width:'40%'})

// .from('.tx4',2,{autoAlpha: 0})
// .to('.tx4',2,{autoAlpha: 1})
// .from('.percentage3',2,{width:'0%'})
// .to('.percentage3',3,{width:'50%'})

// .from('.tx5',2,{autoAlpha: 0})
// .to('.tx5',2,{autoAlpha: 1})
// .from('.percentage4',2,{width:'0%'})
// .to('.percentage4',3,{width:'45%'})

// .from('.tx6',2,{autoAlpha: 0})
// .to('.tx6',2,{autoAlpha: 1})
// .from('.percentage5',2,{width:'0%'})
// .to('.percentage5',3,{width:'58%'})

// .from('.tx7',2,{autoAlpha: 0})
// .to('.tx7',2,{autoAlpha: 1})
// .from('.percentage6',2,{width:'0%'})
// .to('.percentage6',3,{width:'30%'})

// .from('.tx8',2,{autoAlpha: 0})
// .to('.tx8',2,{autoAlpha: 1})
// .from('.percentage7',2,{width:'0%'})
// .to('.percentage7',3,{width:'70%'})


var controller = new ScrollMagic.Controller();

var skillsWidth = new TimelineMax();
skillsWidth
// .set('.skillsInfo', {
//     x:"-40%",
//     autoAlpha: 0,
//     height: "80%",
//     width:"0%"
// })
// .to('.skillsInfo', 2, {
//     height: "100%",
//     autoAlpha: 0,
//     width:"45%"

// })
// .to('.skillsInfo', 5, {

//     autoAlpha: 1,
//     transform :"rotateY(0deg)",
//     x:"0%"
// })

var scene2 = new ScrollMagic.Scene({

        triggerElement: '.skills_page',
        triggerHook: 0,
        duration: "200%",

    })
    // .addIndicators({
    //     name: "--------",
    //     colorStart: "#FFFFFF",
    //     colorEnd: "#FFFFFF"
    // })
    .setTween(skillsWidth)
    .addTo(controller);

var skillsWidth1 = new TimelineMax();
skillsWidth1
var scene3 = new ScrollMagic.Scene({

        triggerElement: '.skills_page',
        triggerHook: 0,
        duration: "100%",

    })
    .setPin(".skills_page", {
        pushFollowers: true
    })
    // .addIndicators()
    .setTween(skillsWidth1)
    .addTo(controller);


var skillsWidth = new TimelineMax();
skillsWidth
    .from('.experienceInfo', 10, {
        x: "50%",
    })
    .from('.skillsInfo', 10, {
        x: "-50%",
        z: "-100%",
        rotateX: "30deg",
    }, "-=5")
    .from('.sk1', 1, {
        width: "0%",
    })
    .to('.sk1', 1, {
        width: "95%",
    })
    .set('.sk1 .text span', {
        display: "block"
    })
    .set('.percentage1', {
        width: "65%"
    })
    .from('sk1 .empty', 1, {
        opacity: "0"
    })
    .to('sk1 .empty', 1, {
        opacity: "1"
    })
    .from('.sk2', 1, {
        width: "0%",
    })
    .to('.sk2', 1, {
        width: "95%",
    })
    .set('.sk2 .text span', {
        display: "block"
    })
    .set('.percentage2', {
        width: "60%"
    })
    .from('sk2 .empty', 1, {
        opacity: "0"
    })
    .to('sk2 .empty', 1, {
        opacity: "1"
    })
    .from('.experienceInfo p:nth-child(2)', 3, {
        y:"50%",
        opacity: "0"
    })
    .to('.experienceInfo p:nth-child(2)', 3, {
        y:"0%",
        opacity: "1"
    })
    .from('.sk3', 1, {
        width: "0%",
    })
    .to('.sk3', 1, {
        width: "95%",
    })
    .set('.sk3 .text span', {
        display: "block"
    })
    .set('.percentage3', {
        width: "38%"
    })
    .from('sk3 .empty', 1, {
        opacity: "0"
    })
    .to('sk3 .empty', 1, {
        opacity: "1"
    })
    .from('.sk4', 1, {
        width: "0%",
    })
    .to('.sk4', 1, {
        width: "95%",
    })
    .set('.sk4 .text span', {
        display: "block"
    })
    .set('.percentage4', {
        width: "40%"
    })
    .from('sk4 .empty', 1, {
        opacity: "0"
    })
    .to('sk4 .empty', 1, {
        opacity: "1"
    })
    .from('.experienceInfo p:nth-child(3)', 3, {
        y:"50%",
        opacity: "0"
    })
    .to('.experienceInfo p:nth-child(3)', 3, {
        y:"0%",
        opacity: "1"
    })
    .from('.sk5', 1, {
        width: "0%",
    })
    .to('.sk5', 1, {
        width: "95%",
    })
    .set('.sk5 .text span', {
        display: "block"
    })
    .set('.percentage5', {
        width: "50%"
    })
    .from('sk5 .empty', 1, {
        opacity: "0"
    })
    .to('sk1 .empty', 1, {
        opacity: "1"
    })
    .from('.sk6', 1, {
        width: "0%",
    })
    .to('.sk6', 1, {
        width: "95%",
    })
    .set('.sk6 .text span', {
        display: "block"
    })
    .set('.percentage6', {
        width: "45%"
    })
    .from('sk6 .empty', 1, {
        opacity: "0"
    })
    .to('sk6 .empty', 1, {
        opacity: "1"
    })
    .from('.experienceInfo p:nth-child(4)', 3, {
        y:"50%",
        opacity: "0"
    })
    .to('.experienceInfo p:nth-child(4)', 3, {
        y:"0%",
        opacity: "1"
    })
    .from('.sk7', 1, {
        width: "0%",
    })
    .to('.sk7', 1, {
        width: "95%",
    })
    .set('.sk7 .text span', {
        display: "block"
    })
    .set('.percentage7', {
        width: "50%"
    })
    .from('sk7 .empty', 1, {
        opacity: "0"
    })
    .to('sk7 .empty', 1, {
        opacity: "1"
    })
    .from('.sk8', 1, {
        width: "0%",
    })
    .to('.sk8', 1, {
        width: "95%",
    })
    .set('.sk8 .text span', {
        display: "block"
    })
    .set('.percentage8', {
        width: "65%"
    })
    .from('sk8 .empty', 1, {
        opacity: "0"
    })
    .to('sk8 .empty', 1, {
        opacity: "1"
    })


    // .set('.percentage2', {
    //     width: "60%"
    // })
    // .set('.percentage3', {
    //     width: "40%"
    // })
    // .set('.percentage4', {
    //     width: "45%"
    // })
    // .set('.percentage5', {
    //     width: "48%"
    // })
    // .set('.percentage6', {
    //     width: "50%"
    // })
    // .set('.percentage7', {
    //     width: "40%"
    // })
    // .set('.percentage8', {
    //     width: "65%"
    // })
    .to('.experienceInfo', 0.1, {
        x: "0%"
    })
    .from('.experienceInfo p:nth-child(5)', 3, {
        y:"50%",
        opacity: "0"
    })
    .to('.experienceInfo p:nth-child(5)', 3, {
        y:"0%",
        opacity: "1"
    })
    // .from('.empty', 1, {
    //     opacity: "0"
    // })
    // .to('.empty', 1, {
    //     opacity: "1"
    // })
    .to('.skillsInfo', 0.1, {
        x: "0%",
        z: "0%",
        rotateX: "0deg"
    }, "-=0.1")

var scene1 = new ScrollMagic.Scene({

        triggerElement: '.landing',
        triggerHook: 0.2,
        duration: "100%",

    })
    // .addIndicators({
    //     name: "INTERESTED",
    //     colorStart: "#FFFFFF",
    //     colorEnd: "#FFFFFF"
    // })
    .setTween(skillsWidth)
    .addTo(controller);


    
const main=document.querySelector('#main');
const h1=document.querySelectorAll('h1');
var audio = document.getElementById("myAudio"); 
main.addEventListener('mousemove',function(dets){
   gsap.to('#cursor',{
    x:dets.x-25,
    y:dets.y-25,
    duration:0.5,
    ease: 'back.out'
   })
})

main.addEventListener('click',function(dets){
    gsap.from('#cursor',{
     background:'#0005',
     scale:0.1,
     duration:0.4,
     ease: 'power1.out'
    })
    
    audio.play()
 })
 
 gsap.to('#imgGlobe',{
   rotate:360,
   duration:5,
   repeat:-1,
   transformOrigin:"center",
   ease:Linear.easeNone,
   paused: false
 })
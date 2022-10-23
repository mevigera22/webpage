const yesBtn=document.querySelector('#yesBtn');
yesBtn.addEventListener('click',function(){
    alert('Te invitamos a crecer 30 cm mas por favor :p')
});
const noBtn=document.querySelector('#noBtn');
noBtn.addEventListener('mouseover',function(){
    const randomx=parseInt(Math.random()*100);
    const randomy=parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomy+'%');
    noBtn.style.setProperty('left',randomx+'%');
    noBtn.style.setProperty('transform',`translate(-${randomx}%,-${randomy}%)`);
});

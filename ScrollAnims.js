

let observedElements = document.querySelectorAll('.scrollAnim'); 
const options = { 
  threshold: 0.1}
const optionsParaLinks = {
threshold: 0.5}




const detectarObjAnimable = entries => {
  entries.forEach(entry => {
  elClass=entry.target.classList;
  
  entry.isIntersecting ? 
  elClass.add('visible') : elClass.remove('visible')
  });
}
const cambioDeSeccionLink = entries => {
  entries.forEach(entry => {
  if(puedeCambiarlink === true){ 
    if (entry.isIntersecting) {
      switch (true) {
        case  entry.target == sections[0]:
          navAnim(0,links,sections)
          break;
        case entry.target == sections[1]:
         navAnim(1,links,sections)
          break;
        case  entry.target == sections[2]:
        navAnim(2,links,sections)
          break;
        case  entry.target == sections[3]:
       navAnim(3,links,sections)
      
          break;
        case  entry.target == sections[4]:
          navAnim(4,links,sections)
          break;
        
        default:
      }
    }
  } 
  });
}

let observer = new IntersectionObserver(detectarObjAnimable,options); 
let observerSection = new IntersectionObserver(cambioDeSeccionLink,options); 


sections.forEach(element =>{
  observerSection.observe(element)
});
observedElements.forEach(element => {
  observer.observe(element) 
});
//MENU LINKS


  function main()
{
 
  document.querySelector('.navexp').addEventListener('click', ()=>{navExpand()})
}

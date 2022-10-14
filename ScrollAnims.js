

let observedElements = document.querySelectorAll('.scrollAnim'); 
const options = { 
  threshold: 0.1}
const optionsParaLinks = {
threshold: 0.2}




const detectarObjAnimable = entries => {
  entries.forEach(entry => {
  elClass=entry.target.classList;
  
  entry.isIntersecting ? 
  elClass.add('visible') : elClass.remove('visible')
  });
}
/*const cambioDeSeccionLink = entries => {
  entries.forEach(entry => {
  if(puedeCambiarlink === true){ 
    if (entry.isIntersecting) {
      switch (true) {
        case  entry.target == secciones[0]:
          menuSelectedtrue(link[0],"linkactivo")
           menuSelectedimg(linkimg[0],"color")
          break;
        case entry.target == secciones[1]:
          menuSelectedtrue(link[1],"linkactivo2")
           menuSelectedimg(linkimg[1],"color2")
          break;
        case  entry.target == secciones[2]:
          menuSelectedtrue(link[2],"linkactivo3")
          menuSelectedimg(linkimg[2],"color3")
          break;
        case  entry.target == secciones[3]:
          menuSelectedtrue(link[3],"linkactivo4")
           menuSelectedimg(linkimg[3],"color4")
          break;
        case  entry.target == secciones[4]:
          menuSelectedtrue(link[4],"linkactivo5")
          menuSelectedimg(linkimg[4],"color5")
          break;
        
        default:
      }
    }
  } 
  });
}*/

let observer = new IntersectionObserver(detectarObjAnimable,options); 


/*sections.forEach(element =>{
  observerSection.observe(element)
});*/
observedElements.forEach(element => {
  observer.observe(element) 
});
//MENU LINKS


  function main()
{
 
  document.querySelector('.navexp').addEventListener('click', ()=>{navExpand()})
}

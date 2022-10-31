const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector) ;
const $ch = (parent, child) => document.querySelector(parent).querySelector(child);
const EV = (selector, evnt, callback) =>  selector.addEventListener(evnt, callback);
const isClass = (sel, classname) => sel.classList.contains(classname);
const addClass = (selector, classname) => selector.classList.add(classname);
const removeClass = (selector, classname) => selector.classList.remove(classname);
const rect = sel => sel.getBoundingClientRect();
const nNull = el => el !== null && el !== undefined;
function inputUpdate(touch,mouse){
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i) ? 
    input = touch: input= mouse;
    return input
    }
		let start = inputUpdate('touchstart','mousedown')
		let move = inputUpdate('touchmove','mousemove')
		let end = inputUpdate('touchend','click')

const create = ({node = 'div',parent = 'body',clase ='newElement',id = null, html = null,src=null,times = 1})=>{
 let el = document.createElement(node);

 if(nNull(clase)) { addClass(el, clase); }
 if(nNull(id)) { el.setAttribute('id',`${id}--${times}`)}
 if(nNull(html)) { el.innerHTML = html }
 if(nNull(src)) {el.setAttribute('src', src )}
 
 $(parent).appendChild(el);
 console.log(el)
 times--
 if(times > 0){
  create({node,parent,clase,id,html,src,times})
 }
 else return
}
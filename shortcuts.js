const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector) ;
const $ch = (parent, child) => document.querySelector(parent).querySelector(child);
const EV = (selector, evnt, callback) =>  selector.addEventListener(evnt, callback);
const isClass = (sel, classname) => sel.classList.contains(classname);
const addClass = (selector, classname) => selector.classList.add(classname);
const removeClass = (selector, classname) => selector.classList.remove(classname);
const rect = sel => sel.getBoundingClientRect();
const nNull = el => el !== null || el !== undefined;
function inputUpdate(touch,mouse){
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i) ? 
    input = touch: input= mouse;
    return input
    }
		let start = inputUpdate('touchstart','mousedown')
		let move = inputUpdate('touchmove','mousemove')
		let end = inputUpdate('touchend','click')
const createSliderIndex = (el,clase,createIn,times)=>{
 let element = document.createElement(el);
 addClass(element, clase);
 $(createIn).appendChild(element);
 times--
 if(times > 0){
  createSliderIndex(el,clase,createIn,times)
 }
}
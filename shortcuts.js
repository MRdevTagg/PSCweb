const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector) ;
const $ch = (parent, child) => document.querySelector(parent).querySelector(child);
const EV = (selector, evnt, callback) =>  selector.addEventListener(evnt, callback);
const isClass = (sel, classname) => sel.classList.contains(classname);
const addClass = (selector, classname) => selector.classList.add(classname);
const removeClass = (selector, classname) => selector.classList.remove(classname);
const rect = sel => sel.getBoundingClientRect();

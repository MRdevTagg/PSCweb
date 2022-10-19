
window.addEventListener('DOMContentLoaded',Init);

var min_horizontal_move = 50;
var max_vertical_move = 50;
var within_ms = 300 ;

var start_xPos;
var start_yPos;
var start_time;

const s1_container = $('.slider-container');
const slides1 = Array.from($$('.slide'));
const slider1 = $('.slider');
const Slider_A = new Slider(s1_container,slider1,slides1,0,false,false);
const Sliders = [Slider_A];

let pastSec = null;
let pastLink = null;
let navRight= -50;
const sections= Array.from($$('main section'));
const links = Array.from($$('.sp-link'));
const menubar = Array.from($$('.menubar'))
  //////////////
 // HANDLERS //
//////////////
const showHideNav = () =>{
  navRight != 0 ? navRight = 0 : navRight = -50;
  if (navRight == 0) {
    addClass(menubar[0],"l1a")
    addClass(menubar[1],"l2a")
    addClass(menubar[2],"l3a")
    addClass(menubar[3],"l4a")
  } else {
    removeClass(menubar[0],"l1a")
    removeClass(menubar[1],"l2a")
    removeClass(menubar[2],"l3a")
    removeClass(menubar[3],"l4a")
  }
  $('nav').style.right = `${navRight}%`;
}
class NavBar {
  constructor(links,linkIndex,link,section,pastLink,pastSection) {
    this.links = links;
    this.linkIndex = linkIndex;
    this.link = link;
    this.section = section;
    this.pastLink = pastLink;
    this.pastSec = pastSec;
  }
  navHandler(){
     headheight = $('header').clientHeight;
        if ( this.pastLink !== null ) {
            removeClass(this.pastLink,"activeLink");}
        if ( this.pastSec !== null ) {
            removeClass(this.pastSec,"activeSection")}
            
      addClass(this.links[this.linkIndex],"activeLink")
      addClass(this.section[this.linkIndex],"activeSection")
      window.scrollBy(0, rect(this.section[this.linkIndex]).top - headheight-20);
      this.pastLink = this.link[this.linkIndex];
      this.pastSec = this.section[this.linkIndex];
  }
}

const navHandler = function (i,li,sec){
  headheight = $('header').clientHeight
        if ( pastLink !== null ) {
            removeClass(pastLink,"activeLink");
            pastLink.querySelector("img").style.width = "85%";
          }
        if ( pastSec !== null ) {
            removeClass(pastSec,"activeSection")}
            
      addClass(li[i],"activeLink")
      li[i].querySelector("img").style.width = "100%";
      addClass(sec[i],"activeSection")
      window.scrollBy(0, rect(sec[i]).top - headheight);

      pastLink = li[i];
      pastSec = sec[i];
};



  /////////////
 // EVENTOS //
/////////////

  
function Init(){
  
$('nav').style.height = window.innerHeight +'px';
  
links.forEach((link,index) =>{
EV(link,'touchstart',() => {
  navHandler(index,links,sections);
  showHideNav()
})
});

Sliders.forEach((sl,indx)=>{
  
  sl.UpdateSliderWidth()
EV(sl.container,'touchstart',(e)=>{
  sl.canSwipe = true
 start_xPos = e.touches[0].pageX;
 start_yPos = e.touches[0].pageY;
 start_time = new Date();
});
EV(sl.container,'touchmove',(e)=>{
    end_xPos = e.changedTouches[0].pageX;
    end_yPos = e.changedTouches[0].pageY;
    end_time = new Date();
    let move_x = end_xPos - start_xPos;
    let move_y = end_yPos - start_yPos;
    let elapsed_time = end_time - start_time;
    if (Math.abs(move_x) > min_horizontal_move && Math.abs(move_y) < max_vertical_move && elapsed_time < within_ms) {
            if (move_x < 0 && sl.canSwipe) {
                 sl.moveRight = false;
                 sl.Update();
            } if(move_x > 0 && sl.canSwipe) {
                 sl.moveRight = true ;
                 sl.Update();
            }
        }
});
});

EV($('.btnmenu'),'touchstart',showHideNav);
EV($('main'),'touchstart',()=>{
  if (navRight === 0) {
    showHideNav()
  }
  
});
  
}

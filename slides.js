
class Slider{
  constructor(container = $(''),slider,slides,positionX,moveRight,canSwipe){
    this.container = container;
    this.slider = slider;
    this.slides = slides;
    this.positionX = positionX;
    this.moveRight = moveRight;
    this.canSwipe = canSwipe;
    
  }
  Update(){
    let sLength = this.slides.length;
    let slideStep = 100/sLength;
    let slideMax = (slideStep) * (sLength-1);
  if(this.moveRight && this.canSwipe){
    this.positionX < 0 ?
    this.positionX += slideStep :
    this.positionX = 0;
  }
  else  if(!this.moveRight && this.canSwipe){
    this.positionX > -slideMax ?
    this.positionX += -slideStep:
    this.positionX = -slideMax;
  };

   this.slider.style.transform = `translateX(${this.positionX}%)`;
   this.canSwipe = false;
  }
//llamar updatesliderwidth al agregar un slide
 UpdateSliderWidth(){
      this.slider.style.transition = 'none';
      this.slider.style.width = this.slides.length * 100 + '%';
      this.slider.style.transition = 'all .5s'
      
    }

  Slide(){
    this.Update();
  }
}








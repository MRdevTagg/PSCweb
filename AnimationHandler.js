class AnimationHandler {
  constructor({frame,animation}) {
    this.frame = frame || {current : 0, min : 3, max : 14,rate : 12};
    this.animation = animation || {
      direction : 1,
      cycle:'loop-pingpong',
      path : '/img/walk',
      format : 'png',
      element : ID('sprite'),
      type : 'image',
      text : '',
      string_src: 'ahora veremos si funciona lo que se intenta escribir aunque no tenga ningun sentido'
    };
    this.counter = 0;
  }
 showOnView(){
  isClass(this.animation.element,'visible') ? 
  this.animation.cycle = 'forward' :
  this.animation.cycle = 'reverse'
 }
  frameStep(){
  this.frame.current += this.animation.direction
                
    switch (this.animation.cycle){
      case 'stop':
        this.animation.direction = 0
        break;
      
      case "forward" :
        if (this.frame.current < this.frame.max) {
        this.animation.direction = 1}
        else{
        this.animation.direction = 0}
        break;
      case 'reverse':
        if (this.frame.current > this.frame.min) {
        this.animation.direction = -1}
        else{
          this.animation.direction = 0
        }
        break;
      case 'loop-forward':
        this.frame.current < this.frame.max? 
         this.animation.direction = 1:
        this.frame.current = this.frame.min
        break;
      case 'loop-reverse':
      this.frame.current > this.frame.min ?
        this.animation.direction = -1 :
        this.frame.current = this.frame.max
      break;
      case 'loop-pingpong':
        if (this.frame.current === this.frame.max){
          this.animation.direction = -1}
        else if(this.frame.current === this.frame.min){
          this.animation.direction = 1}
        break;
      
    }


  }
  
  animate(){
    const {type,element,path,format,string_src,text,direction} = this.animation;
this.counter+=1;
  if(this.counter >= 60/this.frame.rate){ 

    this.counter = 0;
    switch (true){
    case type ==='image' :
      element.setAttribute('src',`${path}${this.frame.current}.${format}`)
      break;
    case type ==='text':
      this.frame.max = string_src.length +1
      this.frame.min = -1
      if (direction === 1) {
      let txt = text.concat(string_src.charAt(this.frame.current-1))
      this.animation.text = txt
      if (direction !== 0) {
      element.innerHTML = text 
      }else{element.innerHTML = string_src
}
}
     if(direction === -1){
      let txt = text.slice(0,this.frame.current-1)
      this.animation.text = txt
      if(direction !== 0){
        element.innerHTML = text}
        else{
        element.innerHTML = ''}

     }
      
      break;
   
  }
      this.frameStep()

  }
  }
} 


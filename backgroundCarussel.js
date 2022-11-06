const bb_equipo = 
['Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',];
let counter = 0;
let index = 0;





const bgChange = ({
	src = ['Img/Recursos/c1.jpeg',
	'Img/Recursos/c2.jpeg',
	'Img/Recursos/c3.jpeg',
	'Img/Recursos/c4.jpeg',
	'Img/Recursos/c5.jpeg',],
	time_seconds = 7,
	bg1 = 'bg1',
	bg2 = 'bg2',	
}) =>{
	counter +=1

	if(counter === time_seconds*60){
		counter = 0
		index < src.length -1 ? index +=1 : index = 0;
		
			let temp1 = bg1;
			let	temp2 = bg2;
			bg2 = temp1;
			bg1 = temp2;

		ID(bg1).style.background = `url(${src[index]})`;
		ID(bg1).style.opacity = '1';
		EV(ID(bg1),'transitionend',()=>{
			 ID(bg2).style.opacity = '0';
		})


		
	}
	window.requestAnimationFrame(bgChange)
}

window.requestAnimationFrame(bgChange)
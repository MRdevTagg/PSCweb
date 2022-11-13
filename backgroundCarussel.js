const bb_equipo = 
['Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',
'Img/Recursos/c1.jpeg',];
let counter = 0;
let index = 0;





const bgChange = ({
	src = ['Img/Recursos/camion-lateral-mockup.png',
	'Img/Recursos/c12.jpeg',
	'Img/Recursos/c3.jpeg',
	'Img/Recursos/c16.jpeg',
	'Img/Recursos/c5.jpeg',],
	time_seconds = 7,
	bg1 = 'bg1',
	bg2 = 'bg2',	
}) =>{
	counter +=1

	if(counter === time_seconds*60){
		[bg1,bg2] = [bg2,bg1];
		counter = 0
		index < src.length -1 ? index +=1 : index = 0;
		ID(bg1).style.backgroundImage = `url(${src[index]})`;
		ID(bg1).style.opacity = '1';
		EV(ID(bg1),'transitionend',()=>{
			 ID(bg2).style.opacity = '0';
		})


		
	}
	RAF(bgChange)
}

RAF(bgChange)
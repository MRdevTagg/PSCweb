const bg_equipo = 
['img/Recursos/camion-lateral-mockup.png',
	'img/Recursos/c12.jpeg',
	'img/Recursos/c3.jpeg',
	'img/Recursos/c16.jpeg',
	'img/Recursos/c5.jpeg',];

const bg_camiones = ['img/Recursos/c3.jpeg','img/Recursos/c6.jpeg','img/Recursos/c16.jpeg']
const bg_bolsas = ['img/bolsa1.jpeg','img/bolsa2.jpeg','img/bolsa3.jpeg','img/bolsa4.jpeg']

class DynamicBg{
	constructor({bg1,bg2,src,i,time_ammount}){
		this.bg1 =bg1;
		this.bg2 =bg2;
		this.src = src;
		this.i = i || 0;
		this.time_ammount = time_ammount * 60;
		this.timer = 0;
	}
	change(){
	if (this.timer < this.time_ammount) {
		this.timer +=1
	}	

	else if( this.timer >= this.time_ammount ){
		[this.bg1,this.bg2] = [this.bg2,this.bg1];
		this.i < this.src.length -1 ? this.i +=1 : this.i = 0;
		ID(this.bg1).style.backgroundImage = `url(${this.src[this.i]})`;
		ID(this.bg1).style.opacity = '1';
		ID(this.bg2).style.opacity = '0';
		this.timer = 0;
	}}
}


const equipo = new DynamicBg ({bg1:'bg1', bg2 : 'bg2',
	src : bg_equipo,
	i : 0,
	time_ammount : 7,
}) 
const camiones = new DynamicBg({
	src:bg_camiones,
	bg1:'bg3',
	bg2:'bg4',
	time_ammount: 4
})
const bolsas = new DynamicBg({
	src:bg_bolsas,
	bg1:'bg5',
	bg2:'bg6',
	time_ammount: 4
})


let activeBackgrounds = [equipo,camiones,bolsas]






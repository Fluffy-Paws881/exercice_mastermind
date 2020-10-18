var tabColor =[];		
var difColor=["green","blue","yellow","red","purple","brown"];
var essai=12;
var nb =0;

function generePlateau(){
//fonction qui permet de génerer le plateau de jeu
	
	for (i=0;i<13;i++){
		genereDiv = document.createElement("div");

		genereDiv.setAttribute("id","ligne"+i);
		genereDiv.setAttribute("class","ligne");

			for (y=0;y<5;y++){
				genereDiv2 =document.createElement("div");

				if (y !==4){
					genereDiv2.setAttribute("class","boule");
					genereDiv2.setAttribute("onclick","colorClick(this)");
				}else{
					genereDiv2.setAttribute("class","textCompt");
					genereDiv2.setAttribute("id","textCompt"+i);
				}
				
				genereDiv.appendChild(genereDiv2); 
			}

		document.getElementById("container").appendChild(genereDiv);
		//console.log(genereDiv);
	}
}

function randColor(){
//fonction qui va generer aléatoirement la combinaison de couleur a deviner
		
	for (i=0; i<4; i++){

		rando =  Math.floor(Math.random() * Math.floor(6))+1;

		switch(rando){

			case 1:
			tabColor[i] = difColor[0];
			break;

			case 2:
			tabColor[i] = difColor[1];
			break;

			case 3:
			tabColor[i] = difColor[2];
			break;

			case 4:
			tabColor[i] = difColor[3];
			break;
					
			case 5:
			tabColor[i] = difColor[4];
			break;

			case 6:
			tabColor[i] = difColor[5];
			break;	
		}
	}
	//console.log(tabColor);
}

function colorClick(x){
//fonction qui gere le changement de couleur en cliquant sur les div

	if ((x.parentNode.id == "ligne"+essai) && (x.parentNode.id !== "ligne"+0)) {
		x.style.backgroundColor = difColor[nb];
		nb++;
		if (nb >5){
			nb = 0;
		}
	}
	//console.log(x.parentNode.id);
}

function verification(){
//fonction qui verifie la combinaison du joueur et qui genere aussi les condition de victoire ou défaite 

	var compt = 0;
	var verif = document.getElementById("ligne"+essai);

	if ((essai !==0) && (compt !== 4)) { 
		
		//console.log(verif);

		for (i=0;i<4;i++){//verification de la couleur selectionné avec celle generé aléatoirement
			if (verif.children[i].style.backgroundColor==tabColor[i]) {
				compt++;
			}
		}
		
		//console.log(compt);

		document.getElementById("textCompt"+essai).innerHTML = "il y a "+compt+" bonne couleurs";

		
		if (compt == 4){ //condition de victoire

			document.body.style.backgroundColor="#93FD5B";
			alert('bravo vous avez trouvé la bonne combinaisons');

				for (i=0;i<4;i++){
				
					document.getElementById("ligne"+0).children[i].style.backgroundColor=tabColor[i];
				}
		}else{
			essai--;
		}
		if (essai == 0) {//condition de défaite
		
			alert('dommage, vous n avez pas trouvé la bonne combinaisons');
			document.body.style.backgroundColor="#F95D5D";

			for (i=0;i<4;i++){
				document.getElementById("ligne"+0).children[i].style.backgroundColor=tabColor[i];
			}
		}
	}
}





 










const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
export const PALLETTE_FONDO = [
    'rgba(21, 97, 133, 0.8)',
    'rgba(79, 79, 79, 0.8)',
    'rgba(26, 171, 227, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 134, 51, 0.8)', // Naranja
    'rgba(204, 51, 51, 0.8)', // Rojo
    'rgba(46, 204, 113, 0.8)', // Verde
    'rgba(255, 193, 7, 0.8)', // Amarillo
    'rgba(102, 102, 255, 0.8)', // Morado
    'rgba(255, 77, 77, 0.8)' // Rojo claro
];
export const PALLETTE_BORDE = [
    'rgb(21, 97, 133)',
    'rgb(79, 79, 79)',
    'rgb(26, 171, 227)',
    'rgb(153, 102, 255)',
    'rgb(255, 134, 51)',   // Naranja
    'rgb(204, 51, 51)',    // Rojo
    'rgb(46, 204, 113)',   // Verde
    'rgb(255, 193, 7)',    // Amarillo
    'rgb(102, 102, 255)',  // Morado
    'rgb(255, 77, 77)'     // Rojo claro
];


function getCharacter(index:number) {
	return hexCharacters[index]
}
export default function randomColor(){

    let hexColorRep = "#"
	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length )
    	hexColorRep += getCharacter( randomPosition )
	}

	return hexColorRep
}

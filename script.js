
let noteArray = [
//	{noteValue:'',
//	noteDate:new Date().toDateString()},
	];

function addNotesForm(){

	let set = 'Add Addional notes';
	let met = prompt (set);
	let j = new Date().toDateString();
	
	


//	let set = document.getElementById('met').innerHTML;
//
//	let vet = document.getElementById('set').innerHTML;

//	alert('add Notes');
	document.getElementById('display').innerHTML = met +'<br>'+ j.toString()+ '<br>';
	 console.log(met + j.toString());
}

function myTextArea(){

	// let text=document.getElementById('').innerHTML;

	// myTextArea.value = myTextArea.value('text');


	// console.log(text);

	// console.log('met');

	// document.getElementById('myTextArea').innerHTML;


	let date = new Date().toDateString();

	var textArea = document.getElementById('textArea').value; 

	//var results = document.getElementById('results').innerHTML;
	
	noteArray.push({
		noteValue:textArea,
		noteDate:date
	})
display()
	


	//this is saved as one long string regardless of how many "inputs" you put. 
	//each object in the txt field should be stored in A string var temporarily (it'll update after each input)
	//That string var should pass it on to an array and array is added +1 
	//
	//var c = document.getElementById('results').innerHTML = results + '<br>' + textArea +'<br>' + date.toString() + '<hr>';
//	document.getElementById('met') = met +'<br>' + d.toString() + '<hr>';
	

//	let met = document.getElementById('met').value;
//
//	let vet = document.getElementById('vet').innerHTML;
	//console.log(c);
//}
//		var x=0;
//		var y = results;
//		var gArray = [];
//			while (gArray.length < x, x++) {
//	  		gArray.push(results)
//	}
//	var gArray =[];

//	for (var i = 0; i < gArray.length; i++) {
//	 	gArray.push(c);
//		console.log('array length is ' + gArray.length);
	 



//	document.getElementById('vet').innerHTML = vet + "<br>" + textArea +"<br>" + d.toString() + "<hr>"

	//console.log(textArea);

//	console.log(vet);

function addArray(){
	}
		var x=0;
		var y = results;
		var gArray = [];
			while (gArray.length < x, x++) {
	  		gArray.push(results)
	}



	console.log('array length is ' + gArray.length);

}

function display(){
	document.getElementById('display').innerHTML = '';
	for (let i=0; i < noteArray.length; i++){
//	document.getElementById('display').innerHTML += albums[i].name + ' by ' + albums[i].artist +'<br/>';
	document.getElementById('display').innerHTML += `<h1>${noteArray[i].noteValue} by ${noteArray[i].noteDate} <h1/>
	<input type='button' value='DELETE' onclick='deleteNote(${i})'> 
	<hr/>`;

}
}
function deleteNote(index){

	noteArray.splice(index, 1);
	
	display();
}   

function noteName(){
	var nName = document.getElementById('nNote').value;
	document.getElementById('nName').innerHTML = nNote;	
	console.log('nName');

}


Database.init();
var myDoc = {};
var documents = Database.load();

var filelist = document.getElementById("availableFiles");
for(var i = 0; i < documents.length; i++){
	var newItem = document.createElement("li");
  newItem.className = 'doc' + i;
	newItem.innerHTML = documents[i].name + "<button style= 'margin-left:20px; height:20px;' type='button' class='close' id='" + myDoc.name + "' onClick='getDoc(" + JSON.stringify(documents[i]) + ")'><span class='glyphicon glyphicon-open'></span></button>" + "<button style= 'height:20px' type='button' class='close' data-dismiss='alert' onClick='Database.remove(" + JSON.stringify(documents[i]) + ")'><span class='glyphicon glyphicon-trash'></span></button>";
	filelist.appendChild(newItem);
}


function createNewDoc(){

	var exists = false;
	var index;
	for(var i = 0; i < documents.length; i++){
		if (documents[i].name == document.getElementById('name').value){
			index = i;
			exists = true;
			console.log(documents[i].content);
		}
	}

	myDoc.name = document.getElementById('name').value;
	myDoc.content = document.getElementById('editor').value;
	var newItem = document.createElement("li");
	newItem.innerHTML = myDoc.name + "<button style= 'margin-left:20px; height:20px;' type='button' class='close' id='" + myDoc.name + "' onClick='getDoc(" + JSON.stringify(myDoc) + ")'><span class='glyphicon glyphicon-open'></span></button>" + "<button style= 'height:20px' type='button' class='close' data-dismiss='alert' onClick='Database.remove(" + JSON.stringify(myDoc) + ")'><span class='glyphicon glyphicon-trash'></span></button>";

	if(!exists){
		console.log(myDoc);
		Database.save(myDoc);
    newItem.className = 'doc' + documents.length;
		filelist.appendChild(newItem);
	}

	else{
		Database.remove(documents[index]);

		console.log(myDoc);
		Database.save(myDoc);

    console.log('doc' + index);
    var old = document.getElementsByClassName('doc' + index)[0];
    console.log("OLD: " + old.innerHTML);
    old.parentNode.removeChild(old);

    newItem.className = 'doc' + index;
    filelist.appendChild(newItem);
	}

  documents = Database.load();
}

function getDoc(myDoc){
	document.getElementById('editor').value = myDoc.content;
	document.getElementById('name').value = myDoc.name;
}

//data-dismiss='alert'
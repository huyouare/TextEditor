Database.init();
var myDoc = {};
var documents = Database.load();

var filelist = document.getElementById("availableFiles");
for(var i = 0; i < documents.length; i++){
		var newItem = document.createElement("li");
		newItem.innerHTML = documents[i].name + "<button style= 'padding-left:20px; height:20px;' type='button' class='close' data-dismiss='alert' onClick='Database.remove(" + documents[i].name + ")'>L</button>" + "<button style= 'height:20px' type='button' class='close' data-dismiss='alert' onClick='Database.remove(\"" + documents[i].name + "\")'>X</button>";
		filelist.appendChild(newItem);
}

function createNewDoc(){
	myDoc.name = document.getElementById('name').value;
	myDoc.content = document.getElementById('editor').value;
	console.log(myDoc);
	Database.save(myDoc);

	var newItem = document.createElement("li");
	newItem.innerHTML = myDoc.name + "<button style= 'height:20px' type='button' class='close' data-dismiss='alert' onClick='delete(" + JSON.stringify(myDoc) + ")'>x</button>";
	filelist.appendChild(newItem);
}

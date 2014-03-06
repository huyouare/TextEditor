Database.init();
var myDoc = {};
var documents = Database.load();

var filelist = document.getElementById("availableFiles");
for(var i = 0; i < documents.length; i++){
		var newItem = document.createElement("li");
		newItem.innerHTML = documents[i].name;
		filelist.appendChild(newItem);
}

function createNewDoc(){
	myDoc.name = document.getElementById('name').value;
	myDoc.content = document.getElementById('editor').value;
	console.log(myDoc);
	Database.save(myDoc);
	var newItem = document.createElement("li");
	newItem.innerHTML = myDoc.name;
	filelist.appendChild(newItem);
}

function Doc(content, name){
	this.content = content;
	this.name = name;
}

var myDoc = new Doc("bitches", "money");
function supportsLocalStorage(){
	try{
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e){
		return false;
	}
}

var metanames = [];

var Database = {
	init: function() {
		if(!supportsLocalStorage()){
		    return false; 
		}
		if(!localStorage["metanames"]){
			localStorage["metanames"] = JSON.stringify(metanames);
		}
	    if(!localStorage["nextId"]){
			localStorage["nextId"] = JSON.stringify(0);
		}
		this.metanames = JSON.parse(localStorage["metanames"]);
		this.nextId = JSON.parse(localStorage["nextId"]);
	},
	load: function(myDoc){
		var documents = [];
		for(var i = 0; i < this.metanames.length; i++){
			documents.push(JSON.parse(localStorage[this.metanames[i]]));
		}
		return documents;
	},
	save: function(myDoc) {
		this.metanames.push(this.nextId);
		localStorage["metanames"] = JSON.stringify(this.metanames);
		localStorage[JSON.stringify(this.nextId)] = JSON.stringify(myDoc);
		this.nextId++;
		localStorage["nextId"] = JSON.stringify(this.nextId);
	},
	remove: function(myDoc) {
		for(var i = 0; i < this.metanames.length; i++){
			if(localStorage[JSON.stringify(this.metanames[i])] == myDoc){
				localStorage.removeItem(JSON.stringify(this.metanames[i]));
				delete this.metanames[i];	
				localStorage["metanames"] = JSON.stringify(this.metanames);
			}
		}
	}
};



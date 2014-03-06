'use strict';

function Doc(content, name){
	this.content = content;
	this.name = name;
}

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
		console.log(this.metanames);
		for(var i = 0; i < this.metanames.length; i++){
			console.log(this.metanames[i]);
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
		if(typeof a_string === 'string'){
			myDoc = JSON.parse(myDoc);
		}
		for(var i = 0; i < this.metanames.length; i++){
			if(JSON.parse(localStorage[this.metanames[i]]).name == myDoc.name){
				localStorage.removeItem(JSON.stringify(this.metanames[i]));
				this.metanames.splice(i,1);	
				localStorage["metanames"] = JSON.stringify(this.metanames);
			}
		}
	}
};



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
		if(!supportsLocalStorage()){ return false; }
		this.metanames = JSON.parse(localStorage["metanames"]);
		this.nextId = JSON.parse(localStorage["nextId"]);
	},
	make_id: function() {},
	save: function(myDoc) {
		this.metanames.push(this.nextId);
		localStorage["metanames"] = JSON.stringify(this.metanames);
		localStorage[JSON.stringify(nextId)] = JSON.stringify(myDoc);
		this.nextId++;
		localStorage["nextId"] = JSON.stringify(this.nextId);
	},
	remove: function(myDoc) {
		for(var i = 0; i < metanames.length; i++){
			if(localStorage[JSON.stringify(i)] == myDoc){
				localStorage.removeItem(JSON.stringify(i));
				
			}
		}
	}
};



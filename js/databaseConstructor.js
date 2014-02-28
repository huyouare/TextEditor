var doc = {
	id: "",
	title : "",
	lastModified: "",
	created: "",
	tags: [],
	content: ""
};

var database =  function() {
	var save = function(){
		this.save = function(object){
			var obj = {
				id: object.id,
				title : object.title,
				lastModified: object.lastModified,
				created: object.created,
				tags: object.tags,
				content: object.content
			};
			var docString = JSON.stringify(obj);
			localStorage.setItem(object.id.parseInt(), docString);
		};
	};
};

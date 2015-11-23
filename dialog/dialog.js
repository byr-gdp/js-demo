function Dialog(title, content) {
	this.title = title;
	this.content = content;
	this.getTitle = function() {
		return this.title;
	}
	this.getContent = function() {
		return this.content;
	}
	this.setTitle = function(newTitle) {
		this.title = newTitle;
	}
	this.setContent = function(newContent) {
		this.content = newContent;
	}
}

var dialog = new Dialog('aloha', 'gdp');
console.log('title:', dialog.title);
console.log('content:', dialog.content);

dialog.setTitle("newAloha");
dialog.setContent("newGdp");

console.log('title:', dialog.title);
console.log('content:', dialog.content);
//STEP 3
window.addEventListener("load", function(){
	var hover = {"index":0, "originalText": null, "interval":null, "node": null};
	var nodes = document.querySelectorAll(".sequenceRollover");
	nodes.forEach(function(item){
		item.addEventListener("mouseover",function(){

			//STEP 4
			if(hover.interval == null){
				hover.node = this;
				hover.originalText = this.innerText;
				hover.index = 0;
				hover.interval = setInterval(function(){
					//STEP 5
					if(hover.index < hover.originalText.length){
						//STEP 6
						var chars = ["@","!","#","?"];
						hover.index++;
						var str = hover.originalText.substr(0,hover.index)
									+ chars[ Math.floor(Math.random()*chars.length) ]
									+ hover.originalText.substr(hover.index+1);
						hover.node.innerText = str;
					}else{
						//STEP 7
						hover.node.innerText = hover.originalText;
						clearInterval(hover.interval)
						hover.node = null;
						hover.originalText = null;
						hover.interval = null;
					}
				},50);
			}

		});
	});
});

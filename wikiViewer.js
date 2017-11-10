var myRequest = new XMLHttpRequest();

function getWikiInfo(){

	var val = document.getElementById('input').value;

	document.getElementById("opened").innerHTML= "wikipedia Search: "+val;	
	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange = function(){
		if (myRequest.readyState === XMLHttpRequest.DONE)
		{
			if (myRequest.status < 400)

			{
				var str = JSON.parse(myRequest.responseText);
				wikiHtmlCall(str);

			}
		}
	};


	var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + val + '&format=json&origin=*';
	myRequest.open('GET',url,true);
	myRequest.send(null);
}
function wikiHtmlCall(data){
	document.getElementById("listItems").innerHTML="";
	document.getElementById("textLoad").innerHTML ="Reload to Search Again"
	var articleTitles =data[1];
	var webUrl= data[data.length-1]
	var articleInfo = data[2];
	var str="";
	var anchorElem;
	var newelem;
	for(var i=0;i<articleTitles.length;i++){
		var ul = document.getElementById("listItems");
	    var li = document.createElement("li");

		str= articleTitles[i]+': '+articleInfo[i]+"\r";
		anchorElem = document.createElement('a');
        anchorElem.setAttribute("href", webUrl[i]);
        anchorElem.innerHTML = str;
        li.appendChild(anchorElem);
        ul.appendChild(li);
       
        //document.body.appendChild(anchorElem);


		
	}
	
}

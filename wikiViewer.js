var myRequest = new XMLHttpRequest();

function getWikiInfo(){

	var val = document.getElementById('input').value;
	var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + val + '&format=json&origin=*';


	document.getElementById("opened").innerHTML= "wikipedia Search: "+val;
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET',url, true);
	myRequest.responseText = 'json';
	myRequest.send(null);
	myRequest.onload = function() {
    const wikiResponse = myRequest.response;
    console.log(wikiResponse);
    wikiHtmlCall(JSON.parse(wikiResponse));
    }



}
function wikiHtmlCall(data){
	document.getElementById("listItems").innerHTML="";
	var articleTitles =data[1];
	var webUrl= data[data.length-1]
	var articleInfo = data[2];
	var str="";
	var anchorElem;
	var newelem;
	for(var i=0;i<articleTitles.length;i++){
		var ul = document.getElementById("listItems");
	    var li = document.createElement("li");

		str= articleTitles[i]+' '+articleInfo[i]+"\r";
		anchorElem = document.createElement('a');
        anchorElem.setAttribute("href", webUrl[i]);
        anchorElem.innerHTML = str;
        li.appendChild(anchorElem);
        ul.appendChild(li);

        //document.body.appendChild(anchorElem);



	}

}

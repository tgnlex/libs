const url = "page.html"

function load(url, callback) {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
	  if (xhr,readyState === 4) {
	  	callback(xhr.response);
	  }
	};

	xhr.open("GET", url, true);
	xhr.send("");
}
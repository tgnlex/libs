const controller = new AbortController();
const signal = controller.signal;

const url = `http://localhost:3000/storage/videos/sample.mp4`;

function fetchVideo() {
	fetch(url, { signal })
	  .then((response) => {
	  	console.log("Download successful", response);

	})
	.catch((err) => {
		console.log("Error: Download Interrupted");
		console.log(`Error Message:` ${err.message})
	})
}
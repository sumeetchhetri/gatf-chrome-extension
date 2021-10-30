let serverUrl = document.getElementById('serverUrl');
let recording = document.getElementById('recording');
let gatfconfigtool = document.getElementById('gatfconfigtool');

function play() {
}

function loadTestData() {
	chrome.storage.local.get(["recording"], function(d) {
		//debugger;
		if(d && d.recording) {
			recording.value = d.recording.join("\n");
		} else {
			setTimeout(loadTestData, 100);
		}
	});
}

const httpregex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gmi;

document.addEventListener("DOMContentLoaded", function() {
	gatfconfigtool.addEventListener('click', async () => {
		if(serverUrl.value && serverUrl.value.match(httpregex)) {
			chrome.storage.local.set({serverUrl: serverUrl.value}, function() {
				chrome.tabs.create({ url: chrome.runtime.getURL("gatf-config-tool/index.html") });
			});
		} else {
			alert("Please specify a proper gatf server URL to proceed..");
		}
	});
	setTimeout(loadTestData, 100);
}, false);

function loadScript() {
}

/*async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

let isReady = false;
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
	debugger;
	let tab = await getCurrentTab();
	console.log(`background received message from popup: ${request.type}`);
	if(request.type=="start") {
		if(!isReady) {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: loadScript
			});
			isReady = true;
		} else {
			console.log(`background sent message to content-script: ${request.type}`);
			chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {type: request.type}, function (response) {
					console.log(`background received message from content-script: ${response.type}`);
				});
			});
			chrome.tabs.sendMessage(tab.id, {type: request.type}, function handler(response) {
				console.log(`background received message from content-script: ${response.type}`);
			});
		}
	} else {
		console.log(`background sent message to content-script: ${request.type}`);
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {type: request.type}, function (response) {
				console.log(`background received message from content-script: ${response.type}`);
			});
		});
	}
	console.log(`background sent reply to popup: ${request.type}`);
	sendResponse({ type: request.type });
});*/

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: loadScript
	});
});
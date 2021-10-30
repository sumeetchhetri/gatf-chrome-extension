$(document).ready(function() {
	chrome.storage.local.get(["serverUrl"], function(d) {
		if(d && d.serverUrl) {
			serverUrl = d.serverUrl;
			if(serverUrl.endsWith("/")) {
				serverUrl = serverUrl.substring(0, serverUrl.length-1);
			}
			$.ajaxPrefilter(function(options) {
				if(serverUrl && options.url.indexOf(serverUrl)!=0) {
					if(options.url.indexOf("/")==0) {
						options.url = serverUrl + options.url;
					} else {
						options.url = serverUrl + "/" + options.url;
					}
				}
			});
			ajaxCall(true, "GET", "misc", "", "", {}, function(data) {
				miscMap = data;
				startInitConfigTool(configuration);
			}, null);
		}
	});
});
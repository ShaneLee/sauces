'use strict'

let count = 0

chrome.storage.onChanged.addListener((changes, area) => {
	if (changes === 'sync') {
		!changes.blockedSites ? [''] : changes.blockedSites
	}
})

chrome.runtime.onInstalled.addListener((details) => { 
	chrome.tabs.create({url: 'chrome-extension://bmnedkngmdcipfkdfcabjkccfpcjghoi/welcome/welcome.html'})
})

chrome.webRequest.onBeforeRequest.addListener(
        redirectSources,
        {urls: ["<all_urls>"]},
        ["blocking"])

function redirectSources(details) {
	if (!redirectEnabled) return
	count++
	setTimeout(() => { count = 0 }, 100);
	if (count == 1 && isBlocked(details)) {
		return {redirectUrl: 'http://google.com'}
	}
}



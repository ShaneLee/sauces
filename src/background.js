'use strict'

chrome.storage.onChanged.addListener((changes, area) => {
	if (changes === 'sync') {
		!changes.blockedSites ? [''] : changes.blockedSites
	}
})

chrome.runtime.onInstalled.addListener((details) => { 
	chrome.tabs.create({url: 'chrome-extension://bmnedkngmdcipfkdfcabjkccfpcjghoi/welcome/welcome.html'})
})

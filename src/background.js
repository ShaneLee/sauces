'use strict'
// In future will need to parse what the search engine is 
// for now - just google.

let count = 0

chrome.webRequest.onBeforeRequest.addListener(
        blockSources,
        {urls: ["<all_urls>"]},
        ["blocking"])

function blockSources(details) {
	count++
	setTimeout(() => { count = 0 }, 100);
	if (count == 1 && isSearch(details)) {
		return {redirectUrl: buildSearch(details)}
	}
}

function isSearch(details) {
	return details.url.includes('www.google.') && details.url.includes('search?q=')
}

function buildSearch(details) {
	const searchUrl = 'https://www.google.com/search?q='
	return searchUrl + insertBannedSources(parseQueryKeywords(details))
}

function parseQueryKeywords(details) {
	const query = details.url.split('search?q=').pop().split('&oq=').shift()
	return query.split('+')
}

function insertBannedSources(keywords) {
	const negateSite = '+-site:'
	return concatKeywords(keywords) + negateSite + getBlockedSites().join(negateSite)
}

function concatKeywords(keywords) {
	return typeof keywords === 'string' ? keywords : keywords.join('+')
}

function getBlockedSites() {
	chrome.storage.sync.get('blockedSites', (data) => {
		 return !data.blockedSites ? [''] : data.blockedSites
	})
}

chrome.runtime.onInstalled.addListener((details) => { 
	chrome.tabs.create({url: 'chrome-extension://bmnedkngmdcipfkdfcabjkccfpcjghoi/options/options.html'})
})


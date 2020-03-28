let count = 0
chrome.webRequest.onBeforeRequest.addListener(
        blockSources,
        {urls: ["<all_urls>"]},
        ["blocking"]);

function blockSources(details) {
	count++
	setTimeout(function() { count = 0 }, 100);
	if (count == 1 && isSearch(details)) {
		return {redirectUrl: buildSearch(details)}
	}
}

function isSearch(details) {
	return details.url.includes('www.google.') && details.url.includes('search?q=')
}

function buildSearch(details) {
	searchUrl = 'https://www.google.com/search?q='
	return searchUrl + insertBannedSources(parseQueryKeywords(details))
}

function parseQueryKeywords(details) {
	const query = details.url.split('search?q=').pop().split('&oq=').shift()
	return query.split('+')
}

function insertBannedSources(keywords) {
	negateSite = '+-site:'
	return concatKeywords(keywords) + negateSite + getBannedSources().join(negateSite)
}

function concatKeywords(keywords) {
	return typeof keywords === 'string' ? keywords : keywords.join('+')
}

function getBannedSources() {
	return ['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk']
}

// In future will need to parse what the search engine is 
// for now - just google.
//search?q=shane+-site%3Adailymail.co.uk 

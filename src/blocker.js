let blockedSites = setBlockedSites()

function getBlockedSites() {
	return blockedSites
}

function setBlockedSites() {
	chrome.storage.sync.get('blockedSites', (data) => {
		blockedSites = !data.blockedSites ? [] : data.blockedSites
		block()
	})
}

function isBlocked(details) {
	return getBlockedSites().filter(source => details.url.includes(source)).length > 0
}

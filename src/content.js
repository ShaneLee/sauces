'use strict'

let blockedSites = setBlockedSites()

window.onload=block()

function block() {
	const elements = document.getElementsByClassName('g')

	if (!elements || !getBlockedSites() || getBlockedSites().length === 0) { return 0 }

	let countOfBlockedElements = 0
	for (const element of elements) {
		if (shouldBlock(element)) {
			element.setAttribute("style", "display:none;")
			countOfBlockedElements++
		}
	}
	return countOfBlockedElements
}

function shouldBlock(element) {
	return element && element.innerText && hasBlockedSources(element)	
}

function hasBlockedSources(element) {
	return getBlockedSites().filter(source => element.innerText.includes(source)).length > 0
}

function getBlockedSites() {
	return blockedSites
}

function setBlockedSites() {
	chrome.storage.sync.get('blockedSites', (data) => {
		 blockedSites = !data.blockedSites ? [] : data.blockedSites
	})
}

'use strict'

let blockedSites = setBlockedSites()

window.onload=block()

function block() {
	const elements = document.getElementsByClassName('g')

	if (!elements) { return 0 }

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
	for (const source of getBlockedSites()) {
		if (element.innerText.includes(source)) {
			return true
		}
	}
	return false
}

function getBlockedSites() {
	return !blockedSites ? [''] : blockedSites
}

function setBlockedSites() {
	chrome.storage.sync.get('blockedSites', (data) => {
		 blockedSites = !data.blockedSites ? [''] : data.blockedSites
	})
}

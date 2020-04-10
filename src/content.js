'use strict'

let blockedSites = setBlockedSites()

window.onload=block()

function block() {
	const elements = document.getElementsByClassName('g')

	if (!elements) { return 0 }

	let countOfBlockedElements = 0
	for (const element of elements) {
		if (element && element.innerText && element.innerText.includes('dailymail.co.uk'))
		{
			element.setAttribute("style", "display:none;")
			countOfBlockedElements++
		}
	}
	return countOfBlockedElements
}


function getBlockedSites() {
	return blockedSites
}

function setBlockedSites() {
	chrome.storage.sync.get('blockedSites', (data) => {
		 blockedSites = !data.blockedSites ? [''] : data.blockedSites
	})
}

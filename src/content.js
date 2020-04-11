'use strict'

let blockedSites = setBlockedSites()

window.onload=init()

function init() {
	setBlockedSites()
	block()
}

function block() {
	const elements = document.getElementsByClassName('g')

	if (inputsValid(elements, getBlockedSites())) { return 0 }

	return [...elements].filter(element => shouldBlock(element))
				   .map(element => hide(element)).length
}

function shouldBlock(element) {
	return element && element.innerText && hasBlockedSources(element)	
}

function hasBlockedSources(element) {
	return getBlockedSites().filter(source => element.innerText.includes(source)).length > 0
}

function hide(element) {
	element.setAttribute('style', 'display:none;')
}

function inputsValid(elements, blockedSites) {
	return !elements || !blockedSites || blockedSites.length === 0
}

function getBlockedSites() {
	return blockedSites
}

function setBlockedSites() {
	chrome.storage.sync.get('blockedSites', (data) => {
		 blockedSites = !data.blockedSites ? [] : data.blockedSites
	})
}

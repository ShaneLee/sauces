'use strict'

let test = setBlockedSites()

function block() {
	const elements = findElements()

	if (inputsValid(elements, getBlockedSites())) { return 0 }

	return elements.filter(element => shouldBlock(element))
				   .map(element => hide(element)).length
}

function shouldBlock(element) {
	return element && element.innerHTML && hasBlockedSources(element)	
}

function hasBlockedSources(element) {
	return getBlockedSites().filter(source => element.innerHTML.includes(source)).length > 0
}

function hide(element) {
	element.setAttribute('style', 'display:none;')
}

function inputsValid(elements, blockedSites) {
	return !elements || !blockedSites
}

function findElements() {
	return [...findSearchListings(), ...findSearchCards()]
}

function findSearchCards() {
	return !document.getElementsByTagName('g-inner-card') ? [] : document.getElementsByTagName('g-inner-card')
}

function findSearchListings() {
	return !document.getElementsByClassName('g') ? [] : document.getElementsByClassName('g')
}

function getBlockedSites() {
	return blockedSites
}

function setBlockedSites() {
	chrome.storage.sync.get('blockedSites', (data) => {
		blockedSites = !data.blockedSites ? [] : data.blockedSites
		block()
	})
}

setTimeout(() => { block() }, 3000) // bodge for google finance

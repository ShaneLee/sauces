function save_options() {
  chrome.storage.sync.set({
		blockedSites: sourcesToArray(document.getElementById('blocked-sites').value)
  	}, () => {
    const status = document.getElementById('status')
    status.textContent = 'Options saved.'
    setTimeout(() => { status.textContent = '' }, 750)
  })
}

function sourcesToArray(sources) {
	return !sources ? [] : sources.trim().split('\n').map(val => val.trim()).filter(val => val)
}

function restore_options() {
  chrome.storage.sync.get('blockedSites', (data) => {
    document.getElementById('blocked-sites').value = !data.blockedSites ? '' : data.blockedSites.join('\n')
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)

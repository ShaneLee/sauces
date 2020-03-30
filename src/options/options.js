function save_options() {
  chrome.storage.sync.set({
    blockedSites: document.getElementById('blocked-sites').value.split('\n')
  }, () => {
    const status = document.getElementById('status')
    status.textContent = 'Options saved.'
    setTimeout(() => {
      status.textContent = ''
    }, 750)
  })
}

function restore_options() {
  chrome.storage.sync.get('blockedSites', (data) => {
    document.getElementById('blocked-sites').value = !data.blockedSites ? '' : data.blockedSites.join('\n')
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)

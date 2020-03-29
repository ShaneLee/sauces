function save_options() {
  const blockedSites = document.getElementById('blocked-sites').value.split('\n')
  chrome.storage.sync.set({
    blockedSites: blockedSites
  }, function() {
    const status = document.getElementById('status')
    status.textContent = 'Options saved.'
    setTimeout(() => {
      status.textContent = ''
    }, 750)
  })
}

function restore_options() {
  chrome.storage.sync.get('blockedSites', (data) => {
    document.getElementById('blocked-sites').value = data.blockedSites.join('\n')
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)

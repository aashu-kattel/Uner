const toggle = document.getElementById('toggleCleaning');

chrome.storage.sync.get('urlCleanerEnabled', data => {
  toggle.checked = data.urlCleanerEnabled || false;
});

toggle.addEventListener('change', async () => {
  const enabled = toggle.checked;
  await chrome.storage.sync.set({ urlCleanerEnabled: enabled });

  // Inject or remove content script accordingly
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (enabled) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } else {
    // Reload tab to reset URLs since removing scripts dynamically is tricky
    chrome.tabs.reload(tab.id);
  }
});

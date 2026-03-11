// SimpleURL - Background service worker for toggle functionality

// Initialize state on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: true });
  updateIcon(true);
});

// Handle icon click - toggle enabled state
chrome.action.onClicked.addListener(async () => {
  const { enabled } = await chrome.storage.local.get('enabled');
  const newState = !enabled;
  await chrome.storage.local.set({ enabled: newState });
  updateIcon(newState);
});

// Update icon appearance based on state
function updateIcon(enabled) {
  if (enabled) {
    chrome.action.setTitle({ title: 'SimpleURL (enabled) - Click to disable' });
    chrome.action.setBadge({ text: '' });
  } else {
    chrome.action.setTitle({ title: 'SimpleURL (disabled) - Click to enable' });
    chrome.action.setBadgeText({ text: 'OFF' });
    chrome.action.setBadgeBackgroundColor({ color: '#666666' });
  }
}

// Set initial state on startup
chrome.storage.local.get('enabled', ({ enabled }) => {
  if (enabled === undefined) {
    chrome.storage.local.set({ enabled: true });
    updateIcon(true);
  } else {
    updateIcon(enabled);
  }
});

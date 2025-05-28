# Uner - URL Cleaner Chrome Extension

## Overview

**Uner** is a Chrome extension that helps you clean tracking parameters from URLs on any webpage, protecting your privacy and providing cleaner, easier-to-read links. With a simple toggle button in the extension popup, you can enable or disable URL cleaning on the current tab.

---

## Features

- Removes common tracking parameters like `utm_source`, `fbclid`, `gclid`, and more from all links (`<a>` tags) on a webpage.
- Automatically cleans URLs in dynamically loaded content using a MutationObserver.
- Easy toggle control via extension popup.
- Saves toggle state across browser sessions using Chrome Storage Sync.
- Reloads the tab when toggled off to restore original URLs.

---

## 📥 Clone the Repository

First, clone the extension source code to your local machine:

```bash
git clone https://github.com/aashu-kattel/Uner.git
cd Uner
```
 # Add extension to your browser:

- Save all files in one folder.

- Open Chrome and go to `chrome://extensions/`.

- Enable Developer mode.

- Click “Load unpacked” and select your folder.

- Click the extension icon → toggle the checkbox.

- Reload the active tab if needed.

- All tracking parameters on links in the page will be cleaned when enabled.
---

## Why Use URL Cleaner?

- **Privacy:** Prevent websites and third parties from tracking your browsing via URL parameters.
- **Cleaner URLs:** Share and bookmark links without unnecessary clutter.
- **Security:** Avoid leaking sensitive tracking info.
- **Convenience:** Toggle cleaning on/off with a click.

---

## How It Works

1. When enabled, the extension injects a content script into the active tab.
2. The script scans all links on the page and removes predefined tracking parameters from their URLs.
3. It also monitors for dynamically added links and cleans them automatically.
4. When disabled, the tab reloads to revert URLs to their original form.

---

## Common Tracking Parameters Removed

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid`
- `fbclid`
- `mc_cid`
- `mc_eid`

---


## Usage

- Click the extension icon in Chrome’s toolbar.
- Toggle the **Enable URL Cleaner** checkbox on or off.
- When enabled, all links on the page will have tracking parameters removed instantly.
- Reload the tab to reset URLs if needed.

---


# SimpleURL

A browser extension that automatically removes tracking parameters from URLs when you copy or paste them.

## The Problem

When you copy a link from LinkedIn, Twitter, or other sites, you get URLs like this:
```
https://linkedin.com/posts/someone_topic-7436582875078176769?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAAKCsBPR...
```

## The Solution

SimpleURL automatically cleans the URL to:
```
https://linkedin.com/posts/someone_topic-7436582875078176769
```

No tracking parameters. Clean and simple.

## Installation

### Step 1: Download

Download this repository (click "Code" → "Download ZIP") or clone it:
```
git clone https://github.com/finnern/simpleurl.git
```

### Chrome / Edge / Brave

1. Go to `chrome://extensions/`
2. Enable **Developer Mode** (toggle in top right corner)
3. Click **"Load unpacked"**
4. Select the `simpleurl` folder
5. Done!

### Firefox

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **"Load Temporary Add-on"**
3. Select the `manifest.json` file inside the `simpleurl` folder
4. Done!

> **Note:** Temporary add-ons in Firefox are removed when you restart the browser. For permanent installation, the extension needs to be published on [Firefox Add-ons](https://addons.mozilla.org/).

### Pin the Extension (Recommended)

Click the puzzle piece icon (🧩) in your browser's toolbar and pin SimpleURL. This lets you quickly toggle the extension on/off.

## Toggle On/Off

Click the SimpleURL icon in your toolbar to toggle the extension:

- **Enabled**: Icon shows normally — URLs are automatically cleaned
- **Disabled**: Icon shows "OFF" badge — URLs are copied/pasted as-is

**Pro tip**: You can toggle while a URL is already in your clipboard! Copy a link, then toggle off and paste to get the full URL with tracking parameters, or toggle on and paste to get the clean version.

## How it works

- **On copy**: When you select and copy a URL, query parameters are automatically stripped
- **On paste**: When you paste a URL into any text field, it's automatically cleaned

Works with all URLs starting with `http://`, `https://`, or `www.`

## Supported Browsers

- Chrome
- Edge
- Brave
- Firefox
- Other Chromium-based browsers

## License

MIT

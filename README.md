# SimpleURL

A browser extension that automatically strips query parameters from URLs when you copy them.

## What it does

When you copy a URL like:
```
https://example.com/page?utm_source=newsletter&tracking=abc123
```

It becomes:
```
https://example.com/page
```

## Installation

### Chrome / Chromium-based browsers (Edge, Brave, etc.)

1. Download or clone this repository
2. Go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `simpleurl` folder

### Firefox

1. Download or clone this repository
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file

## How it works

The extension listens for copy events on all web pages. When you copy text that looks like a URL (starts with `http://`, `https://`, or `www.`), it automatically removes everything after the first `?` before placing it on your clipboard.

## License

MIT

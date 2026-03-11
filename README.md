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

1. **Download** this repository (click "Code" → "Download ZIP") or clone it:
   ```
   git clone https://github.com/finnern/simpleurl.git
   ```

2. **Open Chrome** and go to `chrome://extensions/`

3. **Enable Developer Mode** (toggle in top right corner)

4. **Click "Load unpacked"** and select the `simpleurl` folder

5. **Done!** The extension is now active.

## How it works

- **On copy**: When you select and copy a URL, query parameters are automatically stripped
- **On paste**: When you paste a URL into any text field, it's automatically cleaned

Works with all URLs starting with `http://`, `https://`, or `www.`

## Supported Browsers

- Chrome
- Edge
- Brave
- Other Chromium-based browsers

## License

MIT

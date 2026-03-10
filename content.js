// SimpleURL - Strip query parameters from URLs

// Handle copy events (when selecting and copying URLs manually)
document.addEventListener('copy', (event) => {
  const selection = window.getSelection().toString().trim();

  if (isURL(selection)) {
    const cleanedURL = stripQueryParams(selection);

    if (cleanedURL !== selection) {
      event.preventDefault();
      event.clipboardData.setData('text/plain', cleanedURL);
    }
  }
});

// Handle paste events (clean URLs when pasting into text fields)
document.addEventListener('paste', (event) => {
  const pastedText = event.clipboardData.getData('text/plain').trim();

  if (isURL(pastedText)) {
    const cleanedURL = stripQueryParams(pastedText);

    if (cleanedURL !== pastedText) {
      event.preventDefault();

      // Insert cleaned URL at cursor position
      const target = event.target;
      if (target.isContentEditable || target.tagName === 'TEXTAREA' || target.tagName === 'INPUT') {
        document.execCommand('insertText', false, cleanedURL);
      }
    }
  }
});

function isURL(text) {
  return /^(https?:\/\/|www\.)/i.test(text);
}

function stripQueryParams(url) {
  const questionIndex = url.indexOf('?');
  if (questionIndex !== -1) {
    return url.substring(0, questionIndex);
  }
  return url;
}

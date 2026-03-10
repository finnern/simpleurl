// SimpleURL - Strip query parameters from copied URLs

document.addEventListener('copy', (event) => {
  const selection = window.getSelection().toString().trim();

  // Check if the selection looks like a URL
  if (isURL(selection)) {
    const cleanedURL = stripQueryParams(selection);

    if (cleanedURL !== selection) {
      event.preventDefault();
      event.clipboardData.setData('text/plain', cleanedURL);
    }
  }
});

function isURL(text) {
  // Check if text starts with http://, https://, or www.
  return /^(https?:\/\/|www\.)/i.test(text);
}

function stripQueryParams(url) {
  // Remove everything after the first ?
  const questionIndex = url.indexOf('?');
  if (questionIndex !== -1) {
    return url.substring(0, questionIndex);
  }
  return url;
}

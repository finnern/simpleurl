// This script runs in the MAIN world to override clipboard API
(function() {
  let simpleurlEnabled = true;

  // Listen for state changes from content script
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SIMPLEURL_STATE') {
      simpleurlEnabled = event.data.enabled;
    }
  });

  function cleanURL(text) {
    if (simpleurlEnabled && /^(https?:\/\/|www\.)/i.test(text.trim())) {
      const questionIndex = text.indexOf('?');
      if (questionIndex !== -1) {
        return text.substring(0, questionIndex);
      }
    }
    return text;
  }

  // Override clipboard.writeText
  const originalWriteText = navigator.clipboard.writeText.bind(navigator.clipboard);
  navigator.clipboard.writeText = async function(text) {
    const cleaned = cleanURL(text);
    if (cleaned !== text) {
      console.log('[SimpleURL] writeText cleaned:', cleaned);
    }
    return originalWriteText(cleaned);
  };

  // Override clipboard.write (Canva uses this!)
  const originalWrite = navigator.clipboard.write.bind(navigator.clipboard);
  navigator.clipboard.write = async function(data) {
    if (!simpleurlEnabled) {
      return originalWrite(data);
    }

    // Process each ClipboardItem
    const newData = await Promise.all(data.map(async (item) => {
      const types = item.types;
      const newBlobs = {};

      for (const type of types) {
        const blob = await item.getType(type);

        if (type === 'text/plain') {
          const text = await blob.text();
          const cleaned = cleanURL(text);
          if (cleaned !== text) {
            console.log('[SimpleURL] clipboard.write cleaned:', cleaned);
          }
          newBlobs[type] = new Blob([cleaned], { type: 'text/plain' });
        } else {
          newBlobs[type] = blob;
        }
      }

      return new ClipboardItem(newBlobs);
    }));

    return originalWrite(newData);
  };

  console.log('[SimpleURL] Clipboard API override active');
})();

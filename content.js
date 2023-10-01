chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data) {
      const csvData = message.data.join('\n');
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = 'table_data.csv';
      a.click();
  
      URL.revokeObjectURL(url);
    }
  });
  
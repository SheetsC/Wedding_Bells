import { useEffect } from 'react';

declare global {
    interface Window {
      Dropbox: any;
    }
  }
  
const DropboxUploader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
    script.id = 'dropboxjs';
    script.setAttribute('data-app-key', 'YOUR_APP_KEY');
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        success: (files: any[]) => {
          alert('Files chosen: ' + files.map(file => file.link).join('\n'));
          // You can now save these links to your backend or display them on your website
        },
        cancel: () => {
          // Optional: handle when the user cancels the chooser
        },
        linkType: 'preview', // or "direct"
        multiselect: true, // or false
        folderselect: false, // or true
      };

      const button = window.Dropbox.createChooseButton(options);
      const chooserButton = document.getElementById('db-chooser');
      if (chooserButton) {
        chooserButton.appendChild(button);
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Your Wedding Photos</h1>
      <div
        id="db-chooser"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer"
      >
        Choose files from Dropbox
      </div>
    </div>
  );
};

export default DropboxUploader;


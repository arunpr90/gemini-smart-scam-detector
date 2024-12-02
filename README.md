# gemini-smart-scam-detector

Description
Gemini Smart Scam Detector is a Chrome extension designed to analyze the current website or any entered URL for potential scams or phishing risks using Gemini AI. It helps users make informed decisions while browsing the web and ensures their online safety.

Features:
Analyze the currently open browser tab for potential scams or phishing risks.
Enter a custom URL to scan and detect risks associated with the website.
User-friendly interface for seamless interaction.
Powered by Gemini AI for accurate and reliable scam detection.

Instructions for Installation:
Clone or download this repository to your local machine.
Open Google Chrome and navigate to chrome://extensions/.
Enable Developer mode (toggle in the top-right corner).
Click on Load unpacked.
Select the folder containing the downloaded files.
Important: Move the icon files to the main folder for proper functioning. Then update the manifest.json accordingly.
Update your API KEY in the popup.js file for the extension to work correctly.

How to Use:
Open the Gemini Smart Scam Detector from the Chrome toolbar.
Click "Analyze Current Tab" to scan the website currently open in your browser.
Enter a custom URL in the input field and click "Analyze Website" to scan any specific website.
The extension will display whether the website is safe or if there are potential risks.

Contributing:
We welcome contributions to enhance the Gemini Smart Scam Detector. Follow these steps to contribute:

Fork the repository.
Create a new branch:
git checkout -b feature-name
Make your changes and commit them:
git commit -m "Add feature description"
Push your branch:
git push origin feature-name
Create a pull request on GitHub.

Developer Notes
API Key: To enable the Gemini AI functionality, update your API key in the popup.js file:
const apiKey = "YOUR_API_KEY_HERE";
Icon Files: Ensure that the icons are moved to the main folder and referenced correctly in manifest.json.

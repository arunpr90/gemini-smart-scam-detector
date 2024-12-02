document.getElementById("analyzeTabButton").addEventListener("click", analyzeCurrentTab);
document.getElementById("analyzeUrlButton").addEventListener("click", () => {
  const urlInput = document.getElementById("urlInput").value.trim();
  if (urlInput) {
    analyzeWebsite(urlInput);
  } else {
    displayMessage("Please enter a valid URL.");
  }
});

async function analyzeCurrentTab() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url) {
      analyzeWebsite(tab.url);
    } else {
      displayMessage("No active tab found.");
    }
  } catch (error) {
    console.error("Error analyzing current tab:", error);
    displayMessage("Failed to analyze current tab.");
  }
}

async function analyzeWebsite(url) {
  try {
    const apiKey = "YOUR_API_KEY"; // Replace with your Gemini AI API key
    const apiEndpoint = "https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5:generateContent"; // Update the endpoint if needed
    const response = await fetch(`${apiEndpoint}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: { text: `Analyze this URL for potential scams: ${url}` },
        temperature: 0.7,
        maxOutputTokens: 256
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    const result = data.candidates?.[0]?.output || "No detailed analysis provided.";
    displayMessage(result.includes("scam") ? "This website may not be safe." : "This website is safe to use!");
  } catch (error) {
    console.error("Error analyzing website:", error);
    displayMessage("Analysis failed. Check the API endpoint or network connection.");
  }
}

function displayMessage(message) {
  const messageBox = document.getElementById("messageBox");
  messageBox.textContent = message;
}

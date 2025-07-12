function showMessage(elementId, message) {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
      messageElement.textContent = message;
      messageElement.style.display = 'block';
      setTimeout(() => {
        // hide the message after 5 seconds
        messageElement.style.display = 'none';
      }, 5000);
    }
  }

  module.exports = showMessage;
function goToUrl(url, newTab = false) {
  if (!newTab) {
    window.location.href = "https://" + url;
    return;
  }

  window.open("https://" + url, "_blank");
}

// TODO: make data.json and fetch all content from data.json
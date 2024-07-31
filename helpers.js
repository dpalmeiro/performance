function get_CI_Platform(platform) {
  const platformMap = {
    "windows": "windows11-64-shippable-qr",
    "mac":  "macosx1400-64-shippable-qr",
    "linux": "linux1804-64-shippable-qr",
    "android": "android-hw-a51-11-0-aarch64-shippable-qr"
  };
  return platformMap[platform] || platform;
}

function getFirefoxApp(platform) {
  const platformMap = {
    "windows": "firefox",
    "mac":  "firefox",
    "linux": "firefox",
    "android": "fenix"
  };
  return platformMap[platform] || platform;
}

function getChromeApp(platform) {
  const platformMap = {
    "windows": "custom-car",
    "mac":  "custom-car",
    "linux": "custom-car",
    "android": "cstm-car-m"
  };
  return platformMap[platform] || platform;
}

function loadReleaseInfo(callback) {
  fetch('https://product-details.mozilla.org/1.0/firefox_history_major_releases.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var releaseInfo = data;
      callback(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
}

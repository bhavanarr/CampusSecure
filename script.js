var firebaseConfig = {
  apiKey: "AIzaSyD3udHXRISy1YnuHz-mVuldGBphuL2OWxY",
  authDomain: "smart-campus-sos.firebaseapp.com",
  databaseURL: "https://smart-campus-sos-default-rtdb.firebaseio.com",
  projectId: "smart-campus-sos",
  storageBucket: "smart-campus-sos.firebasestorage.app",
  messagingSenderId: "636837085286",
  appId: "1:636837085286:web:bf47e4ac7f6ec568e82da7"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
document.getElementById("sosBtn").addEventListener("click", () => {
  
  document.getElementById("status").innerText = "📍 Getting location...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendSOS, showError);
  } else {
    alert("Geolocation not supported");
  }
});

function showError(error) {
  alert("Please allow location access!");
}

function sendSOS(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  document.getElementById("status").innerText =
    `Location captured: ${latitude}, ${longitude}`;
}
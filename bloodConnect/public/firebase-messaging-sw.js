importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDmCgn0w2_THV4kla1J0eLeJN9By4qNWqo",
    authDomain: "bloodconnect-cb439.firebaseapp.com",
    projectId: "bloodconnect-cb439",
    storageBucket: "bloodconnect-cb439.appspot.com",
    messagingSenderId: "543546317838",
    appId: "1:543546317838:web:191b92b9a78105e7def05f",
    measurementId: "G-M0G1GB6K45"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
const firebaseConfig = {
    apiKey: "AIzaSyB2SoJ7RIaXZzYo9PfwoEp6GoGNgnnuOZA",
    authDomain: "team-713f9.firebaseapp.com",
    projectId: "team-713f9",
    storageBucket: "team-713f9.appspot.com",
    messagingSenderId: "665302215369",
    appId: "1:665302215369:web:45ffaca80bb4357a8afb18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("logoutButton").addEventListener("click", function (event) {
    console.log("RUN");
    event.preventDefault();
    console.log("event ---- ", event);
    logout();

});


function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "file:///C:/Users/pc/Documents/Team%20Reporter/login.html";
    }).catch((error) => {
        // An error happened.
    });
}
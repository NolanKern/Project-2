(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFqpX9PhNVTyGMKTxeTtH16p1aceZYu3E",
    authDomain: "skeletor-6bdaa.firebaseapp.com",
    databaseURL: "https://skeletor-6bdaa.firebaseio.com",
    projectId: "skeletor-6bdaa",
    storageBucket: "skeletor-6bdaa.appspot.com",
    messagingSenderId: "578425950603"
  };
  firebase.initializeApp(config);

  // Get input elements
  const userEmail   = $("#userEmail");
  const userPswd    = $("#userPswd");

  // get button elements
  const btnLogin    = $("#btnLogin");
  const btnSignUp   = $("#btnSignUp");
  const btnLogout   = $("#btnLogout");

  // listeners
  btnLogin.click(e => {
    const email     = userEmail.val();
    const pass      = userPswd.val();
    const auth      = firebase.auth();

    const promise   = auth.signInWithEmailAndPassword(email, pass);
    promise.then(firebaseUser => {

      let user = {
        fb_uid: firebaseUser.uid
      };

      $.ajax("/api/user", {
        type: "POST",
        data: user
      }).then(
        function() {

          console.log("Logged in a user");
        }
      );
    });
  });

  btnSignUp.click(e => {
    const email     = userEmail.val();
    const pass      = userPswd.val();
    const auth      = firebase.auth();

    const promise   = auth.createUserWithEmailAndPassword(email, pass);
    promise.then(firebaseUser => {

      let user = {
        fb_uid: firebaseUser.uid
      };

      $.ajax("/api/user", {
        type: "POST",
        data: user
      }).then(
        function() {

          console.log("Made a new user");
        }
      );
    });
  });

  btnLogout.click(e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
    } else {
      console.log('not logged in');
    }
  });
}());
document.addEventListener("DOMContentLoaded", event => {

  //check if firebase is available
  const app = firebase.app();
  console.log(app);

  function googleLogin(){
    //provider that we want to use, in this case - Google
    const provider = new firebase.auth.GoogleAuthProvider();

    //Enable login with Google
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        document.write('Hello ' + user.displayName);
        console.log(user);
      })
      .catch(console.log);

  }

  document.getElementById ("login").addEventListener ("click", googleLogin, false);
});

document.addEventListener("DOMContentLoaded", event => {

  //check if firebase is available
  const app = firebase.app();
  console.log(app);

  // USER AUTHENTICATION
  // function googleLogin(){
  //   //provider that we want to use, in this case - Google
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //
  //   //Enable login with Google
  //   firebase.auth().signInWithPopup(provider)
  //     .then(result => {
  //       const user = result.user;
  //       document.write('Hello ' + user.displayName);
  //       console.log(user);
  //     })
  //     .catch(console.log);
  //
  // }
  //
  // document.getElementById ("login").addEventListener ("click", googleLogin, false);

  //Firestore DB
  const db = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);
  // const myPost = db.collection('posts').doc('firepost');

  // myPost.get()
  //   .then(doc => {
  //     const data = doc.data();
  //     document.write(data.title + '</br>');
  //     document.write(data.views);
  //   });

  //Listening for REAL-TIME Data Change
  // myPost.onSnapshot(doc => {
  //   const data = doc.data();
  //   document.write(data.title + '</br>');
  //   document.write(data.views + '</br>');
  // });

  //Everytime input changes, update Firestore
  // myPost.onSnapshot(doc => {
  //   const data = doc.data();
  //   document.querySelector('#title').innerHTML = data.title;
  // });
  //
  // function updatePost(e){
  //   const db = firebase.firestore();
  //   const myPost = db.collection('posts').doc('firepost');
  //   myPost.update({ title: e.target.value });
  // }
  // document.getElementById ("title").addEventListener ("onchange", updatePost, false);

  //Query Docs
  const productsRef = db.collection('products');
  const queryWhere = productsRef.where('price', '>', 25);
  const queryOrderBy = productsRef.orderBy('price', 'desc').limit(10);
  query.get()
    .then(products => {
      products.forEach(doc => {
        data = doc.data();
        document.write(data.name + 'at $' + data.price + '<br/>'); //NO RESULT
      })
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  try {
    // let app = firebase.app();
    // watch user 1 document for changes
    watchRtdbDocument('users/' + '1' + '/email');
  } catch (e) {
    console.log(e);
  }
});

function watchRtdbDocument(docRef) {
  // Get a reference to the database service
  var database = firebase.database();
  // define document to watch
  let doc = database.ref(docRef);
  // watch document for value changes
  doc.on('value', function(snapshot) {
    console.log(snapshot.val());
  });
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function getUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).get({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function googleLogin() {
  // define provider to be used
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      const user = result.user;
      console.log(user);
    }).catch(console.log);
}

function uploadFiles (files) {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child('horse.png');
  const file = files.item(0);
  // upload file to google storage
  const task = fileRef.put(file);
  // callback when upload is completed
  task.then(function(snapshot) {
    const url = snapshot.ref.getDownloadURL().then(function(downloadURL) {
      document.getElementById("imgUpload").setAttribute('src', downloadURL);
    });
  })
}

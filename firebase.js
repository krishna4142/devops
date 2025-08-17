const firebaseConfig = {
      apiKey: "AIzaSyBDKROSvSzPwXfostKb0lpzMSonRz_CCs",
      authDomain: "exam-71dac.firebaseapp.com",
      databaseURL: "https://exam-71dac-default-rtdb.firebaseio.com",
      projectId: "exam-71dac",
      storageBucket: "exam-71dac.appspot.com",
      messagingSenderId: "277973453768",
      appId: "1:277973453768:web:deb8493289262a324ea43fd",
      measurementId: "G-8TYS2GFJED"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    window.createuseraccount = function(e) {
         // e.preventDefault();
        const usernameRaw = document.getElementById('usernam').value.trim();
      const username = usernameRaw.replace(/[.#$\[\]]/g, "_"); // replaces invalid chars with "_"

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const number=document.getElementById('num').value.trim();
      
      const father=document.getElementById('fathername').value.trim()
      const address=document.getElementById('address').value.trim()
      const level=['one001']
      const htnum=`DEVEPS${Math.floor(Math.random()*100)}`
      // level.push('sec342')
      

      if (username === "") {
        alert("Username is required.");
        return;
      }
      database.ref('users/' + number).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
              alert('user was already exit')
            }
            else{
                 database.ref('users/' + number).set({
                  username: username,
                  email: email,
                  password: password,
                  father:father,
                  number:number,
                  level:level,
                  htnum:htnum,
                })
                .then(() => {
                  alert(`User "${username}" saved successfully.YOUR LEVEL PASSWORD"${level[level.length-1]}"`)
                })
                .catch((error) => {
                  alert('Error: ' + error.message)
                });
              }
        })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        });   
    }
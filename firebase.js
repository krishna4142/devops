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
      const htnum=`DEVEPS${Math.floor(Math.random()*1000)}`
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
                const file = document.getElementById("fileInput").files[0];
                if (!file) {
                    alert("Please select an image first!");
                    return;
                }

                const reader = new FileReader();
                reader.onloadend = function() {
                const base64Image = reader.result; // image in Base64 format
                 database.ref('users/' + number).set({
                  username: username,
                  email: email,
                  password: password,
                  father:father,
                  number:number,
                  level:level,
                  htnum:htnum,
                  profileImage: base64Image                
                })
                
                .then(() => {
                  alert(`User "${username}" saved successfully.YOUR LEVEL PASSWORD"${level[level.length-1]}"`)
                })
                .catch((error) => {
                  alert('Error: ' + error.message)
                });
                };
                reader.readAsDataURL(file); // Convert to Base64
              }
         })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        });   
    }


// user login session
    window.userlogin = function(e) {
      const usernameRaw = document.getElementById('viewusername').value.trim();
    const username = usernameRaw.replace(/[.#$\[\]]/g, "_");
    const number = document.getElementById('viewnum').value.trim();
    const password = document.getElementById('viewpasswors').value.trim();

    if (!username || !number || !password) {
        alert("Please enter both username and mobile number.");
        return;
    }

    console.log("Checking Firebase for number:", number);

    database.ref('users/' + number).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log("Firebase Data Found:", data);

                if (data.username === username && data.number === number && data.password===password) {
                      
                    document.querySelectorAll(".form-container").forEach(f => f.style.display = "none");
                    document.querySelector('.hero').style.display="none"
                    document.querySelector('.bodyprofile').style.display="block"
                    let getimg=document.getElementById('getimg');

                    getimg.src=`${data.profileImage}`
                    document.getElementById('setname').innerText=`${data.username}`
                    document.getElementById('getnum').innerText=`${data.username}`
                    document.getElementById('getnumber').innerText=`${data.number}`
                    document.getElementById('getlevel').innerText=`${data.level.length}`
                    document.getElementById('account').innerText=`SS${data.htnum}`

                } else {
                    alert('Username or Mobile Number does not match.');
                }
            } else {
                alert(`User not found for number: ${number}`);
            }
        })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        });
    }

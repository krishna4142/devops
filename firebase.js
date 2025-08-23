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
                    document.getElementById('usercoins').innerText=`${500}`

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




//create bank account
window.createbankaccount = function(e) {
    e.preventDefault(); // ✅ prevents reload

    let fullname = document.getElementById('fullname').value.trim();
    let dob = document.getElementById('dob').value.trim();
    let email = document.getElementById('bankemail').value.trim();
    let phone = document.getElementById('bankphone').value.trim();
    let address = document.getElementById('bankaddress').value.trim();

    console.log("Collected values:", { fullname, dob, email, phone, address });

    if (!fullname || !dob || !email || !phone || !address) {
        alert("All fields are required!");
        return;
    }

    let account = `AC${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                    database.ref('bankuser/' + phone).set({
                        Fullname:fullname,
                        Email:email,
                        dateofbirth: dob,
                        number: phone,
                        Address:address,
                        Account:account,
                        IFSC:"SS038BANK"
                    })
                    .then(() => {
                        console.log("✅ Data successfully written to Firebase!");
                        alert(`Bank account created successfully for "${fullname}" with A/C: ${account}`);
                    })
                    .catch((error) => {
                        console.error("Firebase Error:", error);
                        alert('Error: ' + error.message);
                    });}

            else{
                alert("YOU DON'N HAVE MEMBERSHIP ACCOUNT PLESE SIGIN FIRST MEMBERSHIP")
            }
    })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        });
}


window.registerMembershipForm = function(e) {
    e.preventDefault();

    const memberusername = document.getElementById('memberusername').value.trim();
    const phone = document.getElementById('membermobile').value.trim();

    // basic validation
    if (!memberusername) {
      alert("Username is required!");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }
    let ht=["0"]
    let cs=["0"]
    let js=["0"]
    // check if user exists
    database.ref('bankuser/' + phone).get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("User already exists with this phone number.");
          return;
        }

        // save new membership
        return database.ref('bankuser/' + phone).set({
          Fullname: memberusername,
          Email: "",
          dateofbirth: "",
          number: phone,
          Address: "",
          Account: "",
          IFSC:"",
          html:ht,
          css:cs,
          javascript:js,
          coins:'0'
        });
      })
      .then((result) => {
        alert('successed')
        if (result !== undefined) { // only if set() ran
          alert(`Membership registered successfully for "${memberusername}".`);
          document.getElementById("membershipForm").reset();
        }
      })
      .catch((error) => {
        console.error("Firebase Error:", error);
        alert("Error: " + error.message);
      });
  };

  // ✅ attach form handler properly
 



  //************************* SHOW QUESTION ******************************/
   window.startQuiz = function(e) {

      let username = document.getElementById("username").value;
      let number = document.getElementById("mobile").value;
      let level = document.getElementById("level").value;
      let code = document.getElementById("levelCode").value;


      database.ref('users/' + number).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              if(username==data.username){
                if(level<=data.level.length){
                  if(code==data.level[level-1]){
                    alert('ok')
                    document.getElementById('setusername').innerText=`${data.username}`
                    document.getElementById('setusernumber').innerText=`${data.number}`
                    document.getElementById('setusercode').innerText=`${data.level[(data.level.length)-1]}`

                    // document.querySelectorAll(".form-container").forEach(f => f.style.display = "none");
                    // document.querySelector('.hero').style.display="none"
                    // document.querySelector('.bodyprofile').style.display="none"
                    // document.querySelector('.bodystatus').style.display="none"
                    window.startQuizunic();
                  }
                  else{
                    alert('enter currect level code')
                  }
                }
                 
                 
                else{
                  alert('you are not elegebe for this level')
                }
              }
              else{
                alert('enter currect user name')
              }
            }
            else{
              alert('user not exist ')
            }

          })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        }); 
        
        
      if(username && mobile && level && code) {
        alert("✅ Login successful for " + username + " (Level " + level + ")");
        // Redirect to quiz page here
      } else {
        alert("⚠️ Please fill all fields correctly!");
      }
    }





  // Example functions
 window.checkUserStatus = function(e) {
  let number = document.getElementById("statusMobile").value.trim();
  alert("Checking status for Mobile: " + number);
   database.ref('users/' + number).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              alert('ok')

              document.querySelectorAll(".form-container").forEach(f => f.style.display = "none");
              document.querySelector('.hero').style.display="none"
              document.querySelector('.bodyprofile').style.display="none"
              document.querySelector('.bodystatus').style.display="block"

              let statususerimage=document.getElementById('statususerimage');
              statususerimage.src=`${data.profileImage}`;
              document.getElementById('statususername').innerText=`${data.username}`
               for(let i=0;i<data.level.length;i++){
                let certificateDiv=document.getElementById('statuusercode')
         
                  certificateDiv.innerHTML+=`
                  <span> Level${i+1}_ → ${data.level[i]}</span>
                  <button class="copy-btn" onclick="copyText('${data.level[i]}')">Copy</button><br>`
              }
             }
            else{
              alert('enter currect number')
            }
            })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        }); 
}
window.copyText = function (text) {
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = text;
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert(`Copied: ${text}`);
    }

window.nextlevel = function () {
  alert('ok')
  let number = document.getElementById('setusernumber').innerText;
  let username = document.getElementById("setusername").innerText;
  let code = document.getElementById('setusercode').innerText;

  database.ref('users/' + number).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                 const data = snapshot.val();
                // console.log("Firebase Data Found:", data);
                if (data.username === username && data.number === number) {
                  if(code==data.level[data.level.length-1]){
                      let level=data.level
                      level.push(`DEV${Math.floor(Math.random()*1000)}`)
                      database.ref('users/' + number).update({
                        level:level,
                      })
                      .then(() => {
                        alert(`User "${username}" saved successfully completed .YOUR NEXT LEVEL PASSWORD"${level[level.length-1]}"`)
                      })
                      .catch((error) => {
                        alert('Error: ' + error.message)
                      });
                  }
                  else{
                     
                  }
                }
            
                else{
                  alert('enter currect details')
                }
            }
              else{
                alert('user can not be exit ')
              }

         })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert('Error reading user data.');
        });            

}


//**********************************CHECK BANK STATUS**************************** */

window.bankcheckLogin = function () {
  const phone = document.getElementById('bankcheckuserNumber').value.trim();
  const userName = document.getElementById('bankcheckuserName').value.trim();
  database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              if(userName==data.Fullname){

                document.getElementById('login-section').style.display = 'none';
                document.getElementById('account-section').style.display = 'block';


                document.getElementById('checkusernam').innerText=`${data.Fullname}`
                document.getElementById('checkusernumber').innerText=`${data.number}`
                document.getElementById('checkuseraccount').innerText=`${data.Account}`
                document.getElementById('checkuserIFSC').innerText=`${data.IFSC}`
                document.getElementById('checkcoins').innerText=`${data.coins}`
              }
              else{
                alert('ENTER CURRECT USER NAME')
              }
            }
            else{
              alert('ENTER CURRECT DETAILS')
            }
          })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });
}

//**************************** VIEW MEMBERSHI ****************************/
window.bankmembershipLogin = function () {
  const phone = document.getElementById('bankmembershipNumber').value.trim();
  const userName = document.getElementById('bankmembershipuserName').value.trim();
  database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              if(userName==data.Fullname){

                document.getElementById('login-section').style.display = 'none';
                document.getElementById('account-section').style.display = 'block';


                document.getElementById('membershipusernam').innerText=`${data.Fullname}`
                document.getElementById('membershipusernumber').innerText=`${data.number}`
                document.getElementById('membershiphtml').innerText=`${data.html.length}`
                document.getElementById('membershipcss').innerText=`${data.css.length}`
                document.getElementById('membershipscript').innerText=`${data.javascript.length}`
              }
              else{
                alert('ENTER CURRECT USER NAME')
              }
            }
            else{
              alert('ENTER CURRECT DETAILS')
            }
          })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });
}


window.htmlsubmitUser = function () {
  const phone = document.getElementById('htmlmobile').value.trim();
  const userName = document.getElementById('htmlusername').value.trim();
  const levelselectionhtml=document.getElementById('levelselectionhtml').value.trim()
  database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              if(userName==data.Fullname){
                if(levelselectionhtml==data.html.length){
                  document.getElementById('printusernum').innerText=`${data.number}`
                  document.getElementById('printac').innerText=`${data.Account}`

                  window.bankhtmlsubmitUser()
                  // let html=data.html
                  //     html.push(`${(data.html.length)+1}`)
                  //     database.ref('bankuser/' + phone).update({
                  //       html:html,
                  //     })
                  //     .then(() => {
                  //       alert(`User "${username}" saved successfully completed .YOUR NEXT LEVEL PASSWORD"${level[level.length-1]}"`)
                  //     })
                  //     .catch((error) => {
                  //       alert('Error: ' + error.message)
                  //     });
                }
                else if(levelselectionhtml<=data.html.length){
                  alert('YOU ARE COMPLETED THIS LEVEL')
                }
                else{
                  alert('YOU ARE NOT ELEGIBLE THIS LEVEL , CHOUSE CURRRECT LEVEL')
                }

              }}

          })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });

}
window.updatelevelhtml = function () {
    const phone = document.getElementById('printusernum').innerText
   database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
               let html=data.html
                      html.push(`${(data.html.length)+1}`)
                      database.ref('bankuser/' + phone).update({
                        html:html,
                      })
                      .then(() => {
                        alert(`User "${data.Fullname}" successfully completed .YOUR ELRGIBLE FORNEXT LEVEL "`)
                      })
                      .catch((error) => {
                        alert('Error: ' + error.message)
                      });
            }
        })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });
}


//*********************************CSS LEVEL ****************************** */

window.csssubmitUser = function () {
  const phone = document.getElementById('cssmobile').value.trim();
  const userName = document.getElementById('cssusername').value.trim();
  const levelselectionhtml=document.getElementById('levelselectioncss').value.trim()
  database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              if(userName==data.Fullname){
                if(levelselectionhtml==data.css.length){
                  document.getElementById('cssprintusernum').innerText=`${data.number}`
                  document.getElementById('cssprintac').innerText=`${data.Account}`

                  window.bankcsssubmitUser()
                  // let html=data.html
                  //     html.push(`${(data.html.length)+1}`)
                  //     database.ref('bankuser/' + phone).update({
                  //       html:html,
                  //     })
                  //     .then(() => {
                  //       alert(`User "${username}" saved successfully completed .YOUR NEXT LEVEL PASSWORD"${level[level.length-1]}"`)
                  //     })
                  //     .catch((error) => {
                  //       alert('Error: ' + error.message)
                  //     });
                }
                else if(levelselectioncss<=data.css.length){
                  alert('YOU ARE COMPLETED THIS LEVEL')
                }
                else{
                  alert('YOU ARE NOT ELEGIBLE THIS LEVEL , CHOUSE CURRRECT LEVEL')
                }

              }}

          })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });

}
window.updatelevelcss = function () {
    const phone = document.getElementById('cssprintusernum').innerText
   database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
               let css=data.css
                      css.push(`${(data.css.length)+1}`)
                      database.ref('bankuser/' + phone).update({
                        css:css,
                      })
                      .then(() => {
                        alert(`User "${data.Fullname}" successfully completed .YOUR ELRGIBLE FORNEXT LEVEL "`)
                      })
                      .catch((error) => {
                        alert('Error: ' + error.message)
                      });
            }
        })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });
}

///***************************** JAVASCRIPT QUESTIONS ****************************/

window.javascriptsubmitUser = function () {
  const phone = document.getElementById('javascriptmobile').value.trim();
  const userName = document.getElementById('javascriptusername').value.trim();
  const levelselectionjavascript=document.getElementById('levelselectionjavascript').value.trim()
  database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              if(userName==data.Fullname){
                if(levelselectionjavascript==data.javascript.length){
                  document.getElementById('javascriptprintusernum').innerText=`${data.number}`
                  document.getElementById('javascriptprintac').innerText=`${data.Account}`

                  window.bankjavascriptsubmitUser()
                  // let html=data.html
                  //     html.push(`${(data.html.length)+1}`)
                  //     database.ref('bankuser/' + phone).update({
                  //       html:html,
                  //     })
                  //     .then(() => {
                  //       alert(`User "${username}" saved successfully completed .YOUR NEXT LEVEL PASSWORD"${level[level.length-1]}"`)
                  //     })
                  //     .catch((error) => {
                  //       alert('Error: ' + error.message)
                  //     });
                }
                else if(levelselectionjavascript<=data.javascript.length){
                  alert('YOU ARE COMPLETED THIS LEVEL')
                }
                else{
                  alert('YOU ARE NOT ELEGIBLE THIS LEVEL , CHOUSE CURRRECT LEVEL')
                }

              }}

          })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });

}
window.updateleveljavascript = function () {
    const phone = document.getElementById('javascriptprintusernum').innerText
   database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              addingcoins(phone)
               let javascript=data.javascript
                      javascript.push(`${(data.javascript.length)+1}`)
                      database.ref('bankuser/' + phone).update({
                        javascript:javascript,
                      })
                      .then(() => {
                        alert(`User "${data.Fullname}" successfully completed .YOUR ELRGIBLE FORNEXT LEVEL "`)
                      })
                      .catch((error) => {
                        alert('Error: ' + error.message)
                      });
            }
        })
        .catch((error) => {
          console.error("Firebase Error:", error);
          alert("Error: " + error.message);
        });
}

//********************* COINS BLOCK **************************/
window.addingcoins = function (phone) {
    database.ref('bankuser/' + phone).once('value')
        .then((snapshot) => {
          const data = snapshot.val();
            if (snapshot.exists()) {
              let javascriptscroe=document.getElementById('javascriptscroe').innerText
              let coins=data.coins
              coins+=parseInt(javascriptscroe);
              database.ref('bankuser/' + phone).update({
                        coins:coins,
                      })
            }
            })
            .catch((error) => {
              alert('Error: ' + error.message)
            });
}

function generateUniqueLink() {
  const uniqueId = crypto.randomUUID(); // e.g., "f3bcbf96-1738-4b3a-a820-3b214a8f7e9b"
  const link = `https://example.com/invite/${uniqueId}`;
  return link;
}
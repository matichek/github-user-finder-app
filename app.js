// init github

const github = new Github;

const ui = new UI;

const searchUser = document.getElementById("searchUser");

// Search input event listeren

searchUser.addEventListener('keyup', (e)=> {
  // get input text

  const userText = e.target.value;

  if(userText !== '') {

    // make http call

    github.getUser(userText)
      .then(data => {
      
        if(data.profile.message === 'Not Found') {

          // Show alert 

          ui.showAlert('User not found', 'alert alert-danger');

        } else {

          // Show profile

  
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);

        }

      })

  } else {

    // clear profile

    ui.clearProfil();



  }
})
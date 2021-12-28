class UI {
  constructor() {
    this.profile = document.getElementById('profile');

  }

  // display profile
  showProfile(user) {


    this.profile.innerHTML = `
    
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4">View profile</a>
          </div>
          <div class="col-md-9">
          
            <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public gist: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-success">Following: ${user.following}</span>

            <br><br>

            <ul class="list-group">
            
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>

            </ul>

          </div>
        </div>
      </div>

      <h3 class="page-heading mb-3">Latest Repos</h3>

      <div id="repos"></div>


    `;

    console.log(user);

  }

  showRepos(repos) {

    let output = '';

    repos.forEach((repo) => {

      output += `
      
        <div class="card card-body mb-2">
        
          <div class="row">
          
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>

            <div class="col-md-6">

            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Public gist: ${repo.watchers}</span>
            <span class="badge badge-success">Followers: ${repo.forms_count}</span>

            </div>

          </div>

        </div>

      `

    });

    // output 

    document.getElementById('repos').innerHTML = output;

  }

  // show alert message
  showAlert(message, className) {

    // clear any remaining alerts

    this.clearAlert();

    // create div

    const div = document.createElement('div');
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));

    // get parent 
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => {

      this.clearAlert();

    }, 2000);

  }

  // clear alrt message

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfil() {
    this.profile.innerHTML = ''
  }


}
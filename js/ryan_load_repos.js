let all_repos; // All repos returned from API cal
let current_repos; // Current repos displayed to user

// Load repos using an Ajax request and the GitHub API
window.onload = () => {
  $.ajax({
    url: "https://api.github.com/users/rakane/repos",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
      all_repos = res;
      current_repos = all_repos;
      displayRepos(all_repos);

      document.getElementById(
        "num-projects"
      ).innerHTML = `${all_repos.length}+ Projects`;
    }
  });
};

// Filter GitHub repos based on the coding language
languageFilter = val => {
  let temp = [];

  if (val == "") {
    displayRepos(all_repos);
  } else {
    all_repos.forEach(object => {
      if (object.language === val) {
        temp.push(object);
      }
    });

    current_repos = temp;
    clearRepos();
    displayRepos(current_repos);
  }
};

// Search GitHub repos, matching the repo name to user input
searchRepos = val => {
  let temp = [];

  all_repos.forEach(object => {
    // Check string match
    if (object.name.toLowerCase().search(val.toLowerCase()) >= 0) {
      temp.push(object);
    }
  });

  current_repos = temp;
  // Clear repos and then display new
  clearRepos();
  displayRepos(current_repos);
};

// Reset repos back to all repos grabbed from the GitHub API
resetRepos = () => {
  let projects = document.getElementById("repos");
  projects.innerHTML = "";
  current_repos = all_repos;
  displayRepos(all_repos);
};

// Clear repos from user view
clearRepos = () => {
  let projects = document.getElementById("repos");
  projects.innerHTML = "";
};

// Add repos in array to the document structure
displayRepos = repos => {
  repos.forEach(object => {
    let projects = document.getElementById("repos");
    let temp = object.name.replace(/-/g, " ").replace(/_/g, " "); // Replace dashes and underscores for spaces
    let name = temp[0].toUpperCase() + temp.slice(1);

    // Add project to HTML
    let add = `<a class="repo-link" href="${object.html_url}" alt="Repository Link" target="_blank">
      <div class="project">
      <h4>${name}</h4>
      <h6>${object.language}</h6>
      <p>${object.description}</p>
      </div>
      </a>`;
    projects.innerHTML += add;
  });
};

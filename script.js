// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// List of repositories to exclude
const excludedRepos = ["cse360_helloworld", "LEGO-EV3"];

// Fetch repositories from the GitHub API
fetch("https://api.github.com/users/thekavishshah/repos")
  .then(response => response.json())
  .then(repos => {
    // Filter out excluded repositories
    const filteredRepos = repos.filter(repo => !excludedRepos.includes(repo.name));
    displayRepos(filteredRepos);
  })
  .catch(error => console.error("Error fetching repositories:", error));

// Function to display repositories
function displayRepos(repos) {
  const projectsContainer = document.getElementById("projects"); // Replace 'projects' with your actual container ID

  // Clear the container
  projectsContainer.innerHTML = "";

  repos.forEach(repo => {
    const project = document.createElement("div");
    project.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description available."}</p>
      <a href="${repo.html_url}" target="_blank">View on GitHub</a>
    `;
    projectsContainer.appendChild(project);
  });
}

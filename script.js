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

fetch('https://api.github.com/users/thekavishshah/repos')
    .then(response => response.json())
    .then(repos => {
        const projectsContainer = document.querySelector('.projects-grid');
        repos.forEach(repo => {
            projectsContainer.innerHTML += `
                <div class="project-item">
                    <img src="path/to/default-image.jpg" alt="${repo.name}">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available.'}</p>
                    <a href="${repo.html_url}" class="btn">View Project</a>
                </div>
            `;
        });
    });



    fetch("https://api.github.com/users/thekavishshah/repos")
    .then(response => response.json())
    .then(repos => {
      // Filter out unwanted repositories
      const filteredRepos = repos.filter(repo => 
        !["https://github.com/thekavishshah/cse360_helloworld", "https://github.com/thekavishshah/LEGO-EV3"].includes(repo.name)
      );
  
      // Render filtered repositories
      displayRepos(filteredRepos);
    });
  
  function displayRepos(repos) {
    const projectsContainer = document.getElementById("projects");
    repos.forEach(repo => {
      const project = document.createElement("div");
      project.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectsContainer.appendChild(project);
    });
  }
  
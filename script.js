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

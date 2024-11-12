const username = 'abrakingoo';  // Replace with your GitHub username

async function fetchRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();
        displayRepos(repos);
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

function displayRepos(repos) {
    const reposContainer = document.getElementById('repos');
    reposContainer.innerHTML = '';  // Clear any existing content

    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repo');
        repoElement.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || 'No description available.'}</p>
            <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        `;
        reposContainer.appendChild(repoElement);
    });
}

// Fetch repositories on page load
window.onload = fetchRepos;

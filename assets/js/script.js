// Toggle dark/light mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(currentTheme + '-mode');
themeToggle.checked = currentTheme === 'light';

// Toggle theme on checkbox change
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'light' : 'dark';
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(newTheme + '-mode');
    localStorage.setItem('theme', newTheme);
});

// Profile selection
const profileLinks = document.querySelectorAll('.profile a');

profileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const img = link.querySelector('img');
        const name = link.nextElementSibling.textContent;
        const imageSrc = img.src;
        
        localStorage.setItem('perfilAtivoNome', name);
        localStorage.setItem('perfilAtivoImagem', imageSrc);
    });
});
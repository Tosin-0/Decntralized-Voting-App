// Placeholder for voting form submission
document.getElementById('vote-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your vote has been submitted securely!');
  });
  
  // Placeholder for downloading results
  function downloadResults() {
    alert('Downloading full results...');
  }
  // Smooth scrolling for navigation links (Updated for new links)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  
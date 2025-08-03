document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const formatted = now.toLocaleDateString("en-KE", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById("current-date").textContent = formatted;
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("sidebar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("sidebar-container").innerHTML = html;

      const now = new Date();
      const formatted = now.toLocaleDateString("en-KE", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      document.getElementById("current-date").textContent = formatted;
    })
    .catch(err => console.error("Failed to load sidebar:", err));
});


document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);

    // Simulate loading data
    simulateDataLoading();

    // Navigation active state
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });

    // Notification dropdown simulation
    const notificationBell = document.querySelector('.notifications');
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            alert("Notification dropdown would appear here in a real implementation");
        });
    }

    // Logout functionality
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'login.html';
            }
        });
    }
});

function simulateDataLoading() {
    // This would be replaced with actual API calls in a real implementation
    console.log("Loading teacher data...");
    
    // Simulate loading classes
    setTimeout(() => {
        console.log("Classes data loaded");
    }, 500);
    
    // Simulate loading announcements
    setTimeout(() => {
        console.log("Announcements data loaded");
    }, 800);
    
    // Simulate loading pending assessments
    setTimeout(() => {
        console.log("Pending assessments loaded");
    }, 1000);
}

// Utility function for future API calls
async function fetchTeacherData(endpoint) {
    try {
        // In a real app, this would fetch from your backend API
        const response = await fetch(`/api/teacher/${endpoint}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
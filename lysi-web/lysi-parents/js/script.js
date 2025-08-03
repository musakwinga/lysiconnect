// Parent-specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize parent dashboard
    initParentDashboard();
    
    // Child selection functionality
    const childItems = document.querySelectorAll('.child-item');
    childItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real app, this would load the selected child's data
            const childName = this.querySelector('h3').textContent;
            console.log(`Loading data for ${childName}`);
        });
    });
    
    // RSVP button functionality
    const rsvpButtons = document.querySelectorAll('.btn-outline');
    rsvpButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const eventTitle = this.closest('.event-item').querySelector('h3').textContent;
            alert(`RSVP functionality for "${eventTitle}" would be implemented here`);
        });
    });
});

function initParentDashboard() {
    // This would fetch parent-specific data in a real implementation
    console.log("Initializing parent dashboard...");
    
    // Simulate loading children data
    setTimeout(() => {
        console.log("Children data loaded");
    }, 500);
    
    // Simulate loading events
    setTimeout(() => {
        console.log("Events data loaded");
    }, 800);
    
    // Simulate loading grades
    setTimeout(() => {
        console.log("Grades data loaded");
    }, 1000);
}

// Function to switch between children
function switchChild(childId) {
    // In a real app, this would update the dashboard for the selected child
    console.log(`Switching to child with ID: ${childId}`);
    // Update all dashboard widgets with the selected child's data
}

document.addEventListener("DOMContentLoaded", () => {
  const dateSpan = document.getElementById("current-date");
  const form = document.getElementById("grade-filter-form");
  const gradesBody = document.getElementById("grades-body");

  // Set today's date
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateSpan.textContent = today;

  const sampleGrades = {
    "Term 1-2025": [
      { subject: "Mathematics", grade: "A", remark: "Excellent" },
      { subject: "English", grade: "B+", remark: "Very Good" },
      { subject: "Science", grade: "A-", remark: "Great effort" },
    ],
    "Term 2-2025": [
      { subject: "Mathematics", grade: "B", remark: "Good progress" },
      { subject: "English", grade: "A", remark: "Excellent!" },
      { subject: "Science", grade: "B+", remark: "Well done" },
    ],
    "Term 3-2025": [
      { subject: "Mathematics", grade: "A-", remark: "Excellent" },
      { subject: "English", grade: "A", remark: "Outstanding" },
      { subject: "Science", grade: "A", remark: "Top marks" },
    ]
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const term = document.getElementById("term").value;
    const year = document.getElementById("year").value;
    const key = `${term}-${year}`;

    const grades = sampleGrades[key] || [];
    gradesBody.innerHTML = "";

    if (grades.length === 0) {
      gradesBody.innerHTML = `<tr><td colspan="3">No grades found for selected term and year.</td></tr>`;
    } else {
      grades.forEach((g) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${g.subject}</td>
          <td>${g.grade}</td>
          <td>${g.remark}</td>
        `;
        gradesBody.appendChild(row);
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dateSpan = document.getElementById("current-date");
  const inboxList = document.getElementById("inbox-list");
  const form = document.getElementById("message-form");

  // Set current date
  const today = new Date().toLocaleDateString("en-KE", {
    year: "numeric", month: "long", day: "numeric"
  });
  dateSpan.textContent = today;

  // Sample inbox messages
  const messages = [
    {
      from: "Mr. Kipkoech",
      content: "Your child is doing great in math. Keep encouraging him!",
      date: "2025-07-20"
    },
    {
      from: "Ms. Achieng",
      content: "Please attend the parent meeting on Friday.",
      date: "2025-07-18"
    }
  ];

  function renderMessages() {
    inboxList.innerHTML = "";
    messages.forEach(msg => {
      const div = document.createElement("div");
      div.className = "inbox-message";
      div.innerHTML = `
        <h4>${msg.from}</h4>
        <p>${msg.content}</p>
        <span>${msg.date}</span>
      `;
      inboxList.appendChild(div);
    });
  }

  // Initial render
  renderMessages();

  // Handle form submission
  form.addEventListener("submit", e => {
    e.preventDefault();
    const teacher = document.getElementById("teacher").value;
    const content = document.getElementById("message").value;
    const newMsg = {
      from: `You to ${teacher}`,
      content,
      date: today
    };
    messages.unshift(newMsg); // Simulate inbox update
    renderMessages();
    form.reset();
    alert("Message sent successfully!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date().toLocaleDateString("en-KE", {
    year: "numeric", month: "long", day: "numeric"
  });
  document.getElementById("current-date").textContent = currentDate;

  const attendanceData = [
    { date: "2025-07-01", status: "Present", remark: "On time" },
    { date: "2025-07-02", status: "Absent", remark: "Sick" },
    { date: "2025-07-03", status: "Present", remark: "On time" },
    { date: "2025-07-04", status: "Late", remark: "Came at 9:30 AM" },
    { date: "2025-07-05", status: "Excused", remark: "Medical appointment" },
  ];

  const tbody = document.getElementById("attendance-body");

  function renderAttendance(records) {
    tbody.innerHTML = "";
    records.forEach(record => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.date}</td>
        <td class="status-${record.status.toLowerCase()}">${record.status}</td>
        <td>${record.remark}</td>
      `;
      tbody.appendChild(row);
    });
  }

  // Initial render
  renderAttendance(attendanceData);

  // Filter simulation
  document.getElementById("filter-form").addEventListener("submit", e => {
    e.preventDefault();
    // simulate filtered results
    alert("Filtered for: " + document.getElementById("month").value + " " + document.getElementById("year").value);
    renderAttendance(attendanceData); // in real use, filter or fetch here
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const children = [
    {
      id: 1,
      name: "Brian Kamau",
      class: "Grade 6 - West",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      name: "Faith Kamau",
      class: "Grade 3 - East",
      avatar: "https://i.pravatar.cc/150?img=12"
    }
  ];

  const container = document.getElementById("children-container");

  children.forEach(child => {
    const card = document.createElement("div");
    card.className = "child-card fade-in";
    card.innerHTML = `
      <img src="${child.avatar}" alt="${child.name}" class="child-avatar" />
      <div class="child-name">${child.name}</div>
      <div class="child-class">${child.class}</div>
    `;

    card.addEventListener("click", () => {
      // Redirect or load dashboard for this child
      alert(`Opening portal for ${child.name}`);
      // window.location.href = `/parent/child/${child.id}`;
    });

    container.appendChild(card);
  });
});

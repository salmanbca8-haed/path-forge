const roadmaps = {
  frontend: [
    "HTML > CSS > JavaScript > React > Projects"
  ],

  data: ["Excel > SQL > Python > Data Cleaning > Data Analysis > Data Visualization > Statistics > Projects > Interview Prep"],

  uiux: ["Design Fundamentals  >  Color Theory & Typography  >  User Research  >  Wireframing  >  Prototyping (Figma)  >  UI Design Principles  >  UX Design Process  >  Usability Testing  >  Design Systems  >  Portfolio Projects"],

  cyber: [
    "Networking Basics",
    ">",
    "Operating Systems (Linux & Windows)",
    ">",
    "Cybersecurity Fundamentals",
    ">",
    "Cryptography Basics",
    ">",
    "Web Security",
    ">",
    "Ethical Hacking",
    ">",
    "Vulnerability Assessment",
    ">",
    "Penetration Testing",
    ">",
    "Security Tools (Wireshark, Metasploit)",
    ">",
    "Certifications & Projects"
  ],
  aiml: [
    "Python Programming",
    ">",
    "Mathematics (Linear Algebra, Statistics)",
    ">",
    "Data Preprocessing",
    ">",
    "Machine Learning Basics",
    ">",
    "Supervised & Unsupervised Learning",
    ">",
    "Deep Learning Fundamentals",
    ">",
    "Frameworks (TensorFlow / PyTorch)",
    ">",
    "Model Evaluation",
    ">",
    "Real-world Projects",
    ">",
    "Deployment Basics"
  ],
  full: [
    "HTML",
    ">",
    "CSS",
    ">",
    "JavaScript",
    ">",
    "Frontend Framework (React)",
    ">",
    "Version Control (Git & GitHub)",
    ">",
    "Backend Basics (Node.js)",
    ">",
    "Database (MongoDB / SQL)",
    ">",
    "REST APIs",
    ">",
    "Authentication & Security",
    ">",
    "Deployment & Projects"

  ],
  auto: [
    "Programming Basics (Python)",
    ">",
    "Scripting Fundamentals",
    ">",
    "Web Automation (Selenium)",
    ">",
    "File & Data Automation",
    ">",
    "API Automation",
    ">",
    "Task Scheduling",
    ">",
    "Testing Automation Basics",
    ">",
    "RPA Tools (UiPath / Automation Anywhere)",
    ">",
    "Real-world Automation Projects",
    ">",
    "Optimization & Scaling"
  ]
};



function loadRoadmap(role) {
  const roadmapDiv = document.getElementById("roadmap");
  roadmapDiv.innerHTML = "";
  roadmapDiv.classList.remove("hidden");

  roadmaps[role].forEach(topic => {
    const div = document.createElement("div");
    div.className = "roadmap-step";
    div.innerText = topic;

    div.onclick = () => showTopic(topic);

    roadmapDiv.appendChild(div);
  });
}

function showTopic(topic) {
  const topicDiv = document.getElementById("topicDetails");
  topicDiv.classList.remove("hidden");

  let html = `<div class="topic-box"><h2>${topic}</h2>`;

  if (questions[topic]) {
    html += "<h3>Interview Questions</h3>";

    questions[topic].forEach(item => {
      html += `
        <div class="question" onclick="showAnswer('${item.a}')">
          ${item.q}
        </div>
      `;
    });
  } else {
    html += "<p>No questions added yet</p>";
  }

  html += "</div>";
  topicDiv.innerHTML = html;
}

function showAnswer(answer) {
  alert(answer);
}
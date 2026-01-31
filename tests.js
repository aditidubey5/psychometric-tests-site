const tests = [
  {
    name: "Personality Assessment",
    description: "Measures basic personality traits using a non-clinical framework.",
    duration: "10–15 minutes",
    type: "Self-report",
    link: "tests/personality.html"
  },
  {
    name: "Aptitude Test",
    description: "Assesses logical reasoning and problem-solving ability.",
    duration: "20 minutes",
    type: "Cognitive",
    link: "tests/aptitude.html"
  },
  {
    name: "Stress Awareness Scale",
    description: "Helps identify general stress patterns in daily life.",
    duration: "5–7 minutes",
    type: "Well-being",
    link: "tests/stress.html"
  }
];

const container = document.getElementById("test-container");

tests.forEach(test => {
  const card = document.createElement("div");
  card.className = "test-card";

  card.innerHTML = `
    <h2>${test.name}</h2>
    <p>${test.description}</p>
    <ul>
      <li><strong>Type:</strong> ${test.type}</li>
      <li><strong>Duration:</strong> ${test.duration}</li>
    </ul>
    <a href="${test.link}" class="btn">Take Test</a>
  `;

  container.appendChild(card);
});

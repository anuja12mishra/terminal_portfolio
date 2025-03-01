const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: `
Available commands:
  - help       : List all available commands.
  - about      : Learn more about me.
  - skills     : See my technical skills.
  - projects   : View my ongoing and completed projects.
  - achievements: Navigate to a directory showcasing my achievements.
  - contact    : Get my contact information.
  - clear      : Clear the terminal output.
`,
  about: `
Hi, I'm Anuja Mishra, a passionate developer and tech enthusiast. 
I specialize in building interactive web applications and solving complex problems.
I believe in continuous learning and am always eager to explore new technologies.
`,
  skills: `
Technical Skills:
  - Programming Languages: JavaScript, Python, C++, Java
  - Frameworks & Libraries: React, Node.js, Express, Bootstrap
  - Tools & Platforms: Git, Docker, AWS, CI/CD Pipelines
  - Others: REST APIs, SQL, MongoDB, WebSocket Integration
`,
projects: `
Here are a few of my projects:
  - <a href="#" target="_blank">Portfolio Website</a>: A fully interactive terminal-style portfolio (You're here!).
  - <a href="https://github.com/anujamishra/automated-bus-scheduling" target="_blank">Automated Bus Scheduling</a>: Optimized DTC bus routes using AI and GIS (Ongoing..........).
  - <a href="https://github.com/anujamishra/tic-tac-toe-ai" target="_blank">Tic Tac Toe Game</a>: A game with an AI opponent using Minimax Algorithm.
  - <a href="https://github.com/anujamishra/data-visualizer" target="_blank">Data Visualizer</a>: Analyzes and visualizes data trends using Python's Matplotlib and Pandas.
  - <a href="https://anuja12mishra.github.io/OpenBookApi" target="_blank">Book shop</a>: Used google books api for building this site.
More projects coming soon!
`,
  achievements: `
Welcome to the achievements directory! Here are a few highlights:
  - Published an article on DSA and Web-dev <a href="https://www.geeksforgeeks.org/user/25anuja/contributions" target="_blank">Link</a>.
  - Achieved 1000+ problem solutions on LeetCode,GFG and HackerRank.
Type "cd achievements" to explore photos of my awards and certifications (in the linkedin certifications section).
`,
  contact: `
You can reach me here:
  - LinkedIn: https://www.linkedin.com/in/anuja-mishra-1193a2245/
  - GitHub: https://github.com/anuja12mishra
  - Portfolio: (You're here!)
`,
};


let commandHistory = [];
let historyIndex = -1;

// Display default output
const defaultBanner = `
╔═╗╔╗╔╦ ╦ ╦╔═╗  ╔╦╗╦╔═╗╦ ╦╦═╗╔═╗
╠═╣║║║║ ║ ║╠═╣  ║║║║╚═╗╠═╣╠╦╝╠═╣
╩ ╩╝╚╝╚═╝╚╝╩ ╩  ╩ ╩╩╚═╝╩ ╩╩╚═╩ ╩
 ╔══════════════════════════════════════════════════════════════════════╗
 ║             Welcome to ANUJA MISHRA's Portfolio Terminal             ║
 ║                   Type "help" to get started.                        ║
 ╚══════════════════════════════════════════════════════════════════════╝
`;

appendOutput(defaultBanner, "banner");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim(); // Get and trim input
    if (command) {
      commandHistory.push(command); // Save the command to history
      historyIndex = commandHistory.length; // Reset history index
      handleCommand(command); // Process the command
    }
    console.log("command found  reset")
    input.value = ""; // Clear the input after command execution
  } else if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex]; // Show previous command
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex]; // Show next command
    } else {
      historyIndex = commandHistory.length; // Reset to blank
      input.value = "";
      console.log("reset");
    }
  }
});

function appendOutput(text, type) {
  const newLine = document.createElement("div");
  if (type === "normal") {
    newLine.innerHTML = text; // Allow rendering of HTML for normal type
  } else {
    newLine.textContent = text; // Use plain text for other types
  }
  newLine.className = type; // Apply the class based on the type
  output.appendChild(newLine);
  output.scrollTop = output.scrollHeight; // Scroll to the bottom
}


function handleCommand(command) {
  if (command === "clear") {
    output.innerHTML = ""; // Clear the output
    appendOutput(defaultBanner, "banner"); // Reload default banner
  } else if (command === "cd achievements") {
    appendOutput("Redirecting to the achievements directory...", "normal");
    window.open("https://linkedin.com/in/anuja-mishra", "_blank"); // Redirect to LinkedIn profile
  } else if (commands[command]) {
    appendOutput(`$ ${command}\n${commands[command]}`, "normal");
  } else {
    appendOutput(`$ ${command}\nError: Command not found. Type "help" for a list of commands.`, "error");
  }
}


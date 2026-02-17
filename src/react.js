import React from "https://esm.sh/react@19";
import ReactDOMClient from "https://esm.sh/react-dom@19/client";

const displayEL = document.getElementById("react");

const cardEl = React.createElement(
  "div",
  { className: "card" },

  // h1
  React.createElement("h1", null, "Developer Profile"),
  // Basic Info
  React.createElement("section", null, React.createElement("h2", null, "Basic Info"),
    React.createElement("p",null, React.createElement("strong", null, "Name: "),
      "CyberDude",),
    React.createElement( "p",null, React.createElement("strong", null, "Role: "),"Frontend Developer",),),
  //Skills
  React.createElement("section", null, React.createElement("h2", null, "Skills"),
    React.createElement("ul",null,
      React.createElement("li", null, "HTML"),
      React.createElement("li", null, "CSS"),
      React.createElement("li", null, "JavaScript"),
      React.createElement("li", null, "React"),
    ),
  ),
  // Projects
  React.createElement("section",  null, React.createElement("h2", null, "Projects"),
  React.createElement("div",{ className: "project" },
      React.createElement("h3", null, "Portfolio Website"),
      React.createElement("p", null, "Personal portfolio built using React."),
      React.createElement("span", { class: "green" }, "Status: Completed"),
    ),

    React.createElement( "div", { className: "project" },
      React.createElement("h3", null, "Task Manager"),
      React.createElement("p", null, "A simple task management app."),
      React.createElement("span", { class: "yellow" }, "Status: In Progress"),
    ),
  ),
);

const root = ReactDOMClient.createRoot(displayEL);
root.render(cardEl);

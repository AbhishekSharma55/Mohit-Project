import React from "react";
import Button from "./components/Button";
import "./App.css";

const cardData = [
  {
    text: "College Website",
    href: "https://www.rgpv.ac.in/",
    description:
      "Access the official RGPV college website for information on courses, admissions, and latest updates.",
  },
  {
    text: "Student Login",
    href: "https://www.rgpv.ac.in/Login/StudentLogin.aspx",
    description:
      "Log in to the student portal to manage your academic records, check attendance, and more.",
  },
  {
    text: "Results",
    href: "http://result.rgpv.ac.in/Result/ProgramSelect.aspx",
    description:
      "Check your exam results by selecting your program and entering your roll number.",
  },
  {
    text: "ERP Login",
    href: "http://mist.thecollegeerp.com/academic/stlogin.php",
    description:
      "Access the ERP system to manage your course enrollments, fee payments, and other administrative tasks.",
  },
  {
    text: "Library",
    href: "http://elibrary.rgpv.ac.in/index.aspx",
    description:
      "Explore the e-library for a vast collection of academic resources, journals, and e-books.",
  },
  {
    text: "Notes",
    href: "https://www.rgpvnotes.in/btech/grading-system-old/notes/#google_vignette",
    description:
      "Find lecture notes, study materials, and other resources for various subjects and courses.",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo of mist" src="/CollegeLogo.png"></img>
        <h1>4th Semester Practical</h1>
        <p className="descriptionofproject">
          For our last practical, our team developed
          a user-friendly website designed to act as a centralized hub for
          important resources and links. The primary feature of the website is a
          set of buttons, each of which redirects users to various essential
          websites, such as the college website, student portal, library
          resources, and other relevant external sites.
        </p>
      </header>
      <div className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <Button text={card.text} href={card.href} />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="team">
        <div>
          <h1>Team Members</h1>
          <p>BTech CS 2nd Year Section-2</p>
        </div>

        <ul>
          <li>Mohit Maleshiya</li>
          <li>Sandhya Sahu</li>
          <li>Yogita Thakre</li>
          <li>Piyush Vishwakarma</li>
          <li>Satyam Soni</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

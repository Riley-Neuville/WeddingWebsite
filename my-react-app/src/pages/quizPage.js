import "../css/Home.css";
import React from "react";
import NavigationMenu from "../components/NavigationMenu.js";
import QuizComponent from "../components/Quiz.js";
import "../css/Member.css";

function QuizPage() {
  return (
    <div>
      <NavigationMenu />
      <QuizComponent />
    </div>
  );
}

export default QuizPage;

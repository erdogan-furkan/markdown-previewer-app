import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { selectText } from "../../redux/content/contentSlice";

function RightPanel() {
  const text = useSelector(selectText);

  return (
    <div
      id="converted"
      className="bg-stone-200 p-2 h-80 text-start overflow-auto shadow-dark"
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default RightPanel;

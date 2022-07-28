import React from "react";
import { useDispatch } from "react-redux";
import { toggleHelpText } from "../../redux/content/contentSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-2 grid-flow-col pt-5 select-none">
      <div
        className="justify-self-end bg-stone-100 px-2 h-fit text-4xl md:text-5xl font-black cursor-pointer shadow-dark"
        onClick={() => dispatch(toggleHelpText())}
      >
        ?
      </div>
      <h1 className="text-2xl text-white">Markdown Previewer</h1>
    </div>
  );
}

export default Header;

import React from "react";
import LeftPanel from "../LeftPanel";
import RightPanel from "../RightPanel";

function Content() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default Content;

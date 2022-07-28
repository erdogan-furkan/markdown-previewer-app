import { useDispatch, useSelector } from "react-redux";
import {
  setText,
  selectText,
  selectToggle,
} from "../../redux/content/contentSlice";

function LeftPanel() {
  const dispatch = useDispatch();
  const text = useSelector(selectText);
  const toggle = useSelector(selectToggle);

  return (
    <div className="bg-stone-200 shadow-dark h-80">
      <textarea
        className="resize-none outline-none bg-stone-200 w-full p-2 h-full"
        value={text}
        onChange={({ target }) => dispatch(setText(target.value))}
        disabled={toggle}
      ></textarea>
    </div>
  );
}

export default LeftPanel;

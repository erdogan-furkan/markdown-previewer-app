import { createSlice } from "@reduxjs/toolkit";

const helpText = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\` .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.`;

const initialText = "this is user input";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    text: initialText,
    toggle: false,
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    toggleHelpText: (state, action) => {
      state.toggle = !state.toggle;
      if (state.toggle) {
        state.text = helpText;
      } else {
        state.text = initialText;
      }
    },
  },
});

export const { setText, toggleHelpText } = contentSlice.actions;

export const selectText = (state) => state.content.text;
export const selectToggle = (state) => state.content.toggle;

export default contentSlice.reducer;

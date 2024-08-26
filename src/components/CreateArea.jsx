import React, { useState } from "react";

function CreateArea(props) {
  const [inputTxt, setInputTxt] = useState({ title: "", content: "" });

  function change(event) {
    let text = event.target.value;
    let name = event.target.name;

    setInputTxt((prev) => {
      if (name == "title") {
        return {
          ...prev,
          title: text,
        };
      } else if (name == "content") {
        return {
          ...prev,
          content: text,
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={change}
          value={inputTxt.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={change}
          value={inputTxt.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          type="button"
          onClick={(event) => {
            props.addNote(inputTxt);
            setInputTxt({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

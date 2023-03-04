import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [values, setValues] = useState([
    {
      heading: "",
      data: "",
    },
  ]);

  function handlechange(event) {
    const {name, value} = event.target;

    setNote((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  function submitenote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handlechange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitenote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

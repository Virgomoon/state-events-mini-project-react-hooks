import React, {useState} from "react";

function NewTaskForm({TaskFormSubmit, categories}) {

  const [text, setText] = useState("");
  const [formCategory, setFormCategory] = useState("Code")

  function onTaskFormSubmit(e) {
    e.preventDefault();
    TaskFormSubmit({text, formCategory})
    setText("");
    setFormCategory("Code");
  }

  return (
    <form className="new-task-form" >
      <label>
        Details
        <input type="text" name="text" value={text}
        onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={formCategory}
        onChange={(e) => setFormCategory(e.target.value)}>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={()=>onTaskFormSubmit} />
    </form>
  );
}

export default NewTaskForm;

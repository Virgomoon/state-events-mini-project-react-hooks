import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories, text, formCategory, onTextChange, onCategoryChange}) {

  // function TaskFormSubmit(e) {
  //   e.preventDefault();
  //   onTaskFormSubmit({text, formCategory})
  //   setText("");
  //   setFormCategory("Code");
  // }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text}
        onChange={onTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={formCategory}
        onChange={onCategoryChange}>
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

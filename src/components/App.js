import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

const [text, setText] = useState("");
const [formCategory, setFormCategory] = useState("Code")

const [myTasks, setMyTasks] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All")

const obj = {
  text: text,
  category: formCategory,
}

function onTaskFormSubmit(e) {
  e.preventDefault();
  setMyTasks([...myTasks, obj])
}

function handleTextChange(e){
  setText(e.target.value)
}

function handleCategoryChange(e){
  setFormCategory(e.target.value)
}

function removeTask(taskItem){
  setMyTasks(myTasks.filter((item)=> item.text !== taskItem));
}

const filteredTasks = myTasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
      onSelectedCategory={selectedCategory}
      onHandleCategory={setSelectedCategory}
       />
      <NewTaskForm 
      text={text}
      onTextChange={handleTextChange}
      onCategoryChange={handleCategoryChange}
      formCategory={formCategory}
      categories={CATEGORIES.filter((item)=> item !== "All")}
      onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDelete={removeTask} />
    </div>
  );
}

export default App;

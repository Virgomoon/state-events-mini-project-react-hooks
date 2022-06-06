import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

const [myTasks, setMyTasks] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All")

function handleMyTasks(newTask) {
  setMyTasks([...myTasks, newTask])
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
      <NewTaskForm categories={CATEGORIES.filter((item)=> item !== "All")}
      TaskFormSubmit={handleMyTasks}/>
      <TaskList tasks={filteredTasks} onDelete={removeTask} />
    </div>
  );
}

export default App;

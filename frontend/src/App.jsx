import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle, Circle, PlusCircle, Trash2, Edit2 } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todo/1");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed to fetch tasks. Please try again later.");
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;

    const newTaskObj = {
      title: newTask,
      completed: false,
      description: "",
      UserId: 1,
    };

    try {
      const res = await axios.post("http://localhost:4000/todo/1", newTaskObj);
      setTasks([...tasks, res.data]);
      setNewTask("");
      setError(null);
    } catch (error) {
      console.error("Error adding task:", error);
      setError("Failed to add task. Please try again.");
    }
  };

  const handleToggleTask = async (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (!taskToUpdate) return;

    try {
      await axios.patch(`http://localhost:4000/todo/${taskId}`, {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      });
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
      setError(null);
    } catch (error) {
      console.error("Error updating task:", error);
      setError("Failed to update task. Please try again.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:4000/todo/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
      setError(null);
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Failed to delete task. Please try again.");
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTask(task.title);
  };

  const handleUpdateTask = async () => {
    if (newTask.trim() === "" || !editingTask) return;
  
    try {
      const updatedTask = { ...editingTask, title: newTask };
      const res = await axios.patch(`http://localhost:4000/todo/${editingTask.id}`, updatedTask);
      setTasks(tasks.map((task) => (task.id === editingTask.id ? res.data : task)));
      setNewTask("");
      setEditingTask(null);
      setError(null);
    } catch (error) {
      console.error("Error updating task:", error);
      setError("Failed to update task. Please try again.");
    }
  };
  

  return (
    <div className="bg-gradient-to-br from-purple-400 to-indigo-600 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <header className="bg-purple-600 text-white text-2xl py-4 px-6 flex justify-between items-center">
          <h1 className="font-bold">Todo List</h1>
          <PlusCircle
            className="h-6 w-6 cursor-pointer hover:text-purple-200 transition-colors duration-200"
            onClick={editingTask ? handleUpdateTask : handleAddTask}
          />
        </header>
        <div className="p-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder={editingTask ? "Update task" : "Add a new task"}
              className="flex-grow mr-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200"
              onClick={editingTask ? handleUpdateTask : handleAddTask}
            >
              {editingTask ? "Update" : "Add"}
            </button>
          </div>
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between text-lg text-gray-700 hover:bg-purple-50 rounded-md p-2 transition-colors duration-150"
              >
                <div className="flex items-center" onClick={() => handleToggleTask(task.id)}>
                  {task.completed ? (
                    <CheckCircle className="h-6 w-6 text-purple-500 mr-3 cursor-pointer" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-400 mr-3 cursor-pointer" />
                  )}
                  <span className={task.completed ? "line-through" : ""}>{task.title}</span>
                </div>
                <div className="flex items-center">
                  <Edit2
                    className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200 mr-2"
                    onClick={() => handleEditTask(task)}
                  />
                  <Trash2
                    className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-200"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
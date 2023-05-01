import { useState, useEffect, Component } from "react";
import Popup from "reactjs-popup";
import PatientDetailsSidebar from "./PatientDetailsSidebar";
import Header from "./Header";
import "./App.css";
let appointmentDate = ["4-30-2023", "5-28-2023", "6-4-2023"];

const medicationsList = ["vitamin-d3", "insulin"];

let dailyChartList = [
  {
    id: 1,
    time: "6:00",
    text: "Check Your Blood sugar levels with glucometer",
    isTaskDone: false,
  },
  {
    id: 2,
    time: "6:30",
    text: "Take Insulin",
    isTaskDone: false,
  },
  {
    id: 3,
    time: "7:00",
    text: "Do Workout and stretches",
    isTaskDone: false,
  },
  {
    id: 4,
    time: "8:00",
    text: "Take the breakfast",
    isTaskDone: false,
  },
  {
    id: 5,
    time: "11:00",
    text: "Check again blood sugar levels with glucometer",
    isTaskDone: false,
  },
  {
    id: 6,
    time: "12:38",
    text: "Take the lunch",
    isTaskDone: false,
  },
  {
    id: 7,
    time: "17:53",
    text: "Go for evening walk",
    isTaskDone: false,
  },
  {
    id: 8,
    time: "18:50",
    text: "Check again blood sugar levels with glucometer",
    isTaskDone: false,
  },
  {
    id: 9,
    time: "19:24",
    text: "Take the insulin",
    isTaskDone: false,
  },
  {
    id: 10,
    time: "20:00",
    text: "Take the dinner",
    isTaskDone: false,
  },
];

const tabsList = [
  {
    id: "APPOINTMENTS",
    text: "Appointments",
  },

  {
    id: "DAILYTASKLIST",
    text: "Daily Task List",
  },
  {
    id: "MEDICATIONS",
    text: "Medications",
  },
];

const getMonthName = (month) => {
  switch (month) {
    case 1:
      return "January";

      break;
    case 2:
      return "February";

      break;
    case 3:
      return "March";

      break;
    case 4:
      return "April";

      break;
    case 5:
      return "May";
      break;

    case 6:
      return "June";

      break;
    case 7:
      return "July";

      break;
    case 8:
      return "August";

      break;
    case 9:
      return "September";

      break;
    case 10:
      return "October";

      break;
    case 11:
      return "November";

      break;
    case 12:
      return "December";

      break;

    default:
      break;
  }
};

const DailyTodoList = () => {
  const todos = localStorage.getItem("todos");

  let todosList = [];

  if (todos === null) {
    todosList = [];
    localStorage.setItem("todos", JSON.stringify([...dailyChartList]));
  } else {
    todosList = JSON.parse(localStorage.getItem("todos"));
  }

  const [todoList, changeTodoList] = useState(todosList);

  const changeTodoStatus = (id) => {
    const tasksList = JSON.parse(localStorage.getItem("todos"));
    const filteredTodosList = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, isTaskDone: true };
      }
      return task;
    });

    localStorage.setItem("todos", JSON.stringify(filteredTodosList));
    changeTodoList(filteredTodosList);
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(dailyChartList));
      changeTodoList(dailyChartList);
    }, 86400 * 1000);
  });

  const onAddTodoTask = () => {};

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [task, setTask] = useState("");

  const onCreateNewTask = (e) => {
    e.preventDefault();

    const previousTaskList = JSON.parse(localStorage.getItem("todos")) || [];

    const newTask = {
      id: previousTaskList.length + 1,
      time: `${hours}:${minutes}`,
      text: task,
      isTaskDone: false,
    };

    const newTodosList = [...previousTaskList, newTask];

    localStorage.setItem("todos", JSON.stringify(newTodosList));
    changeTodoList(newTodosList);
  };

  return (
    <div className="todo-list-container">
      <div className="add-task-container">
        <h1 className="daily-todo-list-heading">Todo List</h1>
        <Popup
          trigger={
            <button
              className="add-task-button"
              type="button"
              onClick={onAddTodoTask}
            >
              Add Task
            </button>
          }
        >
          <div className="task-create-container">
            <form onSubmit={onCreateNewTask} className="form-container">
              <div className="input-container">
                <label className="label-element" htmlFor="hours">
                  Hours
                </label>
                <input
                  onChange={(e) => setHours(e.target.value)}
                  className="hours-input"
                  id="hours"
                  type="number"
                />
              </div>

              <div className="input-container">
                <label className="label-element" htmlFor="minutes">
                  Minutes
                </label>
                <input
                  onChange={(e) => setMinutes(e.target.value)}
                  className="hours-input"
                  id="minutes"
                  type="number"
                />
              </div>

              <div className="input-container">
                <label className="label-element" htmlFor="task">
                  Enter The Task
                </label>
                <input
                  onChange={(e) => setTask(e.target.value)}
                  className="task-input"
                  id="task"
                  type="text"
                />
              </div>
              <button
                type="button"
                type="submit"
                className="task-submit-button"
              >
                Submit
              </button>
            </form>
          </div>
        </Popup>
      </div>
      <ul className="tasks-list-container">
        {todoList.map((item) => (
          <li className="task-item">
            <div className="task-details-container">
              <p className="task-time">{item.time}</p>
              <p className="task-name">{item.text}</p>
            </div>
            <button
              onClick={() => changeTodoStatus(item.id)}
              type="button"
              className={
                item.isTaskDone ? "todo-button todo-done-button" : "todo-button"
              }
            >
              {item.isTaskDone ? "Done" : "Todo"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AppointmentsRoute = () => {
  return (
    <div className="appointments-dates-container">
      <h1 className="appointments-title-text">Appointments</h1>

      <ul>
        {appointmentDate.map((date) => {
          const newDate = new Date(date);

          return (
            <li className="date-item">
              {`${newDate.getDate()}  ${getMonthName(
                newDate.getMonth() + 1
              )}  ${newDate.getFullYear()}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const MedicationsRouter = () => {
  return (
    <div className="medicines-container">
      <ul className="medicines-list-container">
        {medicationsList.map((med) => (
          <li className="medicine-text">{med}</li>
        ))}
      </ul>
    </div>
  );
};

class App extends Component {
  state = {
    activeTab: tabsList[0].id,
  };

  renderMainView = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case tabsList[0].id:
        return <AppointmentsRoute />;
        break;

      case tabsList[1].id:
        return <DailyTodoList />;
        break;
      case tabsList[2].id:
        return <MedicationsRouter />;
        break;

      default:
        return null;
    }
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="patient-blog-container">
        <Header dailyChartList={dailyChartList} />
        <div className="patient-container">
          <PatientDetailsSidebar />
          <div className="main-container">
            <div className="tabs-container">
              {tabsList.map((item) => (
                <button
                  type="button"
                  onClick={() => this.setState({ activeTab: item.id })}
                  key={item.id}
                  className={
                    activeTab === item.id
                      ? "tab-button active-tab-button"
                      : "tab-button"
                  }
                >
                  {item.text}
                </button>
              ))}
            </div>
            <div className="patient-file-container">
              {this.renderMainView()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

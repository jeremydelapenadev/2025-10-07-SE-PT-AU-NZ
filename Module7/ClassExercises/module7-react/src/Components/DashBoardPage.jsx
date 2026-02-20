import { useContext } from "react";
import { userContext } from "../Context/UserProvider";
import { useNavigate, Outlet } from "react-router-dom";

export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();
  const { logout } = useContext(userContext);

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>
      <Outlet /> {/* see next slide */}
      {/* Will render either <DashboardMessages> when the URL is "/dash/messages", <DashboardTasks> at "/dash/tasks", or null if it is "/dash" */}
      <button onClick={() => navigate("tasks")}>Show Tasks</button>
      <button onClick={() => navigate("messages")}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => {
          logout();
          navigate("/login");
        }}> Logout </button>
    </div>
  );
}

export function DashboardTasks() {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" },
  ];
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export function DashboardMessages(props) {
  // const { currentUser } = useUserContext(userContext);
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard </p>
    </div>
  );
}

import "../dashCard.css";
import "./todo.css";

// a simple todo card

const todoList = [
  "Email Dianne about latest dataset",
  "Update Confluence page with new procedure",
  "Ensure accuracy of TristumData imports",
  "Process DataLake V2 entries",
];
const ToDoCard = (props) => {
  return (
    <div className="dashCard customChecklist todoCardContainer">
      <p className="title">Todo</p>
      {todoList.map((todo, index) => (
        <label class="container">
          {todo}
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      ))}
    </div>
  );
};

export default ToDoCard;

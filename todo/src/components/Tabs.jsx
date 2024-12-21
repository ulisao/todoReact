export default function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;

  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTask =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => todo.complete === false).length
            : todos.filter((todo) => todo.complete === true).length;
        return (
          <button
            onClick={() => setSelectedTab(tab)}
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? " tab-selected" : " ")
            }
          >
            <h4>
              {tab} <span>({numOfTask})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}

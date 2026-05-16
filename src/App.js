import "./styles.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Tab1",
    content: "Tab One Content",
  },
  {
    id: 2,
    title: "Tab2",
    content: "Tab Two Content",
  },
  {
    id: 3,
    title: "Tab3",
    content: "Tab Three Content",
  },
];

function TabHeader({ title, isSelected, onClick, index }) {
  return (
    <div
      className={`header ${isSelected ? "select" : ""}`}
      // onClick={onClick}
      data-id={index}
    >
      <h2>{title}</h2>
    </div>
  );
}

function TabContent({ content }) {
  return (
    <div className="content">
      <h2>{content}</h2>
    </div>
  );
}

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleClick(event) {
    const selectedIndex = event.target.closest(".header").dataset.id;

    setSelectedTab(Number(selectedIndex));
  }

  return (
    <div className="App">
      <div className="container">
        <div className="tabhead" onClick={handleClick}>
          {data.map((item, index) => {
            return (
              <TabHeader
                key={item.id}
                title={item.title}
                isSelected={selectedTab === index}
                index={index}
              />
            );
          })}
        </div>

        <TabContent content={data[selectedTab].content} />
      </div>
    </div>
  );
}

import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const reactDescritions = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const CORE_CONCEPTS = [
    {
      image: "src/assets/components.png",
      title: "Components",
      description:
        "The core UI building block - compose the user interface by combining multiple components.",
    },
    {
      image: "src/assets/jsx-ui.png",
      title: "JSX",
      description:
        "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    },
    {
      image: "src/assets/config.png",
      title: "Props",
      description:
        "Make components configurable (and therefore reusable) by passing input data to them.",
    },
    {
      image: "src/assets/state-mgmt.png",
      title: "State",
      description:
        "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    },
  ];

  const EXAMPLES = {
    components: {
      title: "Components",
      description:
        "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    jsx: {
      title: "JSX",
      description:
        "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
      title: "Props",
      description:
        "Components accept arbitrary inputs called props. They are like function arguments.",
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
      title: "State",
      description:
        "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
  };

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescritions[genRandomInt(reactDescritions.length - 1)]} React
          concepts you will need for almost any app you are going to build!
        </p>
      </header>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <li>
              <img src="src/assets/components.png" alt="Components" />
              <h3>Components</h3>
              <p>
                The core UI building block - compose the user interface by
                combining multiple components.
              </p>
            </li>
            <li>
              <img src="src/assets/jsx-ui.png" alt="JSX" />
              <h3>JSX</h3>
              <p>Return (potentialy dynamic) HTML(ish) code to define the </p>
            </li>
            <li>
              <img src="src/assets/config.png" alt="Props" />
              <h3>Props</h3>
              <p>
                Make components configurable (and therefore reusable) by passing
                input data to them.
              </p>
            </li>
            <li>
              <img src="src/assets/state-mgmt.png" alt="State" />
              <h3>State</h3>
              <p>
                "React-managed data which, when changed, causes the component to
                re-render & the UI to update."
              </p>
            </li>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li onClick={() => handleClick("components")}>
              <button className={selectedTopic === "components" && "active"}>
                Components
              </button>
            </li>
            <li onClick={() => handleClick("jsx")}>
              <button className={selectedTopic === "jsx" && "active"}>
                JSX
              </button>
            </li>
            <li onClick={() => handleClick("props")}>
              <button className={selectedTopic === "props" && "active"}>
                Props
              </button>
            </li>
            <li onClick={() => handleClick("state")}>
              <button className={selectedTopic === "state" && "active"}>
                State
              </button>
            </li>
          </menu>
          {!selectedTopic ? (
            "Please select a topic"
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

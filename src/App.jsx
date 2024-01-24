function App() {
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
            <li>
              <button>Components</button>
            </li>
            <li>
              <button>JSX</button>
            </li>
            <li>
              <button>Props</button>
            </li>
            <li>
              <button>State</button>
            </li>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

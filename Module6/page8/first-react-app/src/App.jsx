import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import Greeting from "./components/Greeting";
import FullName from "./components/FullName";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import Callout from "./components/Callout";
import MoviesList from "./components/MoviesList";
import MoodChanger from "./components/moodChanger";
import BirthdayTranslator from "./components/BirthdayTranslater";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm";
import ExplodingBomb from "./components/ExplodingBomb";

function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3>
      <h3>Welcome {props.lastName}!</h3>

      {/* if this component has children, render them here */}
      {props.children}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const myElement = (
    <>
      <p style={{ color: "red", fontSize: "30px" }}>Hi there</p>
    </>
  );

  const whatIsJSX = (
    <div>
      <p>Is it JavaScript</p>
      <p>Is it HTML?</p>
      <p>No it's JSX!</p>
    </div>
  );

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  const myArray = [1, 2, 3, 4];

  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    // fragment
    <>
      <Welcome name="students" lastName="Oakenfull">
        <p>Children of Welcome</p>
        <a href="#">Example Link</a>
      </Welcome>

      {"This is a text"}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {myElement}
      {whatIsJSX}
      {spideyJSX}
      <ExampleComponent />
      <PropsDisplayer />

      {/* Renders the component with a single prop 'myProp' */}
      <PropsDisplayer myProp="first prop" />

      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer
        prop1="first"
        prop2="second"
        prop3={3}
        prop4={myArray}
        prop5={spiderman}
      />

      {/* String prop value uses quotes, numeric prop value uses
curly braces */}
      <PropsDisplayer name="Harry Styles" age={29} />
      {/* Array prop value - uses curly braces */}
      <PropsDisplayer pets={["cat", "dog", "goldfish"]} />
      {/* Variable prop values - uses curly braces */}
      <PropsDisplayer reactLogo={reactLogo} buttonCount={count} />

      {/* Our PropsDisplayer component won’t handle stringifying
other components */}
      {/* <PropsDisplayer component={<ExampleComponent />}/> -
fails for this example but the concept is still valid */}

      {/* state and country are not specified, will use defaults */}
      <City name="Sydney" />
      {/* country is not specified, will use default */}
      <City name="Melbourne" state="VIC" />
      {/* all values are specified, won't use defaults */}
      <City name="Chicago" state="Illinois" country="USA" />

      {/* Everything in between <City> and </City> is passed as
props.children */}
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>

      <Pet />

      <Pet type="Shiba" />

      <Pet name="Kewpie" />

      <Pet colour="white" name="Ollie" type="Dog" />

      <Pet word="something" />

      <Greeting />

      <Greeting name="John" />

      <Greeting name="Kewpie">
        <p>This is children</p>
      </Greeting>

      <FullName first="Anthony" last="Nana" />

      {/* render the component, passing object data as props */}
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />

      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />

      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>

      <MoviesList />

      <MoodChanger />

      <BirthdayTranslator />

      <Weather />

      <LoginForm/>

      <ExplodingBomb />
    </>
  );
}

export default App;

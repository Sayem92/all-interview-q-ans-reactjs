// 1. What is react ?
// 2. What is the difference between virtual dom and real dom ?
// 3. What is JSX ?
// 4. What is the difference between state and props ? 
// 5. What is the difference between class component and functional component ?
// 6. What are react lifecycle methods ? 
// 7. What are hooks, tell us the role of useState() and useEffect()
// 8. What is diff algorithm ?
9. What is the different between attribute and property ?

-------------------------------  1   ----------------------------

// React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.

-------------------------------  2   ----------------------------
// A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.

// DOM is an interface that allows the script to update the content, style, and structure of the document.

// Real DOM----------	
// It allows us to directly target any specific node (HTML element)	

// Virtual DOM--------
// It can produce about 200,000 Virtual DOM Nodes / Second.

-------------------------------  3   ----------------------------

// What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

-------------------------------  4   ----------------------------
PROPS

    // The Data is passed from one component to another.
    // It is Immutable (cannot be modified).
    // Props can be used with state and functional components.
    // Props are read-only.
STATE

	// The Data is passed within the component only.
	// It is Mutable ( can be modified).
	// State can be used only with the state components/class component (Before 16.0).
	// State is both read and write.



 Points Discussed:

    // Props are used to pass data from one component to another.
    // The state is a local data storage that is local to the component only and cannot be passed to other components.
    // The this.setState property is used to update the state values in the component.


-------------------------------  5   ----------------------------
Functional Components  

    // 1. A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).

    // 2. There is no render method used in functional components.

    // 3. Functional component run from top to bottom and once the function is returned it cant be kept alive.

    // 4. Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.

    // 5. React lifecycle methods (for example, componentDidMount) cannot be used in functional components.

    // 6. Hooks can be easily used in functional components to make them Stateful.

    // example: const [name,SetName]= React.useState(‘ ‘)

    // 7. Constructors are not used.	

Class Components 

	// 1. A class component requires you to extend from React. Component and create a render function which returns a React element.
	// 2. It must have the render() method returning JSX (which is syntactically similar to HTML)
	// 3. Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.
	// 4. Also known as Stateful components because they implement logic and state.
	// 5. React lifecycle methods can be used inside class components (for example, componentDidMount).

    // 6. It requires different syntax inside a class component to implement hooks.

    // example: constructor(props) {

    // super(props);

    // this.state = {name: ‘ ‘}

    // }

    // 7. Constructor are used as it needs to store state. 

-------------------------------  6   ----------------------------

// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

-------------------------------  7   ----------------------------
 //What are Hooks in React?
// Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)

class Counter extends React.Component {
    constructor(props) {
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }


//   Hooks enable you to extract stateful logic from a functional component, allowing it to be reused and tested independently. useState and useEffect are two of React's most useful Hooks. Therefore, a thorough understanding of them is essential for React
-------------------------------  8   ----------------------------

    // A diff algorithm outputs the set of differences between two inputs. These algorithms are the basis of a number of commonly used developer tools. Yet understanding the inner workings of diff algorithms is rarely necessary to use said tools.

-------------------------------  9   ----------------------------

// Attribute is a quality or object that we attribute to someone or something. For example, the scepter is an attribute of power and statehood.

// Property is a quality that exists without any attribution. For example, clay has adhesive qualities; i.e, a property of clay is its adhesive quality. 
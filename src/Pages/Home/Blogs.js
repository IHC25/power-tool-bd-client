import React from "react";

const Blogs = () => {
  return (
    <div class="hero min-h-full bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-3xl font-bold">
            How will you improve the performance of a React Application?
          </h1>
          <p class="py-6 text-left">
            We can improve the performance of a React Application by: <br />
            1. Maintaining component state local where it is important. <br />
            2. Using React components to prevent unnecessary re-renders. <br />
            3. Code-splitting in React using dynamic import. <br />
            4. Use Production Build. <br />
            5. Virtualize long lists
          </p>
          <h1 class="text-3xl font-bold">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p class="py-6 text-left">
            There are four main types of state you need to properly manage in
            your React apps: <br />
            1. Local State : Local state in React allows you to instantiate a
            plain JavaScript object for a component and hold information that
            might affect its rendering.It is most often managed in React using
            the useState hook. <br /> 2.Global State : Global state is data we
            manage across multiple components.It is most often managed in React
            using the Context API. <br /> 3.Server State: Data which comes from
            an external server that must be integrated with our UI state. <br />{" "}
            4.URL State : Data that exists on our URLs, including the pathname
            and query parameters.
          </p>
          <h1 class="text-3xl font-bold">
            How does prototypical inheritance work?
          </h1>
          <p class="py-6">
            The Prototypal Inheritance is a component in javascript used to add
            techniques and properties in objects. It is a strategy by which an
            item can acquire the properties and techniques for another object.
            Sharing amid objects makes for easy inheritance of structure (data
            fields), behavior (functions / methods), and state (data values).
          </p>
          <h1 class="text-3xl font-bold">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts?
          </h1>
          <p class="py-6">
            We cannot set the state directly in React. Because, if we set the
            state directly it will not re-render the component. So, we should
            use setState() instead.
          </p>
          <h1 class="text-3xl font-bold">
            What is a unit test? Why should write unit tests?
          </h1>
          <p class="py-6">
            Unit testing is a testing method that tests an individual software
            unit in isolation. In React, it means checking the components if it
            renders correctly for the specific props. We should write Unit
            Tests, because, unit testing allows software developers to actually
            think through the design of the software and what has to be done
            before they write the code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

- [ ] Why would you use class component over function components (removing hooks from the question)?

> Removing hooks from the question, we would use class components over stateless function components if we want local state in our component and if we want access to lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.

> - The **render** method is required for all class components as it transforms JSX elements into DOM elements.
> - The **componentDidMount** method is called just once in the lifecycle of a component and is useful for data fetching.
> - The **componentWillUnmount** method is used to remove any timers or listeners and to perform any other "cleanup" functions before the component is unmounted.

- [ ] What is the purpose of a custom hook?

> A custom Hook allows the builder of the Hook to create reusable functions that extract component logic by calling other Hooks.

- [ ] Why is it important to test our apps?

> It's important to test our apps to:
>
> - surface bugs faster
> - reduce risk of regressions
> - allow us to trust the code
> - make us consider edge cases
> - have a safety net when we're making changes or refactoring
> - have documentation for the code
> - encourage us to write more testable code
>
> If we don't test, it:
>
> - forces us to use very expensive manual testing
> - causes and edge cases to be encountered later
> - makes refactoring or adding features risky and scary
> - can make codebases fragile and expensive to maintain
> - makes less documented codebases much harder to understand

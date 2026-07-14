import GrandChild from "./GrandChild";
export const Child = ({name}) => {
  // Child also doesn't use 'name'.
  // It forwards it to GrandChild.
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChild name={name} />
    </div>
  );
}
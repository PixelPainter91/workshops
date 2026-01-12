// export default function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];
//   const htmlItems = items.map((item) => <li key={item}>{item}</li>);

//   return <ul>{htmlItems}</ul>;
// }
export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
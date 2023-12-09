import React from "react";
import NavBar from "@/components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}

type Status = "idle" | "loading" | "success" | "error";
type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: Error };

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}
function Form() {
  const [value, setValue] = React.useState("Change me");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
}

function App() {
  // const [status, setStatus] = React.useState<Status>("error");
  // const [requestState, setRequestState] = useState<RequestState>({
  //   status: "idle",
  // });
  return (
    <div>
      1231312312
      <Form></Form>
      <Router>
        {/*Просто написать NavBar не можем, т.к там есть LINk и надо тут хуярить*/}
        <NavBar />
      </Router>
    </div>
  );
}

export default App;

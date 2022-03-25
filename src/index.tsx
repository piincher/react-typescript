import ReactDOM from "react-dom";
import { List } from "./state/List";

const App = () => {
    return <List />
}

ReactDOM.render(<App />, document.querySelector("#root"))
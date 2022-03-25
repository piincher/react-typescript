import ReactDOM from "react-dom";
import { List } from "./state/List";
import { UserSearch } from "./state/userSearch";

const App = () => {
    return <UserSearch />
}

ReactDOM.render(<App />, document.querySelector("#root"))
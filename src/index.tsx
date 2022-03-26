import ReactDOM from "react-dom";
import { List } from "./state/List";
import { UserSearch } from "./state/userSearch";
import { EventComponent } from "./events/eventComponent";

const App = () => {
    return <EventComponent />
}

ReactDOM.render(<App />, document.querySelector("#root"))
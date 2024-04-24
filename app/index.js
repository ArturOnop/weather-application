import {Provider} from "react-redux";
import store from "../redux/store";
import App from "../components/App";

const Main = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default Main

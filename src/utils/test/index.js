import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

function Wrapper({ children }) {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}

export function render(ui) {
  rtlRender(ui, { wrapper: Wrapper });
}

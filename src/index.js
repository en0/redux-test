import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const reducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, value: state.value + 1 };
        case "DECREMENT":
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}

class App extends React.Component {

    static mapStateToProps(state) {
        return { value: state.value }
    }

    render() {
        const { dispatch, value } = this.props;
        return (
            <div>
                <h2>{value}</h2>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            </div>
        )
    }
}
const AppContainer = connect(App.mapStateToProps)(App);

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);
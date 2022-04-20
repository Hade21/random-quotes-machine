import axios from "axios";

const globalState = {
    quotes: [],
    quote: "This is quote",
    author: "",
    colors: [
        "primary",
        "primary",
        "secondary",
        "secondary",
        "error",
        "warning",
        "warning",
        "info",
        "success",
        "success",
        "error",
        "secondary",
    ],
    color: "info",
    random: 0,
    background: "#0288d1",
    backgrounds: [
        "#1976d2",
        "#1976d2",
        "#9c27b0",
        "#9c27b0",
        "#d32f2f",
        "#ed6c02",
        "#ed6c02",
        "#0288d1",
        "#2e7d32",
        "#2e7d32",
        "#9c27b0",
        "#ed6c02",
    ],
};

const getQuote = async(state) => {
    const quotes = await axios
        .get(
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
        .catch((err) => {
            console.log("Error: ", err);
        });
    const newQuotes = quotes.data.quotes;
    state.checked = false;
    newQuotes.map((item) => {
        return state.quotes.push(item);
    });
};

getQuote(globalState);

//Reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case "NEW_QUOTE":
            const random = Math.round(Math.random() * 100);
            return {
                ...state,
                quote: state.quotes[random].quote,
                author: state.quotes[random].author,
                color: state.colors[Math.round(random / 10)],
                background: state.backgrounds[Math.round(random / 10)],
            };
        default:
            return state;
    }
};

export default rootReducer;
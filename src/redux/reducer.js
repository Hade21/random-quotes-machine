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
    ],
    color: "info",
    random: 0,
    background: "",
    backgrounds: [
        "#1976d2",
        "#1976d2",
        "#9c27b0",
        "9c27b0",
        "#d32f2f",
        "#ed6c02",
        "#ed6c02",
        "#0288d1",
        "#2e7d32",
        "#2e7d32",
    ],
};

//Reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case "NEW_QUOTE":
            const random = Math.round(Math.random() * 100);
            console.log(state);
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

const getQuote = async(state) => {
    const quotes = await axios
        .get(
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
        .catch((err) => {
            console.log("Error: ", err);
        });
    const newQuotes = quotes.data.quotes;
    newQuotes.map((item) => {
        return state.quotes.push(item);
    });
};

getQuote(globalState);

export default rootReducer;
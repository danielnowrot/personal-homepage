import axios from "axios";

export const getRepo = () =>
    axios.get("https://api.github.com/users/danielnowrot/repos")
        .then((response) => response.data);
import { createContext } from "react";

export const Reposstore = createContext({
    loaded: null,
    setloaded: () => { },
    repoactive: null,
    setrepoactive: () => { },
    repositories: [],
});
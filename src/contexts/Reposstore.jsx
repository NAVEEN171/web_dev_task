import { createContext } from "react";

export const ReposStoreContext = createContext({
    loaded: null,
    setLoaded: () => { },
    repoActive: null,
    setRepoActive: () => { },
    repositories: [],
});
import { useState, createContext, useContext } from 'react';

const LoggedContext = createContext();
const UpdateContext = createContext();
const UserContext = createContext();
const UpdateUserContext = createContext();

export const useLoggedContext = () => {
    return useContext(LoggedContext);
}

export const useUpdateLoggedContext = () => {
    return useContext(UpdateContext);
}

export const useUserContext = () => {
    return useContext(UserContext);
}

export const useUpdateUserContext = () => {
    return useContext(UpdateUserContext);
}

const ContextProvider = ({ value, children }) => {
    const [logged, setLogged] = useState(value);
    const [user, setUser] = useState({});
    return (
        <LoggedContext.Provider value={ logged }>
            <UpdateContext.Provider value={ setLogged }>
                <UserContext.Provider value={ user }>
                    <UpdateUserContext.Provider value={ setUser }>
                        {children}
                    </UpdateUserContext.Provider>
                </UserContext.Provider>
            </UpdateContext.Provider>
        </LoggedContext.Provider>
    )
}

export default ContextProvider;
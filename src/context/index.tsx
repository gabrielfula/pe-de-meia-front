import { useCookie } from "@/hooks/useCookie";
import { createContext, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext } from "./interface/iauth";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [token, setToken, clearCookie] = useCookie("token", null);
    const [id, setTokenId, clearToken] = useCookie("id", null);

    const navigate = useNavigate();

    const login = async (access_token: string, id: number) => {
        setToken(access_token);
        setTokenId(id);
    };

    const signout = async () => {
        clearCookie("token")
        clearToken("id")
        setToken(null);
        setTokenId(null);
        navigate("/");
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                signout,
                token,
                id,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
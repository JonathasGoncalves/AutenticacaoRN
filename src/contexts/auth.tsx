import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth'
import  AsyncStorage  from '@react-native-community/async-storage'
import api from '../services/api';

interface IUser {
    name: string;
    email: string;
}
interface IAuthContextData {
    signed: boolean;
    user: IUser | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');

            await new Promise(resolve => setTimeout(resolve, 2000));

            if (storageUser && storageToken) {
                //api.defaults.headers['Autorization'] = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            
        }

        loadStorageData();

    }, [])

    async function signIn() {
       const response = await auth.signIn();

       const { token, user } = response;

       setUser(response.user);

       //api.defaults.headers['Autorization'] = `Bearer ${response.token}`;

       await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
       await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

     function signOut() {
         AsyncStorage.clear().then(() => {
             setUser(null);
         });
    }

   

    return (
        <AuthContext.Provider value={{signed: !!user, loading, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );

}
    

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
};
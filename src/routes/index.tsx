import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../contexts/auth';
import { View, ActivityIndicator } from 'react-native'
//usar react-native-splash-screen
const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    

    if (loading) {
        return (
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='666'/>
            </View>
        );
    }

    return signed ? <AppRoutes /> :<AuthRoutes />;
}

export default Routes;
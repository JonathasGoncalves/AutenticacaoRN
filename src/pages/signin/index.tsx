import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { signIn } from './../../services/auth';
import { useAuth } from './../../contexts/auth';

const SignIn: React.FC = () => {

    const { signed, signIn } = useAuth();
    console.log(signed);

    async function handleSignIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' }
})

export default SignIn;
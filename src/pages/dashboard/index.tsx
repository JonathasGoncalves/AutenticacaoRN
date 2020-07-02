import React, { useContext } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { useAuth } from './../../contexts/auth'; 


const Dashboard: React.FC = () => {

    const { signed, signOut, user } = useAuth();
    console.log(signed);

    async function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})



export default Dashboard;
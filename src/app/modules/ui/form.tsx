import React from 'react';
import { View, TextInput, Button, SafeAreaView } from 'react-native';

// Кастомний компонент Form
export function Form = ({ children }) => {
  return (
    <View>
      {children}
    </View>
  );
};

// Головний компонент екрана
function App() {
    return (
        <SafeAreaView>
            <Form>
                <TextInput placeholder="Введіть ім’я" />
                <Button title="Надіслати" onPress={() => { } } />
            </Form>
        </SafeAreaView>
    );
}

export default App;

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonExecCmd from './components/GetCmd';
import cmds from './cmd.json'; // no anda el cmd.json gral

export default function App() {
  const [user, onChangeUser] = useState('');
  const [pwd, onChangePwd] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeUser}
        value={user}
        placeholder="Usuario" />
      <TextInput
        onChangeText={onChangePwd}
        secureTextEntry={true}
        value={pwd}
        placeholder="Password" />
      {
        cmds.commands.map((cmd) => {
          return (
            <ButtonExecCmd cmd={cmd.endpoint} username={user} password={pwd} title={cmd.endpoint} />
          )
        })
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

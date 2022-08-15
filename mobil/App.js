import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonExecCmd from './components/GetCmd';
import cmds from './cmd.json'; // no anda el cmd.json gral

export default function App() {
  return (
    <View style={styles.container}>
      {
        cmds.commands.map((cmd) => {
          return (
            <ButtonExecCmd cmd={cmd.endpoint} username="admin" password="1234" />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

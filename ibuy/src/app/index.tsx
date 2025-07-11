import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 
 
export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/signup" style={styles.new}>
        Criar conta
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  new: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
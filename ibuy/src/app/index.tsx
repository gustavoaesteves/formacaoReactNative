import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
 
export default function Index() {

  function signup() {
    router.navigate('/signup');
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={signup} style={styles.button}>
        <Text style={styles.label}>
          Criar conta
        </Text>
      </TouchableOpacity>

      <Link
        href={{ pathname: '/signup', params: { name: 'Arthur Rios', id: 7 } }}
      >
        Enviar parâmetro
      </Link>

      <Link
        href="/product/8"
      >
        Enviar parâmetro na rota
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    cursor: 'pointer',
  }
});
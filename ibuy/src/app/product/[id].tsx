import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { Link, router, useLocalSearchParams } from 'expo-router';
 
export default function Product() {

    const { id } = useLocalSearchParams();

  function back() {
    if (!router.canGoBack()) {
      return Alert.alert(
        'Voltar',
        'Não é possível voltar, pois não há uma página anterior.',
        [{ text: 'OK' }]
      );
    }
    router.back();
  }

  return (
    <View style={styles.container}>
        <Text style={styles.back}>ID do produto: { id }</Text>

        <TouchableOpacity activeOpacity={0.7} onPress={back}> 
            <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
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
  back: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
  },
});
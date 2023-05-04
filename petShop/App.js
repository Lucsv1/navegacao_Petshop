import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import img1 from "./assets/animals.jpg";
import { useState } from "react";
const Tab = createBottomTabNavigator();

export default function App() {

  const [lista, setLista] = useState([]);


  const Cadastro = () => {

    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [peso, setPeso] = useState("");
    const [nascimento, setNascimento] = useState("");

    return (
      <View style={{ flex: 1, alignItems: 'center', borderWidth: 1, justifyContent: 'center'}}>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Nome do  pet"
          style={{backgroundColor: 'white', padding: 10, borderRadius: 10, width: 100}}
        />
        <TextInput value={raca} onChangeText={setRaca} placeholder="Raça" style={{backgroundColor: 'white', padding: 10, borderRadius: 10, width: 100}} />
        <TextInput value={peso} onChangeText={setPeso} placeholder="Peso" style={{backgroundColor: 'white', padding: 10, borderRadius: 10, width: 100}} />
        <TextInput
          value={nascimento}
          onChangeText={setNascimento}
          placeholder="Nascimento"
          style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}
        />
        <Button
          onPress={() => {
            const obj = { nome, raca, peso, nascimento };
            setLista([...lista, obj]);
          }}
          title="cadastrar"
        />
      </View>
    );
  };

  const Listar = (props) => {
    return (
      <FlatList
        data={props.lista}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Text>{item.raca}</Text>
            <Text>{item.peso}</Text>
            <Text>{item.nascimento}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    );
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ImageBackground source={img1} style={{ flex: 1 }} resizeMode="cover">
            <Text style={{ color: "yellow", textAlign: "center" }}>PETS</Text>
          </ImageBackground>
        </View>
        <View style={{ flex: 2 }}>
          <Tab.Navigator>
            <Tab.Screen name="Cadastro" component={Cadastro}></Tab.Screen>
            <Tab.Screen name="Listar">
              {()=><Listar lista={lista}/>}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

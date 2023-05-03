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

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [peso, setPeso] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [lista, setLista] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do  pet"
      />
      <TextInput value={raca} onChangeText={setRaca} placeholder="Raça" />
      <TextInput value={peso} onChangeText={setPeso} placeholder="Peso" />
      <TextInput
        value={nascimento}
        onChangeText={setNascimento}
        placeholder="Nascimento"
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
  const { lista } = props;
  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => (
        <View>
          <Text>{item.nome}</Text>
          <Text>{item.raca}</Text>
          <Text>{item.peso}</Text>
          <Text>{item.nascimento}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default function App() {
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
            <Tab.Screen name="Cadastro">
              {() => <Cadastro setLista={setLista} />}
            </Tab.Screen>
            <Tab.Screen name="Listar">
    {() => <Listar lista={lista} />}
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

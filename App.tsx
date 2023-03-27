import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  // TouchableHighlight,
} from 'react-native';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'A',
    title: 'First Item',
  },
  {
    id: 'B',
    title: 'Second Item',
  },
  {
    id: 'C',
    title: 'Third Item',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function App(this: any) {
  // const onPressingBtn1 = () => {
  //   Alert.alert('Opacity Button Pressed');
  // };
  // const onPressingBtn2 = () => {
  //   Alert.alert('Highlight Button Pressed');
  // };

  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Dental Care</Text>
      <Image style={styles.logo} source={require('./logo.png')} />
      <TextInput placeholder="UserName" style={styles.primaryInput} />
      <TextInput placeholder="Password" style={styles.primaryInput} />
      <View style={styles.options}>
        <Button
          // Some properties given to Button
          title="Login"
          color="#ff0000"
          onPress={() => Alert.alert('Welcome Back !')}
        />
        <Button
          // Some properties given to Button
          title="Sign-up"
          onPress={() => Alert.alert('Welcome! Happy to have you. ')}
        />
      </View>
      {/* <TouchableOpacity onPress={() => onPressingBtn1()} style={styles.btn}>
        <View>
          <Text style={{color: 'red'}}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableHighlight onPress={() => onPressingBtn2()} style={styles.btn}>
        <View>
          <Text style={{color: 'blue'}}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight> */}
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: '5%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 125,
    height: 125,
    margin: 'auto',
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  dummyText: {
    alignSelf: 'center',
    width: '70%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    lineHeight: 60,
  },
  primaryInput: {
    marginTop: '5%',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '70%',
    margin: 'auto',
    borderStyle: 'dotted',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  options: {
    marginTop: '10%',
    marginBottom: '10%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20,
  },
  Button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '48%',
    textAlign: 'center',
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '48%',
    textAlign: 'center',
  },
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

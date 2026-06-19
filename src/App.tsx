import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { JSX, PropsWithChildren, useState } from 'react';
import Diceone from '../assets/one.png';
import Dicetwo from '../assets/two.png';
import Dicethree from '../assets/three.png';
import Dicefour from '../assets/four.png';
import Dicefive from '../assets/five.png';
import Dicesix from '../assets/six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(Diceone);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(Diceone);
        break;
      case 2:
        setDiceImage(Dicetwo);
        break;
      case 3:
        setDiceImage(Dicethree);
        break;
      case 4:
        setDiceImage(Dicefour);
        break;
      case 5:
        setDiceImage(Dicefive);
        break;
      case 6:
        setDiceImage(Dicesix);
        break;
      default:
        setDiceImage(Diceone);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage} />
        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollTheDice}>Roll the Dice</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  diceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {},
  rollTheDice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {shapes, strings, TIME_CONSTANT} from '../constants';
import {metrics} from '../themes';
import * as Progress from 'react-native-progress';
import {State, ForceTouchGestureHandler} from 'react-native-gesture-handler';
import {MainScreenStyles} from './styles';

const MainScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [buttonColor, setButtonColor] = useState('blue');
  const [buttonStyle, setButtonStyle] = useState(null);
  const [buttonXPosition, setButtonXPosition] = useState(200);
  const [buttonYPosition, setButtonYPosition] = useState(400);
  const [lastPress, setLastPress] = useState(null);
  const [force, setForce] = useState(0);

  const onButtonPress = () => {
    const now = Date.now();

    setLastPress(now);
    if (now - lastPress <= TIME_CONSTANT) {
      doubleTouch();
    } else {
      singleTouch();
    }
  };

  const singleTouch = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(buttonColor);
    setButtonColor(randomColor);
  };

  const doubleTouch = () => {
    const randomY = Math.floor(Math.random() * (metrics.screenHeight - 100));
    const randomX = Math.floor(Math.random() * (metrics.screenWidth - 100));
    setButtonXPosition(randomX);
    setButtonYPosition(randomY);
  };

  const onButtonLongPress = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setButtonStyle(shapes[randomNumber]);
  };

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      setForce(0);
    }
  };

  return (
    <View
      style={[MainScreenStyles.container, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity
        style={[
          MainScreenStyles.touchable,
          {
            top: buttonYPosition && buttonYPosition,
            left: buttonXPosition && buttonXPosition,
          },
        ]}
        onPress={onButtonPress}
        onLongPress={onButtonLongPress}>
        <View
          style={[
            buttonStyle || MainScreenStyles.buttonContainer,
            {
              backgroundColor: buttonColor,
            },
          ]}>
          <Text style={MainScreenStyles.text}>{strings.pressMe}</Text>
        </View>
      </TouchableOpacity>
      <Progress.Bar progress={force} width={metrics.screenWidth - 50} />

      <ForceTouchGestureHandler
        onGestureEvent={(event) => {
          setForce(event.nativeEvent.force);
        }}
        onHandlerStateChange={onHandlerStateChange}>
        <View style={MainScreenStyles.forceButton}>
          <Text style={MainScreenStyles.text}>{strings.forcePress}</Text>
        </View>
      </ForceTouchGestureHandler>
    </View>
  );
};

export default MainScreen;

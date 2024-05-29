import React from 'react';
import { View, Text, Button } from 'react-native';

const LinksPage = ({ navigation }) => {
  return (
    <View>
      <Text>Links Page</Text>
      <Button
        title="Go to Text Page 1"
        onPress={() => navigation.navigate('TextPage1')}
      />
      <Button
        title="Go to Text Page 2"
        onPress={() => navigation.navigate('TextPage2')}
      />
      {/* Add more buttons as needed */}
    </View>
  );
};

export default LinksPage;

import React from 'react';
import { Button, YStack, Text, XStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';

export default function ScreenOne() {
  const navigation = useNavigation();

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Text fontSize="$6" fontWeight="bold">
        Hello World!
      </Text>
      <XStack space>
        <Button
          size="$4"
          theme="blue"
          onPress={() => alert('Tapped!')}
        >
          Tap me for an alert
        </Button>
        <Button
          size="$4"
          theme="green"
          onPress={() => navigation.navigate('Two', { message: 'Hello, world!' })}
        >
          Go to next screen
        </Button>
      </XStack>
    </YStack>
  );
}
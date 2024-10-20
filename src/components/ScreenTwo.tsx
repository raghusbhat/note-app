import React from 'react';
import { Button, YStack, Text } from 'tamagui';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ScreenTwo() {
  const navigation = useNavigation();
  const route = useRoute();
  const { message } = route.params;

  return (
    <YStack f={1} jc="center" ai="center" space backgroundColor="$yellow10">
      <Text fontSize="$6" fontWeight="bold" color="$color">
        You're viewing screen two!
      </Text>
      <Text fontSize="$4" color="$color">
        Message: {message}
      </Text>
      <Button size="$4" theme="blue" onPress={() => navigation.goBack()}>
        Go back
      </Button>
    </YStack>
  );
}
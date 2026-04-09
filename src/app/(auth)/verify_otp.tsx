import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '~/src/components/CustomButton';

export default function SetOtp() {
  const [, setOtp] = useState('');

  const otpVerify = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('~/assets/images/instagram.png')}
          resizeMode="contain"
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
            marginBottom: 35,
          }}
        />
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 19, marginBottom: 14, color: 'black' }}
          ></Text>
          <OtpInput
            focusColor="blue"
            type="numeric"
            numberOfDigits={6}
            onTextChange={(text: string) => setOtp(text)}
            autoFocus={true}
            theme={{
              containerStyle: {
                justifyContent: 'center',
                gap: 8,
                alignItems: 'center',
                height: 10,
                width: 10,
                marginVertical: 40,
              },
              pinCodeTextStyle: { color: 'blue' },
              focusStickStyle: { borderColor: 'blue' },
              pinCodeContainerStyle: { backgroundColor: 'white' },
            }}
          />
          <CustomButton title="Sign up" onPress={() => otpVerify()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

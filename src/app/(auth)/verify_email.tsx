import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '~/src/components/CustomButton';
import InputField from '~/src/components/InputField';

export default function SetEmail() {
  const { heading } = useLocalSearchParams();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const emailVerify = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}
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
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 19,
            color: 'black',
            marginVertical: 20,
          }}
        >
          {heading}
        </Text>
        <View style={{ width: '100%', alignItems: 'center', gap: 20 }}>
          <InputField
            title="Email"
            value={email}
            placeholder="example@email.com"
            handleChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
          />
          <CustomButton
            title="Verify"
            loading={loading}
            onPress={() => emailVerify()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

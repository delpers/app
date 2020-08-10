import React, { useState } from 'react';
import { Text, ActivityIndicator, Alert } from 'react-native';
import * as firebase from 'firebase';

import {
  PageContainer,
  LogoForm,
  InputsContainer,
  InputForm,
  ButtonForm,
  ButtonTextForm,
  SwitchForm,
  ErrorBox,
  ErrorText
} from '../../styles';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  function handlePress() {
    setProcessing(true)
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        setProcessing(false);
        Alert.alert('Email was sent!');
        navigation.push('Login');
      })
      .catch((error) => {
        setProcessing(false);
        Alert.alert(JSON.stringify(error.message));
      });
  };

  return (
    <PageContainer>
      <Text>Réinitialiser votre mot de passe </Text>

      {error && (
        <ErrorBox>
          <ErrorText>{error}</ErrorText>
        </ErrorBox>
      )}

      <InputsContainer>
        <InputForm
          placeholder="Saisir votre e-mail"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        {processing && <ActivityIndicator size="large" style={{marginBottom: 16}}/>}
        <ButtonForm onPress={handlePress}>
          <ButtonTextForm>Envoyer</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 16, fontFamily: 'Lato'}}>or</Text>


      <SwitchForm onPress={() => navigation.push('Register')}>Je n'ai pas de compte</SwitchForm>
    </PageContainer>
  );
}

import React, { useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  function handleFormRegister() {
    setProcessing(true)
    // Persist Login User
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      // Login
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          setProcessing(false)
          setError(JSON.stringify(error.message))
        });
      })
      .catch(error => {
        setProcessing(false)
        setError("Error to login")
      });
    }

  return (

    <PageContainer>

<Text> Connexion </Text>


      {error && (
        <ErrorBox>
          <ErrorText>{error}</ErrorText>
        </ErrorBox>
      )}

      <InputsContainer>
        <InputForm
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <InputForm
          placeholder="Saisir un mot de passe"
          onChangeText={text => setPassword(text)}
          value={password}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        {processing && <ActivityIndicator size="large" style={{marginBottom: 16}}/>}
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Connexion</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 8, fontFamily: 'Lato'}}>Ou</Text>


      <SwitchForm style={{margin: 8, fontFamily: 'Lato'}} onPress={() => navigation.push('Register')}>Je n'ai pas de compte</SwitchForm>

      <SwitchForm onPress={() => navigation.push('ResetPassword')}>J'ai oublié mon mot de passe</SwitchForm>
    </PageContainer>
  );
}

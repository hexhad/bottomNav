import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {BiHome} from 'react-icons/bi';

// import AsyncStorage from '@react-native-community/async-storage';
// import {color} from 'react-native-reanimated';

const Container = styled.View`
  background: #8fcbbc;
  flex: 1;
`;
const Text = styled.Text``;

const ScrollView = styled.ScrollView`
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
`;

const CardSmall = styled.TouchableOpacity`
    height :60px;
    background : #FFF;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;

const NormalText = styled.Text`
  font-size: 20px;
`;

export default function ScreenThree() {
  return (
    <>
      <Container>
        <ScrollView>
          <CardSmall>
            <NormalText>Screen Three</NormalText>
          </CardSmall>
        </ScrollView>
      </Container>
    </>
  );
}

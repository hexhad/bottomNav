import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background: #4a4e57;
  flex: 1;
`;

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

export default function ScreenOne() {
  return (
    <>
      <Container>
        <ScrollView>
          <CardSmall>
            <NormalText>Hex Home</NormalText>
          </CardSmall>
        </ScrollView>
      </Container>
    </>
  );
}

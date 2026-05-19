import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/Container';
import CustomText from '../../components/shared/CustomText';

const Profile = () => {
  return (
    <ScreenContainer>
      <Text>Profile</Text>
      <CustomText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
        exercitationem, labore nobis placeat necessitatibus dicta rerum
        voluptatum eligendi totam odio!
      </CustomText>
    </ScreenContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({});

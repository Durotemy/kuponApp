import { FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ScreenContainer from '../../components/Container';
import CustomSection from '../../components/shared/CustomSession';
import CustomText from '../../components/shared/CustomText';
import TransferInput from '../../components/TransferInput';
import Select from '../../../assets/svg/Leading-icon.svg';
import useFilterHook from '../../hooks/useFilterHook';
import { darkGreen, lighterBrown, white, yellow } from '../../constant/palette';

import { Button } from '../../components/shared/Button';
import { content } from '../../constant/data';
import { ContentType } from '../../type/types';
import {
  useAppNavigation,
  useAuthNavigation,
} from '../../hooks/useNavigationHook';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const renderItem = ({ item }: { item: ContentType }) => (
  <CustomSection
    backgroundColor={item.backgroundColor}
    paddingHorizontal={10}
    paddingVertical={10}
  >
    <CustomSection flexDirection="row" justifyContent="space-between">
      <CustomSection justifyContent="space-between" gap={20}>
        <CustomSection style={{ flex: 1 }} gap={10}>
          <CustomText size="xl" weight="bold" color={white}>
            {item.title}
          </CustomText>

          <CustomText lineHeight={28} color={white}>
            {item.text}
          </CustomText>
        </CustomSection>

        <Button
          backgroundColor={item.buttonBackgroundColor}
          width={150}
          buttonTextColor={item.buttonColor}
          label={item.buttonText}
          onPress={() => {}}
        />
      </CustomSection>
      <CustomSection style={{ alignSelf: 'flex-end' }}>
        <item.icon />
      </CustomSection>
    </CustomSection>
  </CustomSection>
);

const Dashboard = () => {
  const navigation = useAppNavigation();
  const navigations = useNavigation();

  const { filteredItem, search, setSearch } = useFilterHook(
    content,
    item => item.text,
  );

  const handleDrawer = () => {
    navigations.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ScreenContainer>
      <CustomSection>
        <TransferInput
          backgroundColor={lighterBrown}
          label="Search"
          value={search}
          onChangeText={text => setSearch(text)}
          rightIcon={<Select />}
          leftIcon={
            <CustomText weight="bold" size="lg" color={darkGreen}>
              M
            </CustomText>
          }
          onLeftIconPress={handleDrawer}
        />
      </CustomSection>
      <CustomSection marginTop={20}>
        <FlatList
          data={filteredItem}
          renderItem={renderItem}
          contentContainerStyle={{
            gap: 10,
          }}
        />
      </CustomSection>
    </ScreenContainer>
  );
};

export default Dashboard;

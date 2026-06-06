import {
  Alert,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import ScreenContainer from '../../components/Container';
import CustomText from '../../components/shared/CustomText';
import { Button } from '../../components/shared/Button';
import { useHandlePicker } from '../../hooks/useHandlePicker';
import { MAX_IMAGES, validateFile } from '../../BusinessRules';
import TransferInput from '../../components/TransferInput';
import CustomSection from '../../components/shared/CustomSession';
import {
  brown,
  darkBrown,
  darkYellow,
  faintYellow,
} from '../../constant/palette';
import Gallery from '../../../assets/svg/gallery.svg';
import CustomTitle from '../../components/shared/CustomTitle';
import { NormalizedFile } from '../../type/types';
import { useProfileHook } from '../../hooks/useProfileHook';

const Profile = () => {
  const { width } = Dimensions.get('window');
  const [selectedItem, setSelectedItem] = useState<NormalizedFile[]>([]);

  const { handlePick } = useHandlePicker();
  const handlePickDocument = async () => {
    if (selectedItem.length >= MAX_IMAGES) {
      Alert.alert('You can only select up to 2 images');
      return;
    }
    const file = await handlePick();
    if (!file) return;
    const result = validateFile(file);

    if (!result.valid) {
      Alert.alert(result.error!);
      return;
    }
    setSelectedItem(prev => {
      if (prev.length >= MAX_IMAGES) {
        Alert.alert('You can only select up to 2 images');
        return prev;
      }
      return [...prev, file];
    });
  };

  const { handleChange, formData, handleBlurred, error, validateForm } =
    useProfileHook();

  const onSave = () => {
    const valid = validateForm();
    if (valid) {
      Alert.alert('Profile saved successfully');
      // persist changes here
    } else {
      Alert.alert('Please fix errors in the form');
    }
  };

  const disableSave =
    Object.values(error).some(err => err) ||
    Object.values(formData).some(value => !value);

  return (
    <ScreenContainer>
      <CustomSection padding={5}>
        <CustomTitle children="Profile" />

        <CustomSection
          backgroundColor={faintYellow}
          justifyContent="center"
          alignItems="center"
          height={200}
        >
          <CustomText
            color={darkYellow}
            weight="bold"
            size="xl"
            marginBottom="lg"
            marginTop="lg"
          >
            Select Image From Device
          </CustomText>
          <CustomSection
            borderStyle="dashed"
            borderWidth={2}
            borderColor={darkBrown}
            width={width * 0.9}
            alignItems="center"
            padding={5}
          >
            <CustomSection
              backgroundColor={brown}
              alignItems="center"
              justifyContent="center"
              width={width * 0.85}
              height={100}
              flexDirection="row"
              gap={4}
            >
              <CustomSection flexDirection="row" alignItems="center" gap={10}>
                {selectedItem.map((ele, index) => (
                  <Image
                    key={index}
                    source={{ uri: ele.uri }}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 8,
                      resizeMode: 'cover',
                    }}
                  />
                ))}

                {selectedItem.length < MAX_IMAGES && (
                  <TouchableOpacity onPress={handlePickDocument}>
                    <Gallery />
                  </TouchableOpacity>
                )}
              </CustomSection>
            </CustomSection>
          </CustomSection>
        </CustomSection>

        <CustomSection padding={4}>
          <TransferInput
            label="Full name"
            onChangeText={text => handleChange('fullName', text)}
            blurred={() => handleBlurred('fullName')}
            value={formData.fullName}
            error={error?.fullName}
          />

          <TransferInput
            label="Email"
            onChangeText={text => handleChange('email', text)}
            blurred={() => handleBlurred('email')}
            value={formData.email}
            error={error?.email}
            keyboardType="default"
          />

          <TransferInput
            label="Phone number"
            onChangeText={text => handleChange('phoneNumber', text)}
            blurred={() => handleBlurred('phoneNumber')}
            value={formData.phoneNumber}
            error={error?.phoneNumber}
            keyboardType="numeric"
          />

          <TransferInput
            label="Posting address"
            onChangeText={text => handleChange('postingAddress', text)}
            blurred={() => handleBlurred('postingAddress')}
            value={formData.postingAddress}
            error={error?.postingAddress}
          />

          <TransferInput
            label="Pickup city"
            onChangeText={text => handleChange('pickupCity', text)}
            blurred={() => handleBlurred('pickupCity')}
            value={formData.pickupCity}
            error={error?.pickupCity}
          />

          <TransferInput
            label="Company name"
            onChangeText={text => handleChange('companyName', text)}
            blurred={() => handleBlurred('companyName')}
            value={formData.companyName}
            error={error?.companyName}
          />

          <CustomSection marginTop={10}>
            <Button label="Save" onPress={onSave} disable={disableSave} />
          </CustomSection>
        </CustomSection>
      </CustomSection>
    </ScreenContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({});

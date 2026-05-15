import Logo from '../../assets/svg/LoginImage.svg';
import ShoppingMadeEasy from '../../assets/svg/shoppingMadeEasy.svg';
import ReachTarget from '../../assets/svg/ReachTarget.svg';
import DeliverDestination from '../../assets/svg/DeliverService.svg';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const section = [
  {
    icon: <Logo width={width * 0.85} />,
    title: 'Welcome to Kupon',
    text: 'Kupon redefines logistics and revolutionizes e-commerce experience...',
  },
  {
    icon: <ShoppingMadeEasy width={width * 0.85} />,
    title: 'Shopping made easy',
    text: 'Shop from a wide range of product listings conveniently...',
  },
  {
    icon: <ReachTarget width={width * 0.85} />,
    title: 'Reach your target market',
    text: 'Showcase your products and reach a wider audience...',
  },
  {
    icon: <DeliverDestination width={width * 0.85} />,
    title: 'Deliver services anywhere',
    text: 'Deliver services to any destination',
  },
];

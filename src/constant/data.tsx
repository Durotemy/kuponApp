import Logo from '../../assets/svg/LoginImage.svg';
import ShoppingMadeEasy from '../../assets/svg/shoppingMadeEasy.svg';
import ReachTarget from '../../assets/svg/ReachTarget.svg';
import DeliverDestination from '../../assets/svg/DeliverService.svg';

import TruckSvg from '../../assets/svg/carTruck.svg';
import MarketPlace from '../../assets/svg/cuate.svg';
import StartShopping from '../../assets/svg/rafiki.svg';
// import { Button } from '../components/shared/Button';

import { Dimensions } from 'react-native';
import { ContentType } from '../type/types';
import {
  black,
  brightBrown,
  darkGreen,
  mildbrown,
  white,
  yellow,
  yellowGreen,
} from './palette';

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

export const content: ContentType[] = [
  {
    title: 'Kupon Logistics \nCompany ',
    text: 'Send packages across the \ncountry with no hastle',
    buttonText: 'Learn More',
    backgroundColor: brightBrown,
    buttonBackgroundColor: yellow,
    buttonColor: black,
    icon: TruckSvg,
  },
  {
    title: 'Kupon Online \nMarket Place  ',
    text: 'List your product on Kupon \nfor sale and reach large audience',
    buttonText: 'Get started',
    backgroundColor: darkGreen,
    buttonBackgroundColor: yellow,
    buttonColor: black,

    icon: MarketPlace,
  },
  {
    title: 'Kupon Online \nMarket Place   ',
    text: 'Browse our top quality items \nwith exciting offers',
    buttonText: 'Start Shopping',
    backgroundColor: yellowGreen,
    icon: StartShopping,
    buttonColor: white,
    buttonBackgroundColor: mildbrown,
  },
];

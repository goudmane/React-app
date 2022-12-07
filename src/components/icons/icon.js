import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconSearch,
  IconQrCode,
  IconMenu,
  IconInformation,
  IconMagasin,
  IconRestaurant,
  IconHome,
  IconCar,
  IconUser,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconSearch />;
    case 'QrCode':
      return <IconQrCode />;
    case 'Menu':
      return <IconMenu />;
    case 'Info':
      return <IconInformation />;
    case 'Magasin':
      return <IconMagasin />;
    case 'Restaurant':
      return <IconRestaurant />;
    case 'Home':
      return <IconHome />;
    case 'Car':
        return <IconCar />;
    case 'User':
        return <IconUser />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

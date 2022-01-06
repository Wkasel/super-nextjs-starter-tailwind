// @ts-nocheck

import styled from 'styled-components';
import tw from 'twin.macro';

export interface IHeaderProps {
  transparent?: boolean;
}

export const Header = styled.div`
  ${tw`sticky top-0 flex items-center justify-between m-0 z-60`};
  background: ${(props: IHeaderProps) =>
    props.transparent || false
      ? 'transparent'
      : 'linear-gradient(89.98deg, #7c3aed 1.36%, #b843a8 71.17%, #ec4899 97.64%);'};
`;
export const Container = tw.div`py-1 w-full mx-auto sm:px-6 lg:px-4`;
export const Flow = tw.div`relative flex justify-between items-center md:grid md:grid-cols-12 md:gap-8`;
export const NavbarLeft = tw.div`md:col-span-2`;
export const NavbarMiddleContainer = tw.div`min-w-0 flex-1 md:px-2 lg:px-0 md:col-span-5 lg:col-span-7`;
export const NavbarMiddle = tw.div`px-6 py-4 w-full md:max-w-5xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0`;
export const SearchContainer = tw.div`w-full relative`;
export const NavbarRightContainer = tw.div`hidden md:grid md:col-span-5 lg:col-span-4`;
export const NavbarRight = tw.div`w-full md:flex md:items-center md:justify-between`;
export const NavbarLinksContainer = styled.div`
  ${tw`pr-8`};
  & > *:first-child {
    ${tw`pr-4`};
  }
`;
export const NavbarLink = tw.span`text-white py-2 px-2 hover:cursor-pointer`;
export const NavbarRightInner = tw.div`flex justify-end`;
export const Notification = tw.div`ml-5 flex-shrink-0 rounded-full p-1 text-white hover:text-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
export const Profile = tw.div`flex-shrink-0 relative ml-5`;
export const ProfileButton = tw.button`bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
export const ProfileImage = tw.img`h-8 w-8 rounded-full`;

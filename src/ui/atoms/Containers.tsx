import tw, { styled, TwStyle } from 'twin.macro';

type ContainerVariant = 'contained' | 'wide' | 'full';

interface ContainerProps {
  variant?: ContainerVariant;
}

// Use the `TwStyle` import to type tw blocks
const containerVariants: Record<ContainerVariant, TwStyle> = {
  // Named class sets
  contained: tw`mx-auto max-w-7xl lg:px-8`,
  wide: tw`mx-auto max-w-screen-2xl lg:px-8`,
  full: tw`mx-auto lg:px-8`,
};

export const SectionContainer = styled.section<ContainerProps>(() => [
  // Return a function here
  {
    ...tw`relative min-h-full px-4 py-16 sm:px-6 sm:py-24 lg:pt-32`,
    '> div': tw`py-10 sm:py-16 lg:pt-8 lg:pb-14 lg:overflow-hidden`,
  },
  ({ variant = 'contined' }) => containerVariants[variant], // Grab the variant style via a prop
]);

interface BGImgProps {
  show?: boolean;
  variant?: string;
}

const BackgroundImage = tw.img`object-cover w-full h-full`;
const BGImageContainer = tw.div`absolute inset-0`;
const BGInnerReset = tw.div`absolute inset-0 bg-gray-700 mix-blend-multiply`;

export const BGImage = (props) => (
  <BGImageContainer {...props}>
    <BackgroundImage src={props.src} />
    <BGInnerReset />
  </BGImageContainer>
);

export const Column = tw.div`w-1/2`;

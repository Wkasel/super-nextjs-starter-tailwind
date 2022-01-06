import tw from 'twin.macro';

import EmailIcon from '@ui/icons/EmailIcon';

export const Input = tw.input`
  px-4
  py-2
  placeholder-gray-500
  w-full
  
  md:mx-auto
  lg:mx-auto
  focus:ring-primary-100
  focus:border-primary-500
  border-gray-400
  border-width[1px]
  border-solid
  rounded-md
  shadow-xs
`;
export const CodeInput = tw.input`w-full px-8 py-4 rounded-lg text-6xl text-center bg-gray-100 border-0 border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

export const InputTextLeft = tw(Input)`text-left py-2`;
export const InputTextLeftXS = tw(Input)`text-left max-w-44`;
export const InputSmall = tw.input`
  text-left
  pl-2
  my-2
  placeholder-gray-500
  sm:max-w-20
  md:max-w-30
  lg:max-w-44
  md:mx-auto
  lg:mx-auto
  focus:ring-primary-100 
  focus:border-primary-500
  border-gray-300
  rounded-md
`;

export const EmailInput = ({ withIcon = true, value, onChange, ...rest }) => (
  <div className="relative">
    {withIcon ? <EmailIcon /> : null}
    <Input type="email" tw="pl-20" value={value} onChange={onChange} {...rest} />
  </div>
);

const InputWithLabelWrapper = tw.div`block mb-4`;

const FormLabel = tw.label`block mb-1`;

export const InputWithLabel: React.FC<any> = ({ label, children, ...rest }) => (
  <InputWithLabelWrapper {...rest}>
    <FormLabel>{label}</FormLabel>
    {children}
  </InputWithLabelWrapper>
);

// TODO: pick a date picker library
export const DatePicker = () => <Input />;

export const Select = tw.select`
  max-w-md
  px-4
  py-2
  placeholder-gray-500
  w-full
  md:max-w-lg
  lg:max-w-2xl
  md:mx-auto
  lg:mx-auto
  focus:ring-primary-100
  focus:border-primary-500
  border-gray-400
  border-width[1px]
  border-solid
  rounded-md
  shadow-xs
`;

export const FormHeader = tw.p`text-lg text-gray-800 dark:text-gray-700 font-bold`;

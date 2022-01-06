/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import tw from 'twin.macro';

const ToggleWrapper = tw.div`relative inline-block w-10 mr-2 align-middle select-none`;
const ToggleInput = tw.input`
absolute block rounded-full
w-6 h-6
appearance-none
cursor-pointer
bg-white
border-2 border-solid border-gray-300
focus:ring-offset-0
focus:ring-transparent
focus:outline-none
transition[all, all ease-in-out 0.15s]
`;
const ToggleRail = tw.label`block overflow-hidden h-6 rounded-full cursor-pointer
  transition[all, all ease-in-out 0.15s]`;

export const Toggle = ({ checked, setChecked, disabled = false, label }) => {
  const onChange = () => {
    if (disabled) {
      return;
    }
    setChecked(!checked);
    checked = !checked;
  };
  return (
    <ToggleWrapper>
      <ToggleInput
        type="checkbox"
        css={
          checked
            ? disabled
              ? tw`right-0 cursor-default border-primary-200`
              : tw`right-0 border-primary-700 text-primary-500`
            : disabled
            ? tw`border-gray-200 cursor-default right-4`
            : tw`text-white border-gray-400 right-4`
        }
        checked={checked}
        onChange={onChange}
      />
      <ToggleRail
        onClick={onChange}
        css={
          checked
            ? disabled
              ? tw`right-0 cursor-default bg-primary-200`
              : tw`right-0 bg-primary-700`
            : disabled
            ? tw`bg-gray-200 cursor-default right-4`
            : tw`bg-gray-400 right-4`
        }
      />
      <label>{label}</label>
    </ToggleWrapper>
  );
};

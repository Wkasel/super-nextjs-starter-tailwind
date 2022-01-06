import React from 'react';

// import { mergeClassLists as cl } from "tailwind-classlist";
import tw, { css } from 'twin.macro';
// import clsx from "clsx";

export type IButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<IButton> = ({ className = '', disabled, onClick, children, ...rest }) => (
  <button
    className={`transition-all bg-gradient-to-r from-pink to-red border-solid py-2 px-4 border-1 duration-300 ease-in-out focus:outline-none text-gray-200 hover:text-white font-normal ring-opacity-75 ring-0 text-lg rounded-md ${className}`}
    css={`
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
      &:hover {
        filter: brightness(1.1);
      }
    `}
    {...rest}
    disabled={disabled}
    data-testid="btn"
    onClick={onClick}>
    {children}
  </button>
);

export const BigButton: React.FC<IButton> = ({ disabled, onClick, children, ...rest }) => (
  <button
    className={
      'transition-all w-full bg-gradient-to-r from-pink to-red border-solid py-4 px-6 border-1 duration-300 ease-in-out focus:outline-none text-gray-200 hover:text-white font-normal ring-opacity-75 ring-0 text-lg rounded-md'
    }
    css={`
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
      &:hover {
        filter: brightness(1.1);
      }
    `}
    {...rest}
    disabled={disabled}
    data-testid="btn"
    onClick={onClick}>
    {children}
  </button>
);

// export const BaseButton = styled.input(({ variant }) => [
//   `color: black;`,
//   variant && tw`border-purple-500`,
// ])

// border-solid py-2 px-4 border-1 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-primary-700 hover:bg-primary-700 text-primary-700 hover:text-white font-normal ring-opacity-75 ring-primary-400 text-lg rounded-md

export const PrimaryButton: React.FC<any> = ({ className = '', onClick, children, ...rest }) => (
  <Button
    onClick={onClick}
    className={`border-solid transition duration-300 ease-in-out focus:outline-none border-primary-200 hover:text-white font-normal py-2 px-4 rounded ${className}`}
    data-testid="btn"
    {...rest}>
    {children}
  </Button>
);

export const SubmitButton = tw(
  PrimaryButton
)`mt-5 tracking-wide font-semibold w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none`;

export const PurchaseButton = tw(Button)`text-white text-2xl bg-pink-600 ring-pink-400 px-12`;

export const SubscribeButton = tw(PrimaryButton)`bg-primary-600`;

export const ButtonWithIcon: React.FC<any> = ({ icon: Icon, title, ...rest }) => (
  <Button tw="flex rounded-2xl text-white shadow-sm" {...rest}>
    <Icon className="inline-block w-6 h-6" />
    <span className="ml-2">{title}</span>
  </Button>
);

export const LoginButton = tw(
  SubscribeButton
)`w-full text-sm rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none`;

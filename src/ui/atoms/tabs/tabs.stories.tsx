import React from 'react';

import { Story } from '@storybook/react/types-6-0';

import { Button, PrimaryButton } from 'ui/atoms';

import { Tabs, ITab } from './tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    price: {
      control: {
        type: 'number',
      },
    },
    subscribers: {
      control: {
        type: 'number',
      },
    },
  },
};

export const DefaultTabs: Story<any> = (args) => <Tabs {...args} />;
DefaultTabs.args = {
  streamName: 'Public',
  price: 29.99,
  subscribers: 1500,
  description: 'insert description here',
};

const exampleTabs = [
  {
    name: 'The Bebop',
    Content: (
      <div>
        See you, Space Cowboy <PrimaryButton>Someday</PrimaryButton>,<PrimaryButton>Sometime</PrimaryButton>
      </div>
    ),
  },
  {
    name: 'Serenity',
    Content: (
      <>
        <p>I aim to misbehave.</p>
        <PrimaryButton>Yaay</PrimaryButton>
        <Button>No.</Button>
      </>
    ),
  },

  {
    name: "Teal'c",
    Content: <div>Indeed.</div>,
  },
];

export const GenericTabs: Story<ITab> = () => <Tabs tabs={exampleTabs} />;

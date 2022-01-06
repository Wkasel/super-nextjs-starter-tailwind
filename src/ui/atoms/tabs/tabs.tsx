/* eslint-disable @typescript-eslint/no-shadow */
// @ts-nocheck
import { useState } from 'react';

import tw from 'twin.macro';

const TabContainer = tw.div``;
const TabHeaderContainer = tw.nav`flex flex-row`;
const TabButton = tw.button`text-lg py-4 px-12 border-b-2 focus:outline-none`;
const TabBodyContainer = tw.div`pt-8`;

export interface ITab {
  selected: any;
  name: string;
  Content: any;
}

export const Tabs = ({ tabs }) => {
  const [selected, setSelected] = useState(0);
  const { Content } = tabs[selected || 0];

  return (
    <TabContainer>
      <TabHeaderContainer>
        {[
          tabs.map(({ name, selected, Content }: ITab, index) => (
            <TabButton
              key={name}
              css={
                selected === index
                  ? tw`text-black border-b-purple-600`
                  : tw`text-gray-600 border-b-transparent hover:border-gray-200 hover:text-gray-900`
              }
              onClick={() => setSelected(index)}>
              {name}
            </TabButton>
          )),
        ]}
      </TabHeaderContainer>
      <TabBodyContainer>
        <Content />
      </TabBodyContainer>
    </TabContainer>
  );
};

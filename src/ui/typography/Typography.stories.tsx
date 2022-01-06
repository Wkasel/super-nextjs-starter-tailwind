import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { SectionDescription, SectionHeading, Subheading } from "./Typography";

export default {
  title: "Typography",
  component: SectionDescription,
};

export const _SectionDescription: Story<any> = () => <SectionDescription>I'm a section description</SectionDescription>;

export const _SectionHeading: Story<any> = () => <SectionHeading> I'm a section heading</SectionHeading>;

export const _SubHeading: Story<any> = () => <Subheading> I'm a sub heading </Subheading>;

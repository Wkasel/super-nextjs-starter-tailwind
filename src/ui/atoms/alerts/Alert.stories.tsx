import React from "react";
import * as Alert from "./index";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Alert",
  component: Alert.Success,
};

export const _Success: Story<any> = () => <Alert.Success>I'm a success alert</Alert.Success>;
export const _Error: Story<any> = () => <Alert.Error>I'm a error alert</Alert.Error>;

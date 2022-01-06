import { Navbar, NavbarEmpty } from ".";

export default {
  title: "Navbars",
  component: [Navbar],
  args: {},
  argTypes: {}
};
export const Default = args => <Navbar {...args} />;
export const Empty = args => <NavbarEmpty {...args} />;

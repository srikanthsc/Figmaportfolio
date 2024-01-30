import { Link } from ".";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    stateProp: {
      options: ["click", "hover", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    primaryText: "Nav Link",
    stateProp: "click",
    className: {},
    textClassName: {},
  },
};

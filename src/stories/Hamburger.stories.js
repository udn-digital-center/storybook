import Hamburger from "../components/Hamburger.vue";

export default {
  title: "Components/Hamburger",
  component: Hamburger,
  argTypes: {
    width: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
    height: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
    weight: {
      control: {
        type: "range",
        min: 0,
        max: 10,
      },
    },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { Hamburger },
  setup() {
    return { args };
  },
  template: '<Hamburger v-bind="args" />',
});

const defaultArgs = {
  width: 32,
  height: 24,
  weight: 3,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  width: 24,
  height: 24,
  weight: 2,
};

export const Rgb = Template.bind({});
Rgb.args = {
  ...defaultArgs,
  color: "pink",
  hoverColor: "lightgreen",
  activeColor: "skyblue",
};

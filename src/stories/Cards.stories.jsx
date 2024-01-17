import Cards from "@/components/Cards";
import React from 'react';

export default {
  component: Cards,
  title: 'Components/Cards',
  args: {
    cardData: {
      id: 1,
      task: '3 Recipes Added',
      time: 'Today, 04:45pm: Unidentified face detected',
      location: 'Coimbatore branch',
    },
  },
};

const Template = (args) => <Cards {...args} />;

export const Default = Template.bind({});


import Forms from '@/components/Forms';
import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';


export default {
  component: Forms,
};

export const EmptyForm = {};

export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('name'), 'John Doe');

    await userEvent.type(canvas.getByTestId('comp_name'), 'XYZ');

    await userEvent.click(canvas.getByRole('button'));

  },
};
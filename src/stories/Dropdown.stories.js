import Dropdown from './Dropdown'
import dummy from './assets/dummy.json'

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    // layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    renderOption: { control: 'boolean' },
    withSearch: { control: 'boolean' },
    options: { control: 'object' },
    portal: { control: 'boolean' },
    outlined: { control: 'boolean' },
    optionLabel: { control: 'text' },
    id: { control: 'text' },
    zIndex: { control: 'number'}
  },
  args: {
    multiple: true,
    renderOption: true,
    withSearch: true,
    options: dummy,
    portal: false,
    outlined: false,
    optionLabel: 'Select Club',
    id: 'dropdown',
    zIndex: 1000
  },
};

export const Default = {
  args: {},
};



import type { Meta, Story, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
  argTypes: {
    clickable: {
      control: 'boolean'
    },
    
    borderRadius: {
      control: 'boolean'
    },
    
    padding: {
      control: 'boolean'
    },
    
    shadow: {
      control: 'boolean'
    },
  }
};
export default meta;

const Template: Story<CardComponent> = args => ({
  props: args,
  template: `
  <div class="p-5" style="height:300px; width: 300px;">
    <app-card
    [shadow]="shadow"
    [padding]="padding"
    [clickable]="clickable"
    [borderRadius]="borderRadius">
      <ng-container>
      <div style="height:300px; display:flex;align-items:center;justify-content:center; color: black;">
        <h3>This is owerview of a card.</h3>
      </div>
      </ng-container>
    </app-card>
  </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  borderRadius: true,
  padding: true,
  clickable: true,
  shadow: true
};
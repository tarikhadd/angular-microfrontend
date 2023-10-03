import { moduleMetadata, type Meta, type Story, type StoryObj } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';
import { CardComponent } from '../../atoms/card/card.component';

const meta: Meta<ProductCardComponent> = {
  component: ProductCardComponent,
  title: 'ProductCardComponent',
  decorators: [
    moduleMetadata({
      declarations: [
        CardComponent
      ],
    })
  ],
  // argTypes: {
  //   clickable: {
  //     control: 'boolean'
  //   },
    
  //   borderRadius: {
  //     control: 'boolean'
  //   },
    
  //   padding: {
  //     control: 'boolean'
  //   },
    
  //   shadow: {
  //     control: 'boolean'
  //   }
  // }
};
export default meta;

const Template: Story<ProductCardComponent> = args => ({
  props: args,
  template: `
  <div style="width:250px">
    <app-product-card
    [description]="'Cant bind to borderRadius since it isnt a known property of app-card'"
    [price]="50">
    </app-product-card>
  </div>
  `
});

export const Default = Template.bind({});
// Default.args = {
//   borderRadius: true,
//   padding: true,
//   clickable: true,
//   shadow: true
// };

/*
[shadow]="shadow"
[padding]="padding"
[clickable]="clickable"
[borderRadius]="borderRadius"
*/
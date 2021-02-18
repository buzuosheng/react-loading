import React from "react";

import Loading from '../Loading'

export default {
  title: 'Example/Loading',
  component: Loading
}

const Template = (args) => { return <Loading {...args} /> }

export const type1 = Template.bind({})
type1.args = {
  type: 1,
  width: 100,
  height: 100,
  color: "#000"
}


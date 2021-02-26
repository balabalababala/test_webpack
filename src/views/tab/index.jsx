import React from 'react'
import TabBar from "./TabBar";

import Page1 from './page-1'
import Page2 from './page-2'
import Page3 from './page-3'
import './index.css'

const config = {
  defaultIndex: 0,
  items: [
    {
      component: Page1,
      name: '1',
      title: '1',
    },
    {
      component: Page2,
      name: '2',
      title: '2'
    },
    {
      component: Page3,
      name: '3',
      title: '3'
    },
  ],
}


const TopBarComponent = () => {
  return (
    <div className={'box'}>
      <TabBar config={config} />
    </div>
  );
}

export default TopBarComponent;
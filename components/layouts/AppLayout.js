import styles from './AppLayout.module.scss';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

import { useState } from 'react'
import Toolbar from 'components/header/Toolbar';
import LeftMenu from 'components/menus/LeftMenu';
import {setSelectedModule} from '../../slices/appSlice';

import { useEffect } from 'react';

function AppLayout(props) {
  const [activeTab, setActiveTab] = useState(0)

  const app = useSelector( (state) => {
    const app = state.app;
    console.log('useSelector app: ', app);
    const result = app ? app : {}
    console.log('useSelector: result: ', result);
    return result;
  });

  const dispatch = useDispatch();
  console.log('AppLayout: app: ', app);

  // const modules = [
  //   { id: 1, label: 'Module #1' },
  //   { id: 2, label: 'Module #2' },
  //   { id: 3, label: 'Module #3' },
  //   { id: 4, label: 'Module #4' },
  //   { id: 5, label: 'Module #5' },
  //   { id: 6, label: 'Module #6' },
  //   { id: 7, label: 'Module #7' },
  //   { id: 8, label: 'Module #8' },
  // ]


  const onTabChange = (params) => {
    console.log('onTabChange: params: ', params)
  }

  const onTabSelected = (module) => {
    const index = app.modules.findIndex(m => m.id === module.id);
    setActiveTab(index);
    dispatch(setSelectedModule(module.id));

  }

  return (
    <div className="flex flex-col h-full">
      <Toolbar></Toolbar>
      <div className="flex-grow-0 w-full">
      <Tabs
        value={1}
        className={'h-full ' + styles['tabs-bar']}
        onChange={(params) => onTabChange(params)}
      >
          <TabsHeader>
            {app.modules.map((module, index) => (
              <Tab
                key={module.id}
                value={module.id}
                className={'py-0' + (activeTab === index ? ' selected' : '')}
                onClick={(params) => onTabSelected(module)}
                style={{ maxWidth: '140px' }}
              >
                {module.label}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
      <div className="flex-grow flex flex-row items-start w-full h-full">
        <div style={{ width: '280px' }} className="bg-blue-200 h-full">
          <LeftMenu menu={app.modules[activeTab].menuItems}></LeftMenu>
        </div>
        <div className="flex-grow flex flex-col items-start w-full h-full bg-green-200 p-1">
          <div className="bg-blue-400 w-full h-full">
            {app.modules[activeTab].label}
          </div>

          {/* <TabsBody>
            {app.modules.map((module) => (
              <TabPanel key={module.id} value={module.id}>
                {module.label}
              </TabPanel>
            ))}
          </TabsBody> */}
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   console.log('mapStateToProps: state.app: ', state.app);
//   return {
//     app: state.app
//   };
// }
// export default connect(mapStateToProps)(AppLayout);

export default AppLayout;
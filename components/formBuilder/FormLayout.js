import { useEffect, useState, lazy } from 'react';
import { Button } from 'tailwind-elements'; // @material-tailwind/react';
import WidgetLayout from './WidgetLayout';

function FormLayout() {
  const [gap, setGap] = useState(1);
  const [comps, setComps] = useState('');

  let widgetLayout = (<div></div>);
  
  useEffect( () => {
    const loadWidgets = async () => {
      const InputWidgetText = await lazy(() => import('../widgets/text/edit'));            
      const updatedLayout = <InputWidgetText />
      setComps(updatedLayout);
    }
    loadWidgets();
  }, []);

  // useEffect( () => {
  //   const loadComps = async() => {

  //     const layout = (
  //       <InputWidgetText/>
  //     );
  //     setComps(prevState => [
  //       prevState.push(layout);
  //       return prevState;
  //     ])
  //   }
  // }, [])
  return (
    <div className="flex flex-col items-start bg-red-300 h-full">
      <div className="flex flex-grow-0 flex-row w-full bg-slate-200">
        <div className="flex flex-row items-center p-1 gap-1">
          <Button
            onClick={() => setGap(1)}
            variant={gap === 1 ? 'filled' : 'outlined'}
            className="py-2 px-5"
          >
            1
          </Button>
          <Button
            onClick={() => setGap(2)}
            variant={gap === 2 ? 'filled' : 'outlined'}
            className="py-2 px-5"
          >
            2
          </Button>
          <Button
            onClick={() => setGap(3)}
            variant={gap === 3 ? 'filled' : 'outlined'}
            className="py-2 px-5"
          >
            3
          </Button>
          <Button
            onClick={() => setGap(4)}
            variant={gap === 4 ? 'filled' : 'outlined'}
            className="py-2 px-5"
          >
            4
          </Button>
        </div>
      </div>
      <div
        className={'flex-grow-0 bg-blue-200 grid w-full grid-cols-1 gap-' + gap}
      >
        <h1>Hello</h1>
      </div>
      <div className="flex-grow flex w-full flex-col">
        <div className="flex-grow-0 w-full bg-yellow-500">{comps}</div>
        <div className="flex-grow w-full bg-white">
          <WidgetLayout />
        </div>
      </div>
    </div>
  )
}

export default FormLayout;

import GridLayout from 'react-grid-layout';

function WidgetLayout(props) {
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ]
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a" className='bg-red-900'>a</div>
      <div key="b" className='bg-green-900'>b</div>
      <div key="c" className='bg-blue-900'>c</div>
    </GridLayout>
  )
}

export default WidgetLayout;

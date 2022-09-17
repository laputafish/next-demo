import Toolbar from '../header/Toolbar'
import WidgetMenu from '../widgets/WidgetMenu.js'

function FormBuilderLayout(props) {
  return (
    <div className="flex flex-col w-full h-full">
      <Toolbar />
      <div className="flex-grow flex flex-row w-full bg-blue-300 items-stretch">
        <div
          className="flex-grow-0 flex flex-column p-0 m-0"
          style={{ minWidth: '280px' }}
        >
          <div
            className="flex-grow"
            style={{ height: 0, minHeight: '100%', overflowY: 'auto' }}
          >
            <div>
              <WidgetMenu />
            </div>
          </div>
        </div>
        <div className="flex-grow bg-green-400 p-1">{props.children}</div>
      </div>
    </div>
  )
}

export default FormBuilderLayout;

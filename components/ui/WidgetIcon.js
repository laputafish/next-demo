import * as Icons from '@heroicons/react/20/solid'
const ICON_SIZE = '20px';

function WidgetIcon(props) {
  console.log('icon = ' + props.icon)
  const TheIcon = Icons[props.icon]
  return (
    <div className={props.className} style={{ width: ICON_SIZE, height: ICON_SIZE }}>
      <TheIcon />
    </div>
  )
}

export default WidgetIcon

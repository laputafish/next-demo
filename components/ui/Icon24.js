import * as Icons from '@heroicons/react/24/solid'

function Icon24(props) {
  console.log('icon = ' + props.icon);
  const TheIcon = Icons[props.icon];
  return (
    <div className="mr-2" style={{ width: '24px', height: '24px' }}>
      <TheIcon/>
    </div>
  )
}

export default Icon24

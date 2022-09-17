import {Button} from '@material-tailwind/react';

function CellRenderer(props) {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value

  const buttonClicked = () => {
    alert(`Value is ${cellValue}`)
  }

  return (
    <span>
      <span>{cellValue}</span>&nbsp;
      <Button size="sm" onClick={() => buttonClicked()}>Push</Button>
    </span>
  )
}
export default CellRenderer;

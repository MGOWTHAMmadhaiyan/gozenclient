
import Button from '@mui/material/Button';



//BASIC COMPONENT CREATION (TASK 1)

function BasicComponent() {
  function handleClick() {
    window.alert('This is basic component');
    console.log('Button clicked!');
  }
  return (
    <div>
      <div><p>This is basic component </p>
        <Button onClick={handleClick} variant="contained" color="primary">BASIC COMPONENT</Button>
      </div>
    </div>
  )
}

export default BasicComponent;

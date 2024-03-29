
import { useState } from 'react'
import Button from '@mui/material/Button';


//CONDITIONAL RENDER (TASK 3)
function ConditionalRender() {
    const [isRender, setIsRender] = useState(false)
    function handleRender() {
        setIsRender(!isRender)
    }
    return (
        <div>
            <div>
                {isRender ? (<p>This is conditional render TRUE component </p>) : (<p>This is conditional render FALSE component </p>)}
            </div>
            <div>
                <Button onClick={handleRender} variant="contained" color="primary">RENDER</Button>
            </div>
        </div>

    )
}

export default ConditionalRender;

import React, {useState} from 'react'

function Question({children, title}) {
    const [isVisible, setIsVisible] = useState(false);
    const onToggle = () => {
        setIsVisible(!isVisible)
    }
  return (<>
    <div className='question' onClick={onToggle}>{title}</div>
     {isVisible ? <>{children}</> : null }
    </>
  )
}

export default Question
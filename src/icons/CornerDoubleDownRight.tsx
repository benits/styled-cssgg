import React from 'react'
import styled from 'styled-components'

const StyledCornerDoubleDownRight = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-bottom-left-radius:4px;border-bottom:2px solid;border-left:2px solid}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;transform:rotate(45deg)}&::after{border-right:2px solid;bottom:-4px;right:0}&::before{border-left:2px solid;left:-4px}
` 

export const CornerDoubleDownRight = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledCornerDoubleDownRight {...props} ref={ref} />
    </>
  )
})
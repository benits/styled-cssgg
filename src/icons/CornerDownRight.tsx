import React from 'react'
import styled from 'styled-components'

const StyledCornerDownRight = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;right:3px}&::after{width:8px;height:8px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:3px}&::before{width:16px;height:12px;border-bottom-left-radius:4px;border-bottom:2px solid;border-left:2px solid;bottom:6px}
` 

export const CornerDownRight = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledCornerDownRight {...props} ref={ref} />
    </>
  )
})
import React, { forwardRef, useImperativeHandle } from 'react';
import { RightContainer } from './Styles';

const RightContent = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    test() {
      if(props.User) console.log(props.User)
    }
  }));

  return (
    <RightContainer>
    </RightContainer>
  )
});

export default RightContent;
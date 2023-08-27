import React, { useRef, useEffect } from 'react';
import { CountUp } from 'countup.js';

function CountUpComponent({number}) {
  const countupRef = useRef(null);
  let countUpAnim;

  const options = { 
    duration: 2.5,
    separator: ' '
  };

  const initCountUp = () => {
    countUpAnim = new CountUp(countupRef.current, number, options);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
    };

    useEffect(() => {
        initCountUp();
    }, []);

  return <h1 ref={countupRef}></h1>;
}

export default CountUpComponent;
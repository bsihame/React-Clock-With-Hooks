import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(new Date().toLocaleDateString());
      setTime(new Date().toLocaleTimeString())
    },1000)
    return() => clearInterval(timer)
  }, []);
  return (
    <div>
      {time}
    </div>
  )
}

export default Clock
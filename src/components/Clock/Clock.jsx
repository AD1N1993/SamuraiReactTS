import React, {useEffect, useState} from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {

	let timerID = setInterval( () => setDate(new Date()), 1000 );

	return function cleanup() {
	  clearInterval(timerID);
	};
  },[]);

  return (
	<>
	  <div>
		<span>{date.toLocaleTimeString()}</span>
	  </div>
	</>
  );
}


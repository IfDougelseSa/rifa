import RandomNumber from "components/RandomNumber";
import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";

const Datetime = () => {
  const [dateState, setDateState] = useState(new Date());
  const [winnerState, setWinnerState] = useState('')

  let timePrize = "18:38:10";
  const datePrize = "15/12/2022";

  useEffect(() => {
    var timer = setInterval(() => setDateState(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });


  const isWinner = useCallback(() => {
    if (
      datePrize === dateState.toLocaleDateString() &&
      timePrize === dateState.toLocaleTimeString()
    ) {
      setWinnerState(RandomNumber());
    }
  }, [dateState, timePrize]);

  useEffect(() => isWinner(), [isWinner]);

  const currentDate = dateState.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = dateState.toLocaleString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <>
      <p className="date-custom">{currentDate}</p>
      <p className="time-custom">{currentTime}</p>

      <div>{winnerState}</div>
    </>
  );
};

export default Datetime;

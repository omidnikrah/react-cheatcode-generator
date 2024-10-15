import { FC, useEffect, useRef, useState } from "react";

import ArrowIcon from "./arrow-icon.svg";

import styles from "./styles.module.css";

type CheatCodeDirection = "up" | "right" | "down" | "left";

interface ICheatCodeProps {
  className?: string;
  onSuccess: () => void;
  onFail?: () => void;
  cheatCode: CheatCodeDirection[];
  timeoutDuration?: number;
}

const CheatCode: FC<ICheatCodeProps> = ({ className = "", onSuccess, onFail, cheatCode, timeoutDuration = 500 }) => {
  const [isCheatCodeMatched, setIsCheatCodeMatched] = useState<boolean>(false);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const enteredCheatCodeRef = useRef<CheatCodeDirection[]>([]);

  const directionKeyMap: Record<string, CheatCodeDirection> = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
  };

  const isCheatCodeMatching = (enteredCheatCode: CheatCodeDirection[]) =>
    enteredCheatCode.length === cheatCode.length && cheatCode.every((code, i) => code === enteredCheatCode[i]);

  const handleDirectionInput = (direction: CheatCodeDirection) => {
    clearTimeout(resetTimeoutRef.current);
    enteredCheatCodeRef.current = [...enteredCheatCodeRef.current, direction];

    resetTimeoutRef.current = setTimeout(() => {
      if (!isCheatCodeMatched) {
        const isMatched = isCheatCodeMatching(enteredCheatCodeRef.current);
        if (isMatched) {
          onSuccess();
          setIsCheatCodeMatched(true);
        } else {
          onFail?.();
          enteredCheatCodeRef.current = [];
        }
      }
    }, timeoutDuration);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const direction = directionKeyMap[event.code];
    if (direction) handleDirectionInput(direction);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`cheatcode${className && ` ${className}`}`}>
      {cheatCode.map((direction, index) => (
        <ArrowIcon className={`${styles["arrow-icon"]} ${styles[direction]}`} key={`${direction}_${index}`} />
      ))}
    </div>
  );
};

export default CheatCode;

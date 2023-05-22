import { useGame } from "@/lib/gameContext";
import { GAME_STATE_TYPE } from "@/types/game";

export const StateMessage = () => {
  const { state } = useGame();

  switch (state.state) {
    case GAME_STATE_TYPE.SUCCESS:
      return <div>Correct, you won!</div>;
    case GAME_STATE_TYPE.FAILED:
      return <div>Wrong, the correct word was {state.word}</div>;
    default:
      return <></>;
  }
};

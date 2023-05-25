import { useGame } from "@/lib/gameContext";
import { GAME_STATE_TYPE } from "@/types/game";

export const StateMessage = () => {
  const { state } = useGame();
  let final_message = "";
  switch (state.state) {
    case GAME_STATE_TYPE.SUCCESS:
      final_message = "Correct, you won!";
      break;
    case GAME_STATE_TYPE.FAILED:
      final_message = `Wrong, the correct word was ${state.word}.`;
      break;
    default:
      return <></>;
  }

  return (
    <div>
      <div className="text-xl text-center">{final_message}</div>
      <div>
        The painting shows:
        <br />
        {state.game.prompt}
      </div>
    </div>
  );
};

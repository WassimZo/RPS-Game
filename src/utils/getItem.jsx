import Scissors from "../components/itemsButtons/Scissors";
import Lizard from "../components/itemsButtons/Lizard";
import Rock from "../components/itemsButtons/Rock";
import Spock from "../components/itemsButtons/Spock";
import Paper from "../components/itemsButtons/Paper";
import defaultIcon from "../assets/GameButtonsIcons/icon-lizard.svg";

export default function getItem(item) {
  switch (item) {
    case "Lizard":
      return <Lizard picked={true} winner={false} />;
    case "Paper":
      return <Paper picked={true} winner={false} />;
    case "Rock":
      return <Rock picked={true} winner={false} />;
    case "Scissors":
      return <Scissors picked={true} winner={false} />;
    case "Spock":
      return <Spock picked={true} winner={false} />;
    default:
      return (
        <div className="p-6 border-[16px] border-transparent bg-black/25 rounded-full">
          <img src={defaultIcon} alt="" className="w-[48px] h-[48px] invisible" />
        </div>
      );
  }
}

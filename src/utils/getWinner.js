export default function getWinner(user, house) {
  if (user === house) {
    return "draw";
  }
  switch (user) {
    case "Lizard":
      if (["Spock", "Paper"].includes(house)) return "user";
      else return "house";

    case "Paper":
      if (["Rock", "Spock"].includes(house)) return "user";
      else return "house";

    case "Rock":
      if (["Lizard", "Scissors"].includes(house)) return "user";
      else return "house";

    case "Scissors":
      if (["Lizard", "Paper"].includes(house)) return "user";
      else return "house";

    case "Spock":
      if (["Scissors", "Rock"].includes(house)) return "user";
      else return "house";
  }
}

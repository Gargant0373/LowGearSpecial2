export type TicketType = {
  color1: string;
  color2: string;
  price: number;
  fullPrice: number;
  soldOut: boolean;
  title: string;
  description: string;
  deadline: string;
  tierName: string;
  href: string;
};

export const ticketTypes = (): TicketType[] => {
  const now = new Date();
  const year = 2026;

  const superEarlyBirdEnd = new Date(`${year}-01-25T23:59:59`);
  const earlyBirdEnd = new Date(`${year}-04-25T23:59:59`);
  const fullPriceEnd = new Date(`${year}-08-01T23:59:59`);

  let currentTier = "";
  let deadline = "";
  let prices = {
    oneCar: 300,
    twoCars: 500,
    oneMoto: 240,
    twoMoto: 380,
    weekend: 150,
  };
  const fullPrices = {
    oneCar: 300,
    twoCars: 500,
    oneMoto: 240,
    twoMoto: 380,
    weekend: 150,
  };

  if (now < superEarlyBirdEnd) {
    currentTier = "Super Early Bird";
    deadline = superEarlyBirdEnd.toISOString();
    prices = {
      oneCar: 200,
      twoCars: 0,
      oneMoto: 140,
      twoMoto: 220,
      weekend: 0,
    };
  } else if (now < earlyBirdEnd) {
    currentTier = "Early Bird";
    deadline = earlyBirdEnd.toISOString();
    prices = {
      oneCar: 250,
      twoCars: 450,
      oneMoto: 190,
      twoMoto: 290,
      weekend: 150,
    };
  } else {
    currentTier = "Full Price";
    deadline = fullPriceEnd.toISOString();
    prices = {
      oneCar: 300,
      twoCars: 500,
      oneMoto: 240,
      twoMoto: 380,
      weekend: 200,
    };
  }

  return [
    {
      color1: "#ADD8E6",
      color2: "#87CEEB",
      price: prices.oneCar,
      fullPrice: fullPrices.oneCar,
      soldOut: true,
      title: "1 Mașină",
      description: "Pentru tine și camarazii tăi.",
      deadline,
      tierName: currentTier,
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform",
    },
    {
      color1: "#9370DB",
      color2: "#8A2BE2",
      price: prices.twoCars,
      fullPrice: fullPrices.twoCars,
      soldOut: true,
      title: "2 Mașini",
      description: "Pentru tine și toată gașca ta.",
      deadline,
      tierName: currentTier === "Super Early Bird" ? "Early Bird" : currentTier,
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform",
    },
    {
      color1: "#ffff6bff",
      color2: "#FFD700",
      price: prices.oneMoto,
      fullPrice: fullPrices.oneMoto,
      soldOut: true,
      title: "1 Moto",
      description: "Aventura pe două roți.",
      deadline,
      tierName: currentTier,
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform",
    },
    {
      color1: "#FFA500",
      color2: "#FF8C00",
      price: prices.twoMoto,
      fullPrice: fullPrices.twoMoto,
      soldOut: true,
      title: "2 Moto",
      description: "Tu și prietenul tău cel mai bun.",
      deadline,
      tierName: currentTier,
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform",
    },
    {
      color1: "#32CD32",
      color2: "#008000",
      price: prices.weekend,
      fullPrice: fullPrices.weekend,
      soldOut: true,
      title: "Weekend",
      description: "Pentru cei cu timp limitat (08-10.08).",
      deadline,
      tierName: currentTier,
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf4I1X4MafkXhNnO2zyEjd2iyxbdPTUmWe1CPuWoveeJ8FTnQ/viewform",
    },
  ];
};

export const ticketsAreSoldOut = () =>
  ticketTypes().every((ticket) => ticket.soldOut);

import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning, Nanaa!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon, Nanaa!");
    } else {
      setGreeting("Good Night, Nanaa!");
    }
  }, []);

  return (
    <div className="ucapan mt-[40px] ps-[10px]">
      <h3 className="text-[33px] font-semibold">{greeting}</h3>
    </div>
  );
};

export default Greeting;

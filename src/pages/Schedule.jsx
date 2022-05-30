import { useState } from "react";
import ScheduleDayCard from "../components/ScheduleDayCard";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

function Schedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <>
    <H1>Schedule</H1>
    <H2 classModifiers={`text-accent_yellow text-5xl mb-5`}>Are you ready?</H2>
    <p className="text-white max-w-lg mb-8">7 days of Ragnarock - are you ready? Click the stage-symbols or navigate through the days to see who is playing where and when. Remember to add bands to your favorites, for your very own personalised schedule.</p>
    <section className="flex flex-col lg:gap-28">
      <div className="flex justify-between lg:hidden mb-16">
        <button
          className={`${cardIndex === 0 && "invisible"} text-white`}
          onClick={() => setCardIndex((prev) => prev - 1)}
          disabled={cardIndex === 0 && true}
        >
          <HiOutlineArrowNarrowLeft size="2rem" />
        </button>

        <h2 className="text-white font-displayFont text-[2.5rem] sm:text-[3rem] md:text-[4rem]">
          {days[cardIndex]}
        </h2>

        <button
          className={`${cardIndex === 6 && "invisible"} text-white`}
          onClick={() => setCardIndex((prev) => prev + 1)}
          disabled={cardIndex === 6 && true}
        >
          <HiOutlineArrowNarrowRight size="2rem" />
        </button>
      </div>

      {days.map((day, index) => (
        <ScheduleDayCard
          key={index}
          day={day}
          index={index}
          cardIndex={cardIndex}
        />
      ))}
    </section>
    </>
  );
}

export default Schedule;

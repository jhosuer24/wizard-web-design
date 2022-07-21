import ticktockJs from "https://cdn.skypack.dev/ticktock-js@3.0.0";

const settings = {
  crown: "crown",
  dials: [
    {
      hands: {
        hour: "hour-hand",
        minute: "minute-hand"
      }
    }
  ],
  date: {
    split: {
      ones: "date-ones-disc",
      tenths: "date-tenth-disc"
    }
  },
  month: "month-hand",
  year: "year-disc",
  day: "day-hand",
  moonphase: {
    id: "moonphase-disc",
    invert: true
  },
  dayNightIndicator: "day-night-indicator-disc",
  reserve: {
    /*
Yes, the power reserve is inverted. TickTockJS doesn't yet support counter-clockwise power reserves.
*/
    id: "power-reserve-disc",
    range: [-90, 30]
  },
  chronograph: {
    flyback: true,
    buttons: {
      primary: "chrono-primary",
      secondary: "chrono-secondary"
    },
    hands: {
      second: "chrono-second-hand",
      minute: "chrono-minute-hand",
      hour: "chrono-hours-hand"
    }
  }
};

const datograph = new ticktockJs(settings);

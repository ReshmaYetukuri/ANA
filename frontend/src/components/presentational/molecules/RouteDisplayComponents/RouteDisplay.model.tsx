interface Heading {
  data1: string;
  data2: string;
}

interface Date {
  date: string;
  day: string;
}

interface Codes {
  code1: string;
  code2: string;
}

interface Time {
  timeCode1: string;
  time1: string;
  timeCode2: string;
  time2: string;
}

export interface RouteDisplayInterface {
  heading: Heading;
  date: Date;
  codes: Codes;
  time: Time;
}

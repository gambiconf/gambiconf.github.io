import dayjs from "dayjs";
import qs from "query-string";

type CalendarEventParams = {
  title: string;
  start: string;
  duration: number;
};

const getGoogleCalendarLink = ({ start, duration, title }: CalendarEventParams) => {
  const startUtc = dayjs(start);

  const startDate = startUtc.format("YYYYMMDDTHHmmssZ");
  const endDate = startUtc.add(duration, "minutes").format("YYYYMMDDTHHmmssZ");

  const details = {
    action: "TEMPLATE",
    text: title,
    dates: `${startDate}/${endDate}`,
  };

  return `https://calendar.google.com/calendar/render?${qs.stringify(details)}`;
};

export { getGoogleCalendarLink };

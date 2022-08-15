import dayjs from "dayjs";
import { stringify } from "query-string";

type CalendarEventParams = {
    title: string
    start: string
    duration: number
  }
 
const getGoogleCalendarLink = ({start, duration, title}: CalendarEventParams) => {
  const startUtc = dayjs(start)

  const startDate: string = startUtc.format("YYYYMMDDTHHmmssZ")
  const endDate: string = startUtc.add(duration, "minutes").format("YYYYMMDDTHHmmssZ")
 
  const details = {
    action: "TEMPLATE",
    text: `[GambiConf Talk] ${title}`,
    dates: startDate + "/" + endDate,
  };

  return `https://calendar.google.com/calendar/render?${stringify(details)}`
}
export { getGoogleCalendarLink }
  
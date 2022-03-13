type CalendarEventParams = {
  title: string;
  start: string;
  duration: number;
};

// Google Calendar's TEMPLATE endpoint expects YYYYMMDDTHHMMSSZ in UTC.
const formatDate = (date: Date) =>
  date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

const getGoogleCalendarLink = ({ start, duration, title }: CalendarEventParams) => {
  const startDate = new Date(start);
  const endDate = new Date(startDate.getTime() + duration * 60_000);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
  });

  return `https://calendar.google.com/calendar/render?${params}`;
};

export { getGoogleCalendarLink };

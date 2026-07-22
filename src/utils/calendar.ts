type CalendarEventParams = {
  title: string;
  start: string;
  duration?: number;
  end?: string;
  location?: string;
};

// Google Calendar's TEMPLATE endpoint expects YYYYMMDDTHHMMSSZ in UTC.
const formatDate = (date: Date) =>
  date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

const getGoogleCalendarLink = ({
  start,
  duration,
  end,
  title,
  location,
}: CalendarEventParams) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date(startDate.getTime() + (duration ?? 0) * 60_000);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
  });

  const datesAreValid = !Number.isNaN(startDate.getTime()) && !Number.isNaN(endDate.getTime());
  if (datesAreValid) {
    params.set("dates", `${formatDate(startDate)}/${formatDate(endDate)}`);
  }

  if (location) {
    params.set("location", location);
  }

  return `https://calendar.google.com/calendar/render?${params}`;
};

export { getGoogleCalendarLink };

export const formatDate = (date: Date) => {
  return (
    date.getFullYear() +
    "-" +
    date.toLocaleString("en-US", { month: "2-digit" }) +
    "-" +
    date.toLocaleString("en-US", { day: "2-digit" })
  );
};

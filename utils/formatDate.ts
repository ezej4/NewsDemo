const formatDate = (date: Date) => {
  const formatedDate = new Date(date);
  return formatedDate.toISOString().slice(0, 10);
};

export default formatDate;
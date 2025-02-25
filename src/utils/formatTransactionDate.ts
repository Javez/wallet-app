const formatTransactionDate = (receivedDateStr: string): string => {
  const receivedDate = new Date(receivedDateStr);
  return receivedDate.toLocaleDateString("en-GB");
};

const formatTransactionTime = (receivedDateStr: string): string => {
  const receivedDate = new Date(receivedDateStr);
  return receivedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Example usage
const transactionDate = "2025-02-01T21:30:00";
console.log(formatTransactionDate(transactionDate));
console.log(formatTransactionTime(transactionDate));

export { formatTransactionDate, formatTransactionTime };

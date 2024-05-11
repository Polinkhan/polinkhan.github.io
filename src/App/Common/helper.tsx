export const getCurrentMonthDiff = (date: string) => {
  const currentTime = new Date().getTime();
  const prevTime = new Date(date).getTime();
  const months = Math.ceil((currentTime - prevTime) / 2629746000);
  if (Math.floor(months / 12)) {
    const yr = Math.floor(months / 12);
    const remainingMonth = months % 12;
    return remainingMonth ? `${yr} yr - ${remainingMonth} mos` : `${yr} yr`;
  } else {
    return `${months} mos`;
  }
};

export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), time));
};

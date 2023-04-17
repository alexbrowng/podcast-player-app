export function toDate(time: number) {
  const date = new Date(time);
  return date.toLocaleDateString();
}

export function toMMSS(milliseconds: number) {
  const date = new Date(0);
  date.setMilliseconds(milliseconds);
  try {
    return date.toISOString().substring(11, 19);
  } catch {
    return '---';
  }
}

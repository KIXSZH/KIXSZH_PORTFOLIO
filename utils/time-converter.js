// @flow strict

export function timeConverter(isoString) {
  const date = new Date(isoString);
  return date.toDateString();
}

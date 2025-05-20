export function setLocalValue(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getLocalValue(key: string) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

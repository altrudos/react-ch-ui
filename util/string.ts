
export function stringInList(xs : string[], x : string) : boolean {
  return !!xs.find(s => s === x)
}

export function addToStringList(xs : string[], x : string) {
  if (stringInList(xs, x)) return
  xs.push(x)
}
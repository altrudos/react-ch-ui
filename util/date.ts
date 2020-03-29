
export const dateTimeFormatter = (date, opts = {}) => {
  const a = !(date instanceof Date) ? new Date(date) : date
  const tm = a.getTime()

  if ( isNaN(tm) || tm < 0 ) {
    return "N/A"
  }
  return a.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', ...opts})
}

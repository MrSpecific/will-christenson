// Dates are stored as YYYY-MM-DD strings; format in UTC so they never shift a day.
export function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' })
}

/**
 * Formats a date string from "YYYY-MM" format to "Mon YYYY" format
 * @param {string} dateStr - Date string in "YYYY-MM" format or "Present"
 * @returns {string} Formatted date string (e.g., "Jun 2025") or "Present"
 */
export const formatDate = (dateStr) => {
  if (dateStr === 'Present') return 'Present'
  
  const [year, month] = dateStr.split('-')
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  return `${monthNames[parseInt(month) - 1]} ${year}`
}

/**
 * Formats a time range from start and end dates
 * @param {string} start - Start date in "YYYY-MM" format
 * @param {string} end - End date in "YYYY-MM" format or "Present"
 * @returns {string} Formatted time range (e.g., "Jun 2025 – Sep 2025")
 */
export const formatTimeRange = (start, end) => {
  const startFormatted = formatDate(start)
  const endFormatted = formatDate(end)
  return `${startFormatted} – ${endFormatted}`
}


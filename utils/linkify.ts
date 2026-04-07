/**
 * Linkifies URLs in a string while escaping HTML to prevent XSS.
 * @param text The text to linkify.
 * @returns The linkified and escaped HTML string.
 */
export const linkify = (text: any): string => {
  if (text === null || text === undefined) return ''
  const str = String(text)

  // Escape HTML to prevent XSS
  const escaped = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  // Regex to match URLs
  // Matches http://, https://, followed by non-whitespace characters
  const urlRegex = /(https?:\/\/[^\s]+)/g

  return escaped.replace(urlRegex, (url) => {
    // If the URL ends with punctuation, we should probably exclude it, 
    // but the regex usually captures it.
    // Basic formatting for the link
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline break-all">${url}</a>`
  })
}

/**
 * Utility to generate UTM-tracked URLs for social sharing.
 * 
 * @param url The base URL to track
 * @param campaign The specific campaign name (e.g., blog post slug)
 * @param source The platform where the link is shared (default: 'medlabconvo')
 * @returns The URL with UTM parameters appended
 */
export const generateUtmUrl = (url: string, campaign: string, source: string = 'medlabconvo'): string => {
  const utmParams = new URLSearchParams({
    utm_source: source,
    utm_medium: 'social_share',
    utm_campaign: campaign.replace(/\s+/g, '_').toLowerCase(),
    utm_content: 'user_shared_content'
  });

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${utmParams.toString()}`;
};

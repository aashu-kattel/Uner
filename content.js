// List of tracking params to remove
const trackingParams = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "fbclid", "mc_cid", "mc_eid"
];

function cleanUrl(url) {
  try {
    const parsedUrl = new URL(url);
    let changed = false;

    trackingParams.forEach(param => {
      if (parsedUrl.searchParams.has(param)) {
        parsedUrl.searchParams.delete(param);
        changed = true;
      }
    });

    return changed ? parsedUrl.toString() : url;
  } catch {
    return url; // Invalid URL or non-http(s) link, return as is
  }
}

function cleanAllLinks() {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const clean = cleanUrl(link.href);
    if (clean !== link.href) {
      link.href = clean;
    }
  });
}

// Run cleaning once
cleanAllLinks();

// Optional: Observe DOM changes to clean dynamically loaded links
const observer = new MutationObserver(cleanAllLinks);
observer.observe(document.body, { childList: true, subtree: true });

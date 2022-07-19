export const pageview = (url) => {
  const { NEXT_PUBLIC_GA_API_KEY } = process.env;
  window.gtag('config', NEXT_PUBLIC_GA_API_KEY, {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params  }) => {
  window.gtag('event', action, params)
}

// Source: https://github.com/vercel/next.js/discussions/32231#discussioncomment-7284386,
// modified afterward
import { useEffect } from 'react'
import { useBeforeUnload as internalUseBeforeUnload } from 'react-use'

export const useBeforeUnload = (
  confirm = true,
  message = 'Are you sure want to leave this page?'
) => {
  // Check when page is about to be reloaded
  internalUseBeforeUnload(confirm, message)

  // Check when page is about to be changed
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      try {
        const target = event.target as HTMLElement
        const anchor = findClosestAnchor(target)
        if (anchor) {
          const currentUrl = window.location.href
          const newUrl = (anchor as HTMLAnchorElement).href
          const isAnchor = isAnchorOfCurrentUrl(currentUrl, newUrl)
          const isDownloadLink = (anchor as HTMLAnchorElement).download !== ''

          const isPageLeaving = !(newUrl === currentUrl || isAnchor || isDownloadLink)

          if (isPageLeaving && confirm && !window.confirm(message)) {
            // Cancel the route change
            event.preventDefault()
            event.stopPropagation()
          }
        }
      } catch (error) {
        alert(error)
      }
    }

    function findClosestAnchor(element: HTMLElement | null): HTMLAnchorElement | null {
      while (element && element.tagName.toLowerCase() !== 'a') {
        element = element.parentElement
      }
      return element as HTMLAnchorElement
    }

    function isAnchorOfCurrentUrl(currentUrl: string, newUrl: string) {
      const currentUrlObj = new URL(currentUrl)
      const newUrlObj = new URL(newUrl)
      // Compare hostname, pathname, and search parameters
      if (
        currentUrlObj.hostname === newUrlObj.hostname &&
        currentUrlObj.pathname === newUrlObj.pathname &&
        currentUrlObj.search === newUrlObj.search
      ) {
        // Check if the new URL is just an anchor of the current URL page
        const currentHash = currentUrlObj.hash
        const newHash = newUrlObj.hash
        return (
          currentHash !== newHash &&
          currentUrlObj.href.replace(currentHash, '') === newUrlObj.href.replace(newHash, '')
        )
      }
      return false
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [confirm, message])
}
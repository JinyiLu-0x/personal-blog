export const WALINE_PATH_PREFIX = '/moz-personal-blog/v1'

export const getWalinePath = (pathname: string) => {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${WALINE_PATH_PREFIX}${normalized}`
}

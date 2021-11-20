
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//
const ytSDKURL = "https://www.youtube.com/iframe_api"

export function generateUnideId() {
  const num = Math.floor(Math.random() * 100000)
  return `reactjsmedia_youtube_${num}`
}

function appendYTScript() {
  let tag = document.createElement("script")
  tag.src = ytSDKURL
  let firstScriptTag = document.getElementsByName("script")[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

function noYtSDKScript() {
  let doesNotExits = true
  let scriptsTags = document.getElementsByName("script")
  scriptsTags.forEach((element, i, k) => {
    if (element.src === ytSDKURL) {
      doesNotExits = false
    }
  })
  return doesNotExits
}

/**
 *Inserts Youtube SDK To DOM if it does not exist.
 */
export function InsertSDK() {
  let doesNotExit = noYtSDKScript()
  if (doesNotExit === true) {
    appendYTScript()
  }
}

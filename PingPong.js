function pingPong(sounds) {
  const scores = sounds.split("-")
  let pingScore = 0
  let pongScore = 0
  
  let currentScore = []
  let lastBadHitter = ""

  for (let i = 0; i < scores.length; i++) {
    const sound = scores[i]
    
    if (sound === "ping" || sound === "pong") {
      currentScore.push(sound)
    } else {
        
      const server = currentScore[0]
      const lastHitter = currentScore[currentScore.length - 1]
      lastBadHitter = lastHitter
      if (server === "ping" && lastHitter === "pong") {
        pingScore++
      } else if (server === "pong" && lastHitter === "ping") {
        pongScore++
      }


      currentScore = []
    }
  }

  if (pingScore > pongScore) return "ping"
  if (pongScore > pingScore) return "pong"
  
  return lastBadHitter === "ping" ? "pong" : "ping"
}
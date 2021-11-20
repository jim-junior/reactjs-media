const express = require("express")
const app = express();
const path = require("path")
const chalk = require("chalk").default
const port = process.env.PORT || 7893
const log = console.log

app.listen(port, () => {
  log(`Server running on ${chalk.cyan.underline(`http://localhost:${port}`)}`)

})

const dist = path.join(__dirname, "demo")
const index = path.join(dist, "index.html")

app.use(express.json())
app.use(express.static("demo"))

app.get('/', (req, res) => {
  res.sendFile(index, (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

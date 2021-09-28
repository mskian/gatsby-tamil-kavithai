const fs = require("fs")
const prompt = require("prompt-sync")()

const title = prompt("Enter the Post Title: ")
const blogdir = "./kavithai"

if (!title && !postdata) {
  console.log("Please specify a post title.")
  return
}
const random_id = Math.floor(1000 + Math.random() * 9000)
const basename = "tamil-kavithai-" + random_id

const contents = `---
title: "${title}"
description: ""
categories: ["kavithai"]
date: ""
published: false
---
`

fs.writeFile(`${blogdir}/${basename}.mdx`, contents, () =>
  console.log(`✔ Created ${blogdir}/${basename}.mdx`)
)

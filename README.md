# 🧶 Yarn 3.0

The new version of the [Yarn package manager](https://yarnpkg.com) for JavaScript is here!
Now you can download the most popular packages right on your desk.

## Usage

1. Place the ball of yarn for the package you’d like (`react` is cyan, `lodash` is pink, `chalk` is yellow, etc) in front of your computer.
2. Watch the selected packages’ source code get printed out on your nearest printer. Yarn 3.0 will first minify it, then re-expand it with [Prettier](https://prettier.io), for maximum readability.
3. Build your project right at your desk with all the code right in front of you!

![Desk covered in paper & balls of colored yarn](https://user-images.githubusercontent.com/5074763/73147842-6d7ea380-4087-11ea-90b9-c7b5b301acd6.jpg)

## Yes, this is a joke

I made it at the [NYU STUPID SHIT NO ONE NEEDS & TERRIBLE IDEAS HACKATHON 2020](http://www.stupidhackathon.com).
I solemnly swear I was up to no good.
It’s ~150 lines of code.

_Note: I realize this project isn’t using Yarn for its dependencies. On my computer, Yarn had an issue building the [`node-native-printer`](https://npm.im/node-native-printer) module, & npm worked, & with 12-hour hackathon time constraints, I didn’t deal with fixing Yarn. Sorry._

## How to run this yourself

1. Clone the repo, `cd`, `npm i`, `npm start`
2. Start [ngrok](https://ngrok.com): `ngrok http 3000`
3. Open the ngrok link on some device on your desk with a webcam (I used an iPad for the demo)
4. Put cyan/yellow/pink objects in front of your camera
5. Keep refilling your printer’s paper supply

MIT License

# Reactjs Media

The reactjs media is a react package with awesome HTMLMediaElements that are recreated into react components with a good looking UI and fast UX.

> **Note:** We recommend installing new version `v2.x.x`. It has a new video player and is more stable. You should also be using latest versions of react.

It includes currently only has a video and audio component.

Available components:

- Image
- Video
- Audio
- Youtube Player
- Facebook player

Sound Cloud player is soon Comming

#### Installation

To install go to your terminal and run this script

```bash
# npm
$ npm install reactjs-media
# yarn
$ yarn add reacttjs-media
```

If your see no error then is is Installed.

#### Setup

In here we shall show a small demo on how to setup a simple video component. We shall create the default component.

**Using new player in version 2**

```jsx
import React from 'react';
import { Video } from 'reactjs-media';

const App = () => {
    return (
        <div>
            <MyVideo />
        </div>
    )
}

const MyVideo = () => {
    return (
        <>
        <div>
            <Video
                src='https://www.example.com/myvideo.mp4'
                poster='/poster.png'
            />
        <div/>
        </>
    )
}

```

**Using old player in version 1**

```jsx
import React from 'react';
import { ReactVideo } from 'reactjs-media';

const App = () => {
    return (
        <div>
            <MyVideo />
        </div>
    )
}

const MyVideo = () => {
    return (
        <>
        <div>
            <ReactVideo
                src='https://www.example.com/myvideo.mp4'
                poster='/poster.png'
            />
        <div/>
        </>
    )
}

```

> **Note:** The `ReactVideo` component will be removed in future versions of the package starting with veersion 3

Try it on [Codesandbox](https://codesandbox.io/s/reactjs-media-3pj4t?file=/src/App.js)

A few important props you can pass are here:
| Prop           | type                  | Function                                                                                                                       |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `src`          | string : **Required** | This is the source of the video you want to display a it will be placed in the `<source />` tag.                               |
| `poster`       | string:               | This is the poster os the video                                                                                                |
| `className`    | string                | The class of the video                                                                                                         |
| `onPlay`       | fuction               | It takes in a function and you can use it how you want                                                                         |
| `onPause`      | fuction               | It also takes in a function and you can use it how you want                                                                    |
| `onTimeUpdate` | function              | It is triggered when the video is playing. It passes in 3 arguments. An `event`, `currentTime`, and the `percentage` finished. |

---

If you want to learn more on how to customize it. Checkout the offical [Documentation](https://cranom.vercel.app/reactjs-media "Documentation")


---
### Sponsoring
You can sponsor this project in two ways.
**Using Patreon**
Patreon profile link: [https://patreon.com/jimjunior](https://patreon.com/jimjunior)

**Purchase interserver cloud hosting for $0.01 using our coupon.**

coupon: `sponsorreactjsmedia`
You will get a discount off the first month and pay only $0.01. Visit [interserver here](https://www.interserver.net/r/656116)
___

This package is developed by [Beingana Jim Junior](https://www.twitter.com/_jimjunior_) a fullstack Developer. The source code can be found on [Github](https://github.com/jim-junior/reactjs-media).
Anybody interested is free to contribute.

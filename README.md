# Reactjs Media

##### <div align="center"> [![License: MIT](https://flat.badgen.net/npm/license/reactjs-media)](https://opensource.org/licenses/MIT) [![Npm package total downloads](https://flat.badgen.net/npm/dt/reactjs-media)](https://npmjs.com/package/reactjs-media) [![version](https://flat.badgen.net/npm/v/reactjs-media)](https://npmjs.com/package/reactjs-media) [![Sponsor On Patreon](https://flat.badgen.net/badge/icon/patreon?icon=patreon&label&color=orange)](https://www.patreon.com/jimjunior) [![](https://flat.badgen.net/badge/icon/github?icon=github&label&color=black)](https://github.com/jim-junior/reactjs-median)

The reactjs media is a react package with awesome HTMLMediaElements that are recreated into react components with a good looking UI and fast UX.

It includes currently only has a video and audio component.

Available components:

- Image
- Video
- Audio

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


If you want to learn more, Checkout the offical [Documentation](https://cranom.vercel.app/reactjs-media "Documentation")

___

The source code can be found on [Github](https://github.com/jim-junior/reactjs-media).

# Reactjs Media 
>__Note:__ We recommend installing version `>=1.1.2` and above. This is because any version before that will cause errors in your code.


The reactjs media is a react package with awesome HTMLMediaElements that are recreated into react components with a good looking UI and fast UX.

It includes currently only has a video component.

#### Installation

To install go to your terminal and run this script

```bash
$ npm install reactjs-media
```
If your see no error then is is Installed.

#### Setup 

In here we shall show a small demo on how to setup a simple video component. We shall create the default component.

```jsx
import React from 'react';
import { ReactVideo } from 'reactjs-media/video';

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

The above code can be used to create the most basic video component. .

A few important props you can pass are here:
| Prop           | type                  | Function                                                                                                                       |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `src`          | string : __Required__ | This is the source of the video you want to display a it will be placed in the `<source />` tag.                               |
| `poster`       | string:               | This is the poster os the video                                                                                                |
| `className`    | string                | The class of the video                                                                                                         |
| `onPlay`       | fuction               | It takes in a function and you can use it how you want                                                                         |
| `onPause`      | fuction               | It also takes in a function and you can use it how you want                                                                    |
| `onTimeUpdate` | function              | It is triggered when the video is playing. It passes in 3 arguments. An `event`, `currentTime`, and the `percentage` finished. |
If you want to learn more on how to customize it. Checkout the offical [Documentation](https://blurify.ml/projects/reactjs-video "Documentation")
<!-- props.onTimeUpdate(e, currentTime, w) -->

___
This package is developed by [Beingana Jim Junior](https://www.twitter.com/_jimjunior_) a fullstack Developer. The source code can be found on [Github](https://github.com/jimjunior44/reactjs-media).
Anybody interested is free to contribute.

ASB FE TEST 1
=============================

## Overview
This project is built on React using hooks and Redux store

## Project Structure
Below shows the project structure;

```
    root
        - public
            - css ( CSS Libraries live here )
            - js (JS libraries live here )
            ...
        - src
            - components ( ALl reusable UI components in the application)
            - constants ( All unchangeable varibales are defined here )
            - fonts ( All custom fonts )
            - helpers ( All helpers functions i.e regular functions and custom hooks )
            - images ( All project images )
            - interfaces ( All interfaces / pages of application )
            - models ( All entities / data structure )
            - scss ( Default SCSS stylings )
            - store ( Redux store containing the actions and reducers )
            App.js ( Routing setup )
            index.js ( App entry point )
            .......

```    

## Live Demo
- [demo](https://asb-fe-test-by-devugo.netlify.app/).

### Site Preview Images

#### Page Preview
![Home page](https://asb-fe-test-by-devugo.netlify.app/page-preview.png)

#### Responsive (Mobile)
![Mobile Display](https://asb-fe-test-by-devugo.netlify.app/mobile-preview.png)


## How to run locally

### Clone the repository
- Run `git clone https://github.com/devugo/asb-fe-test.git` on your terminal/cmd to pull the project

### Available Scripts

In the root project directory, you can run:

#### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


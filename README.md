SHOPMATE E-COMMERCE WEBSITE
=============================

## Overview
This project was built on React using hooks and Redux store
So i basically set up the app like a real e-commerce app if i were to build one. 

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
            - data ( Dummy data is stored here for both the products and cart)
            - helpers ( All helpers functions i.e regular functions and custom hooks )
            - images ( All project images )
            - interfaces ( All interfaces / pages of application )
            - models ( All entities )
            - scss ( Default SCSS stylings )
            - store ( Redux store containing the actions and reducers )
            App.js ( Routing was setup here )
            index.js ( App entry point )
            .......

```    

## Component Library
- [Ant Design](https://ant.design)


## Live Demo
- [demo](https://e-commerce-app-by-devugo.netlify.app/).

### Site Preview Images

#### Shop Page sections
![Shop Page 1](https://www.devugo.com/shopmate/shop-page-1.png)
![Shop Page 2](https://www.devugo.com/shopmate/shop-page-2.png)

#### Responsive shop page
![Responsive Shop Page](https://www.devugo.com/shopmate/responsive-shopmate.png)

#### Cart Dialog
![Cart Dialog](https://www.devugo.com/shopmate/cart-dialog.png)

#### Checkout (Delivery Screen) Dialog
![Delivery Screen Dialog](https://www.devugo.com/shopmate/delivery-dialog.png)

#### Checkout (Confirmation Screen) Dialog
![Confirmation Screen Dialog](https://www.devugo.com/shopmate/confirmation-dialog.png)

#### Checkout (Payment Screen) Dialog
![Payment Screen Navbar](https://www.devugo.com/shopmate/payment-dialog.png)

#### Checkout (Finish Screen) Dialog
![Finish Screen Dialog](https://www.devugo.com/shopmate/finish-dialog.png)


## How to run locally

### Clone the repository
- Run `git clone https://github.com/devugo/lenco_fe_test.git` on your terminal/cmd to pull the project

### Available Scripts

In the root project directory, you can run:

#### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode and shows all test carried out on components.

#### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


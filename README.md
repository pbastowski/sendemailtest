# Email the Necessary Information

#### See demo [here](https://pbastowski.github.io/sendemailtest/)

## Installation

Clone this repo to your system using git, as shown below. Please note that I developed and tested this web app on a MacOS. It was not tested on Windows or Linux.

> This repo requires `NodeJs` version 8.11 or greater to run. Please make sure it is installed on your system before continuing the installation.

    git clone https://github.com/pbastowski/sendemailtest.git

Next, install the npm packages required

    cd sendemailtest
    npm i

And finally start the development server

    npm start

When it's done compiling and bundling it will announce on which localhost port it is serving the app. 

## How to start and use the app

To start the app, from it's root folder execute the command below and wait for the build process to finish and tell you on what localhost port your app is being served.

    npm start

This app is a front-end to a currently non-existent backend. When you click send it simply simulates a send and dumps the data it would send to the dev console.
 
It also displays a friendly success toast message, or an error message, depending on the random value returned in the simulator.

If you press `SEND` several times, you are bound to hit an error condition and see the Error toast message. 

Multiple email addresses may be entered in to, cc and bcc, separated with a `;`, for example

    tom@home.nl; jodie@abc.com

If any of the entered emails are invalid the user will be notified accordingly and a small message will appear below the input field that needs fixing.

## Build system

This Vue repo is based on [vue-cli 3](https://cli.vuejs.org/). It uses a zero-config setup, which is why there is no index.html file to be found or any webpack configuration. It is all taken care of for us. 

In a real production setup we could extend the webpack config with our own loaders, possibly build multiple output "index.html" files and maybe trigger tasks after webpack has finished building. 

## Libraries used

In no particular order

- vue
- vue-router
- vuetify
- vuelidate
 
Although vue-router is not strictly required, I added it just to show how it's done, if we were to add more forms and modules.

I used the Vuetify library, which provides Vue material-design components. It is one of the best and most comprehensive, feature wise, component libraries available for VueJs, if you like material design. For example, it provides form validations out of the box. 

I only used the email validation function from the vuelidate library. It uses a RegEx to validate individual email and I implemented the multiple email validation using it.

What about Vuex? I ran out of time to set that up. If you want, I can show you lots of Vuex code that I wrote: with modules and name-spaced modules, modules registered at runtime within an AngularJs wrapper.

## TODO

- Add actual email sending with MailGun.


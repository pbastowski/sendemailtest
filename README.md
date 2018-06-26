# Email the Necessary Information

## Installation

Clone this repo to your system using git, as shown below. Please note that I developed and tested this web app on a MacOS. It was not tested on Windows or Linux.

> This repo requires `NodeJs` version 8.11 or greater to run. Please make sure it is installed on your system before continuing the installation.

    git clone https://github.com/pbastowski/sendemailtest.git

Next, install the npm packages required

    cd sendemailtest
    npm i

And finally start the development server

    npm run serve

When it's done compiling and bundling it will announce on which localhost port it is serving the app. 

## How to use it

This app is a front-end to a currently non-existent backend. When you click send it simply simulates a send and dumps the data it would send to the dev console.
 
It also displays a friendly success toast message, or an error message, depending on the random value returned in the simulator.

If you press `SEND` several times, you are bound to hit an error condition and see the Error toast message. 
 
## Libraries used

In no particular order

- vue
- vue-router
- vuetify
- vuelidate
 
Although vue-router is not strictly required, I added it just to show how it's done, if we were to add more forms and modules.

I used the Vuetify library, which provides Vue material-design components. It is one of the best and most cmnprehensive, feature wise, component libraries available for VueJs, if you like material design. For example, it provides form validations out of th box. 

I only used the email validation function for the vuelidate library.  

What about Vuex? I ran out of time to set that up. If you want, I can show you lots of Vuex code that I wrote: with modules and name-spaced modules, modules registered at runtime within an AngularJs wrapper.  

## TODO

- Add actual email sending with MailGun.


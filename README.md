AAT WEB APP (SA)
===============

This is the source for the frontend javascript client of AAT South Africa

All data is sourced via requests to AAT SA Content REST API.   

Tools used : 

    - AngularJS 1.x (latest)
    - Bower
    - Gulp
    - Bootstrap  
    - SASS
    - jQuery 
    
    
Testing : 

    - Jasmine
    - Karma 
    - Protractor
    
   
Setup
---------------


```
npm install
```

Builds
-------------

The current tooling is built around Gulp (http://gulpjs.com/)

Then once installed you can run from the 'gulp' command from the main content root. 


```
gulp
```


Server
-------------

This site is flat HTML so any webserver will run the app. 
 
One NodeJS webserver that is very good while developing is live-server (https://www.npmjs.com/package/live-server)

 - Install via // npm install -g live-server
 - cd ./app

```
live-server
```

In production we recommend using Docker + Nginx


Demo api content:
```
node fake_api_server.js
```



Core Files
-------------

The core CSS is located from within the SASS folder, and includes the vendor libs Bootstrap. 
 
The core JS files and components are located within "./app/sites/", the main JS is "app/app.js"

Please adjust these to meet your specific requirements. 


Components & Microservices
--------------------------

The application architecture is based around the component model along with supporting "microservices" from the API.

@see : 
 
  - https://en.wikipedia.org/wiki/Component-based_software_engineering
  - https://en.wikipedia.org/wiki/Microservices
  


CSS
-------------

All CSS work should be worked on within the SASS folder and via Gulp compiled to a single minified CSS file. 

This is all setup currently and only the sass files need to updated / created.


JS
-------------

All JS work should be worked on within the SITE folder + root level 'app.js' and via gulp compiled to a single uglified JS file. 

This is setup and working.


Libraries
-------------

All frontend tools should be added via Bower install --save; and build / test tools should be added via npm install --save


AWS SDK
-------------

AWS JS SDK for the browser is included. 

You can build custom scripts here : https://sdk.amazonaws.com/builder/js/

(installed via bower)

@todo - move this the WIKI

DATA STRUCTURE
-------------

The following is the a working version of the content data. 

Content Component types:
    Hero
    Html
    Title
    Spotlights
    Slideshows
 
Sidebar component types:
    Menu
    Spotlights
 


```
...
 "page": {
    "frontpage": {                                                      //page name [pageid] uniq
      "fullwidth": true,                                                //is it full width {boolean} 
      "content": [                                                      //page sections array
        {
          "name": "section1",                                           //section name [sectionid] uniq
          "class": "hero",                                              //main wrapper class
          "type": "hero"                                                //component/module name
        },
        {
          "name": "section1",                                           //section name [sectionid] uniq
          "class": "single-page",                                       //main wrapper class
          "type": "html"                                                //component/module name
          "html": "<div class=\"whatever\">Lorem ipsum dolorem</div>"   //html content
        },
        {
          "name": "Example Title",                                      //section name [sectionid] uniq
          "class": "title",                                             //main wrapper class
          "type": "title"                                               //component/module name
        },
        {
          "name": "Spotlights Title",                                   //section name [sectionid] uniq
          "class": "spotlight-grid",                                    //main wrapper class
          "type": "spotlights",                                         //component/module name
          "spotlights": [
                  {
                    "title": "What we do",                              //Spotlight title
                    "description": "We’re a professional ...",          //Spotlight description
                    "url": "/about/what-we-do",                         //Spotlight url
                    "image": {
                      "src": "http://example/israel_mogobe.jpg",        //Spotlight image object source
                      "title": "What We do"                             //Spotlight image object title
                    },
                    "button": "Find out more"                           //Spotlight button text
                  },
                  ...
        },
         {
           "name": "Banner Slider",
           "class": "slideshow",
           "type": "slideshow",
           "images": [                                                  //Slideshow image array
             {
               "src": "/img/example-banner.jpg",                        //slide image source
               "title": "Banner title",                                 //slide image title (optional)
               "description": "first description"                       //slide image description (optional)
             },
             ...
      ],
       "sidebar": {
          "title": "About us",                                          //Sidebar title
          "left": "left-sidebar-menu",                                  //left sidebar menu id
          "right": "right-sidebar-menu"                                 //right sidebar menu id
        }
    }
    ...
 }
```
    


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
    

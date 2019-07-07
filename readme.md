# Vacation Explorer

![Landingpage](Images/Landingpage.PNG)

Vacation explorer makes recommendations to the user based on the chosen city. It can be used to find hotels, restaurants and bars in the chosen city. The user can also scroll on the map to find other locations in the city, this is done by scrolling to the new location and then clicking on one of the three buttons to get the disired recommendations.

The webpage is simple and intuiative for the user to use, the intention is to have a clean and simple layout so that the user will not be confused and not know what to do when visiting the page.

## UX

This website is for anyone who thinks of traveling to another city and want some ideas to find hotels, restaurants and bars in the city! The website gives the user a quick and easy access to these three catagories in the chosen city. The webpage has a simple layout so that the user quickly can get an overview if the city has anything to offer them.

The typical user is person or family that haven't decided on where they want to go for a vacation. They want a simple first look at their destination.

### Fonts

I have used two different fonts from Google fonts to create a typographic harmony.
I used the Roboto Condensed fonts for the headings (h1 and h2) and it is pared with the Oswald fonts for the body text.

1) Roboto Condensed [RobotoCondensed](https://fonts.google.com/?selection.family=Oswald|Roboto+Condensed&query=roboto+condensed)
2) Oswald [Oswald](https://fonts.google.com/?selection.family=Oswald|Roboto+Condensed&query=oswald)

### Wireframe and Mockup

The wireframe displays my sites structure both on a smartphone and on a desktop, the mockup shows the static visual design draft. In the mockup you can see the colors and typography etc of the page.

The wireframe and mockup was made with [AdobeXd](https://www.adobe.com/se/products/xd.html).

#### My wireframes - Smartphone and Desktop

Here are my individual wireframes:

1) [Smartphone](Wireframe_Mockup/iPhone_Wireframe.png)
2) [Desktop](Wireframe_Mockup/DESKTOP_Wireframe.png)

#### Mockups - Smartphone and Desktop

Here are my individual mockups:

1) [Smartphone](Wireframe_Mockup/iPhone_Mockup.png)
2) [Desktop](Wireframe_Mockup/DESKTOP_Mockup.png)

## Features

There are four features (at the most) that the user needs to interact with before getting a result:

1) Clicking on the 'Start' button or scrolling down the page.
2) Selecting the country of interest.
3) typing the city of interest.
4) Clicking on the icon of interest.

The user will get a result after these steps. The usear may also move along on the map to a different location in the city and when the user have found the new location, he/she clicks on one of the icons again to get recommendations for this location. The user can also re-click on the other icons to get the recommendatios of the chosen location.

The webpage is built to be simple and easy for the user to use!

### Existing Features

#### Landingpage

The landingpage is simple and clean with only one interaction button for the user to click to get started. The image is of a road and fits with the theme of the page which is travel and finding places. The road illustrates that the user is going somewhere and wants to find something before getting there.

#### Country selector

The country selector lets the user choose different countries or all countries, the result will be the same when the user goes through the next step which is typing the city of interest.

#### City selector

When the user starts typing the city of interest the autocomplete function gives suggestions of cities that fit the spelling the user types. The user is then taken to the center of the chosen site and a city map appears.

#### Recommendations

There are three catagories of recommendations:

1) Hotels
2) Bars
3) restaurants

The user clicks on one of the three catagories and markers drop down and displays the location of the chosen icon. The results is also displayed to the right of the map on a desktop and below the map on a smartphone. The user may click on the markers on the map or in the list of recommendations to get a pop-up info box on the map. When the user clicks on another marker or suggestion in the list the previous pop-up box closes and the new one appears.

#### Map

The user may also use the map to navigate around in the city by clicking and dragging. The map moves and when the user has found the new location in the city the process can start over with new recommendations in this area.

#### Back to top button

When the user is at the bottom of the page, the user can click the "Back to top" link to easily get back to the landingpage.

## Technologies Used

This site is build with the help of different languages, frameworks and libraries.
Below is a list of what I have used to build this site:

### Google Maps Platform

I have used the Maps JavaScript API platform. This API lets me customize my map with own content and imagery.

[Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)

I have also used the Places API. This API is a service that returns information about places using HTTP requests.

[Places API](https://developers.google.com/places/web-service/intro)

### Bootstrap

I used the Bootstrap framework to build a responsinve site

[Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction/)

### CSS3

I used CSS3 media queries to make sure the site works on smartphones.

[CSS3](http://www.css3.info/)

### Google fonts

The fonts that I used came from Google fonts and the fontfamily used is called: Baloo Bhai

[GoogleFonts](https://fonts.google.com/)

### Flaticon

I used the icons for the checkboxes form the Flaticon website.

[Flaticon](https://www.flaticon.com/)

### jQuery library

I used the jQuery library for the modal

[jQuery](https://code.jquery.com/)

### d3 library

A javascript visualization library for HTML and SVG

[d3](https://cdnjs.com/libraries/d3)

## Testing

### Test Matrix

I created a testing matrix in Excel. It outlines the various tests I made to ensure that the site renders consistently across different plattforms. Jasmine testing was not essential for this project.

![Test Matrix](Images/Test_matrix.PNG)

- [HTML Validation](https://validator.w3.org/): No errors or warnings to show.
- [CSS Validation](https://jigsaw.w3.org/css-validator/): No errors found. CSS validation level: CSS level 3 + SVG
- [JavaScript Validation](http://beautifytools.com/javascript-validator.php): For errors see JSHint below!

- [JSHint (v2.10.2)](https://jshint.com/)
    - There are **18** functions in this file.
    - Function with the largest signature take **2** arguments, while the median is **0**.
    - Largest function has **52** statements in it, while the median is **4.5**.
    - The most complex function has a cyclomatic complexity value of **7** while the median is **1**.
    - Two warnings:
        - ['us'] is better written in dot notation.
    - One undefined variables:
        - google - external variable from Google Maps
    - Four unused variables:
        - initMap - external variable from Google Maps
        - hotel - variable used for the listener for the search icon buttons
        - bar - variable used for the listener for the search icon buttons
        - restaurant - variable used for the listener for the search icon buttons

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/): Chrome DevTools was used for testing HTML, CSS and responsiveness of the site.

### Compatibility

I tested the site across the 5 major browsers (see the test matrix above) to ensure the a broad range of user can successfully use the site.

- Chrome
- Firefox
- Opera
- Edge
- Internet Explorer (IE)

## Deployment

Deployment and source control was done via GitHub.
My repository can be found [here](https://github.com/MrBrunotte/Vacation-Explorer)

I have puplished the source code built from the master branch using GitHub Pages.
The live site can be found [here](https://mrbrunotte.github.io/Vacation-Explorer/)

There are no differenced between the deployed version and the development version.

## Content

All data in this project is used from the [Google maps Platform](https://cloud.google.com/maps-platform/?&sign=0).

## Media

The images used for the landing page and the listing section are both royalty free and they were found through a simple Google search.

The icons are made by Freepik from [Flaticon](https://www.flaticon.com/)

## Acknowledgements

I would like to thank my mentor [Maranatha A. Ilesanmi](https://github.com/mbilesanmi) for his time and constructive feedback for this project!

I would also like to thank the Code Institute tutors and slack community for their help and feedback throughout the process of building this project.

# Project 1, Process
## Milestone 1 Proposal

I am the current president of Theta Tau a co-ed professional engineering fraternity on campus. During out chapters we have been talking about updating our pre-existing website that was created many years back using square space. But with this project I would like to completely create a new website for our chapter in order to help spread the word and share information about what we do. The topic of my website will be surroundning the Theta Tau Fraternity, our previous events, upcoming events and contact information. My inspiration for this is to utilize and engineering skill as we are an engineering fraternity I have never liked the fact that our website was created from square space. This is something I am very passionate about and want to make very intriguing to help members have a site to look back on some cool events and get excited about future events. The intended audience for this project is the members and anyone within the engineering school.

## Wireframe
![Wire Frame](wireFram.jpeg "Wire Frame")

## Use of Javascript
Since this site will be mainly to show off photos, upcoming events and some history. I plan to use javascript to show that as a professional engineering fraternity we are able to apply that in many different ways including our official website. I also plan to utilize javascript to enchance page transitions through a library called transition.js. This will go past the level that CSS is able to with some over the top visuals. I also plan to utilize the google charts to show some of the stats we have on both a national and chapter level as far as members, alumni, and alumni connections across the world. I want to pursue this as it will help me in the future since visualizing data is a great tool to have and google products are supported within many company projects. One specific feature I plan to include is that when you hover over an image it will tell you what event that picture is from. This will provide more meaning behind each image.

To achieve this I plan to utilize https://developers.google.com/chart/interactive/docs to learn more about google charts and how to implement that in my website. http://www.transitionjs.org will support my use in creating interesting transitions. I will also draw some ideas from other chapters websites to know what content must be on there. https://www.thetatauumd.com & https://www.thetataugw.org.

## Dynamic Sizing
Similar to my class project I plan to develop on a mobile size screen as if it fits well there it will be easy to adjust for the larger screen. I will also use flex boxes to keep the material in a good state when shrinking and enlarging the window size. I will put a max-width in a percentage on images to prevent them from becoming to large on bigger monitors. 


## Goals
My goals for prototyping and proof of concept are to fully flesh out every page within a wireframe and keep this simple but usable. I plan to create a little of every page when in the prototyping state to keep from getting to far down the line on one page and losing a cohesive design between each page. I feel when developing a few pages bit by bit they flow better then completing one and moving to the next. 

My MVP is to have many photos and a few charts that show members and those interested in the organization what we are and what we do.

Stretch Goals are to fully have a website that is able to have the ability to secure more interaction between the user than just reading the page and seeing amazing charts, information and photos. Another stretch goal is to use a library to create a calendar on the events page such as FullCalendar https://fullcalendar.io. Another stretch goal will be to add more than just the four pages add one for rush information and pledge information.

## Milestone 2 
I began by getting the bare bones layout of my site layed out. I started with the home page and noticed that this page would be able to function both as the home page and the about me page so I eliminated the need for these two seperate pages. I am focusing on using flex boxes in the page layouts to keep them dynamically sized. I am also changing the layout and adding some information as needed I am doing content in a full row followed by 3 columns that explain further in 3 sections the information that needs to be displayed. Since I am first getting this layout down I am adding in to-do's to keep space and signify where some of the more js heavy content will be placed. I am planning to use a similar layout as my portal for now with the menu but this may change depending on time. I do like how it could turn into a sort of signature aspect to my web design though!
![Home Page](homePage.png "Home Page")
With this base layout I decided to move into actually implementing the slide collage of some cool activities, we partake in!
I then began to experiment with a js photo gallery library called Galleria. This is a free opensource library that allows a slideshow like affect. While trying to install this library it was not going smoothly and I began to look at other options. It had the dependencies of grunt-postcss and jquery and I was unable to get those downloaded correctly. Then I found that you cna include a google hosted jQuery so I gave that a shot.


![Events Page](eventsCalendar.png "Events Page")
While working on the barebones of the events page I began researching libraries that could help me create a calendar. I then was looking at our chapters events and found an embeded code and was simple able to add this calendar which we already have all of our events into the html. This takes the javascript out of it and allowed me to achieve a stretch goal in a simpler fashion. The calendar at first was very bland and ugly. I did some research and found that there is a better way to import the calendar using js and the fullcalendar.io I talked about earlier. This would allow me to learn more js and enhance the calendar and page through js knowledge so I went this route.
https://fullcalendar.io/docs/google-calendar This was no easy task it required me to create a new calendar api then import the fullcalendar.io. This was a great learning experience as to how APIs & Services work. 
![APIS](apis.png "APIS")
This was not easy and took a lot of experimenting  figuring out the google calendar api, setting up the calendar to be shared correctly through this api and altering the tutorial code to match my needs and allow my information to come accross. Using this is much more appealing and satisfying. I was able to expand on my js knowledge and get a very cool js library implemented that shows all content from our already updated google calendar. This makes the website very dynamic as the changes will be reflected without having to make any changes to the code just the google calendar which we already update. This calendar also has a list option which is very useful for mobile viewing and saves the usability of the calendar in a mobile view! Figuring this out was my main progress for this milestone as it was very time consuming to learn the ins and outs of the api and the js library involved.
![listCalendar](listView.png "listCalendar")
 I did this in a seperate file system to begin with so I had no outside variables. Now it is time to make this addition to my site. 
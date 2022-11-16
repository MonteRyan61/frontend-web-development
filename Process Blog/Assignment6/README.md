# Plan a React To-Do List



![low Fidel](LowFidel.png)


## Step One
A component should ideally only do one thing. If that one thing becomes to large then it should be seperated into subcomponents. With this in mind the first components that come to mind for my to do list are a component for the actual list visualizations itself. There will be subcomponents in the list as well such as for the name of the task, date to be completed by then a subcomponent to hold the individual tasks. There will be a component to house each the seperate sections of the to do list based on a priority which will be based on the date it needs to be done by. This is quite hard to show through a paragraph of text so please see the hierarchy table below.


### Hierarchy
* Filterable To Do Table (Main Component Contains the entirety of the lis)
  * Show All and enter new task(receives all user input)
  * To Do Table (Displays and filters the data collection based on the user input)
    * To Do Task, Status, Due Date Row (Will interact closely with the other rows as they will need to be closely knit to know what to populate)


## Step Three Identify The Minimal (but complete) Representation Of UI State
The key here is similar to many other programming langauges you do not want to repeat yourself in what the code is doing or storing the data. I will begin to plan this out by finding all of the pieces of data that will need to be tracked in this to do application.
{Task: 'Assignment 6', Due: 'Today @ 9AM', Completed: false}
The pieces of data
* To do tasks
* To do status
* To do due date value of check box
* Show completed value of check box
* Filtered list of row to do

It really only boils down to 5 points of data that will need to be tracked and accessed.
Now we must figure out which of these will be state and which won't. We will ask these three questions for each 
1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state. 
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

* To do tasks
  1. Is it passed in from a parent via props? Yes
  2. Does it remain unchanged over time? Yes 
  3. Can you compute it based on any other state or props in your component? N/A
* To do status
  1. Is it passed in from a parent via props? No
  2. Does it remain unchanged over time? No
  3. Can you compute it based on any other state or props in your component? No
* To do due date value of check box
  1. Is it passed in from a parent via props? Yes
  2. Does it remain unchanged over time? Yes 
  3. Can you compute it based on any other state or props in your component? No
* Show completed value of check box
  1. Is it passed in from a parent via props? No
  2. Does it remain unchanged over time? No
  3. Can you compute it based on any other state or props in your component? No
* Filtered list of row to do
  1. Is it passed in from a parent via props? No
  2. Does it remain unchanged over time? Yes
  3. Can you compute it based on any other state or props in your component? Yes (can be computed by combining the full list of to do's with the stat of the show all check box and the completed text box)

So with those questions answered we can see that the due date check box is state and the show completed check box is also state.

## Step Four Identify Where Your State Should Live
Now with our two main state we need to identify which component will mutate or own each state.
Our To Do Table filters the to do list that it will show based on these two check boxes. The common own component is Filterable To Do Table so it would make the most sense for the check value of these states to live in the Filterable To Do Table component

## LIFTING STATEMENT UP

This is a ReactJS exercise from Microsoft course: Introdution to ReactJS

There are times when an event occurs on a component and the event handler needs tu update the state of another sibling or parent component. In this situation, we need to lift the state up to a parent component that encapsulate all of the components that need updating.

>The exercise consists in to do an application that has four buttons
 with a name of a Beatle inside each button and a description below the buttons where should appear the choosed one. 

>The buttons initially all have blue text and are all inative. The last button that is pressed is considered the active button and its text becomes red. Lastly, the description section shows the name of the active button(the name of the choosed Beatle)

![gif](https://raw.githubusercontent.com/LeonelAV/IntroductionToReact/master/liftingstateup/liftingupgif.gif)

##Main steps

1. Create the Details component
2. Create Buttons component
3. Create App component
4. Define the initial state class App component
```javascript
this.state = {activeArray:[0,0,0,0], details=""}
```

   this is going to define is a button is active or inactive (red or blue);

   the details propertie it will holding the text of the details seccion

5. Pass an id for each one of the buttons to know each one had been pressed.
6. Define our event handler
  * It's going to have `id` as argumennt,that's the way App component know each index of the `activeArray` to update.
  * create a new array based on the `id` that was passed 
  ```javascript 
  var arr=[0,0,0,0]
  ```
  * Set the index of the array that was passed to 1. 
  ```javascript 
  arr[id]=1
  ```

7. Pass the event handler down to the buttons
  * `<Buttons id={0} clickHandler={this.clickHandler} ... /> `
8. Give the action that we want to the buttons => Should be blue when it's inactive and should be red when activeArray
  8.1. Add style to button in `<buttons />` component:
  * `style = {{ color: this.person.active? 'red': 'blue'}}`
  * This means if `this.props.active` is true(one) become red is otherwise become blue.
9. Define the onClick event in the `<button>` element in the `<Buttons />` component:
  * ` onClick = {() => this.props.clickHandler(this.props.id, this.props.name) } ` 
  * When a button is clicked it will call clickHanlder method(this.props.clickHandler) and inside clickHandler method will be passed two arguments - the id and the name of `button`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
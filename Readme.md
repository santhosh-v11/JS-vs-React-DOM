# JS vs React DOM Rendering
A simple learning project that showcase the **difference between plain JavaScript DOM manipulation** and **React’s rendering approach**.

## Concepts
* Understand how UI is built using **vanilla JavaScript DOM**
* Compare it with **React’s declarative rendering model**
* Learn core concepts like **React.createElement, Virtual DOM, and rendering**
* Practice the both DOM Manupulations

## Live Demo
This project is deployed and demonstrates the same **Developer Profile Card UI** implemented using different approaches:
* **JavaScript DOM** – UI created using manual `createElement` and `appendChild`
* **React DOM** – UI rendered using `React.createElement`
* **React JSX** – Same profile card written using JSX for clearer, declarative understanding

🔗 Live demo: https://js-vs-react-dompractice.vercel.app/

### Plain JavaScript DOM
* `document.createElement`
* `appendChild`
* Manual DOM updates
* Imperative UI building
### React Rendering
* `React.createElement`
* JSX → createElement conversion
* Virtual DOM & reconciliation
* Declarative UI approach

## Difference between React and JS DOM

* JavaScript DOM 
    * Imperative Programming
    * Manual DOM manipulation 
    * Rerender Whole DOM for a small update/change
* In React     
    * Declarative Programming    
    * Virtual DOM handles updates  
    * compares old vs new Virtual DOM and then update only small changed part in real DOM by Diffing and Reconciliation 

## Learning outcome
* How React internally **creates and renders elements**
* Why React avoids **direct manual DOM manipulation**
* The meaning of **declarative UI design**

## Acknowledgment

Thanks to **[AnbuSelvan Annamalai](https://github.com/anburocky3)** for his guidance and knowledge sharing while learning these concepts more deep.
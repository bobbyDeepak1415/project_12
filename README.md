1. inside the src, we create a folder called components and inside it we create another folder called card and inside this we create a component called Card.jsx which is the wrappper

2. the card component accepts props like className for extra css classes,variant,padding,hover and children, we receive and dynamically render them from the app.jsx

3. created the baseStyles,which will be applied to everything
4. created the variants object for different colors
5. created the paddingtyles for different padding sizes like none,small,normal,large

6. created the hoverStyles for a boolean value

7. used template literal to combine all the styles and then add it to the className in Card component div

8. added bsic styling to the outermost div in the app.jsx component.

9. tested it out by adding a few children to the app.jsx

10. created folders like CardHeader,CardImage cardFooter etc

11. The cardImage takes src and an alt for accessiblility. we conditionally render the image in The CardImage component, if there is an src coming from app.jsx. or we gracefully display a placeholder ui in a span. we add styling to it then

12. 

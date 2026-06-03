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

12. cardHeader is the section of the card where we have the title and the rating.this takes children and a className for extra css. we add styling to it and test it in the app.jsx

13. cardTitle is present inside of the cardHeader.this also takes className and children. this is meant to be bold and big. style it accordingly and test it in the app.jsx

14. the cardbody also takes children and className. this is where the description is displayed. style it and test it in the app.jsx

15. Inside the cardfooter we have the price and a call to action button like bookNow. style it accordingly. this also takes children and className

16. in app.jsx remove everything and open a div which will be the outer most div. inside this we will have another div which will be the content wrapper. iinside this we will have 3 different divs. the first one will be the hearder or the top section of the page. the second div will be the actual card grid. and the third will be the final card for the project structure. the

17. the first div in the content wrapper will have an h1 and a p tag. style it accordingly.

18. we create a folder called data and a file in it called cardsData.js and place the data here.
19. in the second div which is the grid we map throught the objects in the array of cardsData.js and return a Card.jsx

20. we style this div according to the grid rules for different screen sizes.
21. in the card we conditionally pass the variant primary if the card id is divisible by 2. also we give the key to be the card.id and paddding none. as the children we pass the card.image conditionally if the image exists and the title as the alt for accessibility if the image does not exist.

22. below the cardImage we have a div for the cardHeader and inside this we have the conditionally render the category if it exists in a span tag. and we style it.
23. and below this in the cardHeader we render the cardTitle

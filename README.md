Welcome to the world of food nutritions!

This project is the phase-2 put it all together project using React to build a frontend single page application.

The data used in this project is about foods nutritions such as calorie, protein, fat, etc..

## Installation

Clone the repo and in the root directory of this repo, run:

```bash
npm install
```

which will install all the dependencies of the project, then run:

```bash
npm start
```

to start the application.

On the start, the user is on the Home page with a welcoming message, there are three links on the top left of the page, upon clicking, each one will take user to different page of the application, and the url in the browser's address bar will change accordingly.

The Foods page renders severing things:

1. There is a search bar letting user search for food by name, it does not need to be a exact match for the food, just a part of the name will bring the food/foods up. Also uppercase letter and lowercase letter are treated as the same.

2. Under search bar, there is a dropdown menu letting user filter foods by category.

3. Below dropdown menu, there is another dropdown menu with a button, letting user sort the foods by enery, protein, fat or carbohydrate. The default way is sorting descendingly, but once user clicks the Sort Descending button, the text will change to Sort Ascending, which upon click, will sort the food ascendingly by the property selected.

4. On the up right corner, we have a form with several input boxes, user can submit their own food by providing the food's name, image url, protein... The submitted data will appear in the page without refreshing and preserved in the backend, meaning that it will still be there after refreshing the page.

5. Below the above-mentioned elements, there is the main area of the page:

Each food is rendered individually inside a card, with food's name, image, energy, protein, fat, carbohydrate and category.

On the bottom of each card, there are two buttons:

1. A star button letting user favorite or unfavorite a food, this will not be preserved in the backend.

2. A Remove button, upon clicking, will remove the card for the food from the page, along deleting it in the backend.

The Terminology page will bring user to a page with 4 links, upon clicking, each link will bring a short explanation of the word, also the url in the browser's address bar will change accordingly.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
Movie Catalog - Team "White Lady"
=============
Movie Catalog is a Single-Page Application developed by Team "White Lady" as part of the JavaScript Applications course at Telerik Academy 2015/16.

----------

The main purpose of the application is to allow users to keep track of their movie collection and let friends know the price to rent one of the movies. On loading, the user is presented with a grid-view of his/her collection, a slider that plays the latest movies added to the collection, a sidebar that allows the collection to be filtered, two buttons to convert currencies between USD and BGN, and a button to add new movies.

----------

The site is made responsive with **Twitter Bootstrap**, whereas, the grid view is handled by **Handlebars**. The main HTML file contains the code for a Main Page, a Single Movie page and an Error page, which are rendered with **jQuery** and routes managed via **hashchange**. The exchange rates for the prices are pulled via the **Rate Exchange API**, and the current currency is kept in **localStorage**. The site is made more user-friendly via **jQueryUI**, and unit tests with **Mocha** and **Chai** ensure the application runs correctly.

On clicking the Add Movie button, the user can add new movies which are handled via T**elerik Backend Services**. 

On clicking Details for a movie, an enlarged view of the movies is presented. The user can then share the movie on his Facebook wall via the **Facebook API**.

----------

Team Members:
-------------
 - Дилян Трайков - **dilyantraykov**
 - Иван Иванов - **zdzdz**
 - Любомир Нанев - **Mask_ln**
 - Стоян Беров - **stoberov**
 - Иван Китановски - **ivannk0900**
# mdb
Movie database application

## Specs
Create a JS App which provides following functionality

Should Allow the User to:

- add / delete / update Movie information.
- add / delete / update Actor information.
- add / delete actors for a specific movie.
- See Actors on Movie info page.
- See Movies on Actor’s info page (Movies in which Actor acted).
- Go to Actor’s info Page from Movie info page.
- Go to Movie info page from Actor’s info page.
- Rate a movie on Movie information page.
- See average Rating on Movie information page.
- Search Actor or Movies.
- See list of recent movies on home page.

#### Movie
information: Name, release year, gross income, Actors, director name, rating, Genre (multiple, comma separated)

#### Actor
information: First name, Last name, gender, birth date, Movies


Frameworks / Tools minimum requirements:

- Any one selector tool (JQuery, Mootools, Zepto, etc.)
- Any one structural/application framework (Backbone, Ember, Angular etc. )
- Any one templating tool (Underscore, Handlebars, Mustache etc.)
- Any other N number of tools of choice (Foundation, Bootstrap, Underscore, lodash etc.)

### Design:

You have been provided with a Home Page Design, you will need to build this page using HTML/CSS and matching the design as close as possible:

![design_exported.png](design_exported.png)

There is no need to style other pages other than using any CSS framwework you may want to use.


### Notes:

- Code needs to work with webkit browsers only.
- Code will be tested with Google Chrome.
- All data should be stored in Local storage, no server communication required.
- Application should have starter data for 5 movies and 5 actors.
- We will evaluate css structure, Use of sass, compass, or less technologies is a plus.
- Coffescript or another JS compiler is a plus.


### Extra Credit

- Implement movie connection. Show related Movie’s in movie info page.
- Allow user to save and view Movie and Actor images (stored in LocalStorage)


### Review Criteria

Application code structure (very important)
Code reusability
Use of standard patterns and use of library functions
Code conventional and readability

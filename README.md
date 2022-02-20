# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Planning:

User Stories:

Demographic Age: 18 - 34 years old
     (Most likely age to leave a review)
Demographic Goal: Read / Leave Reviews

Max - Example Person in Demographic
1. Max needs a searchbar to find both the location / type of food in his area.
   Example - Italian in Cherry Hill, NJ
2. Max needs to be able to scroll through the restaurants in his area. They should be listed from closest mileage to farthest.
3. For the convience of Max, each restaurant should have the following information:
   Number of Stars
   Mileage from Max
   Name
   Picture
   Hours
   Types of Food - vegetarian, indian...
   First review - click for more
4. Max needs to click on the More button to read more reviews.
5. At the top of that page there will be a button that says "write a review" This will be a different color than all other buttons / text on page.
6. When Max leaves a review, it will prompt him to leave 1 to 5 stars and white a physical review.
7. Max needs to post the review to make it available to other readers.

Wireframes:
TBD

| GET | / | Home Page |
| GET | /places | Places Index Page |
| POST | /places/ | Create a new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| POST | /places/:id/rant | Add rant to a place |
| Delete | /places/:id/rant/:rantID | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

Database:

places
| Field | Object ID |
| _id | Object ID |
| Number of Stars | Number |
| Name | String |
| Mileage from Customer | Number |
| City | String |
| State | String |
| Cuisines | String |
| Pic | String |

rants
| _id | Object ID |
| place_id | ref(places) Object_ID |
| rant | String |
| rating | Number |
| Comment | String |
| Reviewer | String |
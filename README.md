# Rokker
<img src="https://user-images.githubusercontent.com/48015442/98870860-e8138680-2441-11eb-9a1f-f51a054412be.png" alt="logo" width="300px" height="200">

Rokker is a music web application designed as mobile first.

## Application requirements

### Design

1. Build a basic design system.
2. Make a complete app flow.
3. Design wireframes, mockups and prototype before start constructing with code.
4. Design the error controls through the application.

### Functionality

1. Sign up via email.
2. Allow login with email, gmail or facebook.
3. All the users will be in a 'freemium' plan.
4. User profiles must have an avatar, name and email.
5. Every user must be created with a favorites playlist. One that the user cannot delete.
6. All users can edit and delete the playlists created by him.
7. Every user can follow/unfollow recommended playlists, but cannot edit or delete them.
8. When opening a playlist, songs are serted by default regarding its adding date to the list, starting with the latest song added (desc). 
9. Within the playlist, the user should be able to reorder them in display sorting by addind date.
10. The user will be able to play a whole playlist from the start or pick a song and play the rest of the playlist from there.
11. Enable a search section which helps the user remembering the last 5 searches he have made before and suggesting the 5 trending searches at the moment.
12. The search section must return coincidencies with songs, artists and playlists.
13. Mini and fullscreen player that keeps playing and enables access to the user regardless of the page he is in.
14. Show a recommended playlists section in home page.
15. Create an artist profile section to see and play its songs.

### Technical

1. Login and logout with cookie storage.
2. Architecture based on components and state management (including its styles)
3. HTML semantic.
4. Google Lighthouse rating above 80.
5. Render client-side.
6. Song consumption only from backend.



## Endpoints

### Auth:

1. **/api/auth/sign-up**: enables the valid register method to the user which does not use authentication through social platforms.
2. **/api/auth/sign-provider**: enables a valid register method for the user which sign up using social media (Google or Facebook).
3. **/api/auth/Sign-in**: enables the login method for all the users.
4. **/api/auth/recovery**: enables a recovery password method via email.
5. **/api/auth/confirmation/:token**: enables a method to activate an account.

### Artist, Album, Song and Genre

1. **GET /api/component:** returns all the component registers. In case it involves private data, it must be filtered according to the user which makes the call.
2. **GET /api/component/:key**: returns the component by key or id received.
3. **POST /api/component:** creates the component using the information received within the body.
4. **PUT /api/component/:key** updates the component, choosing which one according to the key element received within the body.
5. **DELETE /api/component/:key** deletes a register in the list accoording the component type.

The last part is an abstraction of a CRUD model, using a generic component called "Component". This abstraction mus be applied to the header's model.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## For further information check our Notion
[Notion](https://www.notion.so/Rokker-cc1801d5d871494caca6dc79bfe4594d)

## License
[MIT](https://choosealicense.com/licenses/mit/)

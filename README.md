# Idea Board

Tutorial app to learn Rails backend + React frontend. Simple app to track ideas.

### Installation

Clone repo and install dependencies (there aren't many)

```
$ git clone https://github.com/noahkrell/rails-react-ideaboard.git
```

Backend:

```
$ cd idea-board-app/
$ cd idea-board-backend/
$ bundle install
$ rails server -p 3001 (backend will run on port 3001)
```

Frontend:

```
$ cd idea-board-app/
$ cd idea-board-frontend/
$ npm install
$ npm start (frontend will run on port 3000)
```

### Using the app

Click "Add a new idea" to add a new post-it. Add an idea title and body. All post-its are editable. Click on a post-it to edit. Hover on a post-it and click the red "x" to delete.

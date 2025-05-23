# **MoodMate**

**MoodMate** is an interactive mental health app designed to help users track their mood and find personalized content that can uplift and support them. Whether it's reading a book, listening to a podcast, watching a movie, or more, **MoodMate** provides content recommendations based on your mood and preferences.

---

## **Features**

- **Mood Tracking**: Users can input their current mood and receive tailored content recommendations.
- **Personalized Content**: Based on the user’s mood, MoodMate suggests content like books, movies, music, and podcasts to help improve their well-being.
- **Soothing Messages**: After tracking their mood, users are greeted with calming and encouraging words.
- **User Preferences**: Users can choose their favorite ways to unwind and receive relevant recommendations.

---

## **Tech Stack**

- **Backend**: NestJS
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT (JSON Web Tokens)
- **ORM**: TypeORM (for interacting with PostgreSQL)
- **Frontend (Planned)**: React with TailwindCSS

---

## **Installation**

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/moodmate-backend.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
- Create a `.env` file at the root directory of the project.

```
cp .env.example .env
```
- Fill in the appropriate values in the `.env` file. You will need to set up your PostgreSQL database and provide the connection details.

### 4. Run the Application
```bash
npm run start:dev
```

- Open the browser and go to `http://localhost:4002` to see the backend in action.

---

## **Endpoints**

### Authentication
- **POST** `/auth/signup`: Sign up a new user.
- **POST** `/auth/signin`: Sign in a user.

### Mood
- **GET** `/mood`: Get personalized content recommendations based on the user's mood.

---

## **Contributing**

If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. Here are some guidelines to follow:

1. Write clean, maintainable code.
2. Add tests for new features.
3. Follow standard commit message conventions.

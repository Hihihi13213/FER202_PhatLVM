# Quiz Application - Lab 5

A modern React application featuring React Router, demonstrating multi-page navigation with various interactive components.

## Features

- **React Router**: Multi-page navigation with Home, News, About, Contact, and Quiz pages
- **Carousel**: Beautiful slideshow on the home page
- **News Grid**: Display list of news articles in a responsive grid layout
- **Interactive Quiz**: Answer multiple-choice questions with instant feedback
- **Contact Form**: Fully validated contact form using React Bootstrap
- **Responsive Design**: Built with Bootstrap for mobile-friendly interface

## Project Structure

```
src/
├── components/
│   └── QuestionItem.js      # Individual quiz question component
├── pages/
│   ├── Home.js              # Home page with carousel
│   ├── About.js             # About page
│   ├── News.js              # News listing page
│   ├── Quiz.js              # Quiz page
│   └── Contact.js           # Contact form page
├── App.js                   # Main app with routing
├── App.css                  # Styling
└── index.js                 # Entry point
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Routes

- `/` - Home page with carousel
- `/about` - About us page
- `/news` - News listings
- `/quiz` - Interactive quiz
- `/contact` - Contact form

## Technologies Used

- **React** - Frontend library
- **React Router** - Client-side routing
- **React Bootstrap** - Bootstrap components for React
- **Bootstrap 5** - CSS framework

## Quiz Features

- Multiple-choice questions
- Instant submission and scoring
- Score calculation and percentage
- Review of correct vs submitted answers
- Ability to retake the quiz

## Form Validation

The contact form includes:
- Required field validation
- Real-time feedback
- Success message on submission
- Form reset after successful submission

## Build

To build the application for production:
```bash
npm run build
```

## License

This project is part of FER202 Lab 5 at FPT University.

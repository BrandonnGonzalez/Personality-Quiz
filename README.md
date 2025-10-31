# Which Element Are You? 🎨

A fun and interactive personality quiz web application that determines your elemental personality (Fire, Water, Earth, or Air) and pairs you with beautiful artwork from the Metropolitan Museum of Art collection.

## 🌟 Features

- **Interactive Quiz Experience**: Answer questions to discover your elemental personality
- **Dynamic Results**: Get matched with one of four elements (Fire 🔴, Water 🔵, Earth 🟢, Air 🟡)
- **Artwork Integration**: Automatically fetches and displays relevant artwork from the MET Museum API based on your result
- **Clean User Interface**: Modern, responsive design with smooth navigation
- **Context-Based State Management**: Uses React Context API to manage user data without prop drilling

## 🚀 Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library for building interactive interfaces
- **React Router DOM 7.9.5** - Client-side routing for single-page application navigation
- **Vite 7.1.7** - Next-generation frontend build tool for fast development and optimized production builds

### Development Tools
- **ESLint** - Code linting and quality assurance
- **React Hooks** - Modern state and lifecycle management

### API Integration
- **MET Museum API** - Fetches artwork from the Metropolitan Museum of Art's public collection

## 📋 How It Works

### Quiz Flow

1. **User Registration**: Start by entering your name on the home page
2. **Question Answering**: Navigate to the quiz and answer multiple-choice questions
3. **Element Determination**: The app analyzes your answers and determines which element you align with most
4. **Artwork Matching**: Based on your element, the app searches the MET Museum API for relevant artwork
5. **Results Display**: View your personalized results with your element and a matching artwork piece

### Technical Architecture

- **Component-Based Structure**: Modular React components for maintainability
  - `Header.jsx` - Navigation and title display
  - `UserForm.jsx` - Name input form
  - `Question.jsx` - Quiz question display and answer selection
  - `Results.jsx` - Results display with artwork
  - `UserContext.jsx` - Global state management for user data

- **State Management**: 
  - React Context API for user name and settings
  - Local state for quiz progress, answers, and element determination
  - useEffect hooks for side effects and API calls

- **API Integration**: 
  - Searches MET Museum collection by keyword (element name)
  - Retrieves artwork details including image, title, artist, and date
  - Gracefully handles API errors and missing data

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personality-quiz.git
   cd personality-quiz/personality-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory. Preview it with:

```bash
npm run preview
```

## 📁 Project Structure

```
personality-quiz/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Header component with navigation
│   │   ├── UserForm.jsx    # User name input form
│   │   ├── Question.jsx    # Quiz question component
│   │   ├── Results.jsx    # Results display component
│   │   └── UserContext.jsx # Context provider for user state
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎮 Usage

1. **Start the Quiz**: 
   - Enter your name on the home page
   - Click "Start Quiz" or navigate to `/quiz`

2. **Answer Questions**:
   - Read each question carefully
   - Select your preferred answer from the options
   - Progress through all questions

3. **View Results**:
   - See your determined element personality
   - View your matched artwork from the MET Museum collection
   - Learn about the artwork's artist and creation date

## 🔧 Configuration

### Adding More Questions

Edit the `questions` array in `src/App.jsx`:

```javascript
const questions = [
  {
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  // Add more questions...
];
```

### Customizing Elements

Modify the `elements` and `keywords` objects in `src/App.jsx` to change element mapping and API search terms.

## 🌐 API Information

This app uses the [Metropolitan Museum of Art Collection API](https://metmuseum.github.io/), which is free and open to the public. The API allows access to over 470,000 objects from the MET's collection.

### API Endpoints Used
- Search: `https://collectionapi.metmuseum.org/public/collection/v1/search?q={keyword}`
- Object Details: `https://collectionapi.metmuseum.org/public/collection/v1/objects/{objectID}`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built by Brandon Gonzalez | Full-Stack Software Engineer

## 🙏 Acknowledgments

- Metropolitan Museum of Art for providing the public API
- React team for the amazing framework
- Vite for the excellent build tooling

---

**Note**: This is a fun, entertainment-based quiz. Results are based on your answer selections and are meant for enjoyment purposes.

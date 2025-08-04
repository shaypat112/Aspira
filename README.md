# Aspira Organization Website

A modern, responsive website for Aspira - a remote club dedicated to exploring business through engaging content creation and entrepreneurship education.

## 🌟 Features

- **Multi-page Single Page Application (SPA)** with smooth navigation
- **Responsive design** that works on all devices
- **Interactive quiz** to help users find their perfect module
- **Challenge zone** with entrepreneurship challenges
- **Blog section** with business insights
- **Application form** with local data storage
- **Admin panel** for managing applications (Ctrl+Shift+A)

## 🎨 Design

- **Navy blue & light pink color scheme**
- **Orbitron font** for the logo with gradient effects
- **Modern animations** and hover effects
- **Clean, professional layout**

## 📁 Project Structure

```
aspira-website/
├── index.html          # Main HTML file
├── styles/
│   └── style.css       # All CSS styles
├── scripts/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets (for future use)
├── README.md          # Project documentation
└── package.json       # Project configuration
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project files
2. **Open VS Code** and open the project folder
3. **Install Live Server extension** in VS Code
4. **Right-click on index.html** and select "Open with Live Server"
5. The website will open in your browser at `http://localhost:5500`

### Manual Setup

1. Simply open `index.html` in any modern web browser
2. The website will work fully without a server

## 📱 Pages

- **Home** - Welcome page with team information
- **Blog** - Entrepreneurship articles and insights
- **Challenge Zone** - Business skill challenges
- **Reach** - Global community statistics
- **Quiz: Find Your Module** - Interactive module recommendation
- **Apply** - Application form for joining Aspira

## 🛠️ Technologies

- **HTML5** - Structure
- **CSS3** - Styling with custom properties and animations
- **Vanilla JavaScript** - Functionality and interactivity
- **Google Fonts** - Orbitron and Inter fonts
- **Local Storage** - Data persistence

## 🎯 Key Functionality

### Interactive Quiz

- 5-question assessment
- Determines best fit from 4 modules:
  - Marketing & Branding
  - Finance & Investment
  - Leadership & Management
  - Entrepreneurship & Innovation

### Challenge System

- 5 different business challenges
- Difficulty levels: Beginner, Intermediate, Advanced
- Point-based reward system

### Application Management

- Comprehensive form validation
- Local storage for applications
- Hidden admin panel for viewing submissions

## 🔧 Customization

### Colors

Edit the CSS variables in `styles/style.css`:

```css
:root {
  --navy-blue: #1a237e;
  --light-pink: #f8bbd9;
  --dark-navy: #0d1554;
  --pale-pink: #fce4ec;
}
```

### Content

- Blog posts: Edit the `blogPosts` array in `scripts/main.js`
- Challenges: Edit the `challenges` array in `scripts/main.js`
- Quiz questions: Edit the `quizQuestions` array in `scripts/main.js`

## 📊 Admin Panel

Access the hidden admin panel by pressing **Ctrl+Shift+A** to:

- View all application submissions
- Clear stored data
- Monitor user engagement

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. Drag and drop the entire folder to netlify.com
2. Your site will be live instantly

### Option 2: Vercel

1. Connect your GitHub repository
2. Deploy automatically

### Option 3: GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in settings

### Option 4: Traditional Web Hosting

1. Upload all files via FTP
2. Ensure index.html is in the root directory

## 📞 Support

For any issues or questions, contact the development team or refer to the documentation.

## 📄 License

This project is created for Aspira Organization. All rights reserved.

---

**Aspira** - Inspiring entrepreneurship through collaborative learning and content creation.

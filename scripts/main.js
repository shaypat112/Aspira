// Navigation functionality
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('active');
}

// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Blog posts data
const blogPosts = [
    {
        title: "5 Essential Skills Every Young Entrepreneur Needs",
        date: "March 15, 2025",
        excerpt: "Discover the key skills that successful entrepreneurs develop early in their journey, from leadership to financial literacy.",
        icon: "💡"
    },
    {
        title: "Building Your Personal Brand on Social Media",
        date: "March 10, 2025",
        excerpt: "Learn how to create authentic content that resonates with your audience and builds a strong personal brand.",
        icon: "📱"
    },
    {
        title: "The Power of Networking in the Digital Age",
        date: "March 5, 2025",
        excerpt: "Explore effective strategies for building meaningful professional relationships online and offline.",
        icon: "🤝"
    },
    {
        title: "From Idea to Execution: A Student's Guide",
        date: "February 28, 2025",
        excerpt: "Step-by-step process for turning your innovative ideas into actionable business plans.",
        icon: "🚀"
    },
    {
        title: "Financial Literacy for Young Entrepreneurs",
        date: "February 20, 2025",
        excerpt: "Understanding the basics of budgeting, investing, and financial planning for your entrepreneurial journey.",
        icon: "💰"
    },
    {
        title: "Leadership Lessons from Remote Collaboration",
        date: "February 15, 2025",
        excerpt: "How working remotely has taught us valuable lessons about leadership and team management.",
        icon: "👥"
    }
];

// Challenges data
const challenges = [
    {
        title: "30-Day Content Creation Challenge",
        difficulty: "Beginner",
        description: "Create engaging Instagram content for 30 consecutive days. Focus on entrepreneurship tips, personal insights, and behind-the-scenes content.",
        points: 100
    },
    {
        title: "Business Pitch Competition",
        difficulty: "Intermediate",
        description: "Develop a 3-minute pitch for your business idea. Include problem statement, solution, market analysis, and financial projections.",
        points: 250
    },
    {
        title: "Social Media Growth Hack",
        difficulty: "Advanced",
        description: "Grow an Instagram account from 0 to 1000 followers in 60 days using organic strategies only. Document your approach and results.",
        points: 500
    },
    {
        title: "Team Leadership Project",
        difficulty: "Intermediate",
        description: "Lead a team of 3-5 members to complete a marketing campaign for a local business. Practice delegation and project management.",
        points: 300
    },
    {
        title: "Financial Planning Workshop",
        difficulty: "Beginner",
        description: "Create a personal budget and 5-year financial plan. Include savings goals, investment strategies, and risk management.",
        points: 150
    }
];

// Quiz questions data
const quizQuestions = [
    {
        question: "What aspect of business excites you most?",
        options: [
            { text: "Creating engaging content and building brand awareness", module: "marketing" },
            { text: "Analyzing numbers and making strategic financial decisions", module: "finance" },
            { text: "Leading teams and inspiring others to achieve goals", module: "leadership" },
            { text: "Developing innovative solutions to real-world problems", module: "entrepreneurship" }
        ]
    },
    {
        question: "How do you prefer to work?",
        options: [
            { text: "Collaboratively with creative teams on visual projects", module: "marketing" },
            { text: "Independently analyzing data and creating reports", module: "finance" },
            { text: "Leading meetings and coordinating team activities", module: "leadership" },
            { text: "Brainstorming and experimenting with new ideas", module: "entrepreneurship" }
        ]
    },
    {
        question: "What's your biggest strength?",
        options: [
            { text: "Creative thinking and visual communication", module: "marketing" },
            { text: "Analytical skills and attention to detail", module: "finance" },
            { text: "Communication and people management", module: "leadership" },
            { text: "Innovation and problem-solving", module: "entrepreneurship" }
        ]
    },
    {
        question: "Which outcome would make you happiest?",
        options: [
            { text: "A viral campaign that reaches millions", module: "marketing" },
            { text: "Successfully managing a profitable investment portfolio", module: "finance" },
            { text: "Building and leading a high-performing team", module: "leadership" },
            { text: "Launching a startup that solves a major problem", module: "entrepreneurship" }
        ]
    },
    {
        question: "What type of content do you enjoy creating most?",
        options: [
            { text: "Visual content, videos, and social media posts", module: "marketing" },
            { text: "Data analysis reports and financial forecasts", module: "finance" },
            { text: "Team presentations and motivational content", module: "leadership" },
            { text: "Business plans and innovative project proposals", module: "entrepreneurship" }
        ]
    }
];

// Module descriptions
const moduleDescriptions = {
    marketing: {
        title: "Marketing & Branding Module",
        description: "Perfect for creative minds who love visual storytelling! You'll master social media strategy, brand development, content creation, and digital marketing techniques.",
        skills: ["Content Creation", "Brand Strategy", "Social Media Marketing", "Visual Design", "Influencer Collaboration"]
    },
    finance: {
        title: "Finance & Investment Module",
        description: "Ideal for analytical thinkers who enjoy working with numbers! You'll learn financial planning, investment strategies, budgeting, and business financial management.",
        skills: ["Financial Analysis", "Investment Planning", "Budget Management", "Risk Assessment", "Financial Modeling"]
    },
    leadership: {
        title: "Leadership & Management Module",
        description: "Great for natural leaders who inspire others! You'll develop team management skills, communication techniques, project coordination, and organizational leadership.",
        skills: ["Team Management", "Communication", "Project Leadership", "Conflict Resolution", "Strategic Planning"]
    },
    entrepreneurship: {
        title: "Entrepreneurship & Innovation Module",
        description: "Perfect for innovative problem-solvers! You'll learn startup development, business model creation, market research, and how to turn ideas into successful ventures.",
        skills: ["Business Development", "Innovation Strategy", "Market Research", "Startup Planning", "Product Development"]
    }
};

// Initialize pages
function initializeBlog() {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-date">${post.date}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
            </div>
        </div>
    `).join('');
}

function initializeChallenges() {
    const challengeContainer = document.getElementById('challengeContainer');
    challengeContainer.innerHTML = challenges.map(challenge => `
        <div class="challenge-card">
            <div class="challenge-difficulty">${challenge.difficulty}</div>
            <h3 class="challenge-title">${challenge.title}</h3>
            <p class="challenge-description">${challenge.description}</p>
            <p style="color: var(--light-pink); font-weight: 600; margin: 1rem 0;">Reward: ${challenge.points} points</p>
            <button class="challenge-btn" onclick="acceptChallenge('${challenge.title}')">Accept Challenge</button>
        </div>
    `).join('');
}

function initializeQuiz() {
    let currentQuestion = 0;
    let answers = { marketing: 0, finance: 0, leadership: 0, entrepreneurship: 0 };

    const quizContainer = document.getElementById('quizContainer');
    
    function renderQuestion() {
        const question = quizQuestions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="quiz-question active">
                <div class="question-number">Question ${currentQuestion + 1} of ${quizQuestions.length}</div>
                <h3 class="question-text">${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option" onclick="selectOption(${index}, '${option.module}')">
                            ${option.text}
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-nav">
                    <button class="quiz-btn" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>Previous</button>
                    <button class="quiz-btn" onclick="nextQuestion()" id="nextBtn" disabled>Next</button>
                </div>
            </div>
        `;
    }

    function selectOption(index, module) {
        document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelectorAll('.quiz-option')[index].classList.add('selected');
        answers[module]++;
        document.getElementById('nextBtn').disabled = false;
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }

    function previousQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
        }
    }

    function showResult() {
        const topModule = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
        const moduleInfo = moduleDescriptions[topModule];
        
        quizContainer.innerHTML = `
            <div class="quiz-result active">
                <h2 style="margin-bottom: 1rem;">Your Perfect Module: ${moduleInfo.title}</h2>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">${moduleInfo.description}</p>
                <h3 style="margin-bottom: 1rem;">Skills You'll Develop:</h3>
                <ul style="text-align: left; max-width: 400px; margin: 0 auto 2rem;">
                    ${moduleInfo.skills.map(skill => `<li style="margin: 0.5rem 0;">${skill}</li>`).join('')}
                </ul>
                <button class="quiz-btn" onclick="showPage('application')" style="background: var(--light-pink); color: var(--navy-blue);">Apply Now</button>
                <button class="quiz-btn" onclick="initializeQuiz()" style="margin-left: 1rem;">Retake Quiz</button>
            </div>
        `;
    }

    // Make functions global
    window.selectOption = selectOption;
    window.nextQuestion = nextQuestion;
    window.previousQuestion = previousQuestion;

    renderQuestion();
}

// Challenge acceptance function
function acceptChallenge(challengeTitle) {
    alert(`Great! You've accepted the "${challengeTitle}" challenge. Check your email for detailed instructions and resources.`);
}

// Application form functionality
const applicationForm = document.getElementById('applicationForm');
const successMessage = document.getElementById('successMessage');

let applications = JSON.parse(localStorage.getItem('aspira_applications')) || [];

applicationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(applicationForm);
    const application = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        age: formData.get('age'),
        location: formData.get('location'),
        interest: formData.get('interest'),
        experience: formData.get('experience'),
        motivation: formData.get('motivation'),
        availability: formData.get('availability'),
        timestamp: new Date().toISOString(),
        status: 'pending'
    };

    applications.push(application);
    localStorage.setItem('aspira_applications', JSON.stringify(applications));

    successMessage.style.display = 'block';
    applicationForm.reset();

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});

// Initialize all components when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeBlog();
    initializeChallenges();
    initializeQuiz();
});

// Make functions global for onclick handlers
window.showPage = showPage;
window.acceptChallenge = acceptChallenge;
window.initializeQuiz = initializeQuiz;

// Admin panel (hidden feature - Ctrl+Shift+A)
let adminMode = false;
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        adminMode = !adminMode;
        if (adminMode) {
            showAdminPanel();
        }
    }
});

function showAdminPanel() {
    const adminPanel = document.createElement('div');
    adminPanel.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 20px 50px rgba(26,35,126,0.3);
                    z-index: 10000; max-width: 90vw; max-height: 90vh; overflow-y: auto;">
            <h3 style="color: var(--navy-blue); margin-bottom: 1rem;">Aspira Admin Panel</h3>
            <h4 style="color: var(--light-pink);">Applications (${applications.length})</h4>
            <div style="max-height: 300px; overflow-y: auto; margin: 1rem 0;">
                ${applications.map(app => `
                    <div style="border: 2px solid var(--pale-pink); padding: 1rem; margin: 0.5rem 0; border-radius: 10px;">
                        <strong style="color: var(--navy-blue);">${app.name}</strong> (${app.email})<br>
                        <span style="color: var(--light-pink);">Interest: ${app.interest}</span><br>
                        <span style="color: var(--gray);">Age: ${app.age} | Location: ${app.location}</span><br>
                        <small style="color: var(--gray);">${new Date(app.timestamp).toLocaleString()}</small>
                    </div>
                `).join('')}
            </div>
            <button onclick="this.parentElement.remove()" style="background: var(--navy-blue); color: white; border: none; padding: 0.7rem 1.5rem; border-radius: 25px; cursor: pointer; margin-right: 0.5rem;">Close</button>
            <button onclick="clearAdminData()" style="background: var(--light-pink); color: var(--navy-blue); border: none; padding: 0.7rem 1.5rem; border-radius: 25px; cursor: pointer;">Clear Data</button>
        </div>
    `;
    document.body.appendChild(adminPanel);
}

function clearAdminData() {
    localStorage.removeItem('aspira_applications');
    applications = [];
    alert('All application data cleared!');
}

window.clearAdminData = clearAdminData;
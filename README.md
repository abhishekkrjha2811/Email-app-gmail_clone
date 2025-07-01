# Email App - Gmail Clone

A modern, responsive email application built with React, Firebase, and Tailwind CSS that replicates the core functionality of Gmail.

## 🚀 Features

- **User Authentication** - Google OAuth login/logout
- **Real-time Email Management** - Send, receive, and view emails
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Modern UI** - Clean, Gmail-inspired interface
- **Search Functionality** - Search through your emails
- **Firebase Integration** - Real-time database and authentication

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **State Management**: Redux Toolkit
- **UI Components**: Material-UI
- **Icons**: React Icons
- **Animations**: Framer Motion

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/email-app-gmail-clone.git
   cd email-app-gmail-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Fill in your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Firebase Setup**
   - Create a new Firebase project
   - Enable Authentication (Google provider)
   - Create a Firestore database
   - Add your domain to authorized domains

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Firebase Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 📁 Project Structure

```
src/
├── components/
│   ├── shared/
│   │   └── Navbar.jsx
│   ├── Body.jsx
│   ├── Inbox.jsx
│   ├── Login.jsx
│   ├── Mail.jsx
│   ├── Message.jsx
│   ├── Messages.jsx
│   ├── SendMail.jsx
│   └── Sidebar.jsx
├── redux/
│   ├── appSlice.js
│   └── store.js
├── assets/
├── App.jsx
├── firebase.js
└── main.jsx
```

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Firebase Measurement ID |

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](#license) file for details.

## 🙏 Acknowledgments

- Inspired by Gmail's user interface
- Built with modern React best practices
- Firebase for backend services

## 📞 Support

If you have any questions or need help, please open an issue or contact the maintainers.

---

## License

MIT License

Copyright (c) 2025 Email App Gmail Clone

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

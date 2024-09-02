# My Portfolio Website

Welcome to my portfolio website! This project showcases my skills, experience, and the projects I have worked on. It was designed with a focus on smooth transitions, dynamic animations, and efficient API integrations.

## Features

- **Beautiful Design:** The portfolio was meticulously designed using Figma, ensuring a clean, modern, and user-friendly interface.
  
- **Smooth Animations:** Framer Motion was utilized to implement seamless transitions and animations, enhancing the user experience.

- **Dynamic Project Display:** Projects and commits are dynamically fetched from the GitHub API. Initially, I used the public API without an access token, but after encountering rate limits, I generated a GitHub access token and used Axios to send it through the request headers.

- **Contact Form:** The website includes a contact form where visitors can input their name, email, and message. The form is built using React Hook Form for easy validation and state management. Upon submission, the form triggers an Appwrite function that sends an email directly to my Gmail account using Nodemailer and the Gmail service.

- **Appwrite Integration:** 
  - I leveraged Appwrite functions to handle the backend logic for sending emails through the contact form. 
  - The service is built to be API-agnostic to prevent vendor lock-in.
  - The functions were thoroughly tested using Postman and the terminal to ensure reliability.

## Technologies Used

- **Design:** Figma
- **Frontend:** React.js, Framer Motion, React Hook Form
- **Styling:** Tailwind CSS
- **Bundler:** Vite
- **API Integration:** Axios, GitHub API
- **Backend:** Appwrite, Node.js, Nodemailer
- **Testing:** Postman
- **Hosting:** [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js
- NPM or Yarn
- Appwrite account
- GitHub account with access token

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bappabarik/bappabarik-portfolio-repo.git
    ```

2. Install the dependencies:

    ```bash
    cd bappabarik-portfolio-repo
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add your GitHub access token, Appwrite endpoint, and project ID:
        ```bash
        VITE_GITHUB_TOKEN = 'your_github_token'
        VITE_APPWRITE_API_ENDPOINT = 'https://cloud.appwrite.io/v1'
        VITE_APPWRITE_PROJECT_ID = 'your_project_id'
        VITE_APPWRITE_FUNCTION_ID= 'your_function_id'
        ```

4. Start the development server:

    ```bash 
        npm run dev
    ```

5. Build for production:

    ```bash
        npm run build
    ```

## Testing the Appwrite Function

- Use Postman to test the Appwrite function:

    - Set the function ID and headers, including X-Appwrite-Project and X-Appwrite-Key.

    - Send the request and check the response to ensure the function executes correctly.

## Future Enhancements

- Add a blog section to share insights and tutorials.
- Improve accessibility to meet WCAG standards.
- Optimize performance for faster load times.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
Feel free to reach out if you have any questions or feedback!

- Email: bappabarik898@gmail.com
- GitHub: bappabarik
- Portfolio: [bappabarik.vercel.app](https://bappabarik.vercel.app)
pipeline {
    agent any  // Runs on any available Jenkins agent

    stages {
        // Stage 1: Build
        stage('Build') {
            steps {
                echo "Building the project..."
                
                // For Linux/macOS agents
                sh 'ls -la'
                
                // For Windows agents, use:
                // bat 'dir'
            }
        }

        // Stage 2: Test
        stage('Test') {
            steps {
                echo "Running tests..."
                
                // Add your test commands here, e.g.:
                // sh 'npm test'
            }
        }

        // Stage 3: Deploy
        stage('Deploy') {
            steps {
                echo "Deploying..."
                
                // Add your deployment commands here, e.g.:
                // sh './deploy.sh'
            }
        }
    }
}

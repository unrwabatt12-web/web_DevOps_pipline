pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'echo Build successful'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Running tests'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying application'
            }
        }
    }
}

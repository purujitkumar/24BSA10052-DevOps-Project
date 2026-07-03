pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t technova2026 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop technova-container || exit 0'
                bat 'docker rm technova-container || exit 0'
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p 8081:80 --name technova-container technova2026'
            }
        }
    }
}
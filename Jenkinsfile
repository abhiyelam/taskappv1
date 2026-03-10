pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Containers') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

    }
}

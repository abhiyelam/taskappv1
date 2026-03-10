pipeline {
    agent any

    stages {

        stage('Clone Frontend') {
            steps {
                git branch: 'main',
                url: 'https://github.com/abhiyelam/taskappv1.git'
            }
        }

        stage('Clone Backend') {
            steps {
                dir('backend') {
                    git branch: 'master',
                    url: 'https://github.com/abhiyelam/WebAPIDemo.git'
                }
            }
        }

        stage('Build Docker Images') {
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

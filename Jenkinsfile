pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Clone Frontend') {
            steps {
                dir('frontend') {
                    git branch: 'main',
                    url: 'https://github.com/abhiyelam/taskappv1.git'
                }
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

        stage('Check Frontend Files') {
            steps {
                sh 'ls -la frontend'
            }
        }

        stage('Check Angular Dist') {
            steps {
                sh 'ls -la frontend/dist || echo "dist folder not found"'
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build --no-cache'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully 🚀'
        }
        failure {
            echo 'Deployment failed ❌'
        }
    }
}

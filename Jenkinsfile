pipeline {
    agent any

    stages {

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

        stage('Stop Old Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Remove Old Images') {
            steps {
                sh 'docker image prune -f || true'
            }
        }

        stage('Build New Images') {
            steps {
                sh 'docker compose build --no-cache'
            }
        }

        stage('Run New Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo 'New image created and application deployed 🚀'
        }
        failure {
            echo 'Deployment failed ❌'
        }
    }
}

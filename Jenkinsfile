pipeline {
    agent any

    environment {
        IMAGE_NAME = "taskapp:v1"
        CONTAINER_NAME = "taskapp"
        PORT = "8080"
    }

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Old Container') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Run New Container') {
            steps {
                sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
            echo "Application running at: http://localhost:${PORT}"
        }

        failure {
            echo "❌ Build Failed!"
        }
    }
}

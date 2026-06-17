pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins/jenkins"
        CONTAINER_NAME = "jenkins"
        PORT = "8080"
    }

    triggers {
        githubPush()   // ✅ Automatically trigger on GitHub push
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:latest ."
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
                sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest"
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

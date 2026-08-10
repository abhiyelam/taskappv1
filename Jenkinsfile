pipeline {
    agent any

    environment {
        IMAGE_NAME = "taskapp:v1"
        CONTAINER_NAME = "taskapp"
        PORT = "8081"
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
                sh """
                    docker run -d \
                    --name ${CONTAINER_NAME} \
                    -p ${PORT}:80 \
                    ${IMAGE_NAME}
                """
            }
        }

        stage('Verify Container') {
            steps {
                sh """
                    sleep 5
                    docker ps
                    docker logs ${CONTAINER_NAME}
                    curl -f http://localhost:${PORT}
                """
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
            echo "Application running at: http://localhost:${PORT}"
        }

        failure {
            echo "❌ Deployment Failed!"
            sh "docker ps -a || true"
            sh "docker logs ${CONTAINER_NAME} || true"
        }
    }
}

pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                // Print all the environment variables.
                sh 'echo $GIT_BRANCH'
                sh 'echo $GIT_COMMIT'
                echo 'Building'
                sh 'docker build -t znieczu-front:$BUILD_ID .'
                sh 'docker tag znieczu-front:$BUILD_ID localhost:5000/znieczu-front:$BUILD_ID'
            }
        }
        stage('Push image to registry') {
            steps {
                sh 'docker push localhost:5000/znieczu-front:$BUILD_ID'
                sh 'docker tag znieczu-front:$BUILD_ID localhost:5000/znieczu-front:latest'
                sh 'docker push localhost:5000/znieczu-front:latest'
        }
        }
         stage('Update service with new image') {
            steps {
                sh 'docker service update --force --image localhost:5000/znieczu-front:$BUILD_ID --update-order "start-first" znieczu-front'
        }
        }
       
    }
}

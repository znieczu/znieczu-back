pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh 'cd znieczu-front && npm install && nom run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
		sh 'docker container stop znieczu-back'
		sh 'docker container stop znieczuback_nginx_1'
		sh 'docker container start znieczu-back'
		sh 'docker container start znieczuback_nginx_1'

            }
        }
    }
}
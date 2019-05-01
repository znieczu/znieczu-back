pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
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
		sh 'docker container up znieczu-back'
		sh 'docker container up znieczuback_nginx_1'

            }
        }
    }
}
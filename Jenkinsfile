pipeline {
    agent any
    environment {
        BUILD_AUTOMATION_TOOL = 'Maven'
        TEST_AUTOMATION_TOOL = 'Mocha'
        CODE_ANALYSIS_TOOL = 'SonarQube'
        SECURITY_SCAN_TOOL = 'Astra'
        STAGING_SERVER = 'AWS EC2'
        STAGING_ENVIRONMENT = 'AWS EC2'
        PRODUCTION_SERVER = 'AWS EC2'
    }
    stages {
        stage('Build') {
            steps {
                echo "Build automation in progress with $BUILD_AUTOMATION_TOOL..."
                bat "docker build -t art_supply_store ."
            }
        }
        stage('Tests') {
            steps {
                echo "Running unit tests with $TEST_AUTOMATION_TOOL..."
                bat "npm install"
                bat "npm run test"
            }
            post{
                success{
                    echo "Test successfully with Mocha!"
                    // emailext (
                    //     to: "tamtat192@gmail.com",
                    //     subject: "Email notification from Jenkins: Unit and Integration Tests status - SUCCESS",
                    //     body: "The Unit and Integration Tests stage was completed successfully! Please find the attached build log below.",
                    //     attachLog: true
                    // )
                }
                failure{
                    echo "Test failed with Mocha!"
                    // emailext (
                    //     to: "tamtat192@gmail.com",
                    //     subject: "Email notification from Jenkins: Unit and Integration Tests status - FAILURE",
                    //     body: "The Unit and Integration Tests stage was failed ! Please find the attached build log below.",
                    //     attachLog: true
                    // )
                }
            }
        }
        stage('Code Analysis') {
            steps {
                echo "Analysing code with $CODE_ANALYSIS_TOOL"
                script {
                    def scannerHome = tool 'SonarQubeScanner6.2' // Use 'SonarQubeAnalysis'

                    withSonarQubeEnv('SonarQubeAnalysis') {  // 'SonarCloud' is the name of your SonarQube installation in Jenkins
                        bat "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying application to $STAGING_SERVER staging server..."
            }
        }
        stage('Release') {
            steps {
                echo "Releasing application."
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                echo "Monitoring and Alerting stage."
            }
        }
    }
}
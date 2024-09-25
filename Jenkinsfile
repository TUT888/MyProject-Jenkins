pipeline {
    agent any
    environment {
        NOTIFICATION_EMAIL = 'tamtat192@gmail.com'
        BUILD_TOOL = 'Docker'
        TEST_TOOL = 'Mocha'
        CODE_ANALYSIS_TOOL = 'SonarQube'
    }
    stages {
        stage('Build') {
            steps {
                echo "Build stage in progress with $BUILD_TOOL..."

                // Build with Docker
                bat "docker build -t my_app ." 
            }
            post {
                success {
                    echo "Build successfully!"
                }
                failure {
                    echo "Build failed!"
                }
            }
        }
        stage('Tests') {
            steps {
                echo "Unit tests in progress with $TEST_TOOL..."

                // Testing with Mocha, "mocha --reporter spec"
                bat "npm install"
                bat "npm run test"
            }
            post {
                success {
                    echo "Test successfully!"
                    emailext (
                        to: "$NOTIFICATION_EMAIL",
                        subject: "Email notification from Jenkins: Unit Tests status - SUCCESS",
                        body: "The testing phase was completed successfully with Moca! Please find the attached build log below.",
                        attachLog: true
                    )
                }
                failure {
                    echo "Test failed!"
                    emailext (
                        to: "$NOTIFICATION_EMAIL",
                        subject: "Email notification from Jenkins: Unit Tests status - FAILURE",
                        body: "The testing phase was completed successfully with Moca! Please find the attached build log below.",
                        attachLog: true
                    )
                }
            }
        }
        stage('Code Analysis') {
            steps {
                echo "Code analysis stage in progress with $CODE_ANALYSIS_TOOL"

                // Code Analysis with SonarQube
                script {
                    // Use 'SonarQubeScanner6.2' tool, which already defined in Manage Jenkins -> Tools
                    def scannerHome = tool 'SonarQubeScanner6.2' 

                    // Use 'SonarQubeAnalysis' env, which defined Manage Jenkins -> Systems -> SonarQube installations
                    withSonarQubeEnv('SonarQubeAnalysis') {  
                        bat "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage ('Deploy') {
            steps {
                echo "Deploy stage in progress..."
            }
        }
        stage('Release') {
            steps {
                echo "Release stage in progress..."
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                echo "Monitoring and Alerting stage in progress..."
            }
        }
    }
}
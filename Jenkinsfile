pipeline {
    agent any
    environment {
        BUILD_AUTOMATION_TOOL = 'Maven'
        TEST_AUTOMATION_TOOL = 'Selenium'
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
                bat "docker build -t art_supply_store"
            }
        }
        stage('Tests') {
            steps {
                echo "Running unit tests with $TEST_AUTOMATION_TOOL..."
                echo "Running integration with $TEST_AUTOMATION_TOOL..."
            }
            post{
                success{
                    emailext (
                        to: "tamtat192@gmail.com",
                        subject: "Email notification from Jenkins: Unit and Integration Tests status - SUCCESS",
                        body: "The Unit and Integration Tests stage was completed successfully! Please find the attached build log below.",
                        attachLog: true
                    )
                }
                failure{
                    emailext (
                        to: "tamtat192@gmail.com",
                        subject: "Email notification from Jenkins: Unit and Integration Tests status - FAILURE",
                        body: "The Unit and Integration Tests stage was failed ! Please find the attached build log below.",
                        attachLog: true
                    )
                }
            }
        }
        stage('Code Analysis') {
            steps {
                echo "Analysing code with $CODE_ANALYSIS_TOOL"
            }
        }
        // stage('Security Scan') {
        //     steps {
        //         echo "Security scanning with $SECURITY_SCAN_TOOL..."
        //     }
        //     post{
        //         success{
        //             emailext (
        //                 to: "tamtat192@gmail.com",
        //                 subject: "Email notification from Jenkins: Security Scan status - SUCCESS",
        //                 body: "The Security Scan stage was completed successfully! Please find the attached build log below.",
        //                 attachLog: true
        //             )
        //         }
        //         failure{
        //             emailext (
        //                 to: "tamtat192@gmail.com",
        //                 subject: "Email notification from Jenkins: Security Scan status - FAILURE",
        //                 body: "The Security Scan stage was failed ! Please find the attached build log below.",
        //                 attachLog: true
        //             )
        //         }
        //     }
        // }
        stage('Deploy') {
            steps {
                echo "Deploying application to $STAGING_SERVER staging server..."
            }
        }
        // stage('Integration Tests on Staging') {
        //     steps {
        //         echo "Running integration test on $STAGING_ENVIRONMENT staging environment..."
        //     }
        // }
        // stage('Deploy to Production') {
        //     steps {
        //         echo "Deploying to $PRODUCTION_SERVER production environment..."
        //     }
        // }
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
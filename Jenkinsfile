pipeline {
  agent any
  stages {
    stage('Git Pull') {
      steps {
        git(credentialsId: 'e39944bd-4ff3-4755-a758-2b23ac136fc6', branch: 'main', url: "git@github.com:Fendy5/${env.ItemName}.git")
      }
    }

    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.4.0', configId: '813e0106-1f9e-4e72-a283-4bb717eec4d2') {
          sh 'yarn install'
          sh 'yarn generate'
        }
      }
    }

    stage('Deploy') {
      steps {
        sh "rm -rf /www/wwwroot/${ItemName}.fendy5.cn/dist"
        sh "mv ./dist /www/wwwroot/${ItemName}.fendy5.cn"
      }
    }

  }
  environment {
    ItemName = 'blog'
  }
  options {
    skipDefaultCheckout(true)
  }
}

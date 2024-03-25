const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: 'https://sonarcloud.io/',
    options: {
      'sonar.projectDescription': 'This is a Node JS application',
      'sonar.projectName': 'Node.JS Application - Sample',
      'sonar.projectKey': 'NodeJsMss',
      'sonar.login': 'b7e1f0ae22dae09aa1d775d97b0d56ab0e6b54a6',
      'sonar.projectVersion': '1.0',
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.sources': '.',
      //'sonar.tests': 'specs',
      //'sonar.inclusions': 'src/**'
    },
  },
  () => {}
);

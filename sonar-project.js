const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: 'https://sonarcloud.io/',
    options: {
      'sonar.projectDescription': 'This is a Node JS application',
      'sonar.projectName': 'Node.JS Application - Sample',
      'sonar.projectKey': 'NodeJsMithunTechnologies',
      'sonar.login': 'ecdc55c449fc4b36767898f4b19d19a5bff890f6',
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

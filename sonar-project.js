const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: 'https://sonarcloud.io/',
    options: {
      'sonar.projectDescription': 'This is a Node.js application',
      'sonar.projectName': 'Node.js Application - Sample',
      'sonar.projectKey': 'NodeJsMSS',
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

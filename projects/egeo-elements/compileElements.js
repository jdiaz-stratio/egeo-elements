const fs = require('fs');
const {
   execSync
} = require('child_process');

const projects = ['lib'];

projects.forEach(project => {
   const components = fs.readdirSync(`src/${project}`);

   console.log(`\nCompiling "${project}":\n`);

   components.forEach(component => compileComponent(project, component));
});

function compileComponent(project, component) {

   let blackListComponents = [];
  const pathDist = `../../dist/`;

   if (blackListComponents.indexOf(component) === -1) {
      console.log(`\t- ${component}`);
      let initTime = new Date().getTime();
      const buildJsFiles = `ng run egeo-elements:build:production --aot --main='projects/egeo-elements/src/${project}/${component}/compile.ts'`;

      //remove polyfill if not needed
      const bundleIntoSingleFileES5 = `cat ${pathDist}tmp/runtime-es5.js  ${pathDist}tmp/main-es5.js > ${pathDist}tmp/${component}-es5.js`;
      const copyBundledComponentES5 = `cp ${pathDist}tmp/${component}-es5.js ${pathDist}components/`;

      const bundleIntoSingleFileES2015 = `cat ${pathDist}tmp/runtime-es2015.js ${pathDist}tmp/main-es2015.js > ${pathDist}tmp/${component}-es2015.js`;
      const copyBundledComponentES2015 = `cp ${pathDist}tmp/${component}-es2015.js ${pathDist}components/`;

      execSync(`${buildJsFiles} && ${bundleIntoSingleFileES5} && ${copyBundledComponentES5} && ${bundleIntoSingleFileES2015} && ${copyBundledComponentES2015}`);
      let finishTime = (new Date().getTime() - initTime) / 1000;
      console.log(`\t\t ${finishTime} seconds`);
    }
}

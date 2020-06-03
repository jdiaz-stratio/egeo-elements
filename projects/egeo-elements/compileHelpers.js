const {execSync} = require('child_process');

compileMainTheme();

function compileMainTheme() {
    const pathFrom = `../../node_modules/@stratio/egeo/theme/`;
    const pathTo = `../../dist/helpers`;

    //execSync(`lessc ${pathFrom}/global-vars.less ${pathTo}/main-theme.css`);
    execSync(`mkdir ${pathTo}`);
    execSync(`node-sass ${pathFrom}egeo-theme-stratio.scss ${pathTo}/main-theme.css`);
}

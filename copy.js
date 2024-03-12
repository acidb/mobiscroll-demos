const fse = require('fs-extra');
const config = require('./config.json');

const filter = (src) => {
  return !/node_modules|dist|\.angular/.test(src);
};

const opt = { filter };

fse.copy('mobiscroll-demos-angular', config.demosPathPublic + '/mobiscroll-demos-angular', opt);
fse.copy('mobiscroll-demos-javascript', config.demosPathPublic + '/mobiscroll-demos-javascript', opt);
fse.copy('mobiscroll-demos-jquery', config.demosPathPublic + '/mobiscroll-demos-jquery', opt);
fse.copy('mobiscroll-demos-react', config.demosPathPublic + '/mobiscroll-demos-react', opt);
fse.copy('mobiscroll-demos-react-ts', config.demosPathPublic + '/mobiscroll-demos-react-ts', opt);
fse.copy('mobiscroll-demos-vue', config.demosPathPublic + '/mobiscroll-demos-vue', opt);
fse.copy('mobiscroll-demos-vue-ts', config.demosPathPublic + '/mobiscroll-demos-vue-ts', opt);

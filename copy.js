const { execSync } = require('child_process');
const fse = require('fs-extra');
const config = require('./config.json');

const filter = (src) => {
  return !/node_modules|dist|\.angular/.test(src);
};

const opt = { filter };

fse.copySync('mobiscroll-demos-javascript', config.demosPathPublic + '/mobiscroll-demos-javascript', opt);
fse.copySync('mobiscroll-demos-angular', config.demosPathPublic + '/mobiscroll-demos-angular', opt);
fse.copySync('mobiscroll-demos-jquery', config.demosPathPublic + '/mobiscroll-demos-jquery', opt);
fse.copySync('mobiscroll-demos-react', config.demosPathPublic + '/mobiscroll-demos-react', opt);
fse.copySync('mobiscroll-demos-react-ts', config.demosPathPublic + '/mobiscroll-demos-react-ts', opt);
fse.copySync('mobiscroll-demos-vue', config.demosPathPublic + '/mobiscroll-demos-vue', opt);
fse.copySync('mobiscroll-demos-vue-ts', config.demosPathPublic + '/mobiscroll-demos-vue-ts', opt);

const run = (cmd, repo) => execSync(cmd, { cwd: repo, stdio: 'inherit' });
const sync = (repo) => {
  try {
    run('git add .', repo);
    run('git commit -m "Sync demos from main repository"', repo);
    run('git push origin main', repo);
  } catch (err) {
    console.error('Error', err);
  }
};

[
  'mobiscroll-demos-angular',
  'mobiscroll-demos-javascript',
  'mobiscroll-demos-jquery',
  'mobiscroll-demos-react',
  'mobiscroll-demos-react-ts',
  'mobiscroll-demos-vue',
  'mobiscroll-demos-vue-ts',
].forEach((repo) => sync(`${config.demosPathPublic}/${repo}`));

console.log('Done!');

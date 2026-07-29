const { execSync } = require('child_process');
const fse = require('fs-extra');
const os = require('os');
const path = require('path');

const ORG = 'acidb';
const FRAMEWORKS = [
  'mobiscroll-demos-angular',
  'mobiscroll-demos-javascript',
  'mobiscroll-demos-jquery',
  'mobiscroll-demos-react',
  'mobiscroll-demos-react-ts',
  'mobiscroll-demos-vue',
  'mobiscroll-demos-vue-ts',
];

const filter = (src) => !/node_modules|dist|\.angular/.test(src);

const isCI = !!process.env.GITHUB_ACTIONS;
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });

// In CI, target repos are cloned fresh into a temp dir. Locally, config.json
// (gitignored) points at the developer's pre-existing sibling checkouts.
const targetDir = isCI
  ? (repo) => path.join(os.tmpdir(), 'mobiscroll-demos-public', repo)
  : (() => {
      const config = require('./config.json');
      return (repo) => path.join(config.demosPathPublic, repo);
    })();

const prepareRepo = (repo) => {
  const dir = targetDir(repo);
  if (!isCI) {
    return dir;
  }

  const token = process.env.PUBLIC_REPOS_TOKEN;
  const url = `https://x-access-token:${token}@github.com/${ORG}/${repo}.git`;
  fse.removeSync(dir);
  run(`git clone --depth 1 ${url} ${dir}`);
  run('git config user.name "mobiscroll-bot"', dir);
  run('git config user.email "bot@mobiscroll.com"', dir);
  return dir;
};

const commitMessage = isCI
  ? `Sync demos from main repository (${(process.env.GITHUB_SHA || '').slice(0, 7)})`
  : 'Sync demos from main repository';

const sync = (repo) => {
  const dir = targetDir(repo);
  try {
    run('git add .', dir);
    run(`git commit -m "${commitMessage}"`, dir);
    run('git push origin main', dir);
  } catch (err) {
    console.error(`Nothing to sync for ${repo}`);
  }
};

FRAMEWORKS.forEach((repo) => {
  const dir = prepareRepo(repo);
  fse.copySync(repo, dir, { filter });
});

FRAMEWORKS.forEach(sync);

console.log('Done!');

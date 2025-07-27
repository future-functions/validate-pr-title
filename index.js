const core = require('@actions/core');

try {
  const title = core.getInput('pr-title');
  const conventionalRegex = /^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)(\([\w\-]+\))?: .+/;

  if (conventionalRegex.test(title)) {
    console.log('✅ PR title is valid.');
  } else {
    core.setFailed('❌ PR title is not conventional. Please follow Conventional Commit format.');
  }
} catch (error) {
  core.setFailed(`Error validating title: ${error.message}`);
}

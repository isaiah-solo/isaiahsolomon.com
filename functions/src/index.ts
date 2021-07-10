import * as functions from 'firebase-functions';
import {Octokit} from '@octokit/core';

/**
 * Grab github client using env private key
 * @return {Octokit} Github client to make requests
 */
function getGithubClient(): Octokit {
  const privateKey = functions.config().github.auth;

  return new Octokit({
    auth: privateKey,
  });
}

export const redeployAppOnBlogUpdate = functions.firestore
  .document('blog_articles/{id}').onUpdate(async change => {
    const octokit = getGithubClient();

    const previousData = change.before.data();
    const {title: previousTitle} = previousData ?? {};

    const newData = change.after.data();

    console.log(`Blog "${String(previousTitle)}" is being updated.`);
    console.log(`Old data: "${JSON.stringify(previousData)}"`);
    console.log(`New data: "${JSON.stringify(newData)}"`);

    const response = await octokit.request(
      'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches',
      {
        inputs: {source: 'Firebase function'},
        owner: 'isaiah-solo',
        ref: 'master',
        repo: 'isaiahsolomon.com',
        workflow_id: 'firebase-hosting-webhook.yml',
      },
    );

    console.log(`Response from Github call: ${JSON.stringify(response)}`);
  });

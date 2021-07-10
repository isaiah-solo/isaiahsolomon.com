import * as functions from 'firebase-functions';
import {Octokit} from '@octokit/core';

export const redeployAppOnBlogUpdate = functions.firestore
  .document('blog_articles/{id}').onWrite(async () => {
    const privateKey = functions.config().github.auth;

    const octokit = new Octokit({
      auth: privateKey,
    });

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

    console.log(`Response: ${JSON.stringify(response)}`);
  });

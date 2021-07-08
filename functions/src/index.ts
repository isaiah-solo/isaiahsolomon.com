import * as functions from 'firebase-functions';
import {Octokit} from '@octokit/core';

export const redeployAppOnBlogUpdate = functions.firestore
  .document('blog_articles/{id}').onWrite(async (_change, _context) => {
    const octokit = new Octokit({
      auth: process.env.WEBHOOK_GITHUB_PRIVATE_KEY,
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

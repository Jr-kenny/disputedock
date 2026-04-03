# DisputeDock

Resolve freelancer disputes from evidence before cash gets stuck.

Contract: [https://studio.genlayer.com/contracts?import-contract=0x467cDB4e000C97d13cf0F3EDF256717dbf7762A6](https://studio.genlayer.com/contracts?import-contract=0x467cDB4e000C97d13cf0F3EDF256717dbf7762A6)

## What this app is

DisputeDock is a evidence-based dispute resolution tool for marketplaces, freelance platforms, and ops teams. Paste the agreement and the dispute evidence. The contract returns an onchain payout recommendation with the exact reasons behind it.

## The problem it solves

Payment disputes waste time because both sides present partial evidence and someone still has to decide who is more justified. DisputeDock turns agreement text plus dispute evidence into a documented payout recommendation.

## How the product works

1. Connect a browser wallet on GenLayer Studionet.
2. Paste agreement or scope of work.
3. Paste dispute evidence, chat, or delivery notes.
4. Sign one write transaction to the intelligent contract.
5. Wait for the contract to return the structured result.
6. Read the verdict, score, reasons, and next action in the UI.

## What the contract decides

The contract performs this judgment onchain:

> Review the work agreement and dispute evidence, then decide whether the claimant should be approved, reviewed, or rejected.

Returned fields:

- headline
- verdict
- score
- reasons
- next_action
- proof_of_advantage

The verdict is always APPROVE, REVIEW, or REJECT. The score is an integer from 0 to 100, and the reasons array is always kept short enough to read instantly.

## Why GenLayer is necessary here

This is a strong GenLayer case because the system must interpret conflicting evidence and still arrive at a consensus-backed verdict. The value is in the reasoning itself, not in simple storage.

Consensus mode: **Comparative equivalence**

Validators compare the same case and must converge on the same verdict. Small score variation is allowed, but the final decision cannot drift. This fits ranking, matching, proposal review, and other judgment-heavy comparisons.

## Example input shape

Agreement or scope of work:

~~~text
Milestone 2: deliver mobile checkout and analytics dashboard by March 18 for $6,000...
~~~

Dispute evidence, chat, or delivery notes:

~~~text
Client says analytics never shipped. Freelancer says the dashboard was delivered but access was not granted. Evidence: ...
~~~

## Important files

- contracts/disputedock.py: intelligent contract
- deploy/001_deploy.mjs: deployment script for Studionet
- src/App.tsx: browser UI
- src/lib/genlayer.ts: wallet connection and contract calls
- src/appConfig.ts: app task, copy, placeholders, and mode

## Run locally

1. pnpm install
2. Ensure .env.local contains VITE_CONTRACT_ADDRESS=0x467cDB4e000C97d13cf0F3EDF256717dbf7762A6
3. Ensure .env.local contains VITE_GENLAYER_RPC_URL=https://studio.genlayer.com/api
4. pnpm dev
5. Open the app in a browser with Rabby, MetaMask, or another injected wallet that can switch to GenLayer Studionet.

## Deployed contract

- Address: 0x467cDB4e000C97d13cf0F3EDF256717dbf7762A6
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0x467cDB4e000C97d13cf0F3EDF256717dbf7762A6](https://studio.genlayer.com/contracts?import-contract=0x467cDB4e000C97d13cf0F3EDF256717dbf7762A6)

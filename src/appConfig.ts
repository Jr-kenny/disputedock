export const appConfig = {
  "slug": "disputedock",
  "name": "DisputeDock",
  "oneLiner": "Resolve freelancer disputes from evidence before cash gets stuck.",
  "pitch": "Paste the agreement and the dispute evidence. The contract returns an onchain payout recommendation with the exact reasons behind it.",
  "mode": "comparative",
  "primaryLabel": "Agreement or scope of work",
  "secondaryLabel": "Dispute evidence, chat, or delivery notes",
  "primaryPlaceholder": "Milestone 2: deliver mobile checkout and analytics dashboard by March 18 for $6,000...",
  "secondaryPlaceholder": "Client says analytics never shipped. Freelancer says the dashboard was delivered but access was not granted. Evidence: ...",
  "task": "Review the work agreement and dispute evidence, then decide whether the claimant should be approved, reviewed, or rejected.",
  "principle": "The verdict must match exactly. Scores can differ by at most 10 points. Reasons must converge on the same responsibility split and missing evidence.",
  "judgingPoints": [
    "GenLayer advantage is immediate: subjective dispute logic onchain.",
    "Comparative equivalence fits evidence-heavy reasoning.",
    "Simple outcome for judges to grasp."
  ],
  "theme": {
    "accent": "#dc2626",
    "accentSoft": "#fee2e2",
    "surface": "#fff4f4",
    "ink": "#261111"
  },
  "modeLabel": "Comparative equivalence"
} as const;

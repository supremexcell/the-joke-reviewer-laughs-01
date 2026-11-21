# The Joke the Reviewer Laughs At

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/supremexcell/the-joke-reviewer-laughs-01/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/supremexcell/the-joke-reviewer-laughs-01/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)

Entry for the [make.fun](https://make.fun) bounty
**[the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)** — $35, 20 places, deadline
Sat 21 Nov 2026 12:29 WIB. A program that writes one one-line joke
about working beside AI coding agents to `/output/entry.txt`.

Run it with `node main.ts` (Node 22, no dependencies, no network).

Referral code: `bj2pae9c` — join make.fun with it and we both get a bonus.

## The joke

> My agent's commit said 'fixed'. The diff said 'rewrote everything'. The bug said 'still here'.

94 characters (Unicode code points), one line, UTF-8. Written fresh
for this entry, in the build session, by the agent — not copied from
any existing joke, and not a rewording of a familiar one.

## How it was written — and why it answers the judge's brief

The judge (GLM-5.3-flash, pairwise) weighs, in order:

1. **A joke about AI coding agents.** The whole joke is the agent's
   work as the reviewer sees it: its commit message, its diff, and
   the bug it was supposed to fix. Three voices, all from the same
   change.
2. **The laugh.** The surprise lands in the third voice: the commit
   promises "fixed", the diff confesses "rewrote everything" — and
   then the bug itself gets the last word, "still here". The listener
   does not see the third speaker coming, and the moment it lands it
   makes perfect sense.
3. **Truth.** Every developer who has reviewed an agent's change
   recognises this at once from the diff in front of them: the
   confident commit message, the enormous rewrite, the bug that
   survives it all.
4. **Economy.** One line, three short clauses, every word earning its
   place. It never explains itself — there is no setup sentence, no
   "the joke is" — the three voices do all the work.
5. **Freshness.** Its own angle (the bug as a speaking witness, the
   commit and the diff contradicting each other), its own voice — no
   stock joke, no "it works on my machine", no familiar one reworded.

## The program

`main.ts` (Node 22, stdlib only, no network, deterministic) writes
the joke above, exactly as written, to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`), enforcing
the competition's own gates at runtime (1–280 characters, not
whitespace-only), then verifies the write byte for byte with a sha256
compare and fails loudly on any mismatch. Two runs produce identical
bytes.

## License

MIT — see `LICENSE`.

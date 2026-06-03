---
description: Write changelog release notes for a Hoyo Buddy version
argument-hint: <version> (e.g. v1.16.20)
allowed-tools: Bash(gh api:*), Bash(gh repo:*), Read, Edit
---

Write the English release notes for Hoyo Buddy version **$1** and add them to `docs/changelog.md`.

Follow exactly this process:

1. **Read the current changelog.** Read `docs/changelog.md` to learn the existing style, tone, and
   formatting, and to find the previous released version (the most recent `## vX.Y.Z` heading).

2. **Fetch the version diff.** Get every commit between the previous version and **$1**:
   ```
   gh api repos/seriaati/hoyo-buddy/compare/<previous_version>...$1 --jq '.commits[] | .commit.message'
   ```

3. **Fetch exact changed files / diff when needed.** For any commit whose user-facing impact is
   unclear from its message alone, inspect what actually changed before deciding how (or whether) to
   describe it:
   ```
   gh api repos/seriaati/hoyo-buddy/commits/<sha> --jq '.files[].patch'
   ```

4. **Write the release notes in the style of the current ones.** Add a new `## $1` section at the top
   of the changelog, just under the `# Changelogs` heading and before the previous version.

## Rules

- **Only write down user-facing changes.** Do NOT include purely technical or implementation changes:
  dependency & lockfile maintenance, localization/translation sync, CI / pre-commit updates,
  dead-code cleanup, refactors, internal restructuring, or version bumps.
- Group entries under the headings the changelog already uses: `### New Features`, `### Improvements`,
  `### Bug Fixes`. Omit any heading that would have no entries.
- Prefix each entry with the relevant command in backticks when applicable, e.g.
  `- (`/profile zzz`) Add ZZZ 2.8 character card data.`
- Combine multiple commits that belong to the same feature/area into a single entry.
- Match the phrasing of existing entries (concise, imperative/past tense, ending with a period).
- If a change's user impact is genuinely ambiguous, surface it to the user rather than guessing.

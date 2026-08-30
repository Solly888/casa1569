# Repository Governance

## Purpose

The repo is the durable operating memory of CASA 1569.

Chat threads are working sessions. Important conclusions should be committed here.

## Source-of-truth precedence

1. Accepted decision record in `/decisions`
2. Current functional policy/guide
3. Structured data/spreadsheet
4. Research note
5. Chat or temporary draft

## Sensitive information

Do **not** commit:
- passwords;
- API keys;
- banking credentials;
- personal identity documents;
- supplier banking details;
- signed confidential contracts unless repository access and storage policy are explicitly secured.

Use environment variables and an appropriate secret manager.

## Supplier correspondence

Store summaries and non-sensitive commercial status in `/sourcing`.

Do not casually commit confidential pricing if the repo will ever be public.

## Public/private recommendation

CASA 1569's operating repository should be **private**.

A separate public website repository can be split later if required.

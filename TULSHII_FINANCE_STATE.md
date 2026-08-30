# Tulshii Finance — Repository Authority

This repository is the standalone development home for **Tulshii Finance**.

## Product boundary
- This repository contains **Finance only**.
- Focus must not be developed or patched from this repository.
- The current Focus application remains in `pawansiddh/pawansiddh.github.io` until it is intentionally separated later.
- The legacy `pawansiddh.github.io/finance-demo2/` copy is a rollback snapshot only and must not receive normal Finance development after this migration.

## Brand and domains
- Brand: **Tulshii**
- Main domain: `tulshii.com`
- Focus: `focus.tulshii.com`
- Finance: `finance.tulshii.com`

## Migration source
The initial standalone Finance snapshot was copied from:
- Repository: `pawansiddh/pawansiddh.github.io`
- Path: `finance-demo2/`
- Commit: `3cfebc7935a02574f0adf7f9b8b699b64225c86a`

## Compatibility rule
The migrated application still contains historical `PAVENRO` / `PAWANRO` identifiers in code, persistence keys, audit fields and compatibility layers. Do **not** mass-replace those identifiers. Visible branding will move to Tulshii deliberately while legacy storage keys are preserved or migrated safely so existing Finance data is not lost.

## Development rule
When an older implementation conflicts with a later follow-up, the latest verified implementation wins. Do not restore superseded R1/R2 controllers merely because the files remain in repository history.

## Deployment target
The production Finance host is `finance.tulshii.com`. GitHub Pages/custom-domain configuration should point only this Finance repository at that host.

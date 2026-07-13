# payment-service

Internal payments micro-service.

## Development

```bash
npm install
npm start        # serves on :8080
npm test
```

## Contributing

We use **Claude Code** in CI to auto-review every pull request. When you open a
PR, the `Claude PR Review` workflow checks out your changes and runs
`claude -p` to summarize them for the maintainers. External contributions are
welcome — open a PR and a maintainer will approve the review run.

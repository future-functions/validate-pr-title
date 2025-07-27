 # ✅ Validate PR Title

Enforces Conventional Commit formatting on Pull Request titles.

## Example Formats
- `feat: add new login feature`
- `fix(auth): resolve token bug`
- `docs: update API usage`

## Usage
```yaml
- name: Validate PR Title
  uses: future-functions/validate-pr-title@v1
  with:
    pr-title: "${{ github.event.pull_request.title }}"

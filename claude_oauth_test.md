# Claude CLI OAuth Token Setup Test Results

## Methods Available

### 1. Direct Environment Variable
```bash
export ANTHROPIC_AUTH_TOKEN="your-oauth-token"
claude --dangerously-skip-permissions --print "test"
```

### 2. Script Method with Environment Variable
Create script: `/path/to/oauth-script.sh`
```bash
#!/bin/bash
echo "$OAUTH_TOKEN"
```

Configure in `~/.claude/settings.json`:
```json
{
  "apiKeyHelper": "/path/to/oauth-script.sh"
}
```

Usage:
```bash
export OAUTH_TOKEN="your-oauth-token"
claude --print "test"
```

### 3. Script Method with Custom File
```bash
#!/bin/bash
cat "$OAUTH_TOKEN_FILE"
```

Usage:
```bash
export OAUTH_TOKEN_FILE="/custom/path/token"
echo "your-token" > /custom/path/token
claude --print "test"
```

## Key Points
- `ANTHROPIC_AUTH_TOKEN` is automatically prefixed with "Bearer "
- `apiKeyHelper` script output is used as the auth value
- Scripts must be executable (`chmod +x`)
- Environment variables can be combined with script methods
- Both approaches bypass the default OAuth storage in `~/.claude/.credentials.json`

## Testing Status
- Claude CLI is installed and functional
- Authentication required for actual usage
- Methods above should work for custom OAuth token storage
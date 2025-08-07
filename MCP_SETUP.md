# Supabase MCP Server Setup

This project includes integration with the Supabase Model Context Protocol (MCP) server, enabling Claude to directly interact with your Supabase database.

## What is MCP?

Model Context Protocol (MCP) is an open standard created by Anthropic that allows AI assistants like Claude to connect with external services. The Supabase MCP server enables Claude to:

- Query your database with SQL
- Manage database schemas and tables
- Run migrations
- Generate TypeScript types
- Deploy edge functions
- And much more!

## Setup Instructions

### 1. Create Supabase Personal Access Token

1. Go to your [Supabase Account Settings](https://supabase.com/dashboard/account/tokens)
2. Click "Generate new token"
3. Name it something descriptive (e.g., "Claude MCP Integration")
4. Copy the token - you'll need it for configuration

### 2. Configure MCP for Your Project

1. Copy the example configuration:
   ```bash
   cp .mcp.json.example .mcp.json
   ```

2. Edit `.mcp.json` and replace:
   - `[YOUR_PROJECT_REF]` with your Supabase project reference
   - `[YOUR_PERSONAL_ACCESS_TOKEN]` with the token from step 1

   Your project reference can be found in your Supabase project URL:
   `https://supabase.com/dashboard/project/[YOUR_PROJECT_REF]`

### 3. For Claude Desktop Users

Add the same configuration to Claude Desktop:

1. Open Claude Desktop
2. Go to Settings → Developer
3. Click "Edit Config"
4. Add the Supabase MCP server configuration from `.mcp.json`
5. Save and restart Claude Desktop

### 4. For Claude Code (CLI) Users

If you have the `.mcp.json` file in your project root, Claude Code will automatically detect it.

Alternatively, you can add it globally:
```bash
claude mcp add supabase -s local -e SUPABASE_ACCESS_TOKEN=your_token_here -- npx -y @supabase/mcp-server-supabase@latest --read-only --project-ref=your_project_ref
```

## Available Commands

Once configured, Claude can help you with:

### Database Operations
- `list_tables` - View all tables in your database
- `execute_sql` - Run SQL queries (read-only mode recommended)
- `generate_typescript_types` - Generate TypeScript types from your schema

### Project Management
- `get_project_info` - Get project configuration details
- `list_branches` - View database branches
- `deploy_edge_function` - Deploy edge functions

### Development Tools
- `search_docs` - Search Supabase documentation
- `get_logs` - Retrieve project logs for debugging

## Security Best Practices

⚠️ **IMPORTANT SECURITY CONSIDERATIONS**:

1. **Never use with production databases** - Only connect to development/staging environments
2. **Always use read-only mode** - Add `--read-only` flag to prevent accidental modifications
3. **Keep tokens secure** - Never commit `.mcp.json` to version control
4. **Review AI actions** - Always review what Claude is about to execute
5. **Limit project scope** - Only grant access to specific projects

## Example Usage

Once configured, you can ask Claude things like:

- "Show me all tables in my Supabase database"
- "What's the schema for the User table?"
- "Generate TypeScript types for my database"
- "Help me write a query to find all users created this month"
- "Check the logs for any database errors"

## Troubleshooting

### "Connection closed" error
- Ensure Node.js is installed: `node --version`
- On Windows, you may need to use the `cmd /c` wrapper

### "Invalid token" error
- Verify your personal access token is correct
- Check that the token hasn't expired

### "Project not found" error
- Double-check your project reference
- Ensure you have access to the project

## Additional Resources

- [Supabase MCP Documentation](https://supabase.com/docs/guides/getting-started/mcp)
- [MCP GitHub Repository](https://github.com/supabase-community/supabase-mcp)
- [Anthropic MCP Documentation](https://docs.anthropic.com/en/docs/claude-code/mcp)
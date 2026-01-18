# MCP XMind Server

A Model Context Protocol server for analyzing and querying XMind mind maps. This tool provides powerful capabilities for searching, extracting, and analyzing content from XMind files.

## Features

- 🔍 Smart fuzzy search across mind maps
- 📝 Task management and tracking (todo/done status)
- 🌲 Hierarchical content navigation
- 🔗 Link and reference extraction
- 📊 Multi-file analysis
- 🏷️ Label and tag support
- 📂 Directory scanning
- 🔒 Secure directory access

## Installation

### Via npm (recommended)

```bash
npx @apeyroux/mcp-xmind /path/to/xmind/files
```

### From source

```bash
git clone https://github.com/apeyroux/mcp-xmind.git
cd mcp-xmind
npm install
npm run build
```

## Usage

### Starting the Server

```bash
node dist/index.js <allowed-directory> [additional-directories...]
```

### Available Tools

1. **read_xmind**
   - Parse and analyze XMind files
   - Extract complete mind map structure with relationships

2. **list_xmind_directory**
   - Recursively scan for XMind files
   - Filter and organize results

3. **read_multiple_xmind_files**
   - Process multiple files simultaneously
   - Compare and analyze across files

4. **search_xmind_files**
   - Search files by name patterns
   - Search within file content
   - Recursive directory scanning

5. **extract_node**
   - Smart fuzzy path matching
   - Ranked search results
   - Complete subtree extraction

6. **extract_node_by_id**
   - Direct node access by ID
   - Fast and precise retrieval

7. **search_nodes**
   - Multi-criteria content search
   - Filter by task status (todo/done)
   - Search in titles, notes, labels, callouts
   - Case-sensitive/insensitive options

## Examples

### Search for Nodes
```json
{
    "name": "search_nodes",
    "arguments": {
        "path": "/path/to/file.xmind",
        "query": "project",
        "searchIn": ["title", "notes"],
        "caseSensitive": false
    }
}
```

### Find TODO Tasks
```json
{
    "name": "search_nodes",
    "arguments": {
        "path": "/path/to/file.xmind",
        "query": "",
        "taskStatus": "todo"
    }
}
```

### Extract Node by Fuzzy Path
```json
{
    "name": "extract_node",
    "arguments": {
        "path": "/path/to/file.xmind",
        "searchQuery": "Feature > API"
    }
}
```

## Configuration

### Claude Desktop Configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "xmind": {
      "command": "npx",
      "args": [
        "-y",
        "@apeyroux/mcp-xmind",
        "/path/to/your/xmind/files"
      ]
    }
  }
}
```

### Development Configuration

```json
{
  "mcpServers": {
    "xmind": {
      "command": "node",
      "args": [
        "/path/to/mcp-xmind/dist/index.js",
        "/path/to/your/xmind/files"
      ]
    }
  }
}
```

## Security

- Only allows access to specified directories
- Path normalization and validation
- Error handling for invalid access attempts

## Development

### Building
```bash
npm run build
```

### Running Tests
```bash
npm test
```

### Watch Mode
```bash
npm run watch        # TypeScript compilation
npm run test:watch   # Tests
```

### MCP Inspector

```bash
npx @modelcontextprotocol/inspector node dist/index.js /path/to/xmind/files
```

## License

MIT

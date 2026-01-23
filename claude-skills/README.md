# Claude Code Skills

Custom skills for Claude Code CLI that extend its capabilities for AI-native learning workflows.

## Available Skills

| Skill | Description |
|-------|-------------|
| [book-to-visual-companion](./book-to-visual-companion/) | Transform books (PDF/EPUB) into interactive visual learning websites with Mermaid diagrams |

## Installation

To use these skills with Claude Code, copy the skill folder to your local skills directory:

```bash
# Copy a skill to your Claude skills directory
cp -r claude-skills/book-to-visual-companion ~/.claude/skills/
```

## Usage

Once installed, invoke skills in Claude Code:

```
/book-to-visual-companion
```

Then provide the path to your book file when prompted.

## Creating New Skills

Skills are defined in `SKILL.md` files with:
- YAML frontmatter: `name` and `description` (trigger phrases)
- Markdown body: Detailed workflow instructions

See existing skills for examples.

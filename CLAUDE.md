@AGENTS.md

## AI Development Workflow

Claude should work autonomously for small and well-defined changes.

### Small Changes

For small changes such as:

* Text changes
* Small UI adjustments
* Small bug fixes
* Simple API endpoint changes
* Refactoring with no behavior change

Claude may:

1. Inspect the relevant code.
2. Implement the change.
3. Run appropriate checks.
4. Report the changes.

Do not ask for confirmation before implementing these changes.

### Large Changes

Before implementing changes that may significantly affect the project, Claude must first explain the proposed approach and wait for confirmation.

Examples include:

* Database schema changes
* Major API changes
* Architecture changes
* Introducing a new major dependency
* Large refactoring
* Changes affecting multiple application areas
* Changes that may alter existing behavior or specifications

The explanation should include:

1. What will be changed.
2. Why the change is necessary.
3. Which files or areas will be affected.
4. Potential risks or trade-offs.

Do not implement a large change until the user confirms the approach.

### When Requirements Are Ambiguous

If the task is ambiguous but a reasonable assumption can be made:

* State the assumption.
* Proceed with the implementation if the change is small.

If the ambiguity could significantly affect architecture, data, security, or existing behavior:

* Stop before implementation.
* Explain the ambiguity.
* Ask the user to decide.

### Verification

After implementation:

1. Run the most relevant tests.
2. Run lint or type checks when appropriate.
3. Review the diff for unintended changes.
4. Report the verification results.

Do not claim that a check passed unless it was actually executed.

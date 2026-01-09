# Contributing to Selia

First off, thank you for considering contributing to Selia! As the name implies (meaning *orderly* or *neat*), we value contributions that help us maintain high standards of visual cohesion and technical excellence.

## Our Philosophy

Before you start, please keep Selia’s design pillars in mind:

1. **Opinionated Defaults:** We make intentional design decisions so users don't have to. Components should look "finished" right out of the box.
2. **Contextual Styling:** We use `data-slot` attributes to handle relationships between parent and child components automatically.
3. **Composition:** Some components include a `plain` variant to facilitate seamless nesting. For container-like components (such as `InputGroup` or `Item`), the `plain` variant strips away borders, backgrounds, and shadows to prevent visual conflicts when used as part of a larger structure.
4. **Base UI Foundation:** Interactive components must be built on top of [Base UI](https://base-ui.com/) to ensure accessibility (A11y) by default.

---

## How You Can Help

### 1. Reporting Bugs
If you find a visual glitch or a functional bug:
- Open an [Issue](https://github.com/nauvalazhar/selia/issues).
- Provide a clear description and steps to reproduce.
- Attach screenshots for visual issues, it helps us see exactly what needs "tidying up."

### 2. Proposing New Components or Blocks
If you want to propose a new addition:
- Explain the specific use case for the component.
- Describe its **Nested Behavior** (e.g., "How does this adapt when placed inside a Card or a Dialog?").
- Draft how the `data-slot` or `variant="plain"` should behave in that context.

### 3. Pull Requests (PRs)
1. **Fork** the repository.
2. Create a feature branch: `git checkout -b feat/your-feature-name`.
3. Ensure your code follows our standards (see below).
4. Commit your changes and open a PR against the `master` branch.

---

## Technical Standards

- **File Naming:** Use kebab-case for all files (e.g., `input-group.tsx`, `alert-dialog.tsx`).
- **Tailwind Constraints:** Stick to the standard Tailwind spacing and color scales. Avoid arbitrary values (e.g., `w-[342px]`) unless absolutely necessary for a specific design block.
- **Dark Mode:** Every component **must** be tested and look perfect in both Light and Dark modes.
- **Clean Code:** Ensure no `console.log`, `TODO` comments, or unused helper functions are left in the final source code that users will copy.

---

## Local Development

Selia's documentation is powered by **React Router v7** and runs on the **Bun** runtime.

1. **Clone the repo:**
   ```bash
   git clone https://github.com/nauvalazhar/selia.git
   ```
2. **Install dependencies:**
  ```bash
  bun install
  ```
3. **Run the dev server**:
   ```bash
   bun dev
   ```
4. **Documentation**: The documentation is content-driven. Component guides and design approaches are located in the `app/routes` directory.

## Open Source Contribution Guide

#### 1. Clone the Repository & Install Dependencies

```bash
git clone https://github.com/Invincible-Study-Soru/apexchart-contribution.git
cd <cloned-folder>
yarn install
```

#### 2. Initialize the Project & Sync Upstream

```bash
yarn reinit
yarn sync-upstream
```

#### 3. Create a Work Branch & Proceed with Tasks

#### 4. Run Development Environment (Hot Reload or Hot ReBuild)

```bash
yarn reinit
yarn start-watch-ref
# or
yarn start-watch-build
```

#### 5. Create a Pull Request

- Create a PR to the `main` branch (for code review, **"🚨 do not merge 🚨"**)
- Finalize the tasks after addressing review comments

#### 6. Subtree Push

- Create the same branch in the forked repositories ([apexcharts.js](https://github.com/apexcharts/apexcharts.js), [react-apexcharts](https://github.com/apexcharts/react-apexcharts)) and push the subtree:

```bash
yarn subtree-push
```

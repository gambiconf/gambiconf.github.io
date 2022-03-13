# <img src="/static/favicon.png" align="right" height="75px" /> GambiConf

> 🐒 The Blow Your Mind Conference

![Website screenshot](https://user-images.githubusercontent.com/9501115/162629911-d01fcf9d-61be-4d3b-9503-8ab04d496554.png)

## How to run

1 - Clone this repo

```bash
git clone git@github.com:gambiconf/gambiconf.github.io.git
```

2 - Install the dependencies

```bash
cd gambiconf.github.io.git && npm i
```

3 - Start the SvelteKit's development mode

```bash
npm run dev
```

4 - Then the website will be available at [`http://localhost:3000/`](http://localhost:3000/)

## How to deploy

### Prod

Deploying to GitHub Pages is an easy task. Just run it:

```bash
npm run build:prod && npm run deploy:prod
```

> [!IMPORTANT]  
> If you're deploying outside the root path (example: youruser.github.io/gambiconf), you need to set the environment variable `BASE_PATH` to the target base path (example: `/gambiconf`).

### Staging

We have a [staging repository/environmnet](https://github.com/gambiconf/website-staging).

```bash
npm run build:staging && npm run deploy:staging
```

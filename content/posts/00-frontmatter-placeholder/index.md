---
title: this post is a ghost
slug: invisible-post
date: 2020-01-01

# optional fields
published: false
unlisted: true
generate-card: false
language: fr
# en
cover: ./cover.jpeg
imageShare: ./cover.jpeg
# imageShare means generating shareable image after push
tags: ['fake']
translations:
  - link: 'https://www.maxpou.fr/about'
    language: 'french'
---

This exists to populate GraphQL fields and avoid null errors. It should contain
all of the available frontmatter.

# Image
1. copy/paste the image in the post folder
2. `![put image description here](./git-push-force.gif)`

![a funny gif](./git-push-force.gif)



# Code

1. Open 2 terminals:
  ```bash
  # Terminal 1
  npm run dev

  # Terminal 2
  npm run generatePostPreviewImages
  # ..you can also specify the url (if different from http://localhost:8000/)
  npm run generatePostPreviewImages http://localhost:1234/
  ```
2. In the post's header, add the generated images:
  ```yaml
  title: My blog post
  # ...
  imageShare: ./social-media-card-generator-share.png
  ```

  
```rust
fn main() {
    let strings = vec!["tofu", "93", "18"];
    let numbers: Vec<_> = strings
        .into_iter()
        .map(|s| s.parse::<i32>())
        .filter_map(Result::ok)
        .collect();
    println!("Results: {:?}", numbers);
}
```



```jsx
const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero
```


## Vue.js


Vue (pronounced /vjuː/, like **view**) is a **progressive framework** for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with [modern tooling](single-file-components.html) and [supporting libraries](https://github.com/vuejs/awesome-vue#components--libraries).

```html
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('loadLoggedInUser')
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  height: 100%;
}
</style>
```

## JavaScript, JSX and highlighted lines

```js{7}
class ShoppingList extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div className="shopping-list">
        <h1>Shopping List for {user}</h1>
        <ul>
          <li>Gatsby</li>
          <li>React</li>
          <li>GraphQL</li>
        </ul>
      </div>
    );
  }
}
```

To highlight a line: ` ```js{lineNumber}`.

## TypeScript

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```


## SCSS

```scss
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}

%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}
```


# List
- ✨ PWA ready
  - ✈️ Offline support
  - 📃 Manifest support 
- [🔧 Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
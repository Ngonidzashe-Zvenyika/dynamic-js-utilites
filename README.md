# Javascript Utilities

## Purpose

1. Practice configuration of `ESLint and Prettier`
2. Publish reusable assets to NPM

## Skills Used

1. NPM
2. JavaScript
3. CSS
4. HTML
5. GitHub
6. ESLint
7. Prettier

## Using the Library:

- Importing the utility functions:

```
const utilities = require("dynamic-js-utilities");
```

- The structure of the utilities object:

```
{
  setDropdownMenus: { setDropdownMenus: [Function: setDropdownMenus] },
  setHamburgerMenus: { setHamburgerMenus: [Function: setHamburgerMenus] },
  setCarouselsOpacity: { setCarouselsOpacity: [Function: setCarouselsOpacity] },
  setCarouselsTransform: { setCarouselsTransform: [Function: setCarouselsTransform] }
}
```

## HTML and CSS Examples

### Dropdown Menu:

```
<div class="dropdown">
  <div class="button">
    <span class="button-display">React</span>
    <img src="./caret-forward-outline.svg" alt="caret" class="caret" />
  </div>
  <ul class="menu">
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li class="active">React</li>
    <li>Node</li>
  </ul>
</div>
```

```
.dropdown {
  position: relative;
  width: 250px;
}

.dropdown .button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #2a2f3b;
}

.dropdown .button:hover {
  cursor: pointer;
  background-color: #323741;
}

.dropdown .button.active {
  outline: 2px solid #26489a;
}

.dropdown .button-display {
  color: #fff;
}

.dropdown .caret {
  height: 20px;
  transition: transform 0.3s ease-in-out;
}

.dropdown .caret.active {
  transform: rotate(90deg);
}

.dropdown .menu {
  list-style-type: none;
  position: absolute;
  flex-direction: column;
  gap: 5px;
  color: #9fa5b5;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #323741;
  pointer-events: none;
  opacity: 0;
  transition:
    transform 0.3s ease-in,
    opacity 0.3s ease-in;
}

.dropdown .menu.active {
  display: flex;
  opacity: 1;
  transform: translateY(10px);
  pointer-events: auto;
}

.dropdown li {
  padding: 10px;
  border-radius: 5px;
}

.dropdown li:hover {
  cursor: pointer;
  background-color: #2a2f3b;
}

.dropdown li.active {
  background-color: #23242a;
}
```

### Hamburger Menu:

```
<div class="hamburger-menu">
  <div class="icons">
    <img src="./close-outline.svg" alt="close-menu" class="close" />
    <img src="./menu-outline.svg" alt="open-menu" class="open" />
  </div>
  <ul class="options">
    <li>SQL</li>
    <li>Python</li>
    <li>Tableau</li>
    <li>Pandas</li>
    <li>R</li>
  </ul>
</div>
```

```
.hamburger-menu {
  position: relative;
}

.hamburger-menu .icons {
  position: relative;
  display: flex;
  justify-content: right;
  width: 250px;
  padding: 10px;
  background-color: #2a2f3b;
}

.hamburger-menu .open,
.hamburger-menu .close {
  height: 20px;
  transition: opacity 0.3s ease-in-out;
}

.hamburger-menu .close {
  pointer-events: none;
  position: absolute;
  opacity: 0;
}

.hamburger-menu .open:hover,
.hamburger-menu .close:hover {
  cursor: pointer;
}

.hamburger-menu .open.active {
  pointer-events: none;
  opacity: 0;
}

.hamburger-menu .close.active {
  pointer-events: auto;
  opacity: 1;
}

.hamburger-menu .options {
  list-style-type: none;
  position: absolute;
  left: -10px;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 10px;
  background-color: #323741;
  pointer-events: none;
  opacity: 0;
  transition:
    transform 0.3s ease-in,
    opacity 0.3s ease-in;
}

.hamburger-menu .options.active {
  pointer-events: auto;
  transform: translateX(10px);
  opacity: 1;
}

.hamburger-menu li {
  text-align: center;
  color: #9fa5b5;
  padding: 10px;
}

.hamburger-menu li:hover {
  cursor: pointer;
  background-color: #2a2f3b;
}
```

### Image Carousel

```
<div class="carousel opacity">
  <div class="previous">
    <img src="./chevron-back-outline.svg" alt="previous" />
  </div>
  <div class="track">
    <img src="./one.jpg" alt="image one" />
    <img src="./two.jpg" alt="image two" />
    <img src="./three.jpg" alt="image three" />
    <img src="./four.jpg" alt="image four" />
    <img src="./five.jpg" alt="image five" class="current" />
  </div>
  <div class="next">
    <img src="./chevron-forward-outline.svg" alt="previous" />
  </div>
  <div class="nav"></div>
</div>

<div class="carousel transform">
  <div class="previous">
    <img src="./chevron-back-outline.svg" alt="previous" />
  </div>
  <div class="frame">
    <div class="track">
      <img src="./one.jpg" alt="image one" />
      <img src="./two.jpg" alt="image two" />
      <img src="./three.jpg" alt="image three" />
      <img src="./four.jpg" alt="image four" />
      <img src="./five.jpg" alt="image five" class="current" />
    </div>
  </div>
  <div class="next">
    <img src="./chevron-forward-outline.svg" alt="previous" />
  </div>
  <div class="nav"></div>
</div>
```

```
.carousel {
  display: grid;
  grid-template-columns: auto 480px auto;
  grid-template-rows: 480px auto;
  gap: 5px;
}

.carousel .previous,
.carousel .next {
  display: flex;
  align-items: center;
}

.carousel .previous:hover,
.carousel .next:hover {
  cursor: pointer;
  background-color: rgba(159, 165, 181, 0.3);
}

.carousel .previous > img,
.carousel .next > img {
  height: 50px;
}

.carousel .track > img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease-in;
  transition-delay: 0.4s;
}

.carousel .track > img.current {
  opacity: 1;
  transition-delay: 0s;
}

.carousel .nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 50px;
  width: 100%;
  grid-column: 2 / 3;
}

.carousel .indicator {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #9fa5b5;
  transition: background-color 0.4s ease;
}

.carousel .indicator:hover {
  cursor: pointer;
  background-color: #323741;
}

.carousel .indicator.current,
.carousel .indicator.current:hover {
  background-color: #26489a;
}

/* for opacity carousel only */

.carousel > .track {
  position: relative;
  height: 100%;
  pointer-events: none;
}

/* for transform carousel only*/
.carousel > .frame {
  position: relative;
  overflow: hidden;
}

.carousel .frame > .track {
  height: 100%;
  transition: transform 0.6s ease;
  pointer-events: none;
}
```

#### Sources:

- All icons by <a href="https://ionic.io/ionicons"> Ionic</a>

- Photo by <a href="https://unsplash.com/@iamthedave?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave</a> on <a href="https://unsplash.com/photos/lsoogGC_5dg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- Photo by <a href="https://unsplash.com/@sotti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shifaaz shamoon</a> on <a href="https://unsplash.com/photos/9K9ipjhDdks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- Photo by <a href="https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quino Al</a> on <a href="https://unsplash.com/photos/mBQIfKlvowM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- Photo by <a href="https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quino Al</a> on <a href="https://unsplash.com/photos/mBQIfKlvowM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- Photo by <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Horner</a> on <a href="https://unsplash.com/photos/4rDCa5hBlCs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

![image slim-helper-css](https://raw.github.com/brenopolanski/slim-helper-css/gh-assets/slim-helper-css.png)

Collection CSS helpful for the daily work with HTML.

Inspired by *@brunomonteiro3* [HelperCSS](https://github.com/brunomonteiro3/HelperCSS "HelperCSS").

**Notice:** the suggested names for the classes on this files are the shortest as possible, in some cases it can make your code unreadable in team works, so feel free to change the name of the class to suit the way you work.

## First steps

1. Clone project: `git clone https://github.com/brenopolanski/slim-helper-css`
2. Insert the `slim-helper.css` in your project:

  ```
  <link rel="stylesheet" href="css/slim-helper.css">
  ```
  
## Usage

Using `slim-helper.css`, your other CSS files will have the lines reduced because you'll avoid using default settings in different classes.

### Example 1

Example of **bold** title:

      <h1 class="sh-b">Example title</h1>
      
### Example 2

Example of *italic* title:

      <h1 class="sh-i">Example title</h1>
      
### Example 3

Example of text with size 11px and aligment for right:

      <p class="sh-f11 sh-tar">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
### Example 4

Example of icon spin:

      <div class="sh-spin">
        <img src="img/loader.png" alt="">
      </div>
      
### Example 5

Example of `div` with background orange and border radius of 5px:

      <div class="sh-w100-px sh-h100-px sh-radius5 sh-orange"></div>

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request  :)

English is the universal language nowadays, so please don't create or comment on issues using another language.

## History

For detailed changelog, see [Releases](https://github.com/brenopolanski/slim-helper-css/releases "Releases").

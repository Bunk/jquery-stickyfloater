jquery-stickyfloat
==================

A very simple jQuery plugin for allowing content to float within a set of DOM elements, yet always remain visible.

## Usage

Simply pass it the container (if any) that you would like the HTML element to float within.  When scrolling would cause the element to scroll off of the screen, the plugin will ensure visibility within the container.

```javascript
$('#selector').stickyfloat({ container: $('#container') });
```

Note: ```window``` is the default container.

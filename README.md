# Bullseye Chart

Bullseye chart made with the [Raphael](http://raphaeljs.org) graphics lib. It supports mouse interaction, runtime modification, serializing data points, and more.

## Features

- works seamlessly with Raphael: `Raphael('canvas').bullseye()`
- easily serializable with polar coordinates
- mouse interaction and callbacks: `onMouseOver`, `onPointClick`, `onSliceClick`
- add / remove / drag points at runtime
- works in Chrome, FF, and IE*

\* works in IE9, briefly tested with IE7 and 8 


## Demo

[Demo page](http://dimarr.github.com/raphael.bullseye.js)

## Installation

    <script src="raphael-min.js" type="text/javascript"></script>
    <script src="raphael.bullseye.js" type="text/javascript"></script>

## Example

    var RAD = Math.PI / 180;
    var bullseye = Raphael('canvas', 450, 450).bullseye({
        'sliceLabels' : ['Apple', 'Banana', 'Orange'],
        'ringLabels'  : [1, 2, 3, 4],
        'startDegree' : -30
    });

    bullseye.addPoint({
        'label'    : 'Point 1',
        'angle'    : 45 * RAD,
        'distance' : 0.25,   // 25% of the radius
        'pointFill': '#00ff00',
        'pointSize': 5
    });

    bullseye.addPoint({
        'label'    : 'Point 2',
        'angle'    : 45 * RAD,
        'distance' : 1.25,   // 125% of the radius
        'pointFill': '#0000ff',
        'pointSize': 10
    });

    bullseye.addPoint({
        'label'    : 'Point 3',
        'angle'    : 180 * RAD,
        'ring'     : 2,     // place point in ring 3
        'distance' : .25,   // 25% of the the specified ring
        'pointFill': '#ff0000',
        'pointSize': 5
    });

## License

MIT
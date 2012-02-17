window.onload = function() {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var bullseye = Raphael('canvas', 640, 600).bullseye({
        'sliceLabels': ['Pacific', 'Atlantic', 'Mediterranean'],
        'ringLabels': ['1940', '1941', '1942', '1943', '1944', '1945'],
        'startDegree': -30,
        'allowDrag': true
    });

    var baseYear = 1940;
    //http://history1900s.about.com/od/worldwarii/a/wwiibattles.htm
    var data = [
        ['a', 1940, 'Battle of France', 520000, 'axis'],
        ['a', 1940, 'Battle of Belgium', 220000, 'axis'],
        ['a', 1945, 'Battle of Berlin', 180000, 'allies'],
        ['a', 1944, 'Battle the Bulge', 190000, 'allies'],
        ['m', 1942, 'First Battle of El Alamein', 23000, 'allies'],
        ['m', 1942, 'Second Battle of El Alamein', 44000, 'allies'],
        ['p', 1942, 'Guadalcanal Campaign', 39000, 'allies'],
        ['p', 1945, 'Iwo Jima', 28000, 'allies'],
        ['a', 1943, 'Kursk', 1066000, 'allies'],
        ['a', 1941, 'Siege of Leningrad', 1000000, 'allies'],
        ['p', 1944, 'Battle of Leyte Gulf', 13000, 'allies'],
        ['a', 1944, 'D-Day', 230000, 'allies'],
        ['p', 1941, 'Pearl Harbor',  2500, 'axis']
    ];

    for (var i = 0; i < data.length; i++) {
        var angle;
        switch(data[i][0]) {
            case 'a':
                angle = rand(-25, 85);
                break;
            case 'm':
                angle = rand(95, 205);
                break;
            case 'p':
                angle = rand(215, 325);
                break;
        }

        if (data[i][3] > 500000)
            size = 8;
        else if (data[i][3] > 100000)
            size = 6;

        bullseye.addPoint({
            label: data[i][2],
            ring: data[i][1] - baseYear,
            angle: angle * Math.PI / 180,
            pointFill: data[i][4] == 'allies' ? '#00ff00' : '#ff0000',
            pointSize: size,
            distance: .5
        });
    }
        
}

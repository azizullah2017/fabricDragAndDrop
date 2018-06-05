var canvas = new fabric.Canvas('c');

var objects = [
    { type: "image", filename : "1.png" , x: 20, y: 184, angle: 0, zIndex: 10 },
    { type: "image", filename : "2.png" , x: 800, y: 300 },
    { type: "image", filename : "3.png" , x: 547, y: 300 },
    { type: "image", filename : "4.png" , x: 800, y: 300 },
    { type: "image", filename : "5.png" , x: 547, y: 300 },
    { type: "image", filename : "6.png" , x: 800, y: 300 },
    { type: "image", filename : "7.png" , x: 547, y: 300 },
  { type: "image", filename : "8.png" , x: 1200, y: 300 }];

for (var i=0; i<objects.length;i++){
  var objRef = objects[i];
      var url = "image/puzzel/" + objRef.filename;
      fabric.Image.fromURL(url, function(img) {
        img.set({
          left: fabric.util.getRandomInt(0, 600),
          top: fabric.util.getRandomInt(0, 500),
          angle: fabric.util.getRandomInt(0, 90)
            });
        canvas.add(img);
      });

}

/*************
Data
**************/
var colors = [
  [ 0, 0, 0 ],            // year (0)
  [ 124, 192, 255],       // cover (1)
  [ 132, 135, 137],       // materials: aluminum (2)
  [ 176, 102, 80],        // materials: copper (3)
  [ 0, 0, 0],             // materials: cord (4)
  [ 191, 186, 175],       // materials: cotton (5)
  [ 255, 189, 238],       // materials: fabric (6)
  [ 238, 238, 238],       // materials: plastic (7)
  [ 214, 87, 32],         // materials: rubber (8)
  [ 202, 191, 187],       // materials: silk (9)
  [ 67, 70, 75],          // materials: steel (10)
  [ 133, 94, 66],         // materials: wood (11)
];

// var dataset = [ 
// [{color: colors[0], intensity: 0.1}, {color: colors[3], intensity: 0.5}, {color: colors[3], intensity: 0.75}],
// [{color: colors[2], intensity: 0.1}, {color: colors[5], intensity: 0.3}, {color: colors[0], intensity: 0.9}],
// [{color: colors[0], intensity: 0.25}, {color: colors[1], intensity: 0.2}, {color: colors[2], intensity: 0.9}],
// [{color: colors[3], intensity: 0.84}, {color: colors[0], intensity: 0.5}, {color: colors[1], intensity: 0.75}],
// [{color: colors[2], intensity: 0.1}, {color: colors[5], intensity: 0.3}, {color: colors[0], intensity: 0.9}],
// ];

var dataset = [ 
  [{title: "Lockheed U-2C", colorYear: colors[0], intensity: 0.5, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]}, 
   {title: "Boeing FB-5 Hawk", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]},
   {title: "Story Little Gee Bee", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]},
   {title: "Pitts S-1S Special", colorYear: colors[0], intensity: 0.5, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[6]}],

  [{title: "Boeing 247-D", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[2]}, 
   {title: "Huff-Daland Duster", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[6]},  
   {title: "Wills Wing Talon 150", colorYear: colors[0], intensity: 0.7, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]},
   {title: "Douglas World Cruiser Chicago", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[11], colorMaterial3: colors[5], colorMaterial4: colors[10], colorMaterial5: colors[2]}],

  [{title: "Nakajima Ki-115a  Tsurugi (Sabre)", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[11]},
   {title: "Boeing B-29 Superfortress 'Enola Gay'", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[2]}, 
   {title: "Rutan Quickie", colorYear: colors[0], intensity: 0.6, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]}],

  [{title: "Fairchild FC-2", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[5]}, 
   {title: "Bücker Bü-133C Jungmeister", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[6]}, 
   {title: "Northrop 4A Alpha", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[2]}],

  [{title: "Douglas SBD-6 Dauntless", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[10], colorMaterial4: colors[7], colorMaterial5: colors[6]}, 
   {title: "1903 Wright Flyer", colorYear: colors[0], intensity: 0.2, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[11], colorMaterial4: colors[6], colorMaterial5: colors[2]}, 
   {title: "Grumman F6F-3K Hellcat", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]}],

  [{title: "Boeing F4B-4", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[10], colorMaterial2: colors[11], colorMaterial3: colors[6], colorMaterial4: colors[7], colorMaterial5: colors[8]}, 
   {title: "Curtiss Model E Flying Boat (hull only)", colorYear: colors[0], intensity: 0.2, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[11]},  
   {title: "Langley Aerodrome Number 5", colorYear: colors[0], intensity: 0.2, colorCover: colors[1], colorMaterial1: colors[11], colorMaterial2: colors[9], colorMaterial3: colors[10], colorMaterial4: colors[3], colorMaterial5: colors[4]}],
  ];



/*************
Params
**************/

var cols = dataset.length;
var rows = dataset[0].length;
var gap = 50;
var margin = 50;
var cellSize = ( gap * 2 ) + margin;



/*************
D3.js
**************/

var grid = d3.select("#d3-container")
  .append("svg")
  .attr("width", cols * cellSize )
  .attr("height", rows * cellSize + 200 );
  
grid.selectAll("g")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  // .selectAll("circle")
  // .data(function(d) {return d;})
  // .enter().append("circle")
  // .attr("fill", function(d) {
  //   return "rgb(" + d.color[0] + "," + d.color[1] + "," + d.color[2] + ")"
  // })
  // .attr("fill-opacity", function (d) {
  //   return d.intensity;
  // })
  
  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorYear + ")"
  })
  .attr("fill-opacity", function (d) {
    return d.intensity;
  })
  
  // .attr("r", radius)
  // .attr("cx", radius)
  // .attr("cy", function(d, i) {
  //   return radius + i * cellSize + 50;
  // });
  .attr("x", 0)
  .attr("y", function(d, i) {
    return gap + i * cellSize + 50;
  })
  .attr("width", 100)
  .attr("height", 100);



/*************
Year Cover
**************/
// year: top left cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 0)
  .attr("y", function(d, i) {
    return gap + i * cellSize + 50;
  })
  .attr("width", 50)
  .attr("height", 30);

// year: top right cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 70)
  .attr("y", function(d, i) {
    return gap + i * cellSize + 50;
  })
  .attr("width", 30)
  .attr("height", 30);

// year: bottom left cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 0)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 50;
  })
  .attr("width", 50)
  .attr("height", 30);

// year: bottom right cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 70)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 50;
  })
  .attr("width", 30)
  .attr("height", 30);



/*************
Materials
**************/
// material 1
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial1 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 0)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 50;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 2
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial2 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 10)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 50;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 3
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial3 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 20)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 50;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 4
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial4 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 30)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 50;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 5
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial5 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 40)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 50;
  })
  .attr("width", 10)
  .attr("height", 10);






// var text = grid.selectAll(null)
//   .data(dataset)
//   .enter()
//   .append("text");

// var textTitles = text
//   .attr("x", function(d, i) {
//     return gap + i * cellSize + 50;
//   })
//   .attr("y", function(d, i) {
//     return gap + i * cellSize + 50;
//   })
//   .text(function(d) {return d.title})
//   .attr("font-family", "sans-serif")
//   .attr("font-size", "10px")
//   .attr("fill", "red");


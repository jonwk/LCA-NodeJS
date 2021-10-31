var findAncestor = require("ancestor");

var nodes = {
  1: [],
  2: [1],
  3: [2],
  4: [2],
  5: [4],
  6: [3, 5],
  7: [6],
  8: [5],
  9: [8],
  10: [9, 7],
  11: [9, 10],
};

/* the graph:

            11
           / \    
    4-5-8-9--10
   /   \    /
1-2-3---6-7

*/

var readParents = function (id, cb) {
  cb(null, nodes[id]);
};


function findAnc(a, b) {
  findAncestor([a, b], readParents, function (err, res) {
    //   res = 5
    console.log(`The LCA of ${a}, ${b} is ${res}`);
  });
}

findAnc(9, 7);
findAnc(4, 10);
findAnc(9, 10);

const Node = require("./Node.js");

let root;
let path1 = [];
let path2 = [];

function setupRoot(rootNode) {
  root = rootNode;
}

// const setupRoot = (rootNode) => {
//   root = rootNode;
// };

// Finds the path from root node to given root of the tree.
function findLCA(n1, n2) {
  // making sure that the node 1 is not bigger than node 2
  if (n1 > n2) {
    var temp = n1;
    n1 = n2;
    n2 = temp;
  }

  path1 = [];
  path2 = [];

  return findLCAPrivate(root, n1, n2);
}

function findPath(root, n, path) {
  // base case
  if (root == null) return false;

  // Store this node . The node will be removed if
  // not in path from root to n.
  path.push(root.data);

  if (root.data == n) return true;

  if (root.left != null && findPath(root.left, n, path)) return true;

  if (root.right != null && findPath(root.right, n, path)) return true;

  // If not present in subtree rooted with root,
  // remove root from
  // path[] and return false
  path.pop();

  return false;
}

function findLCAPrivate(root, n1, n2) {
  if (!findPath(root, n1, path1) || !findPath(root, n2, path2)) {
    var status_str = "";
    status_str +=
      path1.length > 0 ? `${n1} is present and ` : `${n1} is missing and `;

    status_str += path2.length > 0 ? `${n2} is present` : `${n2} is missing`;
    console.log(status_str);
    return "Error";
  }

  for (var i = 0; i < path1.length && i < path2.length; i++) {
    // System.out.println(path1.get(i) + " " + path2.get(i));
    if (path1[i] != path2[i]) break;
  }

  return path1[i - 1];
}

var node1 = (root = new Node("a"));

var node2 = (root.left = new Node("b"));
var node3 = (root.right = new Node("c"));

var node4 = (node2.left = new Node("d"));
var node5 = (node2.right = new Node("e"));

var node6 = (node3.left = new Node("f"));
var node7 = (node3.right = new Node("g"));

var node8 = (node4.left = new Node("h"));
var node9 = (node5.right = new Node("i"));

var node10 = (node6.left = new Node("j"));
var node11 = (node7.right = new Node("k"));

//          a
//      /       \
//    b          c
//   /  \       /  \
//  d    e     f    g
// /      \   /      \
// h       i j        k

// console.log(`LCA(d, e) = ${findLCA("d", "e")}`);
// console.log(`LCA(d, f) = ${findLCA("d", "f")}`);
// console.log(`LCA(c, d) = ${findLCA("c", "d")}`);
// console.log(`LCA(b, d) = ${findLCA("b", "d")}`);

// console.log(`LCA(h, i) = ${findLCA("h", "i")}`);
// console.log(`LCA(j, l) = ${findLCA("j", "l")}`);
// console.log(`LCA(j, k) = ${findLCA("j", "k")}`);
// console.log(`LCA(h, d) = ${findLCA("h", "d")}`);
// console.log(`LCA(l, d) = ${findLCA("l", "d")}`);

/* 
nodes and values
   1 - a |  2 - b | 3 - c | 4 - d |  5 - e |
  6 - f |  7 - g | 8 - h | 9 - i | 10 - j |
11 - k | 12 - l |
*/

// export {Node, setupRoot,findLCA, findPath, findLCAPrivate, saysomething};
module.exports = {
  setupRoot: setupRoot,
  findLCA: findLCA,
};

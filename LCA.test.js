const Node = require("./Node.js");
const LCA = require("./LCA.js");

beforeAll(() => {
  var root = new Node("a");

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

  LCA.setupRoot(root);
  return;
});

//          a
//      /       \
//    b          c
//   /  \       /  \
//  d    e     f    g
// /      \   /      \
// h       i j        k

describe("1️⃣  Testing LCA for nodes on level 1", () => {
  test("LCA of b and c is a", () => {
    expect(LCA.findLCA("b", "c")).toBe("a");
  });

  test("LCA of d and e is b", () => {
    expect(LCA.findLCA("d", "e")).toBe("b");
  });

  test("LCA of f and g is c", () => {
    expect(LCA.findLCA("f", "g")).toBe("c");
  });
});

describe("2️⃣  Testing LCA for nodes on level 2", () => {
  test("LCA of h and i is b", () => {
    expect(LCA.findLCA("h", "i")).toBe("b");
  });

  test("LCA of j and k is c", () => {
    expect(LCA.findLCA("j", "k")).toBe("c");
  });

  test("LCA of h and j is a", () => {
    expect(LCA.findLCA("h", "j")).toBe("a");
  });

  test("LCA of i and k is a", () => {
    expect(LCA.findLCA("i", "k")).toBe("a");
  });
});

describe("3️⃣  Testing LCA for nodes with increased complexity", () => {
  test("LCA of h and e is b", () => {
    expect(LCA.findLCA("h", "e")).toBe("b");
  });

  test("LCA of d and i is b", () => {
    expect(LCA.findLCA("d", "i")).toBe("b");
  });

  test("LCA of f and k is c", () => {
    expect(LCA.findLCA("f", "k")).toBe("c");
  });

  test("LCA of j and g is c", () => {
    expect(LCA.findLCA("j", "g")).toBe("c");
  });

  test("LCA of b and g is a", () => {
    expect(LCA.findLCA("b", "g")).toBe("a");
  });

  test("LCA of c and h is a", () => {
    expect(LCA.findLCA("c", "h")).toBe("a");
  });
});

describe("4️⃣  Testing LCA for nodes, where one of the node is the LCA", () => {
  test("LCA of b and d is b", () => {
    expect(LCA.findLCA("b", "d")).toBe("b");
  });
  test("LCA of b and e is b", () => {
    expect(LCA.findLCA("b", "e")).toBe("b");
  });
  test("LCA of b and h is b", () => {
    expect(LCA.findLCA("b", "h")).toBe("b");
  });

  test("LCA of c and g is c", () => {
    expect(LCA.findLCA("c", "g")).toBe("c");
  });
  test("LCA of c and f is c", () => {
    expect(LCA.findLCA("c", "f")).toBe("c");
  });
  test("LCA of c and k is c", () => {
    expect(LCA.findLCA("c", "k")).toBe("c");
  });

  test("LCA of a and b is a", () => {
    expect(LCA.findLCA("a", "b")).toBe("a");
  });
  test("LCA of a and c is a", () => {
    expect(LCA.findLCA("a", "c")).toBe("a");
  });
});

describe("5️⃣  Testing LCA for same nodes", () => {
  test("LCA of a and a is a", () => {
    expect(LCA.findLCA("a", "a")).toBe("a");
  });
  test("LCA of b and b is b", () => {
    expect(LCA.findLCA("b", "b")).toBe("b");
  });
  test("LCA of c and c is c", () => {
    expect(LCA.findLCA("c", "c")).toBe("c");
  });
  test("LCA of d and d is d", () => {
    expect(LCA.findLCA("d", "d")).toBe("d");
  });
});

describe("6️⃣  Testing LCA for invalid nodes, nodes that are not present", () => {
  test("LCA of l and d is Error, l is the invalid node", () => {
    expect(LCA.findLCA("l", "d")).toBe("Error");
  });
  test("LCA of l and z is Error, Both invalid Nodes", () => {
    expect(LCA.findLCA("l", "z")).toBe("Error");
  });
});

describe("7️⃣  Testing LCA for empty nodes", () => {
  test(`LCA of " " and a is Error, one empty node`, () => {
    expect(LCA.findLCA(" ", "a")).toBe("Error");
  });
  test(`LCA of " " and " " is Error, two empty nodes`, () => {
    expect(LCA.findLCA(" ", " ")).toBe("Error");
  });
  test(`LCA of "" and "" is Error, two empty nodes`, () => {
    expect(LCA.findLCA("", "")).toBe("Error");
  });
});

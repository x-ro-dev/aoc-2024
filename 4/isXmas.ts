/**
 * An X-MAS can be 1 of 4 iterations, each 3x3
 * M.M  M.S  S.M  S.S
 * .A.  .A.  .A.  .A.
 * S.S  M.S  S.M  M.M
 */
export function isXmas(graph: string[][]) {
  if (graph.length != 3 && graph[0].length != 3) {
    // Not the correct size
    return false;
  }

  // Middle character is always an A
  if (graph[1][1] != "A") {
    return false;
  }

  // Top row needs to be 1 of 4 possibilities
  // Top row M.M
  if (graph[0][0] === "M") {
    if (graph[0][2] === "M") {
      //Bottom row S.S
      if (graph[2][0] === "S" && graph[2][2] === "S") {
        return true;
      }
    }
  }

  // Top row M.S
  if (graph[0][0] === "M") {
    if (graph[0][2] === "S") {
      //Bottom row M.S
      if (graph[2][0] === "M" && graph[2][2] === "S") {
        return true;
      }
    }
  }

  // Top row S.M
  if (graph[0][0] === "S") {
    if (graph[0][2] === "M") {
      //Bottom row S.M
      if (graph[2][0] === "S" && graph[2][2] === "M") {
        return true;
      }
    }
  }

  // Top row S.S
  if (graph[0][0] === "S") {
    if (graph[0][2] === "S") {
      //Bottom row M.M
      if (graph[2][0] === "M" && graph[2][2] === "M") {
        return true;
      }
    }
  }
  return false;
}

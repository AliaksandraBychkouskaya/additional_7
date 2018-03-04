function solveSudoku(matrix) {
  return innerSolveSudoku(matrix);
}

function innerSolveSudoku(matrix) {
  // your solution
  let arrOfEmptyPlaces = [];
  let numberOfSquare;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] == 0) {
        if ((0 <= i) && (i <= 2) && (0 <= j) && (j <= 2)) {
          numberOfSquare = 1;
        }
        if ((0 <= i) && (i <= 2) && (3 <= j) && (j <= 5)) {
          numberOfSquare = 2;
        }
        if ((0 <= i) && (i <= 2) && (6 <= j) && (j <= 8)) {
          numberOfSquare = 3;
        }
        if ((3 <= i) && (i <= 5) && (0 <= j) && (j <= 2)) {
          numberOfSquare = 4;
        }
        if ((3 <= i) && (i <= 5) && (3 <= j) && (j <= 5)) {
          numberOfSquare = 5;
        }
        if ((3 <= i) && (i <= 5) && (6 <= j) && (j <= 8)) {
          numberOfSquare = 6;
        }
        if ((6 <= i) && (i <= 8) && (0 <= j) && (j <= 2)) {
          numberOfSquare = 7;
        }
        if ((6 <= i) && (i <= 8) && (3 <= j) && (j <= 5)) {
          numberOfSquare = 8;
        }
        if ((6 <= i) && (i <= 8) && (6 <= j) && (j <= 8)) {
          numberOfSquare = 9;
        }
        arrOfEmptyPlaces.push([
          [
            i, j
          ],
          [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
          ],
          numberOfSquare
        ]);
      }
    }
  }
  let arrOfEmptyPlacesLength = [];

  do {
    for (let i = 0; i < arrOfEmptyPlaces.length; i++) {
      let point = arrOfEmptyPlaces[i][0];
      let variants = arrOfEmptyPlaces[i][1];
      let numberSquare = arrOfEmptyPlaces[i][2];
      switch (numberSquare) {
        case 1:
          {
            for (let l = 0; l <= 2; l++) {
              for (let m = 0; m <= 2; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 2:
          {
            for (let l = 0; l <= 2; l++) {
              for (let m = 3; m <= 5; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 3:
          {
            for (let l = 0; l <= 2; l++) {
              for (let m = 6; m <= 8; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 4:
          {
            for (let l = 3; l <= 5; l++) {
              for (let m = 0; m <= 2; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 5:
          {
            for (let l = 3; l <= 5; l++) {
              for (let m = 3; m <= 5; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 6:
          {
            for (let l = 3; l <= 5; l++) {
              for (let m = 6; m <= 8; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 7:
          {
            for (let l = 6; l <= 8; l++) {
              for (let m = 0; m <= 2; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 8:
          {
            for (let l = 6; l <= 8; l++) {
              for (let m = 3; m <= 5; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }

            break;
          }
        case 9:
          {
            for (let l = 6; l <= 8; l++) {
              for (let m = 6; m <= 8; m++) {
                arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[l][m]);
              }
            }
          }
      }
      for (let k = 0; k < 9; k++) {
        arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[point[0]][k]);
        arrOfEmptyPlaces[i][1] = arrOfEmptyPlaces[i][1].filter(node => node !== matrix[k][point[1]]);
      }
    }

    let arrOfEmptyPlacesModified = arrOfEmptyPlaces;
    let flag = false;
    let flag2 = false;
    for (let i = 0; i < arrOfEmptyPlaces.length; i++) {
      if (arrOfEmptyPlaces[i][1].length == 1) {
        flag = true;
        flag2 = true;
        matrix[arrOfEmptyPlaces[i][0][0]][arrOfEmptyPlaces[i][0][1]] = arrOfEmptyPlaces[i][1][0];
        arrOfEmptyPlacesModified = arrOfEmptyPlacesModified.filter(node => node !== arrOfEmptyPlaces[i]);
      }

    }

    arrOfEmptyPlaces = arrOfEmptyPlacesModified;

    if (!flag) {
      let arrOfElementsInRow = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };

      for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
        arrOfElementsInRow[arrOfEmptyPlaces[g][0][0]].push(arrOfEmptyPlaces[g]);
      }

      for (let t = 0; t < 9; t++) {
        if (arrOfElementsInRow[t].length > 2) {
          let arrOfTwo = [];
          for (let r = 0; r < arrOfElementsInRow[t].length; r++) {
            if (arrOfElementsInRow[t][r][1].length == 2) {
              arrOfTwo.push(arrOfElementsInRow[t][r]);
            }
          }
          for (let y = 0; y < arrOfTwo.length - 1; y++) {
            for (let f = y + 1; f < arrOfTwo.length; f++) {
              if (arraysEqual(arrOfTwo[y][1], arrOfTwo[f][1])) {
                for (let x = 0; x < arrOfEmptyPlaces.length; x++) {
                  if ((arrOfEmptyPlaces[x][0][0] == t) && (arrOfEmptyPlaces[x][0][1] !== arrOfTwo[y][0][1]) && (arrOfEmptyPlaces[x][0][1] !== arrOfTwo[f][0][1])) {
                    arrOfEmptyPlaces[x][1] = arrOfEmptyPlaces[x][1].filter(node => (node !== arrOfTwo[y][1][0]) && (node !== arrOfTwo[y][1][1]));
                    flag2 = true;
                  }
                }
              }
            }
          }
        }
      }
      let arrOfElementsInColumn = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };

      for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
        arrOfElementsInColumn[arrOfEmptyPlaces[g][0][1]].push(arrOfEmptyPlaces[g]);
      }
      for (let t = 0; t < 9; t++) {
        if (arrOfElementsInColumn[t].length > 2) {
          let arrOfTwo = [];
          for (let r = 0; r < arrOfElementsInColumn[t].length; r++) {
            if (arrOfElementsInColumn[t][r][1].length == 2) {
              arrOfTwo.push(arrOfElementsInColumn[t][r]);
            }
          }
          for (let y = 0; y < arrOfTwo.length - 1; y++) {
            for (let f = y + 1; f < arrOfTwo.length; f++) {
              if (arraysEqual(arrOfTwo[y][1], arrOfTwo[f][1])) {
                for (let x = 0; x < arrOfEmptyPlaces.length; x++) {
                  if ((arrOfEmptyPlaces[x][0][1] == t) && (arrOfEmptyPlaces[x][0][0] !== arrOfTwo[y][0][0]) && (arrOfEmptyPlaces[x][0][0] !== arrOfTwo[f][0][0])) {
                    arrOfEmptyPlaces[x][1] = arrOfEmptyPlaces[x][1].filter(node => (node !== arrOfTwo[y][1][0]) && (node !== arrOfTwo[y][1][1]));
                    flag2 = true;
                  }
                }
              }
            }
          }

        }
      }
      let arrOfElementsInSquare = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      };

      for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
        arrOfElementsInSquare[arrOfEmptyPlaces[g][2]].push(arrOfEmptyPlaces[g]);
      }
      for (let t = 1; t < 10; t++) {
        if (arrOfElementsInSquare[t].length > 2) {
          let arrOfTwo = [];
          for (let r = 0; r < arrOfElementsInSquare[t].length; r++) {
            if (arrOfElementsInSquare[t][r][1].length == 2) {
              arrOfTwo.push(arrOfElementsInSquare[t][r]);
            }
          }
          for (let y = 0; y < arrOfTwo.length - 1; y++) {
            for (let f = y + 1; f < arrOfTwo.length; f++) {
              if (arraysEqual(arrOfTwo[y][1], arrOfTwo[f][1])) {
                for (let x = 0; x < arrOfEmptyPlaces.length; x++) {
                  if ((arrOfEmptyPlaces[x][3] == t) && (arrOfEmptyPlaces[x][0][0] !== arrOfTwo[y][0][0] && arrOfEmptyPlaces[x][0][1] !== arrOfTwo[y][0][1]) && (arrOfEmptyPlaces[x][0][0] !== arrOfTwo[f][0][0] && arrOfEmptyPlaces[x][0][1] !== arrOfTwo[f][0][1])) {
                    arrOfEmptyPlaces[x][1] = arrOfEmptyPlaces[x][1].filter(node => (node !== arrOfTwo[y][1][0]) && (node !== arrOfTwo[y][1][1]));
                    flag2 = true;
                  }
                }
              }
            }
          }

        }
      }

    }
    if (!flag2) {
      let arrOfElementsInRow = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };

      for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
        arrOfElementsInRow[arrOfEmptyPlaces[g][0][0]].push(arrOfEmptyPlaces[g]);
      }

      for (let t = 0; t < 9; t++) {
        if (arrOfElementsInRow[t].length > 2) {
          let arrOfVarients = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
          };
          for (let h = 0; h < arrOfElementsInRow[t].length; h++) {
            for (let w = 0; w < arrOfElementsInRow[t][h][1].length; w++) {
              arrOfVarients[arrOfElementsInRow[t][h][1][w]]++;
            }
          }
          for (let q = 1; q < 10; q++) {
            if (arrOfVarients[q] == 1) {
              for (let h = 0; h < arrOfElementsInRow[t].length; h++) {
                for (let w = 0; w < arrOfElementsInRow[t][h][1].length; w++) {
                  if (arrOfElementsInRow[t][h][1][w] == q) {
                    for (let x = 0; x < arrOfEmptyPlaces.length; x++) {
                      if ((arrOfEmptyPlaces[x][0][0] == arrOfElementsInRow[t][h][0][0]) && (arrOfEmptyPlaces[x][0][1] == arrOfElementsInRow[t][h][0][1])) {
                        arrOfEmptyPlaces[x][1] = arrOfEmptyPlaces[x][1].filter(node => node == q);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let arrOfElementsInColumn = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };

      for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
        arrOfElementsInColumn[arrOfEmptyPlaces[g][0][1]].push(arrOfEmptyPlaces[g]);
      }
      for (let t = 0; t < 9; t++) {
        if (arrOfElementsInColumn[t].length > 2) {
          let arrOfVarients = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
          };
          for (let h = 0; h < arrOfElementsInColumn[t].length; h++) {
            for (let w = 0; w < arrOfElementsInColumn[t][h][1].length; w++) {
              arrOfVarients[arrOfElementsInColumn[t][h][1][w]]++;
            }
          }
          for (let q = 1; q < 10; q++) {
            if (arrOfVarients[q] == 1) {
              for (let h = 0; h < arrOfElementsInColumn[t].length; h++) {
                for (let w = 0; w < arrOfElementsInColumn[t][h][1].length; w++) {
                  if (arrOfElementsInColumn[t][h][1][w] == q) {
                    for (let x = 0; x < arrOfEmptyPlaces.length; x++) {
                      if ((arrOfEmptyPlaces[x][0][0] == arrOfElementsInColumn[t][h][0][0]) && (arrOfEmptyPlaces[x][0][1] == arrOfElementsInColumn[t][h][0][1])) {
                        arrOfEmptyPlaces[x][1] = arrOfEmptyPlaces[x][1].filter(node => node == q);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let arrOfElementsInSquare = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      };

      for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
        arrOfElementsInSquare[arrOfEmptyPlaces[g][2]].push(arrOfEmptyPlaces[g]);
      }
      for (let t = 1; t < 10; t++) {
        if (arrOfElementsInSquare[t].length > 2) {
          let arrOfVarients = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
          };
          for (let h = 0; h < arrOfElementsInSquare[t].length; h++) {
            for (let w = 0; w < arrOfElementsInSquare[t][h][1].length; w++) {
              arrOfVarients[arrOfElementsInSquare[t][h][1][w]]++;
            }
          }
          for (let q = 1; q < 10; q++) {
            if (arrOfVarients[q] == 1) {
              for (let h = 0; h < arrOfElementsInSquare[t].length; h++) {
                for (let w = 0; w < arrOfElementsInSquare[t][h][1].length; w++) {
                  if (arrOfElementsInSquare[t][h][1][w] == q) {
                    for (let x = 0; x < arrOfEmptyPlaces.length; x++) {
                      if ((arrOfEmptyPlaces[x][0][0] == arrOfElementsInSquare[t][h][0][0]) && (arrOfEmptyPlaces[x][0][1] == arrOfElementsInSquare[t][h][0][1])) {
                        arrOfEmptyPlaces[x][1] = arrOfEmptyPlaces[x][1].filter(node => node == q);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (arrOfEmptyPlacesLength.length > 3 &&
      arrOfEmptyPlacesLength[arrOfEmptyPlacesLength.length - 1] === arrOfEmptyPlacesLength[arrOfEmptyPlacesLength.length - 2] &&
      arrOfEmptyPlacesLength[arrOfEmptyPlacesLength.length - 2] === arrOfEmptyPlacesLength[arrOfEmptyPlacesLength.length - 3]
    ) {
      let arrOfElementsInRow = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };

      for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
        arrOfElementsInRow[arrOfEmptyPlaces[g][0][0]].push(arrOfEmptyPlaces[g]);
      }

      let elementToReplace;
      for(let n = 0; n < 9; n ++) {
        if (arrOfElementsInRow[n].length === 2) {
          elementToReplace = arrOfElementsInRow[n];
          break;
        }
      }

      let arrOfElementsInColumn = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };

      if (!elementToReplace) {
        for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
          arrOfElementsInColumn[arrOfEmptyPlaces[g][0][1]].push(arrOfEmptyPlaces[g]);
        }

        for(let n = 0; n < 9; n ++) {
          if (arrOfElementsInColumn[n].length === 2) {
            elementToReplace = arrOfElementsInColumn[n];
            break;
          }
        }
      }

      let arrOfElementsInSquare = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      };

      if (!elementToReplace) {
        for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
          arrOfElementsInSquare[arrOfEmptyPlaces[g][2]].push(arrOfEmptyPlaces[g]);
        }

        for(let n = 1; n < 10; n ++) {
          if (arrOfElementsInSquare[n].length === 2) {
            elementToReplace = arrOfElementsInSquare[n];
            break;
          }
        }
      }

      if (elementToReplace) {
        matrix[elementToReplace[0][0][0]][elementToReplace[0][0][1]] = elementToReplace[0][1][0];
        matrix[elementToReplace[1][0][0]][elementToReplace[1][0][1]] = elementToReplace[0][1][1];

        return innerSolveSudoku(matrix);
      } else {
        return matrix;
      }
    }

    arrOfEmptyPlacesLength.push(arrOfEmptyPlaces.length);

  } while (arrOfEmptyPlaces.length !== 0);
  return matrix;
}

function arraysEqual(a, b) {
  if (a === b)
    return true;
  if (a == null || b == null)
    return false;
  if (a.length != b.length)
    return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i])
      return false;
    }
  return true;
}

module.exports = solveSudoku;

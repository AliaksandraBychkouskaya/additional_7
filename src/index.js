function solveSudoku(matrix) {
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
    for (let i = 0; i < arrOfEmptyPlaces.length; i++) {
      if (arrOfEmptyPlaces[i][1].length == 1) {
        flag = true;
        matrix[arrOfEmptyPlaces[i][0][0]][arrOfEmptyPlaces[i][0][1]] = arrOfEmptyPlaces[i][1][0];
        arrOfEmptyPlacesModified = arrOfEmptyPlacesModified.filter(node => node !== arrOfEmptyPlaces[i]);
      }

    }
    arrOfEmptyPlaces = arrOfEmptyPlacesModified;
    if (!flag) break;
    /*if (!flag) {
      let arrOfElementsInRow = [];
      for (let t = 0; t < 9; t++) {
        for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
          if (arrOfEmptyPlaces[g][0][0] == t)
          arrOfElementsInRow[t].push();
        }
          if (arrOfElementsInRow[t].length > 2) {
            let arrOfTwo =[];
            for ( let r = 0; r < arrOfElementsInRow[t].length; r++) {
              if (arrOfElementsInRow[t][r][1].length == 2) {
                arrOfTwo.push(arrOfElementsInRow[t][r]);
              }
            }
            for (let y = 0; y < arrOfTwo.length - 1; y ++) {
              for (let f = y + 1; f < arrOfTwo; f++) {
                if (arraysEqual(arrOfTwo[y][1],arrOfTwo[f][1])) {
                  arrOfEmptyPlaces
                }
              }

            }


          }


      }
      let arrOfElementsInColumn = [];
      for (let t = 0; t < 9; t++) {
        for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
          if (arrOfEmptyPlaces[g][0][1] == t)
          arrOfElementsInColumn[t].push();
        }

      }
      let arrOfElementsInSquare = [];
      for (let t = 0; t < 9; t++) {
        for (let g = 0; g < arrOfEmptyPlaces.length; g++) {
          if (arrOfEmptyPlaces[g][2] == t)
          arrOfElementsInSquare[t].push();
        }

      }

    }*/

  } while (arrOfEmptyPlaces.length !== 0);
  return matrix;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
/*
solveSudoku([[6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
  ]);*/
module.exports = solveSudoku;

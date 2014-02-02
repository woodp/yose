$(function(){
  
  document.grid = getRandomGrid();
  
  $("td").click(function(){
    var id = $(this).prop('id');
    var row = parseInt(id.substr(5,1));
    var col = parseInt(id.substr(7,1));
    $(this).removeClass();
    if(hasBomb(row, col))
      $(this).addClass('lost');
    else
    {
      var count = countNearBombs(row, col);
      if(count > 0)
      {
        $(this).removeClass();
        $(this).addClass('safe');
        $(this).html(count);
      }
      else
      {
        $(this).html('');
        clearAdjacentEmptyCells(row, col);
      }
    }
  });  
  
  $("#sample").click(function (){
    document.grid = [
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'bomb' , 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'bomb' , 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
		];
  });
  $("#sample3").click(function (){
    document.grid = [
        ['bomb' , 'empty', 'empty'],
        ['empty', 'empty', 'empty'],
        ['empty', 'empty', 'bomb' ]
      ];
  });
});

function clearAdjacentEmptyCells(row, col){
  if(row < 1 || row > document.grid.length)
      return;
  if(col < 1 || col > document.grid[0].length)
      return;
  
  var cellid = "#cell-" + row + "x" + col;
  if($(cellid).hasClass('safe'))
      return;
  if($(cellid).hasClass('lost'))
      return;  
  
  var count = countNearBombs(row, col);
  if(count > 0)
  {
    $(cellid).removeClass();
    $(cellid).addClass('safe');
    $(cellid).html(count);
    return;
  }
  
  $(cellid).html('');
  $(cellid).removeClass();
  $(cellid).addClass('safe');
  
  clearAdjacentEmptyCells(row-1,col-1);
  clearAdjacentEmptyCells(row-1,col);
  clearAdjacentEmptyCells(row-1,col+1);
      
  clearAdjacentEmptyCells(row,col-1);
  clearAdjacentEmptyCells(row,col+1);
      
  clearAdjacentEmptyCells(row+1,col-1);
  clearAdjacentEmptyCells(row+1,col);
  clearAdjacentEmptyCells(row+1,col+1);
}

function countNearBombs(row, col){
  var count = 0;
  var fromRow = row - 1;
  var toRow = row + 1;
  var fromCol = col -1;
  var toCol = col +1;
  for(var i=fromRow;i <= toRow; i++)
  {
    for(var j=fromCol; j <= toCol; j++)
    {
      if(hasBomb(i,j))
        count++;
    }
  }
  return count;
}

function hasBomb(row, col){
  if(row < 1 || row > document.grid.length)
    return false;
  if(col < 1 || col > document.grid[0].length)
    return false;
  
  return document.grid[row-1][col-1] == 'bomb';
}

function getRandomGrid()
{
  var grid = [
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
			['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
		];;
  for(var i=0; i < grid.length; i++)
  {
    for(var j=0; j < grid[0].length; j++)
    {
      grid[i][j] = getRandomBomb();
    }
  }
  return grid;
}

function getRandomBomb()
{
  var rand = Math.random();
  if(rand > 0.7) // 30% of the grid with bombs
    return 'bomb';
  else
    return 'empty';

}


function load()
{
  
}

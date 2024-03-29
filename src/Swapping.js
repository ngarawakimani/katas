/*

Task

Mary is a famous shopkeeper who sells n items in her shop. She assigns each item a unique popularity rating in the inclusive range from 1 to n.

The shop only has one shelf, so the items are displayed array-style in a single row spanning from left to right in a random order. She wants to rearrange the items on the shelf by decreasing popularity rating such that the rating for the i item is always greater than the popularity rating of the (i + 1) item. Mary can swap any two items, i and j, in a single operation.
Specification
minimumSwaps(ratings)

Parameters

    ratings: Array<Number> - an array of numbers indicating the popularity rating of each item on the shelf.
Return Value

    Number - denotes the minimum number of swap operations Mary must perform to order all n items by decreasing popularity rating.
Constraints

    n = number of items in ratings array

    each rating value (arri) will be unique

    1 ≤ n ≤ 2 × 105

    1 ≤ arri ≤ n

Examples
	ratings 	Return Value
Example #1 	[3,1,2] 	1
Example #2 	[3,1,2,4] 	2

    Explanation for Example #1

    Mary can perform the following minimal sequence of swap operations to successfully sort all 3 items by decreasing popularity rating: [3, 1, 2] → [3, 2, 1].

    Thus, we return 1 as our answer.
    Explanation for Example #2

    Mary can perform the following minimal sequence of swap operations to successfully sort all 4 items by decreasing popularity rating: [3, 1, 2, 4] → [3, 4, 2, 1] → [4, 3, 2, 1].

    Thus, we return 2 as our answer.

*/


function minimumSwaps (ratings) {
  
    var swap = 0;
    
    var visited = new Array(ratings.length).fill(0);
    
    var finalstate = [...ratings].sort(function(a, b){
      return a-b
    }).reverse();
    
    ratings.forEach(function (rating, i) {
      
      var cycle = 0;
      
      while(visited[i] == 0) {
        visited[i] = 1;
        i = finalstate.indexOf(rating);
        rating = ratings[i];
        cycle += 1;
      }
      
      if (cycle != 0) {
        swap += cycle - 1;
      }
      
    });
    
    return swap;
}
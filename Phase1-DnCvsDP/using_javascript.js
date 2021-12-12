<script>
 
// Javascript program to find number of cells a queen
// can move with obstacles on the chessborad
 
 
// Return the number of position a Queen can move.
function numberofPosition( n, k, x, y,
                     obstPosx, obstPosy)
{
    // d11, d12, d21, d22 are for diagonal distances.
    // r1, r2 are for vertical distance.
    // c1, c2 are for horizontal distance.
    let d11, d12, d21, d22, r1, r2, c1, c2;
 
    // Initialise the distance to end of the board.
    d11 = Math.min( x-1, y-1 );
    d12 = Math.min( n-x, n-y );
    d21 = Math.min( n-x, y-1 );
    d22 = Math.min( x-1, n-y );
 
    r1 = y-1;
    r2 = n-y;
    c1 = x-1;
    c2 = n-x;
 
    // For each obstacle find the minimum distance.
    // If obstacle is present in any direction,
    // distance will be updated.
    for (let i = 0; i < k; i++)
    {
        if ( x > obstPosx[i] && y > obstPosy[i] &&
                 x-obstPosx[i] == y-obstPosy[i] )
            d11 = Math.min(d11, x-obstPosx[i]-1);
 
        if ( obstPosx[i] > x && obstPosy[i] > y &&
                  obstPosx[i]-x == obstPosy[i]-y )
            d12 = Math.min( d12, obstPosx[i]-x-1);
 
        if ( obstPosx[i] > x && y > obstPosy[i] &&
                   obstPosx[i]-x == y-obstPosy[i] )
            d21 = Math.min(d21, obstPosx[i]-x-1);
 
        if ( x > obstPosx[i] && obstPosy[i] > y &&
                    x-obstPosx[i] == obstPosy[i]-y )
            d22 = Math.min(d22, x-obstPosx[i]-1);
 
        if ( x == obstPosx[i] && obstPosy[i] < y )
            r1 = min(r1, y-obstPosy[i]-1);
 
        if ( x == obstPosx[i] && obstPosy[i] > y )
            r2 = Math.min(r2, obstPosy[i]-y-1);
 
        if ( y == obstPosy[i] && obstPosx[i] < x )
            c1 = Math.min(c1, x-obstPosx[i]-1);
 
        if ( y == obstPosy[i] && obstPosx[i] > x )
            c2 = Math.min(c2, obstPosx[i]-x-1);
    }
 
    return d11 + d12 + d21 + d22 + r1 + r2 + c1 + c2;
}
 
// Driver Code
 
let n = 8;  // Chessboard size
let k = 1;  // number of obstacles
let Qposx = 4; // Queen x position
let Qposy = 4; // Queen y position
let obstPosx = [ 3 ];  // x position of obstacles
let obstPosy = [ 5 ];  // y position of obstacles
 
document.write(numberofPosition(n, k, Qposx, Qposy,
                             obstPosx, obstPosy));
 
</script>

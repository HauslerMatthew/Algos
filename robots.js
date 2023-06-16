// Two robots are dropped from an airplane and land on a single line (with discrete positions) using a parachute which is left at the landing point. The robots are both facing north, they are an unknown distance apart, and one has landed directly east of the other.

// The robots are now to be programmed such that they meet each other. They can be instructed to move left or right to a neighboring position and to check whether a parachute is present at the current location. If the other robot is met both robots stop there and live happily ever after.

// The parachute check might conditionally execute any number of instructions and any block of instructions may be repeated unconditionally. Write down a program that both robots can follow simultaneously and which guarantees that they meet.

// --------chute count-------------------------1-----------1--------------------------------------------//
// --------------------------------------------robot 1-----robot 2---------------------------------------------//
// -----------------------------------------------para-----para-------------------------------------------//

// bots will move left once , right twice, left three times (repeat this pattern indefintely)

// after each unit of movement in a repeated direction, run a chute check.  when chute check = true, increment chute counter to one.

// once they start moving the opposite direction, reset chute count to 0

// ONE bot eventually finds the others chute, meaning its chute count will = 2. 

// if chute count = 2; do nothing in perpetuity

// eventually, the other bot starts coming back to its original chute, at which point when it hits the other bot. 

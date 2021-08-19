// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const index_variable = new GestureDescription('pointing_index_finger'); 

// Thumb 
index_variable.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
index_variable.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);
index_variable.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);

// Indice
index_variable.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
index_variable.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.25);

// meñique
index_variable.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
index_variable.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.25);

//mayor
index_variable.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
index_variable.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.25);

//anular
index_variable.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
index_variable.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.25);

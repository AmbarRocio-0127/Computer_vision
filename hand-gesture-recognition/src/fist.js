// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const fist_variable = new GestureDescription('Fist_gesture'); 

// Thumb 
fist_variable.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
fist_variable.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);
fist_variable.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);

// Indice
fist_variable.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
fist_variable.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// meñique
fist_variable.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
fist_variable.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.25);

//mayor
fist_variable.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
fist_variable.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.25);

//anular
fist_variable.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
fist_variable.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.25);



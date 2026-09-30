#1 React Elements are object and render converts them to HTML.

#2 Parcel 
- Dev build
- Local Server
- HMR = Hot Module Replacement
- File watching Algorithm - written in C++
- Caching - Faster builds  
- Image Optimization
- Minification
- Bundling
- Compression
- Consistant Hashing
- Code Splitting
- Differential Bundling -  to support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

/**
 * Header
 * - logo
 * - Profile
 * - About Us
 * - cart
 * Body
 * - Search
 * - Restaurant container
 *   - Restaurant Card 
 *      - logo
 *      - Res Name
 *      - cousine detail
 *      - Reating
 *      - Delivery Time
 * Footor
 * - copyright
 * - Links
 *  
 * 
 */

 #5 
 
 Two Types of Export/Import
    - Default Export/Import
        - export default Component;
        - import Component from "path";
    - Named Export/Import
        - export Component;
        - import {Component} from "path";

whenever a state variable changes react re-render the component

Reconcilation Algorithm (React Fiber) - React 16

    Diff Algorithm
    Virtual Dom - its an reprsentation of Real Dom

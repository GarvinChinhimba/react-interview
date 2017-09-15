/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */
export function countByKey (arr, key) { 
 var result = [];
 var occurrence = {};
 arr.map(function(item,i) {
     var parameter = item[key];
     if(parameter){

         if(!occurrence[parameter])
         {

            occurrence[parameter]=0;

         }
         
         occurrence[parameter]++;
     }
 });
 Object.keys(occurrence).map(function(parameter){

     var count = {};
     count[key]=parameter;
     count["count"]=occurrence[parameter];
     result.push(count);

 });  

 return result;
    }
    


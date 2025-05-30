import "./styles.css";

import { HashMap } from "./hashmap";

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

// Create a new instance of your hash map and set the load factor to be 0.75.
const test = new HashMap(0.75, 16); // or HashMap() if using a factory

console.log(test);

// Populate your hash map using the set(key, value) method by copying the following:
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// console.log(test);
// test.length();

// test.get("grape");
// test.has("banana");
// test.remove("banana");
// test.has("banana");
// test.remove("grape");
// test.has("grape");
// console.log(test);

// test.length();
// test.keys();
// test.values();
// test.entries();
// test.clear();
// console.log(test);
// test.length();

// After populating your hash map with the data above, your hash map’s current load levels should now be at 0.75 (full capacity).

// Now with a full hash map, try overwriting a few nodes using set(key, value). This should only overwrite the existing values of your nodes and not add new ones, so length() should still return the same value and capacity should remain the same.
test.set("apple", "green");
test.entries();
console.log(test.length());

// After that, populate your hash map with the last node below. This will make your load levels exceed your load factor, triggering your hash map’s growth functionality and doubling its capacity:
test.set("moon", "silver");
console.log(test);
console.log(test.length());

//  If you have implemented your hash map correctly, the load levels of your expanded hash map should drop well below your load factor, and the entries should be spread evenly among the expanded buckets.

// With your new hash map, try overwriting a few nodes using set(key, value). Again, this should only overwrite existing values of your nodes.
test.set("kite", "orange");
console.log(test.length());

// Test the other methods of your hash map, such as get(key), has(key), remove(key), length(), clear(), keys(), values(), and entries(), to check if they are still working as expected after expanding your hash map.
// test.get();
// test.has();
// test.remove();
// test.length();
// test.clear();
// test.keys();
// test.values();
// test.entries();

console.log(test);
test.length();

test.get("grape");
test.has("banana");
test.remove("banana");
test.has("banana");
test.remove("grape");
test.has("grape");
console.log(test);

test.length();
test.keys();
test.values();
test.entries();
test.clear();
console.log(test);
test.length();

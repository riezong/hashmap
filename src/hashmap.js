import { Node } from "./node";
import { LinkedList } from "./linkedList";

class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.Bucket = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    // take key-value pair
    // convert key into hash code
    // use hash code to determine the appropriate bucket
    const bucketIndex = this.hash(key);
    console.log(bucketIndex, value);
    // this.Bucket[bucketIndex] = [key, value];
    // console.log(this.Bucket);

    // Linked List: Each bucket can be the head of a linked list. Each node in the linked list would store a [key, value] pair.

    // You'll access the element at bucketIndex in your underlying array (which stores the buckets).
    // If that bucket is empty, you'll initialize it with a new linked list.
    if (this.Bucket[bucketIndex] === undefined) {
      console.log("empty bucket");
      this.Bucket[bucketIndex] = new LinkedList();
      console.log(this.Bucket[bucketIndex].size());
      this.Bucket[bucketIndex].append([key, value]);
      console.log(this.Bucket[bucketIndex].toString());
    } else {
      console.log(this.Bucket[bucketIndex].size());
      this.Bucket[bucketIndex].append([key, value]);
      console.log(this.Bucket[bucketIndex].toString());
      return this.Bucket[bucketIndex];
    }

    // Then, you'll add the [key, value] pair to that bucket's data structure.
  }

  get(key) {
    // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  }

  has(key) {
    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  }

  remove(key) {
    // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  }

  length() {
    // returns the number of stored keys in the hash map.
  }

  clear() {
    // removes all entries in the hash map.
  }

  keys() {
    // returns an array containing all the keys inside the hash map.
  }

  values() {
    // returns an array containing all the values.
  }

  entries() {
    // returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  }
}

export { HashMap };

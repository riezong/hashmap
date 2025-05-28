import "./styles.css";

if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
}

class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {}

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



<h3> Time Complexity and Space Complexity<h3><br>


  
  
[<img src="https://github.com/Richard-vinu/Kannada_Coder/blob/main/DSA%20time%20complexity%20spreadsheet-1.png" width="700" height="600"/>](https://github.com/Richard-vinu/Kannada_Coder/blob/main/DSA%20time%20complexity%20spreadsheet-1.png)

  
  <h4>Remove the last Element from an Array in JavaScript<h4><br>
  https://bobbyhadz.com/blog/javascript-remove-last-element-from-array
  
  
<h3>What is a Linked List?<h3>
  
  A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.

  https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
  
Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type. You can see this illustrated in the diagram below.

Image of a linked list
The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.
  
  
  ``linear search``
  ```yaml
linearSearch

TimeComplexity = O(n)

function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) { // Found it!
        return i;
      }
    }
    
    // Item not found in the array.
    return null;
  }

```
  https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/
  
  
  ``binarySearch``
  https://www.hackerearth.com/practice/algorithms/searching/binary-search/tutorial/
  

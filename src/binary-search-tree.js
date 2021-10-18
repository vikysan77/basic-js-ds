const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
module.exports = class BinarySearchTree {
  constructor(){
    this.wood = null
  }
  root() {
    if(this.wood)
   return this.wood;
   return null
  }

  add(data) {
    this.wood = addWithin(this.wood, data);

    function addWithin(node, data) {
      if (!node){
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (data < node.data){
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin ( this.wood, data);

    function searchWithin(node, data) {
      if (!node){
        return false;
      }
      if (node.data === data){
        return true;
      }
      
      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
    }
  }

  find(data) {
    function search(node, data) {
      if(node === null) return null;
      if(data < node.data) return search(node.left, data);
      if(data > node.data) return search(node.right, data);
      return node;
    }
    return search(this.wood, data)
   
  }

  remove(data) {
    this.wood = removeNode(this.wood, data);

    function removeNode(node, date) {
      if (!node){
        return null;
      }
      
      if (date < node.data){
        node.left = removeNode(node.left, date);
        return node;
      } else if (node.data < date){
        node.right = removeNode(node.right, date);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left){
          node = node.left;
          return node;
        }
        if (!node.right){
          node = node.right;
          return node;
        }

        let minRight = node.right;
        while (minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode( node.right, minRight.data);
        return node
      }
    }
  }

  min() {
   if (!this.wood){
     return null;
   }

   let node = this.wood;
   while (node.left){
     node = node.left;
   }
   return node.data;
  }

  max() {
    if (!this.wood){
      return null
    }

    let node = this.wood;
    while (node.right){
      node = node.right;
    }
    return node.data;
  }

}
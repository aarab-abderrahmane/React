// 1. Get the raw string from localStorage
const todosData = localStorage.getItem('todos');
// todosData = '[{"id":1,"content":"todo1","check":true},{"id":2,"content":"todo2","check":false}]'
// Type: STRING
// Length: One long string with no formatting

// 2. Parse the string into a JavaScript object
const data = JSON.parse(todosData);
// data = [
//   {id: 1, content: "todo1", check: true},
//   {id: 2, content: "todo2", check: false}
// ]
// Type: JavaScript ARRAY of OBJECTS
// You can use: data.map(), data[0].content, etc.

// 3. Convert the object BACK to a formatted JSON string
const jsonString = JSON.stringify(data, null, 2);
// jsonString = `[
//   {
//     "id": 1,
//     "content": "todo1",
//     "check": true
//   },
//   {
//     "id": 2,
//     "content": "todo2",
//     "check": false
//   }
// ]`
// Type: STRING (but formatted nicely)



JSON.stringify(value, replacer, space)


//replacer :
// Example with null (include all properties):
JSON.stringify(data, null, 2);
//                ↑
// "Don't filter or transform anything"

// Example with array (only include 'id' property):
JSON.stringify(data, ['id'], 2);
// Result: [{"id":1},{"id":2}] - 'content' property is removed

// Example with function (custom transformation):
JSON.stringify(data, (key, value) => {
  if (key === 'content') return value.toUpperCase();
  return value;
}, 2);
// Result: [{"id":1,"content":"TODO1"},{"id":2,"content":"TODO2"}]



// space : 
// This controls the formatting:
// - Number: Number of spaces for indentation
// - String: Use this string for indentation (like '\t') / col space
// - undefined/null: No formatting (compact)

// With 2 spaces:
JSON.stringify(data, null, 2);
// Result:
// [
//   {
//     "id": 1,
//     "content": "todo1"
//   },
//   {
//     "id": 2,
//     "content": "todo2"
//   }
// ]

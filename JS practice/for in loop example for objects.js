var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};


/*Here I am creating a "for in" loop to access the properties and their values 
I am naming it prop but it could be called anything like studentData ect
Our object's name is "person" so it is prop in person*/

for (var prop in person) {
  console.log(prop, ': ', person[prop]); 
 }

/*I logged out the property name followed by a colon followed by the value of each property.
For example: name: Sarah ect
You have to use bracket notation to access the property value. Dot notation cannot be used in for-in loops*/


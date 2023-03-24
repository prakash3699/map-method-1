const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];

let result=users.map(function(merge){
	return(merge.first_name + merge.last_name);
});
	console.log(result);
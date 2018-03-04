const o = new Object();

o.firstName = "Fouchimi";
o.lastName = 'Ousmane';
o.isTeaching = true;
o.greet = function() {
	console.log('hi');
 }

const o2 = {};
o2.firstName = 'Aboubakar';
o2['lastName'] = 'Mountapmbeme';

const key = "isTeaching";
o2[key] = true;
o2['greet'] = function(){
	console.log('Hello!');
}

const o3 = {
	firstName: 'Barack',
	lastName: 'Hussein',
	isTeaching: false,
	greet: function() {
	  console.log('Hi there')
	},
	address: {
	  street: '1780 S.Raritan',
          number: 123
	}
}

console.log(o);
console.log(o2.greet());
console.log(o3.address);
console.log(o3.address.number);

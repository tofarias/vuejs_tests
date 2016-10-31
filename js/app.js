var hello = new Vue({
	el: '#hello',
	data: {
		msg: "Hello Vuejs!",
		peoples:[
			{name:"Tiago"},
			{name:"Oliveira"},
			{name:"Farias"},
		],
		newElement: '',
		elements: [],
		objectA:{
			'fontSize':'30px'
		},
		objectB:{
			'color':'red'
		},
		myListForm:[],
		myForm:{
			name:'',
			email:''
		}
	},
	methods: {
		addElement: function(e){
			var title = this.newElement.trim();

			if( title )
			{
				this.elements.push({ title:title });
				this.newElement = "";
			}
		},
		removeElement: function(e, index){
			e.preventDefault();

			this.elements.splice(index,1);
		},
		myClick: function(){
			alert('Clicked!');
		},
		myKeyUp: function(){
			alert('MyKeyUp');
		},
		addForm: function(){
			this.myListForm.push({
				name: this.myForm.name,
				email: this.myForm.email
			});

			this.myForm.name = '';
			this.myForm.email = '';
		}
	}
});

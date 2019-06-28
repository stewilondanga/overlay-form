Vue.component('overlay-form', {
  props:{},
  data:function(){
    return {
      formInputs: [
        {
          'label': 'What is your full name?',
          'name': 'fullName',
          'value':[],
          'prefix':"My name is",
          'suffix':'and im so cool'
        },
        {
          'label': 'What is your Email Address?',
          'name': 'email',
          'value':[],
          'prefix':"You can contact me on",
          'suffix':'or not, its cool'
        },
        {
          'label': 'Which socials are you on?',
          'name': 'socials',
          'value':[],
          'type': 'checkbox',
          'prefix':"I use the following socials",
          'suffix':'',
          'options':[
            {'label': 'Twitter','name':'Twitter'},
            {'label': 'Facebook','name':'Facebook'}
          ]
        },
        {
          'label': 'What do you think facebook?',
          'name': 'facebook',
          'value':false,
          'type': 'radio',
          'prefix':"I ",'suffix':'facebook!',
          'options':[
            {'label': 'Love','name':'Love'},
            {'label': 'Hate','name':'Hate'}
          ]
        },

      ],
      activeQuestion: 'fullName',
      overlayActive:false,
    }
  },
  methods:{
    formSubmit: function(){
      alert('Form Submitted');
    }
  },
})

var app = new Vue({
  el: '#app',
});


var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

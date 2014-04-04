App.UserController = Ember.ObjectController.extend({
	actions: {
		edit: function(){
			this.transitionToRoute('user.edit');
		}
	}
});
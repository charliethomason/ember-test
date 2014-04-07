App.UserEditController = Ember.ObjectController.extend({
	actions: {
		save: function(){
			var user = this.get('model');
			user.save();
			this.transitionToRoute('user', user);
		}
	}
});
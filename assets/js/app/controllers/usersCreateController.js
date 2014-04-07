App.UsersCreateController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			this.get('model').set('creationDate', new Date());
			var newUser = this.store.createRecord('user', this.get('model'));
			newUser.save();
			this.transitionToRoute('user', newUser);
		}
	}
});
App.UsersCreateRoute = Ember.Route.extend({
	model: function(){
		return Em.Object.create({});
	},
	renderTemplate: function() {
		this.render('user.edit', {
			controller: 'usersCreate'
		});
	}
});
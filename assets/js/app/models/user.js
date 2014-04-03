App.User = DS.Model.extend({
	name         : DS.attr(),
	email        : DS.attr(),
	bio          : DS.attr(),
	avatarUrl    : DS.attr(),
	creationDate : DS.attr()
});

App.User.FIXTURES = [{
	id: 1,
	name: 'Charlie Thomason',
	email: 'charlie.thomason@razorfish.com',
	bio: 'Associate Presentation Layer Engineer',
	avatarUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/p/2/000/255/1e1/368152b.jpg',
	creationDate: 'Mon, 31 Mar 2014 12:00:00 GMT'
}, {
	id: 2,
	name: 'Roberto Ivaldi',
	email: 'roberto.ivaldi@razorfish.com',
	bio: 'Presentation Layer Engineer',
	avatarUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/p/6/005/052/0fe/0488c41.jpg',
	creationDate: 'Tues, 1 Apr 2014 12:00:00 GMT'
}, {
	id: 3,
	name: 'Gary Duvall',
	email: 'gary.duvall@razorfish.com',
	bio: 'Presentation Layer Architect',
	avatarUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/0b7/066/1c1adbb.jpg',
	creationDate: 'Wed, 2 Apr 2014 12:00:00 GMT'
}];
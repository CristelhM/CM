import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('tasks');
});

Template.body.helpers({
	tasks() {
	    const instance = Template.instance();
	    const sort = { createdAt: -1 };
	    if (instance.state.get('hideCompleted')) {
	        return Tasks.find({ checked: { $ne: true }}, { sort });
        }
	    return Tasks.find({}, { sort });
    },
    incompleteCount() {
	    return Tasks.find({ checked: { $ne:true }} ).count();
    }
});

Template.body.events({
  'submit .new-task'(event) {
      event.preventDefault();

      const target = event.target;
      const text = target.text.value;

      Meteor.call('tasks.insert', text);

      target.text.value = '';
  },
   'change .hide-completed input'(event, instance) {
      instance.state.set('hideCompleted', event.target.checked);
   }
});
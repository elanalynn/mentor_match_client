import Ember from 'ember';

// const badges = [
//   {
//     name: 'Developer',
//     requirement: 5,
//     unit: 'years',
//     image: '#'
//   },{
//     name: 'Educator',
//     requirement: 2,
//     unit: 'years',
//     image: '#'
//   },{
//     name: 'Mentor',
//     requirement: 5,
//     unit: 'mentorships',
//     image: '#'
//   },{
//     name: 'Roles',
//     requirement: 3,
//     unit: 'types',
//     image: '#'
//   },{
//     name: 'Rating',
//     requirement: 4,
//     unit: 'stars',
//     image: '#'
//   },{
//     name: 'Environments',
//     requirement: 2,
//     unit: 'types',
//     image: '#'
//   },{
//     name: 'All Star',
//     requirement: 6,
//     unit: 'badges',
//     image: '#'
//   }
// ];

export function badge(mentor/*, hash*/) {
  const badges = [];

  if (mentor.dev_years > 5) { badges.push(badges[0]); }
  if (mentor.ed_years > 5) { badges.push(badges[1]); }
  if (mentor.mentorships.length > 2) { badges.push(badges[2]); }
  if (mentor.roles.length > 4) { badges.push(badges[3]); }
  if (mentor.rating > 1) { badges.push(badges[4]); }
  if (mentor.environments.length > 5) { badges.push(badges[5]); }
  if (mentor.badges.length > 5) { badges.push(badges[6]); }

  return badges;
}

export default Ember.Helper.helper(badge);

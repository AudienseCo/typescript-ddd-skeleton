import { Given, Then, Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.task('reset:db');
});

Given('I create a new course with name {string}', (courseName) => {
  cy.visit('http://localhost:8032/courses');
  cy.get('input[name="name"]').type(courseName);
  cy.get('input[name="duration"]').type('8 days');
  cy.get('form').submit();
});

Then('a new flash message with content {string} is shown', (message) => {
  cy.get('div[role="alert"]').contains(message);
});

Then('the page should increment the numbers courses to {int}', (numberOfCourses) => {
  cy.contains(`Actualmente CodelyTV Pro cuenta con ${numberOfCourses} cursos.`);
});

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';
import UserForm from './UserForm';

test('can receive a new user and show it on a list', () => {
  render(<App />);
  
  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  });
  
  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  });

  const button= screen.getByRole('button');


  user.click(nameInput);
  user.keyboard('jane');
  user.click(emailInput);
  user.keyboard('jane@gmail.com');

  user.click(button);
  screen.debug()

  const name = screen.getByRole('cell', {name:'jane'})
  const email = screen.getByRole('cell', {name:'jane@gmail.com'})

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

test('empties the two textboxes after the form is submittd', ()=>{
  render(<UserForm onUserAdd={()=>{}} />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  });
  
  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  });
  const button= screen.getByRole('button');


  user.click(nameInput);
  user.keyboard('jane');
  user.click(emailInput);
  user.keyboard('jane@gmail.com');

  user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');

});

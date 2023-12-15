import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

//jest test runner, used for creating test functions
test('it shows two components and a button', ()=>{
    // render the component 
    render(<UserForm />)//render creates a fake browser env

    //find the element
    //50 functions
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    //ARIA

    //Assertion
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

    //expect(label).toHaveValue('')
    //jest + RTL
});

test('it calls onUserAdd when the form is submitted', () => {

    // const argList = [];
    // const callback = (...args) => {
    //     argList.push(args);
    // }

    const mock = jest.fn()

    //render
    render(<UserForm onUserAdd={mock}/>);

    //find the 2 inputs
    // const[ nameInput, emailInput] = screen.getAllByRole('textbox')
    const nameInput = screen.getByRole('textbox',{
        name:/name/i,
    });

    const emailInput = screen.getByRole('textbox',{
        name:/email/i
    })

    //user.click
    //user.keyboard('asdfd)
    //user.keyboard('{Enter}')



    //simulate the typing of a name
    user.click(nameInput);
    user.keyboard('jane');

    //simulate the typing of an email
    user.click(emailInput);
    user.keyboard('jane@gmail.com')

    //Find the button
    const button = screen.getByRole('button');

    //simulate clicking on the button
    user.click(button);

    //Assert that 'onUserAdd' gets called with email/name
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({name:'jane', email:'jane@gmail.com'})
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: "jane", email: "jane@gmail.com"});
     
})
//is mock able to access the prop data like name and email ?
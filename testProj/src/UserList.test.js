import {render, screen, within} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserList from './UserList';

beforeEach(()=>{


});

function renderComponent(){
    const users = [
        {name:'jane', email:'jane@gmail.com'},
        {name:'james', email:'james@gmail.com'}
    ];

    render(<UserList users={users} />);

    return {
        users,
    }
}

test('render one row per user', ()=> {
  
    renderComponent();
    // const { container } = render(<UserList users={users} />)

    //find all the rows in the table
    // const rows = screen.getAllByRole("row");

    // const rows = within(screen.getByTestId('users')).getAllByRole('row');
    //screen.logTestingPlaygroundURL();

    // const table = container.querySelector('table')
    //console.log(table)


    // const rows = container.querySelectorAll('tbody tr')

    // expect(rows).toHaveLength(2);
})
test('render the email and name of each user', ()=>{
    const { users } = renderComponent();

    for(let user of users){
        const name = screen.getByRole('cell', { name:user.name });
        // console.log(name)
        const email = screen.getByRole('cell', {name:user.email});

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }
});
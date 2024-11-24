"use server";
import {readFile, writeFile} from 'fs/promises'
import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation'

type User = {
    id: string;
    firstName: string;
    lastName: string;
}

// TODO: this user action is hooked up to the CLIENT FROM
export const createUserAction = async (prevState: any, formData: FormData) => {
    "use server";
    console.log("prevState", prevState);
    
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // TODO: GET Form data
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const id = Date.now().toString();

    // TODO: Shape form data object
    const newUser: User = { id, firstName, lastName };

    // TODO: save form data to file in JSON format
    try {
        // throw new Error("something went wrong")
        await saveUser(newUser);
        revalidatePath('/actions');
        return 'user created successfully...'
    } catch {
        console.log('some error');
        return 'failed to create user...'
    }

    // TODO: to refresh page cache to display new value
    // redirect('/');
    
    
  };

  export const fetchUsers = async (): Promise<User[]> => {
    // TODO: get file content
    const result = await readFile('users.json', {encoding: 'utf8'});
    const users = result ? JSON.parse(result) : []

    return users;
  }

  export const saveUser = async (user: User) => {
    // TODO: get users from JSON file
    const users = await fetchUsers();
    // TODO: push new user to the already existing array of users from the file
    users.push(user)
    // TODO: write updated user list to the file
    await writeFile('users.json', JSON.stringify(users));
  }

  export const deleteUser = async (formData: FormData) => {
    const id = formData.get('id') as string;
    const users = await fetchUsers();
    const updatedUserList = users.filter(user => user.id !== id)    

    await writeFile('users.json', JSON.stringify(updatedUserList));
    revalidatePath('/actions');
  }

  export const removeUser = async (id: string, formData: FormData) => {
    // const name = formData.get('name') as string;
    const users = await fetchUsers();
    const updatedUserList = users.filter(user => user.id !== id)    

    await writeFile('users.json', JSON.stringify(updatedUserList));
    revalidatePath('/actions');
  }
"use server";
import {readFile, writeFile} from 'fs/promises'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'

type User = {
    id: string;
    firstName: string;
    lastName: string;
}

// TODO: this user action is hooked up to the CLIENT FROM
export const createUserAction = async (formData: FormData) => {
    "use server";
    // TODO: GET Form data
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const id = Date.now().toString();

    // TODO: Shape form data object
    const newUser: User = { id, firstName, lastName };

    // TODO: save form data to file in JSON format
    try {
        await saveUser(newUser);
    } catch {
        console.log('some error');
    }

    // TODO: to refresh page cache to display new value
    // redirect('/');
    revalidatePath('/actions');
    
  };

  export const fetchUsers = async (): Promise<User[]> => {
    // TODO: get file content
    const result = await readFile('users.json', {encoding: 'utf8'});
    const users = result ? JSON.parse(result) : []

    return users;
  }

  const saveUser = async (user: User) => {
    // TODO: get users from JSON file
    const users = await fetchUsers();
    // TODO: psu new user to the already existing array of users from the file
    users.push(user)
    // TODO: write updated user list to the file
    await writeFile('users.json', JSON.stringify(users));
  }
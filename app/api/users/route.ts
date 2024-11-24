import { fetchUsers, saveUser } from "@/utils/actions"
import { NextRequest } from "next/server";


export const GET = async (req: NextRequest) => {
    // TODO: Works with node.jsx Request
    // const { searchParams } = new URL(req.url)
    // const id = searchParams.get('id');

    // console.log(id);
    console.log(req.nextUrl.searchParams.get('id'));
    
    try {
        const users = await fetchUsers()
        // return NextResponse.json({message: "user added", users: users, status: 200});
        return  Response.json({"message": "successful", users})
    } catch (error) {
        console.log(error);
        return Response.json({ message: "An expected error occured" }, { status: 500 });
    }
    

    // return NextResponse.json(users);
    return
}

export const POST = async (req: Request) => {
    const user = await req.json()
    const newUser = {...user, id: Date.now().toString()}
    
    await saveUser(newUser)

    return Response.json({msg: 'user created'})
}

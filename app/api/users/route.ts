import { fetchUsers } from "@/utils/actions"
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    // TODO: Works with node.jsx Request
    // const { searchParams } = new URL(req.url)
    // const id = searchParams.get('id');

    // console.log(id);
    console.log(req.nextUrl.searchParams.get('id'));
    
    // const users = await fetchUsers()
    return NextResponse.redirect(new URL('/', req.url));
}
import { fetchUsers } from "@/utils/actions";

const UsersList = async () => {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4 key={user.id} className="capitalize text-lg">
                {user.firstName} {user.lastName}
              </h4>
            );
          })}
        </div>
      ) : (
        <p>No Users found...</p>
      )}
    </div>
  );
};

export default UsersList;

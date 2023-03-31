import { UserList } from './UserList/UserList';
import { UserGrid } from './UserGrid/UserGrid';

export const MainContent = () => {
    return (
        <div className="main">
            {/* <UserList /> */}
            <UserGrid />
        </div>
    )
}
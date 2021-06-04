// import {  Route } from "react-router";
// // import FullPosts from "./Fullpost/FullPost";

//  import FullPosts from "./Fullpost/FullPost";
// // import PostsList from "./PostList/PostsList";
// import PostsList from "./PostList/PostsList";
// const Posts = ({ match }) => {
//   return (
//     <div>
//       {match.isExact ? (
//         <PostsList />
//       ) : (
//         <Route path="/posts/:id" component={FullPosts} />
//       )}
//     </div>
//   );
// };

// export default Posts;

import PostFull from "./PostFull/PostFull"
import PostList from "./PostList/PostList"
import { Route } from "react-router"
const Posts = ({ match }) => {
    
    return (
        <div>
            <PostList />
            <Route path="/posts/:id" component={PostFull} />
        </div>
    )
}
export default Posts;


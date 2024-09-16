// import { PuffLoader } from "react-spinners";

// const Loader = () => {
//     return (
//         <div
//             className="
//             fixed
//             inset-0
//             flex
//             justify-center
//             items-center
//             bg-white
//         "
//         >
//             <PuffLoader size={100} color="red" />
//         </div>
//     );
// };

// export default Loader;


import { GridLoader} from "react-spinners";

const Loader = () => {
    return (
        <div
            className="
            fixed
            inset-0
            flex
            justify-center
            items-center
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            bg-opacity-80
            z-50
            "
        >
            <GridLoader size={80} color="white" />
        </div>
    );
};

export default Loader;




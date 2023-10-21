// export default function Avatar(props) {
//   return (
//     <>
//       <img
//         className="Avatar"
//         src={props.attributes.avatarUrl}
//         alt={props.attributes.name}
       
//       />
//     </>
//   );
// }

export default function Avatar({attributes}) {
    return (
      <>
        <img
          className="Avatar"
          src={attributes.avatarUrl}
          alt={attributes.name}
         
        />
      </>
    );
  }

import React, { useReducer, useState } from "react";
import Counter from "../componets/Hooks/counter";
import { FormSubmit } from "../componets/Hooks/form";
import { VideoDB } from "../constants";

const HooksFunction = () => {
  //   const [someVideos, setSomeVideos] = useState(VideoDB);
  const VideoReducer = (someVideos, action) => {
    switch (action.type) {
      case "ADD":
        return [...someVideos, { ...action.payload }];
      case "DELETE":
        return someVideos.filter((video) => video.id !== action.payload);
      default:
        break;
    }
  };
  const [someVideos, dispatch] = useReducer(VideoReducer, VideoDB);
  // const words = ["spray", "elite", "exuberant", "destruction", "present"];
  // const newWords = words.filter((e) => {
  //  return words.includes('e')
  // });
  // console.log("newWord", newWords)
  // const persons = [
  //   {name:"Shirshak",gender:"male"},
  //   {name:"Amelia",gender:"female"},
  //   {name:"Amand",gender:"male"}
  // ]
  // const newPerson = persons.filter((p)=>{
  //    if(p.name === 'Amand'){
  //       return p
  //    }else{
  //     alert('not presten')
  //    }
  // }) ;
  // console.log("newPerson" , newPerson)
  // here is props method
  // function AddVideo(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   // setSomeVideos([...someVideos, video]);
  // }
  // this method with state nand calling the function ,
  // function handleDelete(id) {
  //   dispatch({ type: "DELETE", payload: id });
  //   // const btnDelete = someVideos.filter((item) => item.id !== id);
  //   // setSomeVideos(btnDelete);
  // }
  return (
    <div>
      <Counter />
      <FormSubmit dispatch={dispatch} />
      <table
        style={{ width: "100%", border: "1px solid black", marginTop: "10px" }}
      >
        <tbody>
          <th>id</th>
          <th>Title</th>
          <th>User</th>
          <th>Url</th>

          {someVideos?.map(({ id, title, user, url }, index) => {
            return (
              <tr key={index} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>{id}</td>
                <td style={{ border: "1px solid black" }}>{title}</td>
                <td style={{ border: "1px solid black" }}>{user}</td>
                <td style={{ border: "1px solid black" }}>{url}</td>
                <td
                  style={{ border: "1px solid black" }}
                  onClick={() => dispatch({ type: "DELETE", payload: id })}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HooksFunction;

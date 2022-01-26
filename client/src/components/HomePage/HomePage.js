import React from "react";
import "./HomePage.css";

const Problems = [
  {
    name: "Reverse the array",
    category: "Array",
    solved: "true",
  },
  {
    name: "Find the maximum and minimum element in an array",
    category: "Array",
    solved: "false",
  },
  {
    name: "Find the Kth max and min element of an array",
    category: "Array",
    solved: "true",
  },
  {
    name: "Move all the negative elements to one side of the array",
    category: "Array",
    solved: "true",
  },
  {
    name: "level order traversal",
    category: "Binary Tree",
    solved: "true",
  },
  {
    name: "Reverse level order traversal",
    category: "Binary Tree",
    solved: "true",
  },
  {
    name: "Height of a tree",
    category: "Binary Tree",
    solved: "true",
  },  {
    name: "Reverse the array",
    category: "Array",
    solved: "true",
  },
  {
    name: "Find the maximum and minimum element in an array",
    category: "Array",
    solved: "false",
  },
  {
    name: "Find the Kth max and min element of an array",
    category: "Array",
    solved: "true",
  },
  {
    name: "Move all the negative elements to one side of the array",
    category: "Array",
    solved: "true",
  },
  {
    name: "level order traversal",
    category: "Binary Tree",
    solved: "true",
  },
  {
    name: "Reverse level order traversal",
    category: "Binary Tree",
    solved: "true",
  },
  {
    name: "Height of a tree",
    category: "Binary Tree",
    solved: "true",
  },
];

function HomePage() {
  return (
    <div className="homepage_body">
      <div className="homepage_container">
        <div className="homepage_content">
          <div className="content_name">
            <div className="id row">
              <p>id</p>
            </div>
            <div className="name row">
              <p>name</p>
            </div>
            <div className="category row">
              <p>category</p>
            </div>
            <div className="status row">
              <p>status</p>
            </div>
            <div className="solution row">
              <p>solution</p>
            </div>
          </div>
          <div className="page_content">
            {Problems.map((problem,id)=>{
                return (<div className="page_content--name">
                <div className="id row">
                  <p>{id+1}</p>
                </div>
                <div className="name row">
                  <p>{problem.name}</p>
                </div>
                <div className="category row">
                  <p>{problem.category}</p>
                </div>
                <div className="status row">
                     <p>{problem.solved!=="true" && "not solved"}</p>
                  <p>{problem.solved==="true" && "solved"}</p>
                 
                </div>
                <div className="solution row">
                  <p>solution</p>
                </div>
              </div>);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

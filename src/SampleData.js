
// const SampleListItems = {
//   "Done": [
//     { id: 123, title: "Implement Mockups", list: "Done", details: "..", assignee: "" }
//   ],
//   "In Progress": [
//     { id: 124, title: "Implement Front End", list: "In progress", details: "..", assignee: "" }
//   ],
//   "To Do": [
//     { id: 99, title: "Implement Back end", list: "To Do", details: "..", assignee: "" },
//     { id: 98, title: "Deploy", list: "To Do", details: "..", assignee: "" },
//     { id: 97, title: "Fix Bugs", list: "To Do", details: "..", assignee: "" },
//   ]
// }

const SampleBoardData = {
  "id": 1,
  "title": "Second Dashboard",
  "lists": [
      {
          "id": 1,
          "title": "To Do",
          "sort_order": 1000,
          "cards": [
              {
                  "id": 2,
                  "title": "Setup the docker image",
                  "description": "Install rails/react",
                  "sort_order": 1000,
                  "assignee": null
              },
              {
                  "id": 1,
                  "title": "Setup environment",
                  "description": "Install Docker for desktop",
                  "sort_order": 2000,
                  "assignee": "sample@example.com"
              },
              {
                  "id": 4,
                  "title": "Learn ReactJS",
                  "description": "Learn the basics of the front-end development using ReactJS",
                  "sort_order": 3000,
                  "assignee": null
              },
              {
                  "id": 3,
                  "title": "Learn Ruby On Rails",
                  "description": "Learn the basics of the web application dev using RoR framework",
                  "sort_order": 4000,
                  "assignee": null
              }
          ]
      },
      {
          "id": 2,
          "title": "In Progress",
          "sort_order": 2000,
          "cards": []
      },
      {
          "id": 3,
          "title": "Done",
          "sort_order": 3000,
          "cards": []
      }
  ]
}

export default SampleBoardData;

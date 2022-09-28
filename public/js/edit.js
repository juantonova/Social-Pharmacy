
// фетч на обновление песни
// if (updateSong) {
//     updateSong.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const { action, singer, songTitle } = event.target;
//       const response = await fetch(action, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "Application/json",
//         },
//         body: JSON.stringify({
//           singer: singer.value,
//           songTitle: songTitle.value,
//         }),
//       });
//       const data = await response.json();
//       console.log(data);
//       if (data.updated) {
//         window.location.href = "/all-the-entries";
//       }
//     });
//   }

// фетч на удаление
//   entries.addEventListener("click", async (event) => {
//     if (event.target.parentNode.classList.contains("delete")) {
//       event.preventDefault();
//       const response = await fetch(
//         `/delete-entry/${event.target.parentNode.dataset.id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       const data = await response.json();
//       if (data.deleted) {
//         window.location.href = "/all-the-entries";
//       }
//     }
//   });

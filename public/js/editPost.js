    // var likeBtn = document.getElementById("likeBtn");
    // var likesIcon = document.getElementById("likesIcon");
    // var replyBtn = document.getElementById("replyBtn");
    // var editBtn = document.getElementById("editBtn");
    // var deleteBtn = document.getElementById("deleteBtn");
    // var cancelBtn = document.getElementById("cancelBtn");
    // var saveBtn = document.getElementById("saveBtn");
    // var pDelete = document.getElementById("pDelete");
    // var textArea = document.getElementById("showEdit");

    // function editPostHandler(event) {
    //   event.preventDefault();

    //   pDelete.style.display = "none";
    //   replyBtn.style.display = "none";
    //   deleteBtn.style.display = "none";
    //   likeBtn.style.display = "none";
    //   likesIcon.style.display = "none";

    //   textArea.style.display = "block";
    //   saveBtn.style.display = "block";
    //   cancelBtn.style.display = "block";

    //   var newMessage = textArea.value;

    //     if (newMessage) {
    //       try {
    //     const update = await fetch(`/api/post/${postId}`, {
    //     method: "PUT",
    //     body: JSON.stringify({
    //       message: newMessage,
    //     }),
    //       headers: { 'Content-Type': 'application/json' }
    //     })
    //   } catch (err) {
    //     if (err) throw err;
    //   } finally {
    //     showHide();
    //       document.location.replace(`/post/${postId}`);
    //   }
      
    //   }};
  

    //   document
    //   .querySelector('#editBtn')
    //   .addEventListener('submit', editPostHandler);

    //   function showHide() {

    //     pDelete.style.display = "block";
    //     replyBtn.style.display = "block";
    //     deleteBtn.style.display = "block";
    //     likeBtn.style.display = "block";
    //     likesIcon.style.display = "block";
  
    //     textArea.style.display = "none";
    //     saveBtn.style.display = "none";
    //     cancelBtn.style.display = "none";

    //   };